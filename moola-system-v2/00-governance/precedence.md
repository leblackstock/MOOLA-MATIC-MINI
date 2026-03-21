# Precedence Model

Purpose
- This file defines the only valid precedence model for the new system.

Scope
- This precedence model applies only inside `moola-system-v2/`.
- It does not modify the legacy system.

Precedence order
1. Approved semantic decisions recorded in `decision-log.md`
2. Governance files in `00-governance/`
3. Canonical system files in `10-canonical/system/`
4. Canonical mode and policy files created in later stages
5. Canonical contracts and schemas created in later stages
6. Templates and examples
7. Generated adapters and wrappers
8. Archival references

Interpretation rules
- Higher-priority sources win when two rules conflict.
- Lower-priority sources may explain or summarize higher-priority rules, but may not silently change them.
- Templates and examples are non-authoritative unless a higher-priority file explicitly marks a template as normative.
- Generated files are derivative views, not policy owners.

Conflict handling
- If a legacy conflict is still unresolved, the new system must not choose a winner silently.
- The unresolved issue must be logged in `decision-log.md` and referenced by decision ID where needed.
- Stage 1 files may acknowledge unresolved conflicts but must not finalize them.

Stage-boundary rule
- Stage 1 may define precedence and ownership.
- Stage 1 may not finalize unresolved Stage 2 contract semantics.

Approved decision references
- D-001 — Value mode excludes platforms by default; default platform guidance lives outside Value mode.
- D-002 — List JSON outward confirmation is exactly `JSON file created.`
- D-003 — One canonical JSON schema includes both listing and automation-required fields.
- D-004 — Wrapper-only additive behavior is reviewed item-by-item, not promoted wholesale.

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `AGENTS.md`
- `.cursorrules`