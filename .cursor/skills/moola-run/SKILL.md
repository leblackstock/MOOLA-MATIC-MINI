---
name: moola-run
description: Execute MOOLA-MATIC Run mode for identify/value by default and listing JSON when requested. Use when the user mentions run moola, /run-moola, or asks to run MOOLA-MATIC.
---

# MOOLA-MATIC Run

## Quick start

- Treat any request that mentions run moola or /run-moola as Run mode.
- Default output is Identify + Value unless the user explicitly asks for List/Listing.
- For List/Listing:
  - Use the listing JSON template and schema.
  - Include estimated measurements in the initial JSON.
  - Populate fields used by ListPerfectly selectors first.
  - Create the JSON file and respond with `JSON file created.`
  - If `era_status` is Vintage or Antique, include Etsy in `platforms` with a clear reason.
  - If `era_status` is Vintage or Antique, include Vinted in `platforms` with a clear reason.
  - Hook/Description/CTA: use a vivid, factual use-case or setting when appropriate, then back it up with specific features; avoid generic phrasing and include light urgency in the CTA.

## References

- `AGENTS.md`
- `commands/run-moola.md`
- `templates/identify-template.txt`
- `templates/value-template.txt`
- `templates/list-json-template.json`
- `templates/list-json-confirmation.txt`
- `templates/listperfectly-selectors-priority.txt`
- `playwright-assistant/scripts/selectors.json`
