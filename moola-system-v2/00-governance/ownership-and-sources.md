# Ownership and Source-of-Truth Model

Purpose
- This file defines which files own which topics in the new system.

Ownership rules
- One topic must have one canonical owner.
- Canonical owners are hand-maintained.
- Generated or adapter files may restate canonical behavior, but may not become the only place where a rule exists.
- Hidden policy in adapters is not allowed unless explicitly approved and logged.

Canonical source classes
- Governance: `00-governance/`
- Canonical behavior: `10-canonical/`
- Validation and traceability scaffolding: `50-validation/`

Current active-system rule
- The canonical and governance files inside `moola-system-v2/` are now the active main workflow system for this project.
- Legacy files outside `moola-system-v2/` remain important evidence, reference, and compatibility material, but they are no longer the active source of truth after approved cutover.

Future non-canonical classes
- Generated adapters: future `30-adapters/`
- Future templates/examples: future `20-templates/`
- Future automation implementation references: future `40-automation/`
- Future archival references: future `90-archive/`

Topic ownership in Stage 1
- Precedence model: `00-governance/precedence.md`
- Ownership rules: `00-governance/ownership-and-sources.md`
- Semantic decision control: `00-governance/decision-log.md`
- Deprecation control: `00-governance/deprecations.md`
- Controlled terminology: `00-governance/glossary.md`
- System identity and global boundaries: `10-canonical/system/identity-and-scope.md`
- Routing and trigger behavior: `10-canonical/system/routing.md`
- Run workflow: `10-canonical/system/run-workflow.md`
- Edit workflow: `10-canonical/system/edit-workflow.md`
- Maintenance and anti-drift rules: `10-canonical/system/maintenance-policy.md`
- Traceability register: `50-validation/traceability-matrix.md`
- Stage boundaries and drafting sequence: `50-validation/stage-roadmap.md`

Approved Stage 2 topic ownership
- Default platform recommendation layer: `10-canonical/policies/default-platform-layer.md`
- Canonical Value-mode contract: `10-canonical/modes/value.md`
- Canonical List JSON response contract: `10-canonical/contracts/listing-response-contract.md`
- Single canonical JSON schema with listing and automation fields: `10-canonical/contracts/listing-json.schema.json`

Legacy-source stance
- `Original-Editable/*.txt` is treated as the primary legacy baseline for reconstructing canonical behavior.
- `Original/*.txt` is treated as archival legacy reference material.
- Legacy wrapper surfaces remain important evidence of real behavior, but they do not become canonical owners in the new system.

Hand-maintained adapter exception rule
- If a future adapter must remain hand-maintained, it must include:
  - justification
  - canonical source reference
  - drift-control note
  - approval reference in `decision-log.md`

Open decision references
- Approved decision references
  - D-001 — Value-mode platforms are excluded by default and default platform guidance lives outside Value mode.
  - D-003 — One canonical JSON schema includes both listing and automation-required fields.
  - D-004 — Wrapper-only behavior is reviewed item-by-item, not promoted wholesale.
  - D-005 — Blocker-resolution outcomes finalize schema semantics and classify unresolved heuristics explicitly.
  - D-006 — Approved cutover activates `moola-system-v2` as the main system and keeps deferred heuristics non-canonical.

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `AGENTS.md`
- `.cursorrules`
- `.cursor/skills/moola-run/SKILL.md`