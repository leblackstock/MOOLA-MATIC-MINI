# Traceability Audit

Purpose
- This file records the Stage 4 traceability audit for the rebuilt system.

Coverage assessment
- Governance layer: covered
- Canonical system layer: covered
- Stage 2 canonical files: covered
- Stage 3 wrapper layer: covered
- Approved decisions D-001 through D-006: covered
- Deprecation and archival outcomes: covered

Strongly evidenced mappings
- Routing ownership and workflow entry points
- Run workflow sequence and pass logging
- Default platform layer separation from Value mode
- Exact JSON confirmation text `JSON file created.`
- One-schema decision for listing plus automation fields
- Bounded automation-only field semantics for `pre_owned_condition` and `fees_or_other_costs`
- Wrapper review outcomes W-001 through W-009

Missing or weak mappings
- Schema field traceability remains complete at field-group level rather than one-row-per-field level.
- Automation-only fields rely partly on operational evidence rather than a single legacy canonical instruction file, but their bounded semantics are now explicit enough for contract use.

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
- Traceability is not exhaustive at one-row-per-field granularity, but field-group traceability is sufficient for the finalized schema.
- The schema can be treated as final for cutover review.
- Approved cutover now makes `moola-system-v2` the active main workflow system.