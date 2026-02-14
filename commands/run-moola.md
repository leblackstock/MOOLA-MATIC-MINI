Run Mode (copy/paste to start a run; tells Cursor to use Run mode)

/run-moola
Enter Run mode for MOOLA-MATIC.
Run MOOLA-MATIC on the attached item(s). Default to Identify+Value unless I say "List".
If I say "List", create the JSON file with the correct filename and respond with:
JSON file created.
Prioritize auto-fill fields used by ListPerfectly selectors first.
After a List run, open the Playwright UI and load the generated JSON file.
Include estimated measurements in the initial JSON output; the UI only edits.
Use a multi-pass workflow: Step 0 create the JSON file first (draft content allowed), Pass 1 extract facts/assumptions, Pass 2 draft title/description/pricing, Pass 3 validate rules/schema and fix gaps, Pass 4 QA for missing details or violations. If QA finds issues, restart at Pass 1 and re-run all passes through QA. Output a short line each time a pass runs and when a QA loop restarts, before the listing output.

Inputs I will provide:

- Photos and/or item details
- COGS (acquisition cost)
- Any known measurements or condition notes
