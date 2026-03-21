# Routing

Purpose
- This file is the canonical owner of routing and entry-point behavior.

Routing layers
- Layer 1: workflow entry point
- Layer 2: mode selection

Workflow entry points
- If the user explicitly activates `/run-moola`, use the Run workflow.
- If the user explicitly activates `/edit-moola`, use the Edit workflow.
- If neither wrapper is activated, use generic MOOLA routing.

Generic mode routing
- LIST mode triggers when the user requests listing creation, listing writing, listing rewriting, listing optimization, export, upload, or equivalent listing intent.
- VALUE mode triggers when the user requests value, comps, price, profit, worth, max purchase price, or MAP.
- IDENTIFY mode triggers when the user requests identification or equivalent item-ID help.

Generic routing precedence
1. LIST
2. VALUE
3. IDENTIFY

Generic default
- If no mode trigger appears, default to IDENTIFY.

Wrapper override rule
- `/run-moola` changes the default workflow behavior.
- Inside the Run workflow, the default operational output is Identify+Value unless the user explicitly requests List.
- This wrapper override does not erase the generic routing model; it is a higher-context workflow rule.

Default platform layer rule
- Platform recommendations are required by default on every item.
- Platform recommendations are not owned by Value mode.
- Platform recommendations must live in a separate default layer or workflow block outside Value mode.
- Canonical owner: `10-canonical/policies/default-platform-layer.md`.

Mode-contract note
- Detailed mode contracts are owned by canonical mode files.
- `10-canonical/modes/value.md` is now active.
- Identify and List mode contract files remain deferred to later drafting.

Approved decision references
- D-001 — Value mode excludes platforms by default; default platform guidance lives outside Value mode.

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `commands/run-moola.md`
- `commands/edit-moola.md`
- `AGENTS.md`
- `.cursor/rules/moola-routing.mdc`