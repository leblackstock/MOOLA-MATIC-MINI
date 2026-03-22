# Losslessness Assessment

Purpose
- This file assesses whether the rebuilt system preserves legacy behavior closely enough for human cutover review.

Preserved behavior
- Run workflow trigger under `/run-moola`
- Explicit combined Identify+Value behavior remains supported and is now implemented as an explicit composition rather than the default for every non-List Run request
- Edit workflow trigger and no-listing behavior under `/edit-moola`
- Generic routing precedence: List > Value > Identify
- Default platform recommendation behavior remains preserved in the architecture, with pure Identify excluding it by default while Value and Identify+Value retain attachment under the current architecture
- Value-mode pricing/profitability behavior remains intact
- Value-mode identification support remains preserved, and pure Value now uses one-sentence identification context instead of a full outward Identify section by default
- Pure Identify now exists as an explicit canonical owner with a cross-category resale-identification core and category-extension logic
- Routing now selects the operation explicitly and no longer auto-defaults `/run-moola` to combined Identify+Value
- Image-led requests remain evidence-led and no longer auto-trigger both Identify and Value
- Cross-category reseller support remains preserved through broad estimator coverage, general reseller system scope, and category-specific measurement support with a standard L/W/H fallback
- List JSON outward confirmation remains `JSON file created.`
- One-question discipline remains preserved in canonical behavior
- Packaging-weight and shipping-weight handling remain preserved in workflow/schema planning
- ListPerfectly selector priority remains preserved as explicit wrapper behavior
- Playwright UI handoff remains preserved as explicit wrapper behavior

Semantically preserved rewrites
- Governance and precedence language rewritten for clarity
- Source-of-truth ownership rewritten into one canonical model
- Value/platform conflict resolved by separating the default platform layer from Value mode
- Approved post-cutover decision application now records:
  - pure Identify as a non-platform-default operation
  - pure Value as a non-bundled operation with one-sentence identification context
  - `/run-moola` as request-routed rather than default-combined
- Approved post-cutover decision application now also records a miscellaneous-reseller rewrite boundary with:
  - a universal resale core
  - category-specific extension logic when relevant
  - explicit List impact assessment for category-specific schema and output dependencies
- Legacy command and Cursor surfaces rewritten as thin wrappers that defer to canonical files

Intentional deprecations / archival outcomes
- Older download-line JSON outward response behavior archived
- Legacy `.cursorrules` references that point active behavior at archival `Original/*` files archived
- Legacy `.cursorrules` source-of-truth wording that treats `Original/*.txt` as active authority archived
- Mixed undocumented schema/template behavior deprecated in favor of one canonical schema

Partially preserved or unresolved areas
- The Identify owner, Value owner, default platform layer, routing, and Run workflow have now been rewritten to implement D-007 through D-010 at the canonical level.
- List contracts/schema remain largely deferred or by-reference in the current rewrite state.
- Wrapper and adapter alignment remain deferred.
- Validation/readiness coverage for the implemented canonical rewrite is now recorded in this step.
- Wrapper-only List creativity/CTA guidance remains deferred pending future List-mode canonical drafting
- Wrapper-only Vintage/Antique Etsy/Vinted heuristics remain deferred pending fuller platform-policy review
- Schema field traceability remains grouped rather than fully one-row-per-field

Implemented scenario coverage
- Identify-only request with photos
  - routes to Identify-only
  - does not include value output
  - does not attach the default platform layer by default
- Value-only request with photos
  - routes to Value-only
  - includes one-sentence identification context
  - attaches the default platform layer by default where active and not disabled
- Explicit Identify+Value request with photos
  - routes to combined Identify+Value
  - executes Identify first and Value second
  - keeps outputs distinct
  - attaches the default platform layer after the Value portion where active and not disabled
- Ambiguous image-led request
  - does not auto-run both
  - uses ambiguity handling or the approved Identify-only fallback behavior
- Cross-category miscellaneous-reseller handling
  - preserves a universal resale core
  - preserves category-extension logic when relevant
  - does not assume a fashion-only default worldview

Residual risks
- Wrapper and adapter surfaces still predate the rewritten canonical Identify/Value/routing boundaries.
- List-facing title/description/item-specific guidance still relies heavily on older evidence surfaces and has not yet been audited as fully cross-category at the canonical contract level.
- Some examples and templates may still overrepresent footwear/apparel patterns relative to miscellaneous reseller inventory.
- The generic fallback to Identify-only for non-explicit ambiguous requests is intentional, but still deserves careful wrapper and future List-adjacent review so it is not over-applied where user intent is actually mixed.
- Minor stylistic drift risk if users expect the old wrapper-only copy heuristics to be preserved verbatim
- Minor recommendation-tone drift risk for Vintage/Antique platform reasoning because the heuristics are not promoted into canonical policy

Assessment
- The rebuilt system is largely lossless for core operational behavior.
- The implemented Step 1 through Step 3 rewrite preserves affected legacy behavior through explicit split, relocation, clarification, reclassification, and boundary-setting rather than silent removal.
- The implemented rewrite now establishes explicit Identify-only, Value-only, request-routed `/run-moola`, and sequential Identify+Value behavior at the canonical layer.
- The implemented rewrite preserves existing cross-category signals while establishing universal-core plus category-extension logic for Identify and Value.
- The project is now ready for the next deferred areas: List impact review and wrapper/adapter alignment.
- It is not fully lossless for every wrapper-derived style preference, but those remaining differences are explicitly documented, bounded, and non-blocking for cutover review.