# Cline Rules for MOOLA-MATIC

Purpose
- This folder contains thin operational rules for Cline.
- These files help Cline use the active workflow system correctly.
- These files are not a second policy system and are not canonical owners of MOOLA behavior.

Canonical-first rule
- `moola-system-v2/` is the active source of truth for workflow policy and behavior.
- If a `.clinerules` file conflicts with canonical files, canonical files win.
- `.clinerules` files should point to canonical owners instead of restating full contracts.

What these rules are for
- reminding Cline to defer to canonical owners before acting
- preventing stale bundled behavior from reappearing
- keeping wrapper and legacy surfaces from being treated as policy owners
- adding narrow Cline-only operational guidance where needed

What these rules are not for
- restating the full Identify contract
- restating the full Value contract
- restating the full List contract or JSON schema
- restating the full default platform-layer policy
- replacing governance, canonical, or validation files inside `moola-system-v2/`

Current files
- `README.md`
  - folder purpose, canonical-first framing, and rule-surface index
- `core.md`
  - canonical deference
  - anti-shadow-policy behavior
  - wrapper and legacy-file handling
  - broad repo operating discipline
- `identify-value-routing.md`
  - thin operational guardrails for Identify, Value, routing, Run, ambiguity handling, and anti-rebundling
- `list.md`
  - thin operational reminders for List behavior by reference to canonical contracts and schema
- `fast-git-execution.md`
  - execution-first Git rule for routine commit/push/sync tasks with minimal analysis and short reporting
- `git-safety.md`
  - Cline-specific shell and git safety guidance that complements the fast Git execution rule

Canonical anchors
- `moola-system-v2/00-governance/ownership-and-sources.md`
- `moola-system-v2/00-governance/precedence.md`
- `moola-system-v2/10-canonical/system/identity-and-scope.md`
- `moola-system-v2/10-canonical/system/routing.md`
- `moola-system-v2/10-canonical/system/run-workflow.md`
- `moola-system-v2/10-canonical/modes/identify.md`
- `moola-system-v2/10-canonical/modes/value.md`
- `moola-system-v2/10-canonical/policies/default-platform-layer.md`
- `moola-system-v2/10-canonical/contracts/listing-response-contract.md`
- `moola-system-v2/10-canonical/contracts/listing-json.schema.json`

Operational stance
- Keep `.clinerules` narrow, reference-based, and easy to audit.
- If detailed behavior is already owned canonically, reference it instead of copying it here.
- If a new Cline rule would duplicate canon, narrow it or do not add it.