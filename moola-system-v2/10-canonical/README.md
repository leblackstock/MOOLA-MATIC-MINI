# Canonical Index

Purpose
- This folder contains the hand-maintained behavioral and contract source of truth for the new system.

Current implementation scope
- Stage 1 created the foundational system files under `system/`.
- Stage 2 adds the first canonical policy, mode, contract, and schema files.

Current canonical files
- `system/identity-and-scope.md`
- `system/routing.md`
- `system/run-workflow.md`
- `system/edit-workflow.md`
- `system/maintenance-policy.md`
- `policies/default-platform-layer.md`
- `modes/value.md`
- `contracts/listing-response-contract.md`
- `contracts/listing-json.schema.json`

Rules for this folder
- No file here may silently override governance.
- No unresolved semantic conflict may be silently resolved here.
- If a file depends on an unresolved decision, it must reference the decision ID explicitly.

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `commands/run-moola.md`
- `commands/edit-moola.md`