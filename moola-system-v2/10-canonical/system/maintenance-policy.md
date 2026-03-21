# Maintenance Policy

Purpose
- This file defines how the new system may be updated without reintroducing drift.

Canonical-first rules
- Update canonical files before creating or updating any derivative surface.
- Do not place new policy only in wrappers or adapters.
- If a derivative file must be hand-maintained in the future, document the exception and approval in `../../00-governance/decision-log.md`.

Traceability rules
- Any new rule with user-visible, automation-visible, or workflow-visible impact must be traceable back to either:
  - a preserved legacy source, or
  - an approved semantic decision.
- Update `../../50-validation/traceability-matrix.md` when a canonical rule is added, merged, split, rewritten, deprecated, or archived.

Semantic-change rules
- Editorial clarity changes are allowed only when semantics are preserved.
- Any semantic change must receive a decision-log entry before it is treated as active policy.
- Unresolved semantic conflicts must stay open and referenced by decision ID.

Anti-drift rules
- Do not duplicate policy across multiple canonical files when one owner is sufficient.
- If a file summarizes another file, the summary must point back to the canonical owner.
- Do not let templates or examples silently become rule owners.

Stage-boundary rules
- Stage 1 owns governance and canonical foundation only.
- Stage 2 owns contracts and schemas.
- Stage 3 owns adapters and wrappers.
- Stage 4 owns parity validation and migration support beyond Stage 1 scaffolding.

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `.cursor/rules/moola-edit.mdc`