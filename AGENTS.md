AGENTS.md — MOOLA-MATIC Workflow

Two modes are supported: Run and Edit.

Run mode

- Trigger: user message begins with "/run-moola" or open `commands/run-moola.md`.
- Default output: Identify + Value unless the user explicitly says "List" or "Listing".
- Listing output: follow `Original/MOOLA-MATIC LIST.txt` and `Original/MOOLA-MATIC JSON SCHEMA.txt`.
- Listing JSON: create the JSON file and respond with:
  JSON file created.
- ListPerfectly priority: fill all fields used by `playwright-assistant/scripts/selectors.json` first.

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
