# Decision Log

Purpose
- This file records semantic changes, unresolved conflicts, approvals, and rejected options.
- No semantic change in the new system is valid unless it is represented here.

Statuses
- Open
- Approved
- Rejected
- Deferred
- Implemented

Required decision template
- Decision ID:
- Topic:
- Status:
- Needed from human:
- Affected legacy sources:
- Affected new files:
- Old wording / old behavior:
- New wording / new behavior:
- Reason for change:
- Risk if unresolved:
- Risk level:
- Approval required:
- Notes:

Decision records

## D-001
- Topic: Value-mode platforms by default
- Status: Approved
- Needed from human: Resolved.
- Affected legacy sources:
  - `Original-Editable/MOOLA-MATIC PROMPT.txt`
  - `Original-Editable/MOOLA-MATIC MODES.txt`
  - `Original-Editable/MOOLA-MATIC VALUE.txt`
- Affected new files:
  - `10-canonical/system/routing.md`
  - `10-canonical/system/run-workflow.md`
  - `00-governance/ownership-and-sources.md`
  - `10-canonical/modes/value.md`
  - `10-canonical/policies/default-platform-layer.md`
- Old wording / old behavior:
  - Prompt says Value should not include platform recommendations unless explicitly requested.
  - Modes and Value output format require platforms by default.
- New wording / new behavior:
  - Value mode excludes platform recommendations by default.
  - Platform recommendations are still required by default on every item.
  - Platform recommendations therefore live in a separate default layer or workflow block outside Value mode.
- Reason for change:
  - Direct behavior conflict is resolved by separating the Value-mode contract from the default platform layer.
- Risk if unresolved:
  - Resolved.
- Risk level: High
- Approval required: No
- Notes: Stage 2 may now draft the Value-mode contract and the separate default platform layer without ambiguity.

## D-002
- Topic: List JSON outward confirmation contract
- Status: Approved
- Needed from human: Resolved.
- Affected legacy sources:
  - `Original/MOOLA-MATIC PROMPT.txt`
  - `Original/MOOLA-MATIC LIST.txt`
  - `Original/MOOLA-MATIC JSON SCHEMA.txt`
  - `Original-Editable/MOOLA-MATIC PROMPT.txt`
  - `Original-Editable/MOOLA-MATIC LIST.txt`
  - `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt`
  - `commands/run-moola.md`
  - `templates/list-json-confirmation.txt`
- Affected new files:
  - `10-canonical/system/run-workflow.md`
  - `10-canonical/contracts/listing-response-contract.md`
  - `10-canonical/contracts/listing-json.schema.json`
- Old wording / old behavior:
  - Older legacy files describe a download-line response.
  - Current editable files and command docs use `JSON file created.`
- New wording / new behavior:
  - When List-mode JSON is created, the outward user-facing confirmation line is exactly `JSON file created.`
- Reason for change:
  - Outward response contract is standardized on the current editable behavior.
- Risk if unresolved:
  - Resolved.
- Risk level: High
- Approval required: No
- Notes: Stage 2 may now draft response-contract files using one exact outward confirmation rule.

## D-003
- Topic: Listing JSON contract architecture
- Status: Approved
- Needed from human: Resolved.
- Affected legacy sources:
  - `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt`
  - `templates/list-json-template.json`
  - `templates/listperfectly-selectors-priority.txt`
  - `playwright-assistant/scripts/selectors.json`
- Affected new files:
  - `10-canonical/system/run-workflow.md`
  - `00-governance/ownership-and-sources.md`
  - `10-canonical/contracts/listing-json.schema.json`
  - `10-canonical/contracts/listing-response-contract.md`
- Old wording / old behavior:
  - The strict schema and automation-required field set do not currently match.
- New wording / new behavior:
  - The rebuilt system uses one single canonical JSON schema.
  - That schema must include all required listing fields and all required automation fields.
  - No split schema-plus-overlay model is used unless a later explicit decision changes that.
- Reason for change:
  - Contract ownership remains explicit while eliminating legacy schema/template mismatch inside one canonical schema.
- Risk if unresolved:
  - Resolved.
- Risk level: High
- Approval required: No
- Notes: Stage 2 may now draft one canonical JSON schema that includes both listing and automation-required fields.

## D-004
- Topic: Wrapper-only additive behavior
- Status: Approved
- Needed from human: Resolved.
- Affected legacy sources:
  - `.cursor/skills/moola-run/SKILL.md`
  - `.cursorrules`
- Affected new files:
  - `00-governance/ownership-and-sources.md`
  - `10-canonical/policies/default-platform-layer.md`
  - `10-canonical/modes/value.md`
  - `30-adapters/d004-wrapper-review.md`
  - future adapter files
- Old wording / old behavior:
  - Some behavior currently exists only in wrapper surfaces.
- New wording / new behavior:
  - Review wrapper-only additive behavior one item at a time.
  - Preserve behaviors that are clearly intentional and operationally important by promoting them into explicit policy where appropriate.
  - Mark non-canonical drift, accidental duplication, or obsolete behavior as deprecated or archival.
  - Do not silently promote all wrapper behavior, and do not silently discard all wrapper behavior.
- Reason for change:
  - Wrapper-only behavior must be handled explicitly and traceably rather than promoted wholesale or discarded wholesale.
- Risk if unresolved:
  - Resolved at the policy level; item-by-item review still belongs to later drafting.
- Risk level: Medium
- Approval required: No
- Notes: Stage 3 review outcomes are recorded in `30-adapters/d004-wrapper-review.md`.

## D-005
- Topic: Targeted blocker-resolution pass classification
- Status: Approved
- Needed from human: No additional semantic decision required before readiness review.
- Affected legacy sources:
  - `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt`
  - `Original-Editable/MOOLA-MATIC LIST.txt`
  - `.cursorrules`
  - `.cursor/skills/moola-run/SKILL.md`
  - `templates/list-json-template.json`
  - `templates/listperfectly-selectors-priority.txt`
  - `playwright-assistant/scripts/selectors.json`
  - `playwright-assistant/ui/index.html`
- Affected new files:
  - `10-canonical/contracts/listing-json.schema.json`
  - `30-adapters/d004-wrapper-review.md`
  - `50-validation/traceability-matrix.md`
  - `50-validation/traceability-audit.md`
  - `50-validation/losslessness-assessment.md`
  - `50-validation/wrapper-policy-leak-review.md`
  - `50-validation/cutover-readiness.md`
- Old wording / old behavior:
  - The schema remained provisional because automation-only field semantics were treated as too weak.
  - Deferred List copy/style heuristics and Vintage/Antique platform heuristics were still listed as cutover blockers.
- New wording / new behavior:
  - The schema is treated as final because field-group traceability plus selector/template/UI evidence is sufficient for bounded automation-field semantics.
  - `pre_owned_condition` now has an explicit bounded value set.
  - `fees_or_other_costs` is explicitly defined as a total non-shipping cost field.
  - Deferred List copy/style heuristics remain visible wrapper-level heuristics and are acceptable to leave non-canonical for cutover.
  - Deferred Vintage/Antique Etsy/Vinted heuristics remain visible wrapper-level heuristics and are acceptable to leave non-canonical for cutover because List-mode platform coverage already includes all supported platforms.
- Reason for change:
  - The blocker-resolution pass needed explicit, evidence-based dispositions rather than leaving style heuristics and bounded automation fields as open blockers.
- Risk if unresolved:
  - Resolved for readiness review.
- Risk level: Medium
- Approval required: No
- Notes: This decision prepares the system for a human cutover approval decision but does not authorize cutover.

## D-006
- Topic: Approved cutover activation and final transition boundary
- Status: Approved
- Needed from human: Resolved.
- Affected legacy sources:
  - `AGENTS.md`
  - `.cursorrules`
  - `commands/run-moola.md`
  - `commands/edit-moola.md`
  - `Original-Editable/*`
- Affected new files:
  - `README.md`
  - `00-governance/ownership-and-sources.md`
  - `00-governance/deprecations.md`
  - `10-canonical/system/edit-workflow.md`
  - `30-adapters/d004-wrapper-review.md`
  - `50-validation/stage-roadmap.md`
  - `50-validation/traceability-matrix.md`
  - `50-validation/wrapper-policy-leak-review.md`
  - `50-validation/cutover-readiness.md`
- Old wording / old behavior:
  - The rebuilt system was documented as a parallel system awaiting cutover approval.
  - The schema had already been finalized for review, but cutover activation had not yet been applied as an approved project-state change.
  - Deferred style/platform heuristics were allowed to remain unresolved for cutover, but their permanent post-cutover non-canonical status was not yet explicitly recorded.
- New wording / new behavior:
  - `moola-system-v2` is the active main workflow system for this project.
  - The listing JSON schema is the settled official listing-data structure unless a later explicit decision changes it.
  - Deferred style/platform heuristics remain optional non-canonical guidance only and are not promoted into canonical policy by cutover.
  - The legacy workflow system remains preserved as legacy and archival reference material.
- Reason for change:
  - Apply the final human approvals cleanly without redesigning the system or silently promoting optional heuristics.
- Risk if unresolved:
  - Resolved.
- Risk level: High
- Approval required: No
- Notes: This decision records the approved transition into the new main system and preserves the canonical-vs-optional boundary.

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `Original-Editable/MOOLA-MATIC VALUE.txt`
- `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt`
- `commands/run-moola.md`
- `.cursor/skills/moola-run/SKILL.md`
- `.cursorrules`