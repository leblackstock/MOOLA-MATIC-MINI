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

Post-cutover semantic rewrite implementation status
- Approved decisions D-007 through D-010 are now implemented in the canonical Identify, Value, routing, Run, and platform-layer files.
- Pure Identify is now implemented as a non-platform-default operation.
- Pure Value now uses one-sentence identification context instead of a full outward Identify section by default.
- `/run-moola` now routes by user request rather than default-combined Identify+Value behavior.
- The canonical Identify and Value owners now use a universal resale core plus category-specific extension logic rather than assuming a single dominant item class.
- Current estimator breadth and measurement-template variety remain evidence for extension patterns, with `measurements-standard-lwh.txt` retained as the generic fallback shape.
- Step 4 validation/readiness coverage now records:
  - Identify-only with photos
  - Value-only with photos
  - Identify+Value with photos
  - ambiguous image-led requests
  - cross-category miscellaneous-reseller handling
- Deferred next areas are:
  - broader List-specific canonical work only where later evidence proves it is needed
  - wrapper/adapter alignment to the rewritten canonical owners
  - final validation/readiness updates for those deferred areas

Targeted List impact review status
- `10-canonical/contracts/listing-response-contract.md` is safe to leave unchanged now.
- `10-canonical/contracts/listing-json.schema.json` is safe to leave unchanged now.
- Existing List response-contract and schema behavior remain valid by reference under the current rewrite state.
- Evidence-only or deferred areas remain:
  - fashion-skewed Types behavior
  - title/description dependency logic carried mainly by legacy List sources
  - broader cross-category List-specific canonical handling if later justified

Legacy-source anchors
- prior planning analysis in this project
- `commands/run-moola.md`
- `commands/edit-moola.md`
- `Original-Editable/*`