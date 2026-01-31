MOOLA PLAYWRIGHT ASSISTANT (LOCAL)

Quick start (Windows):
1) Install Node.js (LTS) from https://nodejs.org
2) In this folder, run:
   npm install
   npx playwright install

3) Copy the selectors template and edit it:
   - Copy scripts\selectors.example.json to scripts\selectors.json
   - Set url to your listing page
   - Use label/placeholder/text to match your form fields (no CSS needed)

4) Open the helper UI:
   - Open ui\index.html in your browser
   - Load one or more listing JSON files at once
   - Confirm the SKU (OK/Change) for each item, then click Next
   - Copy fields into your form, or download the JSON file

5) Run Playwright to auto-fill:
   node scripts\run-playwright.js --json "C:\path\to\listing.json" --selectors "scripts\selectors.json" --safe

Optional:
- Add --submit when you want the script to click the final submit button.
- Leave --submit off if you want to review first (recommended).
- Use --headless only if you must. Headed mode is less likely to be flagged.
- Set a persistent profile with --user-data-dir "C:\path\to\profile" to keep cookies/login.
 - SKU auto-iteration: set options.sku.start in selectors.json and the script will
   auto-increment and save the last SKU in .last-sku.

How to open PowerShell (Windows):
1) Press Windows key.
2) Type "PowerShell".
3) Click "Windows PowerShell".

Tip: You can also right-click the Start button and select "Windows PowerShell".

Bot-detection safety tips:
- Log in manually in a normal browser first if possible, then reuse the same profile.
- Use the selectors.json options: slowMoMs, typingDelayMs, betweenFieldsDelayMs.
- Avoid auto-submitting unless you are sure the page is correct.

Notes:
- If a selector is missing or not found, that field is skipped.
- To fill more fields, add them to selectors.json with a value path that matches the JSON key.
