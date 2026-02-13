AGENTS.md — MOOLA-MATIC Workflow

Cursor rules and `AGENTS.md` must always mirror each other.

Two modes are supported: Run and Edit.

Run mode

- Trigger: user message begins with "/run-moola" or open `commands/run-moola.md`.
- Default output: Identify + Value unless the user explicitly says "List" or "Listing".
- Listing output: follow `Original/MOOLA-MATIC LIST.txt` and `Original/MOOLA-MATIC JSON SCHEMA.txt`.
- Do not include size info in the description; keep size details in size fields or measurements only.
- Listing platforms: include ALL supported platforms with Yes/No/Maybe reasons.
- Measurement estimates must be generated in the initial JSON (not in the UI).
- Listing JSON: create the JSON file and respond with:
  JSON file created.
- ListPerfectly priority: fill all fields used by `playwright-assistant/scripts/selectors.json` first.
- After a List run, load the generated JSON file in the Playwright UI to review/edit and download.
- Creativity levels (LIST mode): Hook = High, Description = Medium, CTA = Medium (all factual).
- CTA style: use a sentence similar to “Photos show condition and measurements; ask if you need a specific angle or detail confirmed.”

Edit mode

- Trigger: user message begins with "/edit-moola" or open `commands/edit-moola.md`.
- Purpose: improve rules, templates, schemas, and workflow docs.
- Do not output listings in Edit mode.

Reference-only files

- `Original/*.txt` are the authoritative reference and must NOT be modified.
  Use them to guide behavior, but implement changes in Cursor-native files.

Templates

- `templates/identify-template.txt`
- `templates/value-template.txt`
- `templates/list-json-template.json`
- `templates/list-json-confirmation.txt`
- `templates/listperfectly-selectors-priority.txt`
- `templates/measurements/measurements-shoes.txt`
- `templates/measurements/measurements-boots.txt`
- `templates/measurements/measurements-garments.txt`
- `templates/measurements/measurements-standard-lwh.txt`
