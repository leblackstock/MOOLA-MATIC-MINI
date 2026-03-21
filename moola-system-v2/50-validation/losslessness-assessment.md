# Losslessness Assessment

Purpose
- This file assesses whether the rebuilt system preserves legacy behavior closely enough for human cutover review.

Preserved behavior
- Run workflow trigger and Identify+Value default composition under `/run-moola`
- Edit workflow trigger and no-listing behavior under `/edit-moola`
- Generic routing precedence: List > Value > Identify
- Default platform recommendations remain required by default on items
- Value-mode pricing/profitability behavior remains intact
- List JSON outward confirmation remains `JSON file created.`
- One-question discipline remains preserved in canonical behavior
- Packaging-weight and shipping-weight handling remain preserved in workflow/schema planning
- ListPerfectly selector priority remains preserved as explicit wrapper behavior
- Playwright UI handoff remains preserved as explicit wrapper behavior

Semantically preserved rewrites
- Governance and precedence language rewritten for clarity
- Source-of-truth ownership rewritten into one canonical model
- Value/platform conflict resolved by separating the default platform layer from Value mode
- Legacy command and Cursor surfaces rewritten as thin wrappers that defer to canonical files

Intentional deprecations / archival outcomes
- Older download-line JSON outward response behavior archived
- Legacy `.cursorrules` references that point active behavior at archival `Original/*` files archived
- Legacy `.cursorrules` source-of-truth wording that treats `Original/*.txt` as active authority archived
- Mixed undocumented schema/template behavior deprecated in favor of one canonical schema

Partially preserved or unresolved areas
- Wrapper-only List creativity/CTA guidance remains deferred pending future List-mode canonical drafting
- Wrapper-only Vintage/Antique Etsy/Vinted heuristics remain deferred pending fuller platform-policy review
- Schema field traceability remains grouped rather than fully one-row-per-field

Residual risks
- Minor stylistic drift risk if users expect the old wrapper-only copy heuristics to be preserved verbatim
- Minor recommendation-tone drift risk for Vintage/Antique platform reasoning because the heuristics are not promoted into canonical policy

Assessment
- The rebuilt system is largely lossless for core operational behavior.
- It is not fully lossless for every wrapper-derived style preference, but those remaining differences are explicitly documented, bounded, and non-blocking for cutover review.