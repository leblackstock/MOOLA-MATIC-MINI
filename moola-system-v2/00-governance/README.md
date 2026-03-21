# Governance Index

Purpose
- This folder defines how the new system is governed.
- Governance files control precedence, ownership, decision logging, deprecations, terminology, and maintenance discipline.

Canonical status
- All files in this folder are canonical and hand-maintained.

Files in this folder
- `precedence.md` — single precedence and conflict-resolution model.
- `ownership-and-sources.md` — source-of-truth model and topic ownership.
- `decision-log.md` — required log for semantic changes and unresolved decisions.
- `deprecations.md` — approved deprecations and archival classifications.
- `glossary.md` — controlled definitions for core terms.

Rules for this folder
- No adapter or wrapper may override this folder silently.
- If a governance rule changes semantics, it must be logged in `decision-log.md`.
- If a governance rule deprecates behavior, it must be logged in `deprecations.md`.

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `AGENTS.md`
- `.cursorrules`
- `.cursor/rules/moola-routing.mdc`
- `.cursor/rules/moola-edit.mdc`