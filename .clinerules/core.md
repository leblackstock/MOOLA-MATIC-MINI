# Core Cline Operating Rules

Purpose
- This file defines the core operating posture for Cline in this repository.
- It is a thin operational guide, not a canonical policy owner.

Canonical-first behavior
- Treat `moola-system-v2/` as the active source of truth.
- Before acting on workflow behavior, check the canonical owner for that topic.
- Use governance files to determine ownership and precedence before relying on wrappers, templates, or legacy surfaces.

Primary canonical references
- Ownership and source-of-truth model: `moola-system-v2/00-governance/ownership-and-sources.md`
- Precedence model: `moola-system-v2/00-governance/precedence.md`
- Global identity and scope: `moola-system-v2/10-canonical/system/identity-and-scope.md`
- Routing ownership: `moola-system-v2/10-canonical/system/routing.md`
- Run-workflow ownership: `moola-system-v2/10-canonical/system/run-workflow.md`
- Identify ownership: `moola-system-v2/10-canonical/modes/identify.md`
- Value ownership: `moola-system-v2/10-canonical/modes/value.md`
- Default platform-layer ownership: `moola-system-v2/10-canonical/policies/default-platform-layer.md`

Anti-shadow-policy rule
- Do not turn `.clinerules` into a second source of truth.
- Do not copy full mode contracts, schemas, or policy blocks into `.clinerules`.
- If canon already owns a rule, reference canon instead of re-explaining it here.
- If a proposed Cline rule starts to look like workflow policy, narrow it or move the behavior reference back to canon.

Wrapper and adapter handling
- Wrappers and adapters are compatibility and entry surfaces, not policy owners.
- Do not treat wrapper summaries as the authoritative owner of workflow behavior.
- If wrapper wording conflicts with canonical files, follow canonical files.
- Use adapter material only for compatibility context or trigger surfaces unless canon explicitly says otherwise.

Legacy and evidence-file handling
- Treat `Original-Editable/*.txt`, `Original/*.txt`, root-level legacy instruction files, templates, and other evidence surfaces as reference material unless canon explicitly makes them active.
- Do not revive stale bundled behavior from legacy wording when the active canonical system already narrowed or replaced it.
- Preserve awareness of evidence and legacy context without letting those files override canonical ownership.

Active architecture reminders
- Respect the active separation between Identify and Value.
- Do not silently re-bundle Identify+Value as a default behavior.
- Do not assume image input means “run everything.”
- Respect that routing chooses the operation and Run executes the chosen operation.
- Respect that the default platform layer is separate from pure Identify and pure Value contracts.
- Keep these reminders high-level here; use the canonical files for detailed behavior.

Repo operating stance
- This repository supports a miscellaneous reseller workflow with varied inventory.
- Default to a universal resale core and category-agnostic handling.
- Apply category-specific detail only when the canonical owner for the active workflow makes it relevant.
- Do not optimize Cline behavior around apparel or shoes as if they were the default for all inventory.

Change-discipline rule
- Keep core Cline rules concise, operational, and reference-based.
- Add detailed operational guidance only when it is truly Cline-specific and cannot live better in canon.
- Dedicated rule files cover Identify/Value/routing, List behavior, and git/shell safety in similarly thin ways.