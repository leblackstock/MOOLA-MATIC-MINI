# Wrapper-Policy Leak Review

Purpose
- This file records whether meaningful behavior still lives only in wrappers.

Reviewed wrapper-only behavior still living only in wrappers

Acceptable wrapper behavior
- Selector-priority behavior for the current ListPerfectly automation flow
  - Status: acceptable wrapper behavior
  - Why: operationally important and tool-specific
- Playwright UI handoff after List runs
  - Status: acceptable wrapper behavior
  - Why: operationally important and UI-specific

Deferred wrapper-only behavior needing later canonical review
- LIST creativity-level guidance
  - Status: optional non-canonical guidance
  - Needs: future List-mode canonical review if style behavior is later promoted
- CTA-style guidance
  - Status: optional non-canonical guidance
  - Needs: future List-mode canonical review if style behavior is later promoted
- Vintage/Antique Etsy heuristic
  - Status: optional non-canonical guidance
  - Needs: future platform-policy review if recommendation heuristics are later promoted
- Vintage/Antique Vinted heuristic
  - Status: optional non-canonical guidance
  - Needs: future platform-policy review if recommendation heuristics are later promoted
- Vivid use-case / light urgency copy guidance
  - Status: optional non-canonical guidance
  - Needs: future List-mode canonical review if style behavior is later promoted

Deprecated or archival wrapper drift
- Legacy `.cursorrules` references to archival `Original/*` files
- Legacy `.cursorrules` active-authority wording for `Original/*.txt`

Leak assessment
- No hidden policy was found in the rebuilt Stage 3 wrapper files beyond explicitly reviewed wrapper behavior.
- Remaining wrapper-only behaviors are visible, classified, and traceable.
- The remaining non-canonical heuristics affect copy style or recommendation emphasis, not data validity or automation completeness.

Implemented wrapper-alignment status
- Active wrapper summaries are now aligned to the canonical Identify, Value, routing, Run, and platform-layer owners.
- Active wrappers no longer imply bundled Identify+Value as the default `/run-moola` behavior.
- Active wrappers no longer imply that pure Identify receives the default platform layer by default.
- Active wrappers no longer imply that image input alone auto-triggers both Identify and Value.

Actions still needed before or during later drafting
- Decide whether deferred List copy/style heuristics should be promoted when List-mode canonical drafting occurs.
- Decide whether deferred Vintage/Antique platform heuristics should be promoted when fuller platform-policy drafting occurs.