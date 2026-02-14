AGENTS.md — MOOLA-MATIC Workflow

Cursor rules and `AGENTS.md` must always mirror each other.

Two modes are supported: Run and Edit.

Run mode

- Trigger: user message begins with "/run-moola" or open `commands/run-moola.md`.
- Source of truth: follow `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`, then the file order in `Original-Editable/MOOLA-MATIC PROMPT.txt`.
- Workflow details (multi-pass, logging, JSON handling) live in `commands/run-moola.md` and the `Original-Editable/*.txt` files.
- Default output: Identify + Value unless the user explicitly says "List" or "Listing".

Edit mode

- Trigger: user message begins with "/edit-moola" or open `commands/edit-moola.md`.
- Purpose: improve rules, templates, schemas, and workflow docs.
- Do not output listings in Edit mode.

Reference-only files

- `Original/*.txt` are reference-only and must NOT be modified.
- Use `Original-Editable/*.txt` as the editable source of truth.

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
