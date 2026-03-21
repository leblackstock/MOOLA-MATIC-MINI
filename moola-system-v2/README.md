# MOOLA System v2

Purpose
- This folder contains the official current workflow architecture for MOOLA-MATIC.
- Approved cutover has made this system the main workflow system for the project.
- The legacy system remains preserved as legacy and archival reference material.

Current implementation status
- Stage 1 created the governance layer and canonical foundation.
- Stage 2 created the canonical policy, mode, response-contract, and schema files.
- Stage 3 created the adapter, wrapper, and compatibility layer.
- Stage 4 created the validation, audit, and readiness layer.
- Approved cutover has activated `moola-system-v2` as the main system.

System classes
- Canonical files: hand-maintained source of truth for the new system.
- Generated files: future derivatives built from canonical files. Not hand-maintained unless explicitly approved.
- Archival files: preserved legacy or historical references. Not active policy in the new system.
- Deferred files: planned files that belong to later or incomplete stages and are not yet drafted in the current system state.

Current Stage 1 files
- `00-governance/README.md`
- `00-governance/precedence.md`
- `00-governance/ownership-and-sources.md`
- `00-governance/decision-log.md`
- `00-governance/deprecations.md`
- `00-governance/glossary.md`
- `10-canonical/README.md`
- `10-canonical/system/identity-and-scope.md`
- `10-canonical/system/routing.md`
- `10-canonical/system/run-workflow.md`
- `10-canonical/system/edit-workflow.md`
- `10-canonical/system/maintenance-policy.md`
- `50-validation/traceability-matrix.md`
- `50-validation/stage-roadmap.md`

Current Stage 2 files
- `10-canonical/policies/default-platform-layer.md`
- `10-canonical/modes/value.md`
- `10-canonical/contracts/listing-response-contract.md`
- `10-canonical/contracts/listing-json.schema.json`

Decision reference marker
- Stage 1 files must not silently resolve unresolved semantic conflicts.
- Approved and unresolved decisions are referenced by decision ID from `00-governance/decision-log.md`.
- Required reference format: `D-###`.

Current approved decision set
- D-001 — Value mode excludes platform recommendations by default; default platform guidance lives outside Value mode.
- D-002 — List JSON outward confirmation is exactly `JSON file created.`
- D-003 — One canonical JSON schema must include both listing and automation-required fields.
- D-004 — Wrapper-only additive behavior is reviewed item-by-item, not promoted wholesale.
- D-005 — Blocker-resolution outcomes finalize schema semantics and classify unresolved heuristics explicitly.
- D-006 — Approved cutover activates `moola-system-v2` as the main system, confirms the schema as final, and keeps deferred heuristics non-canonical.

Traceability requirement
- Every canonical file in the new system must support traceability back to legacy sources.
- Legacy-source anchors are recorded inside Stage 1 files and consolidated in `50-validation/traceability-matrix.md`.

Deferred future areas
- Future additional mode, policy, and contract files not yet drafted
- Future generated adapters and wrappers
- Future archival migration support files beyond current roadmap/traceability scaffolding

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `commands/run-moola.md`
- `commands/edit-moola.md`
- `AGENTS.md`
- `.cursorrules`
- `.cursor/rules/moola-routing.mdc`
- `.cursor/rules/moola-run.mdc`
- `.cursor/rules/moola-edit.mdc`