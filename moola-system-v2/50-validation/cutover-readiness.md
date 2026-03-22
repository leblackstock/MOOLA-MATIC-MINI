# Cutover Readiness

Purpose
- This file records the approved cutover state for the rebuilt system.

Readiness summary
- Approved cutover has been applied to project-state documentation.
- `moola-system-v2` is the main workflow system for the project.
- Core governance, canonical behavior, contracts, wrappers, and traceability scaffolding are in place.
- The schema is final and is the settled official structure for listing data unless a later explicit decision changes it.
- Deferred style/platform heuristics remain optional non-canonical guidance and may be reviewed later without affecting canonical policy.

Applied approval record
- Cutover approved and applied.
- Final schema approved and recorded as settled canonical structure.
- Deferred style/platform heuristics remain non-canonical and optional.

Current blockers
- None.

Post-cutover rewrite status
- Approved decisions D-007 through D-010 are now implemented at the canonical Identify, Value, routing, Run, and platform-layer level.
- Those decisions do not reopen cutover approval.
- Those decisions established explicit Identify-only, Value-only, request-routed `/run-moola`, and sequential Identify+Value behavior without reopening cutover.

Deferred post-cutover rewrite areas
- Targeted List impact review is complete.
- `10-canonical/contracts/listing-response-contract.md` requires no immediate canonical change.
- `10-canonical/contracts/listing-json.schema.json` requires no immediate canonical change.
- Broader List-specific canonical work remains deferred, including cross-category item-specific handling, title/description dependency logic, Types handling, and any future dedicated List owner decision.
- Wrapper and adapter alignment for the active compatibility surfaces is complete.
- Future generated wrapper surfaces remain deferred.
- Validation/readiness updates for those deferred areas remain pending until those steps are implemented.

Implemented validation coverage
- Identify-only with photos is now covered as Identify-only without default platform attachment.
- Value-only with photos is now covered as Value-only with one-sentence identification context and default platform attachment where active.
- Identify+Value with photos is now covered as sequential Identify then Value with platform attachment after the Value portion where active.
- Ambiguous image-led requests are now covered as ambiguity-handled rather than auto-bundled.
- Cross-category miscellaneous-reseller handling is now covered at the canonical Identify/Value/routing level.

Final status
- Cutover approved and applied

Post-cutover note
- The legacy workflow system remains preserved as legacy and archival reference material.
- Optional wrapper-only guidance remains intentionally non-canonical unless a later explicit decision changes that status.