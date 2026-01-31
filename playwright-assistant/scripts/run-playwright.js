const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getArgValue(flag, fallback) {
  const idx = process.argv.indexOf(flag);
  if (idx !== -1 && process.argv[idx + 1]) {
    return process.argv[idx + 1];
  }
  return fallback;
}

function toStringValue(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (item && typeof item === "object") {
          const platform = item.platform || "";
          const reason = item.reason || "";
          return platform && reason ? `${platform}: ${reason}` : platform || reason;
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
  if (field.placeholder) return page.getByPlaceholder(field.placeholder, { exact });
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

async function fillField(page, field, data, options) {
  const selector = field.selector;
  const action = field.action || "fill";
  let value = getValue(data, field.value);
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
        .split(/[,\\n]/)
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
          .split(/[,\\n]/)
          .map((item) => item.trim())
          .filter(Boolean);
    const locator = getLocator(page, field);
    if (!locator || (await locator.count()) === 0) {
      console.log(`Skipping ${field.name || selector}: target not found`);
      return;
    }
    await scrollIfNeeded(locator, field);
    if (field.force) {
      await locator.first().click({ force: true });
    } else {
      await locator.first().click();
    }
    for (const tag of tags) {
      if (field.refocusEachTag) {
        await locator.first().click({ force: field.force === true });
      }
      const delay =
        field.noTypingDelay || !options.typingDelayMs ? 0 : options.typingDelayMs;
      await locator.first().type(tag, delay ? { delay } : undefined);
      await locator.first().press("Enter");
    }
    return;
  }
  const locator = getLocator(page, field);
  if (!locator) {
    console.log(`Skipping ${field.name || selector}: no selector/label/placeholder/text`);
    return;
  }
  const count = await locator.count();
  if (count === 0) {
    console.log(`Skipping ${field.name || selector}: target not found`);
    return;
  }
  if (action === "click") {
    await scrollIfNeeded(locator, field);
    if (field.clickElementCenter) {
      const box = await locator.first().boundingBox();
      if (box) {
        await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      } else {
        await locator.first().click({ force: field.force === true });
      }
    } else {
      await locator.first().click({ force: field.force === true });
    }
    return;
  }
  if (action === "check") {
    await scrollIfNeeded(locator, field);
    await locator.first().check({ force: field.force === true });
    return;
  }
  if (action === "select") {
    await scrollIfNeeded(locator, field);
    await locator.first().selectOption(value);
    return;
  }
  if (action === "type") {
    await scrollIfNeeded(locator, field);
    const delay = options.typingDelayMs
      ? randomBetween(
          Math.max(0, options.typingDelayMs - 40),
          options.typingDelayMs + 60
        )
      : 0;
    await locator.first().type(value, delay ? { delay } : undefined);
    if (field.pressEnter) {
      await locator.first().press("Enter");
    }
    return;
  }
  if (options.typingDelayMs && !field.noTypingDelay) {
    await scrollIfNeeded(locator, field);
    await locator.first().fill("");
    const delay = randomBetween(
      Math.max(0, options.typingDelayMs - 40),
      options.typingDelayMs + 60
    );
    await locator.first().type(value, { delay });
    if (field.pressEnter) {
      await locator.first().press("Enter");
    }
  } else {
    await scrollIfNeeded(locator, field);
    await locator.first().fill(value);
    if (field.pressEnter) {
      await locator.first().press("Enter");
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
    Number(betweenDelayArg || options.betweenFieldsDelayMs || (safe ? 300 : 0)) ||
    0;
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
      slowMo: slowMoMs || undefined
    });
    page = context.pages()[0] || (await context.newPage());
  } else {
    browser = await chromium.launch({
      headless: finalHeadless,
      slowMo: slowMoMs || undefined
    });
    context = await browser.newContext();
    page = await context.newPage();
  }

  await page.goto(selectors.url, { waitUntil: options.waitUntil || "domcontentloaded" });

  if (options.pauseForManualStart) {
    await waitForEnter(
      "Complete login/navigation, then press Enter to start auto-fill..."
    );
  }
  if (options.waitForSelector) {
    await page.waitForSelector(options.waitForSelector, {
      timeout: options.waitForSelectorTimeoutMs || 120000
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
    await fillField(page, draft, data, { typingDelayMs, skuOptions });
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
    await waitForEnter("Review the page, then press Enter to close the browser...");
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
