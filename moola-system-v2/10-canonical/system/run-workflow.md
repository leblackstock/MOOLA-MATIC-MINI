# Run Workflow

Purpose
- This file is the canonical owner of the Run workflow.

Activation
- Activate this workflow when the user explicitly invokes `/run-moola` or an equivalent Run-mode trigger approved by adapters in later stages.

Execution boundary
- Run executes the operation selected by canonical routing.
- Run does not choose the route.
- Run does not default automatically to combined Identify+Value.
- Selected operations may include:
  - Identify-only
  - Value-only
  - Identify+Value
  - List-related workflow execution under the current List architecture

Required workflow sequence
0. If List mode is active and JSON creation is required, create the JSON file first. Draft content is allowed at this step.
1. Pass 1: extract facts, assumptions, and evidence required by the selected operation.
2. Pass 2: assemble the selected operation output.
3. Pass 3: validate rules, boundaries, schema expectations where relevant, and structural gaps.
4. Pass 4: run QA for missing details, violations, or unresolved defects.
5. If QA finds blocking issues, restart at Pass 1 and rerun all passes through QA.

Operation execution paths
- Identify-only execution path
  - Pass 1 extracts Identify evidence, facts, and assumptions.
  - Pass 2 assembles the Identify-only output according to `../modes/identify.md`.
  - Pass 3 validates that pure Identify boundaries are preserved, including no pricing/comps output and no default platform layer by default.
- Value-only execution path
  - Pass 1 extracts valuation evidence and identification support sufficient for pricing.
  - Pass 2 assembles the Value-only output according to `../modes/value.md`, including the required one-sentence identification context.
  - Pass 3 validates the Value-only contract and then applies the default platform layer if it is active under `../policies/default-platform-layer.md`.
- Identify+Value execution path
  - Pass 1 performs the identification analysis first and extracts the evidence base for both operations.
  - Pass 2 assembles the Identify output first and the Value output second using the Identify result as the valuation input.
  - Pass 3 validates that the Identify and Value outputs remain distinct, ordered, and contract-compliant, and then applies the default platform layer after the Value portion if it is active under `../policies/default-platform-layer.md`.
- List execution path
  - Pass 1 through Pass 4 continue to support the current List workflow architecture by reference.
  - This file does not become the detailed owner of List output, response, or schema contracts.

Pass logging
- When this workflow is active, output a short pass-status line before final listing output for each pass run.
- If QA forces a restart, output a short restart line before rerunning.

List-mode-specific Run rules
- If the user requests List, JSON creation is part of the Run workflow by default unless a higher-priority rule or the user explicitly disables JSON.
- Measurement estimates must be produced in the initial JSON rather than deferred to the UI.
- Shipping-weight and packaging-weight estimates belong in the AI-produced output and must not be deferred to the UI.
- The outward confirmation message after JSON creation is exactly `JSON file created.`
- The canonical JSON schema for this workflow is one single schema that must include both listing and automation-required fields.

Platform-layer attachment during execution
- Identify-only does not attach the default platform layer by default.
- Value-only attaches the default platform layer after the Value block when the platform layer is active and not disabled.
- Identify+Value attaches the default platform layer after the Value portion of the combined output when the platform layer is active and not disabled.
- List continues to follow its current platform behavior by reference under the existing List architecture.

Post-Run automation handoff
- After a List run, the generated JSON should be ready for Playwright/UI review in later-stage automation workflows.
- This workflow file does not define the automation contract in detail.

Inputs the workflow may receive
- Photos
- Item details
- COGS or acquisition cost
- Known measurements
- Condition notes

What this file does not own
- Routing selection logic or ambiguity handling
- The full Identify-only contract
- The full Value-only contract
- The default platform recommendation contract
- The List JSON response contract or schema contract

Stage boundary
- This file defines workflow sequence and approved workflow-level dependencies.
- Detailed field definitions and final contract ownership are defined in Stage 2 contract files.

Approved decision references
- D-002 — outward List JSON confirmation contract is exactly `JSON file created.`
- D-003 — one canonical JSON schema includes both listing and automation-required fields.
- D-007 — Pure Identify excludes platform recommendations by default.
- D-008 — Pure Value uses one-sentence identification context instead of a full outward Identify section by default.
- D-009 — `/run-moola` routes by user request and does not auto-default to combined Identify+Value.
- D-010 — The future rewrite must use a universal resale core plus category-specific extension logic for a miscellaneous reseller.

Legacy-source anchors
- `commands/run-moola.md`
- `AGENTS.md`
- `Original-Editable/MOOLA-MATIC IDENTIFY.txt`
- `Original-Editable/MOOLA-MATIC VALUE.txt`
- `.cursor/rules/moola-run.mdc`
- `.cursor/skills/moola-run/SKILL.md`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`