# Adapter and Wrapper Inventory

Purpose
- This file inventories Stage 3 wrapper and adapter surfaces.

Inventory

| Surface | Path | Status | Type | Purpose | Canonical dependencies | D-004 review needed | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cursor workflow summary | `30-adapters/cursor/AGENTS.wrapper.md` | active | hand-maintained wrapper | Thin compatibility summary for Run/Edit workflow triggers and canonical ownership | routing, run-workflow, identify mode, value mode, edit-workflow, maintenance-policy, default-platform-layer, response contract, JSON schema | yes | Aligned to request-routed Identify/Value/Identify+Value behavior and canonical ownership. |
| Cursor root compatibility summary | `30-adapters/cursor/cursorrules.wrapper.md` | active | hand-maintained wrapper | Thin compatibility surface replacing legacy `.cursorrules` behavior with canonical references | routing, run-workflow, identify mode, value mode, edit-workflow, maintenance-policy, default-platform-layer, response contract, JSON schema | yes | Avoids outdated source-of-truth drift and no longer implies bundled Identify+Value defaults. |
| Run command wrapper | `30-adapters/commands/run-moola.wrapper.md` | active | hand-maintained wrapper | Thin command-entry surface for the Run workflow | routing, run-workflow, identify mode, value mode, default-platform-layer, response contract, JSON schema | yes | Preserves reviewed wrapper-specific operational behaviors explicitly while deferring operation logic to canonical routing and Run owners. |
| Edit command wrapper | `30-adapters/commands/edit-moola.wrapper.md` | active | hand-maintained wrapper | Thin command-entry surface for the Edit workflow | edit-workflow, maintenance-policy | no | No wrapper-only additive behavior retained here. |
| D-004 review record | `30-adapters/d004-wrapper-review.md` | active | hand-maintained review record | Explicit record of wrapper-only additive behavior dispositions | decision-log, deprecations, traceability | yes | Required to prevent hidden policy drift. |
| Future Cursor rules surfaces | future `30-adapters/cursor/rules/*.generated.mdc` | planned | future-generated wrapper | Future generated Cursor rule surfaces derived from canonical rules and wrapper inventory | routing, run-workflow, identify mode, value mode, edit-workflow, default-platform-layer, approved wrapper review outcomes | no | Not drafted in Stage 3. |
| Future Cursor skill surface | future `30-adapters/cursor/skills/moola-run.generated.md` | planned | future-generated wrapper | Future generated skill surface derived from canonical run workflow and approved wrapper review outcomes | routing, run-workflow, identify mode, value mode, default-platform-layer, response contract, JSON schema, D-004 review outcomes | yes | Not drafted in Stage 3. |

Rules
- This inventory is descriptive and ownership-oriented.
- If a wrapper becomes thicker than intended, its behavior must be moved into canonical files or recorded in the D-004 review record.