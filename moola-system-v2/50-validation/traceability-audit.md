# Traceability Audit

Purpose
- This file records the Stage 4 traceability audit for the rebuilt system.

Coverage assessment
- Governance layer: covered
- Canonical system layer: covered
- Stage 2 canonical files: covered
- Stage 3 wrapper layer: covered
- Approved decisions D-001 through D-010: covered across governance, canonical, and validation artifacts
- Deprecation and archival outcomes: covered

Strongly evidenced mappings
- Routing ownership and workflow entry points
- Run workflow sequence and pass logging
- Default platform layer separation from Value mode
- Approved pure Identify boundary that excludes default platform recommendations by default
- Approved pure Value boundary that keeps one-sentence identification context instead of a full outward Identify block
- Approved `/run-moola` request-routed boundary that prevents automatic combined Identify+Value behavior on ambiguous or image-led requests
- Implemented pure Identify-mode owner in `10-canonical/modes/identify.md`
- Implemented pure Value-mode owner in `10-canonical/modes/value.md`
- Implemented request-based routing and sequential combined Identify+Value execution in `10-canonical/system/routing.md` and `10-canonical/system/run-workflow.md`
- Cross-category reseller scope evidenced by the general reseller system role, broad estimator categories, and standard-L/W/H fallback alongside category-specific measurement templates
- Exact JSON confirmation text `JSON file created.`
- One-schema decision for listing plus automation fields
- Bounded automation-only field semantics for `pre_owned_condition` and `fees_or_other_costs`
- Wrapper review outcomes W-001 through W-009

Missing or weak mappings
- The canonical Identify/Value/routing rewrite is now implemented, but wrappers/adapters have not yet been aligned to the rewritten canonical boundaries.
- List contracts/schema remain only partially covered by the new cross-category rewrite because List-specific canonical rewrite work is still deferred.
- Some category examples requested for future rewrite planning, such as tobacco pipes and certain industrial/oddball inventory classes, are human-approved planning requirements rather than strongly evidenced legacy canonical categories.
- Schema field traceability remains complete at field-group level rather than one-row-per-field level.
- Automation-only fields rely partly on operational evidence rather than a single legacy canonical instruction file, but their bounded semantics are now explicit enough for contract use.

Recorded validation scenario coverage
- Identify-only with photos: covered
- Value-only with photos: covered
- Identify+Value with photos: covered
- Ambiguous image-led request: covered
- Cross-category miscellaneous-reseller handling: covered at the canonical Identify/Value/routing level
- Deferred note: List-specific scenario coverage remains partial because List contract/schema rewrite work is still deferred

Schema field traceability status
- Core listing fields: covered by field-group trace rows
- Identity and attribute fields: covered by field-group trace rows
- Size fields: covered by field-group trace rows
- Condition/audience fields: covered by field-group trace rows
- Shipping/package fields: covered by field-group trace rows
- Acquisition/note fields: covered by field-group trace rows
- Automation-only fields:
  - `pre_owned_condition`: covered, weak semantics
  - `fees_or_other_costs`: covered, weak semantics

Conclusion
- Traceability is sufficient for review, blocker resolution, and readiness assessment.
- Traceability is sufficient for the implemented Step 1 through Step 3 Identify/Value/routing rewrite.
- Traceability is sufficient to proceed to deferred List impact review and wrapper/adapter alignment.
- Traceability is not exhaustive at one-row-per-field granularity, but field-group traceability is sufficient for the finalized schema.
- The schema can be treated as final for cutover review.
- Approved cutover now makes `moola-system-v2` the active main workflow system.