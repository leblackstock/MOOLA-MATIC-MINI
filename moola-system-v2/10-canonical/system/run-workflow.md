# Run Workflow

Purpose
- This file is the canonical owner of the Run workflow.

Activation
- Activate this workflow when the user explicitly invokes `/run-moola` or an equivalent Run-mode trigger approved by adapters in later stages.

Default behavior
- Default to Identify+Value unless the user explicitly requests List or Listing.

Required workflow sequence
0. If List mode is active and JSON creation is required, create the JSON file first. Draft content is allowed at this step.
1. Pass 1: extract facts and assumptions.
2. Pass 2: draft title, description, and pricing outputs required by the active mode.
3. Pass 3: validate rules, schema expectations, and structural gaps.
4. Pass 4: run QA for missing details, violations, or unresolved defects.
5. If QA finds blocking issues, restart at Pass 1 and rerun all passes through QA.

Pass logging
- When this workflow is active, output a short pass-status line before final listing output for each pass run.
- If QA forces a restart, output a short restart line before rerunning.

List-mode-specific Run rules
- If the user requests List, JSON creation is part of the Run workflow by default unless a higher-priority rule or the user explicitly disables JSON.
- Measurement estimates must be produced in the initial JSON rather than deferred to the UI.
- Shipping-weight and packaging-weight estimates belong in the AI-produced output and must not be deferred to the UI.
- The outward confirmation message after JSON creation is exactly `JSON file created.`
- The canonical JSON schema for this workflow is one single schema that must include both listing and automation-required fields.

Post-Run automation handoff
- After a List run, the generated JSON should be ready for Playwright/UI review in later-stage automation workflows.
- This workflow file does not define the automation contract in detail.

Inputs the workflow may receive
- Photos
- Item details
- COGS or acquisition cost
- Known measurements
- Condition notes

Stage boundary
- This file defines workflow sequence and approved workflow-level dependencies.
- Detailed field definitions and final contract ownership are defined in Stage 2 contract files.

Approved decision references
- D-002 — outward List JSON confirmation contract is exactly `JSON file created.`
- D-003 — one canonical JSON schema includes both listing and automation-required fields.

Legacy-source anchors
- `commands/run-moola.md`
- `AGENTS.md`
- `.cursor/rules/moola-run.mdc`
- `.cursor/skills/moola-run/SKILL.md`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`