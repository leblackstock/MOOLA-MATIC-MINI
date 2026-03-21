# Edit Workflow

Purpose
- This file is the canonical owner of the Edit workflow.

Activation
- Activate this workflow when the user explicitly invokes `/edit-moola` or an equivalent Edit-mode trigger approved by adapters in later stages.

Edit workflow scope
- Improve rules, templates, schemas, workflow documentation, and related system files.
- Do not output marketplace listings in this workflow.
- Do not mutate archival legacy references as part of ordinary editing.

Current system boundary
- The new canonical system is now the active main workflow system.
- Do not treat preserved legacy workflow files as active canonical policy owners.
- Do not mutate archival legacy references as part of ordinary editing unless a later explicit migration task requires it.

Edit workflow behavior
- Prefer canonical-first edits in the new system.
- If a semantic change is proposed, record it in `../../00-governance/decision-log.md`.
- If behavior is deprecated, record it in `../../00-governance/deprecations.md`.

Legacy-source anchors
- `commands/edit-moola.md`
- `AGENTS.md`
- `.cursor/rules/moola-edit.mdc`
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`