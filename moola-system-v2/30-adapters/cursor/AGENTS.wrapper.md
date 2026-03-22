# AGENTS Wrapper

Status
- Hand-maintained wrapper
- Future-generated candidate

Purpose
- Thin compatibility summary for current Cursor-style workflow entry points.

Canonical-first rule
- This file is not a source of truth.
- If this file conflicts with a canonical file, canonical files win.

Run workflow trigger
- Trigger: `/run-moola`
- Routing summary:
  - request-based canonical routing chooses Identify-only, Value-only, Identify+Value, or List-related workflow execution
  - `/run-moola` does not auto-default to combined Identify+Value
  - image input alone does not auto-trigger both Identify and Value
- Canonical owners:
  - `../../10-canonical/system/routing.md`
  - `../../10-canonical/system/run-workflow.md`
  - `../../10-canonical/modes/identify.md`
  - `../../10-canonical/modes/value.md`
  - `../../10-canonical/policies/default-platform-layer.md`
  - `../../10-canonical/contracts/listing-response-contract.md`
  - `../../10-canonical/contracts/listing-json.schema.json`

Edit workflow trigger
- Trigger: `/edit-moola`
- Canonical owners:
  - `../../10-canonical/system/edit-workflow.md`
  - `../../10-canonical/system/maintenance-policy.md`

Wrapper-specific behavior handling
- Reviewed wrapper-only additive behavior is tracked in `../d004-wrapper-review.md`.
- This file does not silently own any extra policy.

Decision references
- D-001
- D-002
- D-003
- D-004
- D-007
- D-008
- D-009
- D-010