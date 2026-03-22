# Adapter and Wrapper Layer

Purpose
- This folder contains the Stage 3 adapter, wrapper, and compatibility layer for the new system.

Rules
- Files in this folder are not canonical policy owners.
- Wrappers must defer to canonical files in `../10-canonical/` and governance files in `../00-governance/`.
- If a wrapper contains preserved operational behavior, that behavior must be traceable to:
  - a canonical rule,
  - an approved decision,
  - or an explicit D-004 review outcome.

Status classes
- Hand-maintained wrapper: a thin compatibility or entry surface maintained directly.
- Future-generated wrapper: a wrapper that should later be generated from canonical files.
- Compatibility shim: a thin surface retained to keep old-vs-new behavior understandable.
- Archival reference: a preserved legacy surface that is not active policy in the new system.

Current Stage 3 files
- `adapter-inventory.md`
- `d004-wrapper-review.md`
- `cursor/AGENTS.wrapper.md`
- `cursor/cursorrules.wrapper.md`
- `commands/run-moola.wrapper.md`
- `commands/edit-moola.wrapper.md`

Canonical dependencies
- `../10-canonical/system/routing.md`
- `../10-canonical/system/run-workflow.md`
- `../10-canonical/modes/identify.md`
- `../10-canonical/modes/value.md`
- `../10-canonical/system/edit-workflow.md`
- `../10-canonical/system/maintenance-policy.md`
- `../10-canonical/policies/default-platform-layer.md`
- `../10-canonical/contracts/listing-response-contract.md`
- `../10-canonical/contracts/listing-json.schema.json`

Alignment note
- Active wrappers in this folder are aligned to the canonical Identify/Value/routing rewrite.
- Wrappers must not imply bundled Identify+Value by default, must not reattach the default platform layer to pure Identify by default, and must not treat image input alone as permission to run both Identify and Value.
- Wrapper-specific operational behavior remains limited to explicitly reviewed items such as selector priority and Playwright UI handoff.

Decision references
- D-001
- D-002
- D-003
- D-004
- D-007
- D-008
- D-009
- D-010