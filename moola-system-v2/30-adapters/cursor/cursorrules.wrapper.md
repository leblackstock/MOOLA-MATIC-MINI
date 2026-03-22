# .cursorrules Wrapper

Status
- Hand-maintained wrapper
- Future-generated candidate

Purpose
- Thin compatibility summary for legacy `.cursorrules` expectations.

Canonical-first rule
- This file is not authoritative policy.
- Canonical files and approved decisions control behavior.

Behavior summary
- Run workflow behavior defers to:
  - `../../10-canonical/system/routing.md`
  - `../../10-canonical/system/run-workflow.md`
  - `../../10-canonical/modes/identify.md`
  - `../../10-canonical/modes/value.md`
  - `../../10-canonical/policies/default-platform-layer.md`
  - `../../10-canonical/contracts/listing-response-contract.md`
  - `../../10-canonical/contracts/listing-json.schema.json`
- Canonical Run summary:
  - `/run-moola` does not auto-default to combined Identify+Value
  - request-based routing selects Identify-only, Value-only, Identify+Value, or List-related workflow execution
  - pure Identify does not attach the default platform layer by default
  - image input alone does not auto-trigger both Identify and Value
- Edit workflow behavior defers to:
  - `../../10-canonical/system/edit-workflow.md`
  - `../../10-canonical/system/maintenance-policy.md`

Legacy drift handling
- Outdated `.cursorrules` behavior is reviewed explicitly in `../d004-wrapper-review.md`.
- Do not treat archival `Original/*.txt` references inside legacy `.cursorrules` as active policy.

Decision references
- D-004
- D-007
- D-008
- D-009
- D-010