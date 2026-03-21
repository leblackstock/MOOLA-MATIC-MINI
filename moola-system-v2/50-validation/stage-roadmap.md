# Stage Roadmap

Purpose
- This file defines stage boundaries, drafting order, and deferred work.

Stage order
1. Stage 1 — governance and canonical foundation
2. Stage 2 — contracts, schemas, and exact output requirements
3. Stage 3 — adapters, wrappers, generated derivatives, compatibility surfaces
4. Stage 4 — validation, parity review, and migration support beyond Stage 1 scaffolding

Stage 1 deliverables
- Governance files
- Canonical system foundation files
- Decision-log scaffold
- Traceability-matrix scaffold
- Stage roadmap itself

Stage 1 exit criteria
- Precedence is defined in one canonical file.
- Ownership is defined in one canonical file.
- Open semantic conflicts are explicitly logged by decision ID.
- Traceability matrix exists and contains seed mappings.
- No Stage 2+ files are drafted as if they were final.

Stage 2 deliverables
- `10-canonical/policies/default-platform-layer.md`
- `10-canonical/modes/value.md`
- `10-canonical/contracts/listing-response-contract.md`
- `10-canonical/contracts/listing-json.schema.json`

Stage 3 deliverables
- adapter and wrapper inventory
- primary wrapper and compatibility surfaces
- D-004 wrapper-only behavior review record
- minimal consistency updates for traceability, deprecations, and wrapper status

Stage 4 deliverables
- validation and audit inventory
- traceability audit
- losslessness assessment
- wrapper-policy leak review
- cutover-readiness artifact

Stage 2 readiness
- Stage 2 is unblocked after application of approved decisions D-001 through D-004.

Stage 2 first drafting pass
- `10-canonical/policies/default-platform-layer.md`
- `10-canonical/modes/value.md`
- `10-canonical/contracts/listing-response-contract.md`
- `10-canonical/contracts/listing-json.schema.json`

Why this order is correct
- The default platform layer must be defined before the final Value-mode contract can reference its separation cleanly.
- The response contract should be drafted before the schema so outward confirmation behavior is fixed.
- The single canonical schema should be drafted after those behavioral owners are defined.

Current Stage 2 status
- Stage 2 is complete.
- The canonical schema is final.

Current Stage 3 status
- Stage 3 is complete.
- Wrappers must remain thin and must defer to canonical files.

Current Stage 4 status
- Stage 4 is complete.
- Approved cutover has activated `moola-system-v2` as the main workflow system.

Current system status
- The staged rebuild is complete for the currently approved system scope.
- `moola-system-v2` is now the official current workflow system.
- The legacy workflow remains preserved as legacy and archival reference material.

Legacy-source anchors
- prior planning analysis in this project
- `commands/run-moola.md`
- `commands/edit-moola.md`
- `Original-Editable/*`