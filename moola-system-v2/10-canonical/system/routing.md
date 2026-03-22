# Routing

Purpose
- This file is the canonical owner of routing and entry-point behavior.

Routing layers
- Layer 1: workflow entry point
- Layer 2: operation selection

Workflow entry points
- If the user explicitly activates `/run-moola`, use the Run workflow.
- If the user explicitly activates `/edit-moola`, use the Edit workflow.
- If neither wrapper is activated, use generic MOOLA routing.

Operation selection model
- Routing selects the operation to run.
- Routing does not rewrite the selected operation contract.
- Routing is category-agnostic at the system level.
- Item category affects mode-internal detail handling, not operation selection.

Generic intent interpretation
- List-related workflow is selected when the user requests listing creation, listing writing, listing rewriting, listing optimization, export, upload, or equivalent listing intent.
- Identify+Value is selected when the user explicitly asks for both identification and valuation, or equivalent intent for both what the item is and what it is worth.
- Value-only is selected when the user requests value, comps, price, profit, worth, max purchase price, or MAP without also explicitly requesting full Identify output.
- Identify-only is selected when the user requests identification or equivalent item-ID help without also explicitly requesting value.

Generic routing precedence
1. List-related workflow
2. Identify+Value when both are explicitly requested
3. Value-only
4. Identify-only

Generic default
- If no explicit operation trigger appears, default to Identify-only.

Ambiguity handling
- If the request is genuinely ambiguous and no higher-priority listing intent is present, use one clarifying question only when it is necessary to determine whether the user wants Identify-only, Value-only, or both.
- If a clarifying question is not required to proceed safely, default to Identify-only rather than auto-running both Identify and Value.
- Ambiguity handling must not silently attach full Value behavior to Identify or full Identify behavior to Value.

Image-led request handling
- Photos are evidence input, not permission to auto-run every operation.
- Image input alone does not trigger Identify+Value.
- If the user asks to identify and provides photos, route to Identify-only.
- If the user asks to value and provides photos, route to Value-only.
- If the user asks for both and provides photos, route to Identify+Value.
- If the request is image-led and otherwise ambiguous, use the ambiguity-handling rule above rather than auto-running both.

Wrapper override rule
- `/run-moola` activates the Run workflow, but it does not by itself select combined Identify+Value.
- Inside the Run workflow, operation selection still depends on the user's request and the routing rules above.
- This wrapper override does not erase the generic routing model; it changes the workflow shell, not the selected operation contract.

Default platform layer rule
- Pure Identify does not attach the default platform layer by default.
- Value-only may attach the default platform layer under the platform-layer policy.
- Identify+Value may attach the default platform layer under the platform-layer policy.
- List-related workflows use the current List architecture by reference.
- Canonical owner: `10-canonical/policies/default-platform-layer.md`.

Mode-contract note
- Detailed mode contracts are owned by canonical mode files.
- `10-canonical/modes/identify.md` is now active.
- `10-canonical/modes/value.md` is now active.
- List-related outward response and schema ownership remain in the current canonical List-adjacent files.

What this file does not own
- The full Identify-only contract
- The full Value-only contract
- The default platform recommendation contract
- The List JSON response contract or schema contract
- Wrapper-specific operational behavior

Approved decision references
- D-001 — Value mode excludes platforms by default; default platform guidance lives outside Value mode.
- D-007 — Pure Identify excludes platform recommendations by default.
- D-008 — Pure Value uses one-sentence identification context instead of a full outward Identify section by default.
- D-009 — `/run-moola` routes by user request and does not auto-default to combined Identify+Value.
- D-010 — The future rewrite must use a universal resale core plus category-specific extension logic for a miscellaneous reseller.

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `Original-Editable/MOOLA-MATIC IDENTIFY.txt`
- `Original-Editable/MOOLA-MATIC VALUE.txt`
- `commands/run-moola.md`
- `commands/edit-moola.md`
- `AGENTS.md`
- `.cursor/rules/moola-routing.mdc`