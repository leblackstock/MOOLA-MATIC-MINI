const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPasteShortcut() {
  return process.platform === "darwin" ? "Meta+V" : "Control+V";
}

function getArgValue(flag, fallback) {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1];
  }
  return fallback;
}

function buildCommaSeparatedValue(raw) {
  if (raw === null || raw === undefined) return "";
  if (Array.isArray(raw)) {
    return raw
      .map((item) => String(item).trim())
      .filter(Boolean)
      .join(", ");
  }
  const text = String(raw);
  return text
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .join(", ");
}

function toStringValue(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (item && typeof item === "object") {
          const platform = item.platform || "";
          const reason = item.reason || "";
          return platform && reason
            ? `${platform}: ${reason}`
            : platform || reason;
        }
        return String(item);
      })
      .join("\n");
  }
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function getValue(obj, keyPath) {
  if (!keyPath) return "";
  if (keyPath.startsWith("=")) return keyPath.slice(1);
  const parts = keyPath.split(".");
  let current = obj;
  for (const part of parts) {
    if (!current || typeof current !== "object" || !(part in current)) {
      return "";
    }
    current = current[part];
  }
  return toStringValue(current);
}

function getRawValue(obj, keyPath) {
  if (!keyPath) return "";
  if (keyPath.startsWith("=")) return keyPath.slice(1);
  const parts = keyPath.split(".");
  let current = obj;
  for (const part of parts) {
    if (!current || typeof current !== "object" || !(part in current)) {
      return "";
    }
    current = current[part];
  }
  return current;
}

function extractUsSize(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const usMatch = text.match(/US\s*([0-9.]+)/i);
  if (usMatch) return usMatch[1];
  const numericMatch = text.match(/([0-9]+(?:\.[0-9]+)?)/);
  if (numericMatch) return numericMatch[1];
  return text;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function waitForEnter(message) {
  return new Promise((resolve) => {
    process.stdin.setEncoding("utf8");
    if (message) {
      console.log(message);
    }
    process.stdin.once("data", () => resolve());
  });
}

function loadLastSku(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8").trim();
  } catch (err) {
    return "";
  }
}

function saveLastSku(filePath, value) {
  try {
    fs.writeFileSync(filePath, String(value), "utf8");
  } catch (err) {
    console.log("Warning: could not save last SKU value.");
  }
}

function getAutoSkuValue(data, skuOptions) {
  const existing = data?.sku;
  const lastSkuFile =
    skuOptions?.lastSkuFile || path.join(__dirname, ".last-sku");
  const start = skuOptions?.start || "";

  if (existing) {
    saveLastSku(lastSkuFile, existing);
    return String(existing);
  }

  const last = loadLastSku(lastSkuFile);
  const lastNum = Number.parseInt(last, 10);
  if (Number.isFinite(lastNum)) {
    const next = String(lastNum + 1);
    data.sku = next;
    saveLastSku(lastSkuFile, next);
    return next;
  }
  if (start) {
    const startValue = String(start);
    data.sku = startValue;
    saveLastSku(lastSkuFile, startValue);
    return startValue;
  }
  return "";
}

function getLocator(page, field) {
  const exact = field.exact === true;
  if (field.selector) return page.locator(field.selector);
  if (field.label) return page.getByLabel(field.label, { exact });
  if (field.placeholder)
    return page.getByPlaceholder(field.placeholder, { exact });
  if (field.text) return page.getByText(field.text, { exact });
  return null;
}

async function scrollIfNeeded(locator, field) {
  if (field?.skipScroll) return;
  try {
    await locator.first().scrollIntoViewIfNeeded({ timeout: 2000 });
  } catch (err) {
    console.log(`Warning: could not scroll to ${field.name || "field"}`);
  }
}

async function getTagInputLocator(locator) {
  try {
    const inputLocator = locator.locator(
      "input, textarea, [contenteditable], [role='textbox'], .tagify__input"
    );
    if (await inputLocator.count()) {
      return inputLocator.first();
    }
    const isEditable = await locator
      .first()
      .evaluate(
        (el) =>
          el.isContentEditable ||
          el.getAttribute("role") === "textbox" ||
          el.hasAttribute("contenteditable")
      )
      .catch(() => false);
    if (isEditable) {
      return locator.first();
    }
  } catch (err) {
    // Fall back to the original locator if nested inputs are unavailable.
  }
  return locator;
}

async function focusLocator(locator, field) {
  let focused = false;
  if (field?.focusByEval) {
    try {
      await locator.first().evaluate((el) => el.focus());
      focused = true;
    } catch (err) {
      // Ignore focus failures and fall through to click.
    }
  }
  if (field?.clickAfterFocus || !focused) {
    try {
      if (field?.clickPosition) {
        await locator.first().click({
          force: field.force === true,
          position: field.clickPosition,
        });
      } else if (field?.force) {
        await locator.first().click({ force: true });
      } else {
        await locator.first().click();
      }
      focused = true;
    } catch (err) {
      // Ignore click failures; caller can decide on fallback.
    }
  }
  return focused;
}

async function isCheckboxChecked(page, field) {
  try {
    if (field?.checkedSelector) {
      const checkedLocator = page.locator(field.checkedSelector);
      if (await checkedLocator.count()) {
        return await checkedLocator.first().isChecked();
      }
    }
    const container = getLocator(page, field);
    if (!container || (await container.count()) === 0) return false;
    const checkbox = container.locator("input[type='checkbox']");
    if (await checkbox.count()) {
      return await checkbox.first().isChecked();
    }
  } catch (err) {
    // If we fail to detect checked state, fall back to clicking.
  }
  return false;
}

async function pasteText(page, text) {
  try {
    await page.evaluate(async (value) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
        return;
      }
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }, text);
    await page.keyboard.press(getPasteShortcut());
    return true;
  } catch (err) {
    return false;
  }
}

async function fillField(page, field, data, options) {
  const selector = field.selector;
  const action = field.action || "fill";
  let value = getValue(data, field.value);
  if (field.valueTransform === "us_size_only") {
    value = extractUsSize(value);
  }
  if (field.joinWithCommaValue) {
    const raw = getRawValue(data, field.value);
    value = buildCommaSeparatedValue(raw);
  }
  if (field.autoSku) {
    value = getAutoSkuValue(data, options.skuOptions);
  }
  if (field.scrollPageBottom) {
    try {
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(500);
    } catch (err) {
      console.log("Warning: could not scroll page to bottom.");
    }
  }

  if (action === "click_each_text") {
    const raw = getRawValue(data, field.value);
    const exact = field.exact === true;
    let values = [];
    if (Array.isArray(raw)) {
      values = raw;
    } else if (raw && field.normalizeComparison) {
      values = [String(raw).trim()];
    } else if (raw) {
      values = String(raw)
        .split(/[,\n]/)
        .map((item) => item.trim())
        .filter(Boolean);
    }
    const scopeLocator = field.scope ? page.locator(field.scope) : null;
    if (field.normalizeComparison && scopeLocator) {
      const items = await scopeLocator.locator("span,div,button").all();
      for (const text of values) {
        const targetNorm = normalizeText(text);
        let clicked = false;
        for (const item of items) {
          const itemText = await item.innerText().catch(() => "");
          if (normalizeText(itemText) === targetNorm) {
            await item.scrollIntoViewIfNeeded();
            await item.click();
            clicked = true;
            break;
          }
        }
        if (!clicked) {
          console.log(`Skipping ${field.name || "text"}: "${text}" not found`);
        }
      }
      return;
    }
    for (const text of values) {
      const locator = scopeLocator
        ? scopeLocator.getByText(text, { exact })
        : page.getByText(text, { exact });
      const count = await locator.count();
      if (count === 0) {
        console.log(`Skipping ${field.name || "text"}: "${text}" not found`);
        continue;
      }
      await locator.first().scrollIntoViewIfNeeded();
      await locator.first().click();
    }
    return;
  }

  if (action === "type_each_tag") {
    const raw = getRawValue(data, field.value);
    const tags = Array.isArray(raw)
      ? raw
      : String(raw || "")
          .split(/[,\n]/)
          .map((item) => item.trim())
          .filter(Boolean);
    let locator = getLocator(page, field);
    if ((!locator || (await locator.count()) === 0) && field.text) {
      const exact = field.exact === true;
      const textLocator = page.getByText(field.text, { exact });
      const tagsLocator = textLocator.locator("xpath=following::tags[1]");
      if (await tagsLocator.count()) {
        locator = tagsLocator;
      }
    }
    if (!locator || (await locator.count()) === 0) {
      console.log(`Skipping ${field.name || selector}: target not found`);
      return;
    }
    const targetLocator = await getTagInputLocator(locator);
    await scrollIfNeeded(targetLocator, field);
    const focused = await focusLocator(targetLocator, field);
    if (!focused && locator !== targetLocator) {
      await focusLocator(locator, field);
    }
    const delayBase =
      typeof field.typingDelayMs === "number"
        ? field.typingDelayMs
        : options.typingDelayMs;
    const delay = field.noTypingDelay || !delayBase ? 0 : delayBase;
    const postTypeDelayMs =
      typeof field.postTypeDelayMs === "number" ? field.postTypeDelayMs : 80;
    const useKeyboard =
      field.useKeyboard === true ||
      field.useInsertText === true ||
      field.usePaste === true;
    if (field.clearBeforeType) {
      if (useKeyboard) {
        await page.keyboard.press("Control+A");
        await page.keyboard.press("Backspace");
      } else {
        await targetLocator.first().fill("");
      }
    }
    if (field.joinWithComma) {
      if (!tags.length) return;
      const joinedTags = tags.join(", ");
      if (field.useInsertText) {
        await page.keyboard.insertText(joinedTags);
      } else if (field.usePaste) {
        const pasted = await pasteText(page, joinedTags);
        if (!pasted) {
          await page.keyboard.insertText(joinedTags);
        }
      } else if (field.useKeyboard) {
        await page.keyboard.type(joinedTags, delay ? { delay } : undefined);
      } else {
        await targetLocator
          .first()
          .type(joinedTags, delay ? { delay } : undefined);
      }
      if (postTypeDelayMs > 0) {
        await page.waitForTimeout(postTypeDelayMs);
      }
      if (useKeyboard) {
        await page.keyboard.press("Enter");
      } else {
        await targetLocator.first().press("Enter");
      }
      return;
    }
    for (const tag of tags) {
      if (field.refocusEachTag) {
        await focusLocator(targetLocator, field);
      }
      if (field.useInsertText) {
        await page.keyboard.insertText(tag);
      } else if (field.usePaste) {
        const pasted = await pasteText(page, tag);
        if (!pasted) {
          await page.keyboard.insertText(tag);
        }
      } else if (field.useKeyboard) {
        await page.keyboard.type(tag, delay ? { delay } : undefined);
      } else {
        await targetLocator.first().type(tag, delay ? { delay } : undefined);
      }
      if (postTypeDelayMs > 0) {
        await page.waitForTimeout(postTypeDelayMs);
      }
      if (useKeyboard) {
        await page.keyboard.press("Enter");
      } else {
        await targetLocator.first().press("Enter");
      }
    }
    return;
  }
  let locator = getLocator(page, field);
  if ((!locator || (await locator.count()) === 0) && field.useTagInput) {
    if (field.text) {
      const exact = field.exact === true;
      const textLocator = page.getByText(field.text, { exact });
      const tagsLocator = textLocator.locator("xpath=following::tags[1]");
      if (await tagsLocator.count()) {
        locator = tagsLocator;
      }
    }
  }
  if (!locator) {
    console.log(
      `Skipping ${field.name || selector}: no selector/label/placeholder/text`
    );
    return;
  }
  const count = await locator.count();
  if (count === 0) {
    console.log(`Skipping ${field.name || selector}: target not found`);
    return;
  }
  const targetLocator = field.useTagInput
    ? await getTagInputLocator(locator)
    : locator;
  if (action === "click") {
    await scrollIfNeeded(targetLocator, field);
    if (field.clickElementCenter) {
      const box = await targetLocator.first().boundingBox();
      if (box) {
        await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      } else {
        await targetLocator.first().click({ force: field.force === true });
      }
    } else {
      await targetLocator.first().click({ force: field.force === true });
    }
    return;
  }
  if (action === "check") {
    await scrollIfNeeded(targetLocator, field);
    await targetLocator.first().check({ force: field.force === true });
    return;
  }
  if (action === "select") {
    await scrollIfNeeded(targetLocator, field);
    await targetLocator.first().selectOption(value);
    return;
  }
  if (action === "type") {
    await scrollIfNeeded(targetLocator, field);
    const delay = options.typingDelayMs
      ? randomBetween(
          Math.max(0, options.typingDelayMs - 40),
          options.typingDelayMs + 60
        )
      : 0;
    await targetLocator.first().type(value, delay ? { delay } : undefined);
    if (field.pressEnter) {
      if (
        typeof field.postFillDelayMs === "number" &&
        field.postFillDelayMs > 0
      ) {
        await page.waitForTimeout(field.postFillDelayMs);
      }
      await targetLocator.first().press("Enter");
    }
    return;
  }
  if (options.typingDelayMs && !field.noTypingDelay) {
    await scrollIfNeeded(targetLocator, field);
    await targetLocator.first().fill("");
    const delay = randomBetween(
      Math.max(0, options.typingDelayMs - 40),
      options.typingDelayMs + 60
    );
    await targetLocator.first().type(value, { delay });
    if (field.pressEnter) {
      if (
        typeof field.postFillDelayMs === "number" &&
        field.postFillDelayMs > 0
      ) {
        await page.waitForTimeout(field.postFillDelayMs);
      }
      await targetLocator.first().press("Enter");
    }
  } else {
    await scrollIfNeeded(targetLocator, field);
    await targetLocator.first().fill(value);
    if (field.pressEnter) {
      if (
        typeof field.postFillDelayMs === "number" &&
        field.postFillDelayMs > 0
      ) {
        await page.waitForTimeout(field.postFillDelayMs);
      }
      await targetLocator.first().press("Enter");
    }
  }
}

async function main() {
  const jsonPath = getArgValue("--json", "listing.json");
  const selectorsPath = getArgValue(
    "--selectors",
    path.join(__dirname, "selectors.json")
  );
  const safe = process.argv.includes("--safe");
  const headed = process.argv.includes("--headed");
  const headless = process.argv.includes("--headless");
  const submit = process.argv.includes("--submit");
  const slowMoArg = getArgValue("--slowmo", "");
  const typingDelayArg = getArgValue("--typing-delay", "");
  const betweenDelayArg = getArgValue("--between-delay", "");
  const userDataDirArg = getArgValue("--user-data-dir", "");

  if (!fs.existsSync(jsonPath)) {
    console.error(`JSON file not found: ${jsonPath}`);
    process.exit(1);
  }
  try {
    const jsonStat = fs.statSync(jsonPath);
    if (jsonStat.isDirectory()) {
      console.error(`JSON path is a folder: ${jsonPath}`);
      console.error(
        "Please download the JSON from the UI and pass the full .json file path."
      );
      process.exit(1);
    }
  } catch (err) {
    console.error(`Could not read JSON path: ${jsonPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(selectorsPath)) {
    console.error(`Selectors file not found: ${selectorsPath}`);
    console.error("Copy selectors.example.json to selectors.json and edit it.");
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const selectors = JSON.parse(fs.readFileSync(selectorsPath, "utf8"));
  const options = selectors.options || {};
  const draft = selectors.draft;
  const saveProgress = selectors.saveProgress;

  const slowMoMs =
    Number(slowMoArg || options.slowMoMs || (safe ? 100 : 0)) || 0;
  const typingDelayMs =
    Number(typingDelayArg || options.typingDelayMs || (safe ? 90 : 0)) || 0;
  const betweenFieldsDelayMs =
    Number(
      betweenDelayArg || options.betweenFieldsDelayMs || (safe ? 300 : 0)
    ) || 0;
  const skuOptions = options.sku || {};
  const userDataDir = userDataDirArg || options.userDataDir || "";
  const finalHeadless = headless ? true : !headed && !safe;

  if (!selectors.url || !Array.isArray(selectors.fields)) {
    console.error("Selectors file must include url and fields[]");
    process.exit(1);
  }

  let browser;
  let context;
  let page;

  if (userDataDir) {
    context = await chromium.launchPersistentContext(userDataDir, {
      headless: finalHeadless,
      slowMo: slowMoMs || undefined,
    });
    page = context.pages()[0] || (await context.newPage());
  } else {
    browser = await chromium.launch({
      headless: finalHeadless,
      slowMo: slowMoMs || undefined,
    });
    context = await browser.newContext();
    page = await context.newPage();
  }

  const needsClipboard = selectors.fields?.some((field) => field.usePaste);
  if (needsClipboard) {
    try {
      const origin = new URL(selectors.url).origin;
      await context.grantPermissions(["clipboard-read", "clipboard-write"], {
        origin,
      });
    } catch (err) {
      console.log("Warning: could not grant clipboard permissions.");
    }
  }

  await page.goto(selectors.url, {
    waitUntil: options.waitUntil || "domcontentloaded",
  });

  if (options.pauseForManualStart) {
    await waitForEnter(
      "Complete login/navigation, then press Enter to start auto-fill..."
    );
  }
  if (options.waitForSelector) {
    await page.waitForSelector(options.waitForSelector, {
      timeout: options.waitForSelectorTimeoutMs || 120000,
    });
  }
  if (options.pauseBeforeFillMs) {
    await page.waitForTimeout(options.pauseBeforeFillMs);
  }

  for (const field of selectors.fields) {
    await fillField(page, field, data, { typingDelayMs, skuOptions });
    if (betweenFieldsDelayMs) {
      const delay = randomBetween(
        Math.max(0, betweenFieldsDelayMs - 120),
        betweenFieldsDelayMs + 220
      );
      await sleep(delay);
    }
  }

  if (options.clickDraft && draft) {
    const skipDraft =
      draft.skipIfChecked !== false && (await isCheckboxChecked(page, draft));
    if (skipDraft) {
      console.log("Draft already checked. Skipping.");
    } else {
      await fillField(page, draft, data, { typingDelayMs, skuOptions });
    }
  }
  if (options.clickSaveProgress && saveProgress) {
    await fillField(page, saveProgress, data, { typingDelayMs, skuOptions });
  }
  if (options.pauseAfterDraftMs) {
    await page.waitForTimeout(options.pauseAfterDraftMs);
  }

  if (selectors.submit?.selector) {
    if (submit) {
      await page.click(selectors.submit.selector);
      console.log("Submitted form.");
    } else {
      console.log(
        "Form filled. Review the page, then rerun with --submit if desired."
      );
    }
  } else {
    console.log("Form filled. Review the page before submitting.");
  }

  if (options.pauseForReview) {
    await waitForEnter(
      "Review the page, then press Enter to close the browser..."
    );
  }

  if (headed && !options.pauseForReview) {
    console.log("Browser left open for review. Close it when done.");
  } else {
    if (browser) {
      await browser.close();
    } else if (context) {
      await context.close();
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
