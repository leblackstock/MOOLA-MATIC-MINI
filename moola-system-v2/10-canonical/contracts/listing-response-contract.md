# Listing Response Contract

Purpose
- This file defines canonical outward response behavior for List-mode JSON creation and related response handling.

Scope
- This contract applies when List-mode JSON is created as part of the canonical workflow.
- This contract does not define adapter-specific transport behavior.

JSON creation confirmation rule
- When List-mode JSON is created, the exact user-facing confirmation line is:

```text
JSON file created.
```

Placement rule
- In the standard List-mode output order, the JSON confirmation line appears after the Types block and before the final question or `None` line.

Non-substitution rule
- Do not replace the confirmation line with a download line.
- Do not add extra download instructions unless a later higher-priority transport-specific layer explicitly defines them.

Raw JSON display rule
- Do not display raw JSON in the standard List-mode response.
- Raw JSON display is outside the standard contract and requires an explicit user request plus a higher-priority workflow allowance.

Workflow interaction rule
- If pass logging is active, pass log lines may appear before the final listing output.
- Pass logging does not change the exact JSON confirmation line.

Non-List rule
- If JSON is not created, the JSON confirmation line must not appear.
- Non-List workflows do not use this confirmation line.

Approved decision references
- D-002 — The exact user-facing JSON confirmation text is `JSON file created.`

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC LIST.txt`
- `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt`
- `commands/run-moola.md`
- `templates/list-json-confirmation.txt`