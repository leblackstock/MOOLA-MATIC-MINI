# Traceability Matrix

Purpose
- This file proves lossless preservation by mapping legacy rules and behaviors into the new system.

Required columns
- Legacy source
- Legacy rule/behavior
- Classification
- New destination
- Preservation status
- Change type
- Notes

Classification values
- canonical
- wrapper-only
- duplicated
- conflicting
- ambiguous
- outdated
- automation-required
- likely intentional but badly placed
- likely drift

Preservation status values
- preserved
- rewritten-for-clarity
- split
- merged
- pending-decision
- deferred
- archived
- deprecated

Change type values
- unchanged
- rewrite
- split
- merge
- deprecate
- archive
- defer

Seed entries

| Legacy source | Legacy rule/behavior | Classification | New destination | Preservation status | Change type | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt` | File-order precedence and conflict handling | canonical, duplicated, ambiguous | `00-governance/precedence.md` | preserved | rewrite | Normalized into one precedence owner. |
| `Original-Editable/MOOLA-MATIC PROMPT.txt` | Global role and assistant scope | canonical, duplicated | `10-canonical/system/identity-and-scope.md` | preserved | rewrite | Stage 1 captures system-level behavior only. |
| `Original-Editable/MOOLA-MATIC MODES.txt` | Generic mode routing and precedence | canonical, duplicated | `10-canonical/system/routing.md` | preserved | rewrite | Wrapper override handled separately. |
| `commands/run-moola.md` | Multi-pass Run workflow | wrapper-only, likely intentional but badly placed | `10-canonical/system/run-workflow.md` | preserved | rewrite | Promoted to canonical workflow owner. |
| `commands/edit-moola.md` | Edit-mode scope and no-listing rule | wrapper-only, likely intentional but badly placed | `10-canonical/system/edit-workflow.md` | preserved | rewrite | Promoted to canonical workflow owner. |
| `AGENTS.md` | Mirror expectations and workflow summary | duplicated | `00-governance/ownership-and-sources.md` | preserved | merge | Adapter-level summary becomes governance ownership rule. |
| `.cursorrules` | Active/archival source wording drift | conflicting, outdated | `00-governance/ownership-and-sources.md`, `00-governance/deprecations.md`, `30-adapters/d004-wrapper-review.md` | archived | archive | Stage 4 audit confirms this broad source-of-truth drift is handled as archival wrapper drift. |
| `.cursor/skills/moola-run/SKILL.md` | Wrapper-only additive behavior | wrapper-only, likely drift | `00-governance/decision-log.md` | deferred | defer | Individual wrapper-only items will be reviewed one at a time under D-004. |
| `Original/*` | Older archival behavior set | outdated | `00-governance/deprecations.md` | archived | archive | Preserved as archival reference, not active canonical source. |
| `Original-Editable/MOOLA-MATIC VALUE.txt` + related files | Value-mode platform conflict | conflicting | `00-governance/decision-log.md`, `10-canonical/modes/value.md`, `10-canonical/policies/default-platform-layer.md` | split | split | D-001 approved: Value mode excludes platforms by default; default platform guidance is preserved in a separate layer. |
| `Original/MOOLA-MATIC PROMPT.txt` + related archival files | Older List JSON outward download-line response | outdated | `00-governance/deprecations.md`, `10-canonical/contracts/listing-response-contract.md` | archived | archive | D-002 approved: rebuilt system uses `JSON file created.` |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + automation files | JSON contract mismatch | conflicting, automation-required | `00-governance/decision-log.md`, `10-canonical/contracts/listing-json.schema.json` | merged | merge | D-003 approved: one canonical schema must include both listing and automation-required fields. |
| `.cursorrules` + `.cursor/skills/moola-run/SKILL.md` | Wrapper-only additive behavior under review | wrapper-only, duplicated, likely drift | `00-governance/decision-log.md`, canonical policy files as approved | deferred | defer | D-004 approved: review and promote item-by-item; do not promote wholesale and do not discard wholesale. |
| `Original-Editable/MOOLA-MATIC PROMPT.txt` + `Original-Editable/MOOLA-MATIC MODES.txt` + `Original-Editable/MOOLA-MATIC IDENTIFY.txt` + `Original-Editable/MOOLA-MATIC LIST.txt` | Default platform recommendation behavior outside Value mode; default-on unless user says `no platforms`; 2–6 generic platforms outside List full matrix | canonical, conflicting, duplicated | `10-canonical/policies/default-platform-layer.md` | split | split | Stage 2 separates the always-on platform layer from Value mode while preserving default platform recommendations. |
| `Original-Editable/MOOLA-MATIC VALUE.txt` + `Original-Editable/MOOLA-MATIC ESTIMATORS.txt` + `Original-Editable/MOOLA-MATIC PROMPT.txt` | Pricing-focused Value mode: identification gate, acquisition gate, two-price strategy, shipping, packaging, fees, labor, MAP, net profit, time-to-sell, one question | canonical, duplicated | `10-canonical/modes/value.md` | preserved | rewrite | Stage 2 preserves core Value behavior while removing default platform ownership from Value mode. |
| `Original-Editable/MOOLA-MATIC VALUE.txt` + approved D-001 | Value mode exclusions: no default platforms, no Types unless explicitly requested, no listing copy, no List-mode JSON behavior | canonical, conflicting | `10-canonical/modes/value.md` | preserved | rewrite | Platform exclusion is now explicit and separated from the default platform layer. |
| `Original-Editable/MOOLA-MATIC PROMPT.txt` + `Original-Editable/MOOLA-MATIC LIST.txt` + `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + `commands/run-moola.md` + `templates/list-json-confirmation.txt` | Outward List JSON confirmation contract and no-raw-JSON rule | canonical, duplicated | `10-canonical/contracts/listing-response-contract.md` | preserved | rewrite | Stage 2 fixes exact outward confirmation text and placement. |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` | Core listing/output fields: title, hook, description, included_items, measurements, tags, condition, cta, pricing_sentence, free_shipping_price, buyer_pays_shipping_price, shipping_estimate_sentence, shipping_cost_estimate, offer_recommendation, comps_day_range, time_to_sell_sentence, platforms, types_block, listing_body, listperfectly_description, question | canonical | `10-canonical/contracts/listing-json.schema.json` | preserved | rewrite | Field group traced from the editable schema and response-shape rules. |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + `Original-Editable/MOOLA-MATIC LIST.txt` + `Original-Editable/MOOLA-MATIC IDENTIFY.txt` | Item identity and attribute fields: sku, quantity, cogs, upc, brand, color, material, style_features, country_of_origin, msrp, era_status, era_notes, style_tags | canonical | `10-canonical/contracts/listing-json.schema.json` | preserved | rewrite | Field group traced from schema and item-data capture rules. |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + `Original-Editable/MOOLA-MATIC LIST.txt` | Size fields: size_or_fit, original_size | canonical, automation-required | `10-canonical/contracts/listing-json.schema.json` | preserved | rewrite | Size behavior remains explicit and machine-readable. |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + `Original-Editable/MOOLA-MATIC IDENTIFY.txt` + `Original-Editable/MOOLA-MATIC VALUE.txt` | Condition and audience fields: condition_status, intended_for | canonical, automation-required | `10-canonical/contracts/listing-json.schema.json` | preserved | rewrite | Allowed intended_for values remain explicit; condition_status retains known-value constraints. |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + `Original-Editable/MOOLA-MATIC ESTIMATORS.txt` + `Original-Editable/MOOLA-MATIC LIST.txt` + `Original-Editable/MOOLA-MATIC VALUE.txt` | Shipping and package fields: shipping_weight_lb, shipping_weight_oz, packaging_weight_lb, packaging_weight_oz, package_length, package_width, package_height, shipping_zip | canonical, automation-required | `10-canonical/contracts/listing-json.schema.json` | preserved | rewrite | Packed weight, packaging-only weight, and default shipping ZIP remain explicit. |
| `Original-Editable/MOOLA-MATIC JSON SCHEMA.txt` + `Original-Editable/MOOLA-MATIC LIST.txt` | Acquisition and note fields: purchase_date, purchase_location, notes, internal_notes | canonical, automation-required | `10-canonical/contracts/listing-json.schema.json` | preserved | rewrite | Notes vs internal_notes split remains explicit. |
| `playwright-assistant/scripts/selectors.json` + `templates/listperfectly-selectors-priority.txt` + `templates/list-json-template.json` + `playwright-assistant/ui/index.html` | Automation-only required fields not present in the legacy editable schema: pre_owned_condition, fees_or_other_costs | automation-required, conflicting | `10-canonical/contracts/listing-json.schema.json` | merged | merge | Finalized in the blocker-resolution pass: `pre_owned_condition` now uses a bounded value set and `fees_or_other_costs` is explicitly defined as a total non-shipping cost field. |
| `templates/list-json-template.json` | Template-only fields not evidenced as required canonical or required automation fields: platform_fee_estimate, payment_processing_fee_estimate, labor_cost_estimate, max_profit_price, max_profit_estimate, max_profit_time_to_sell, min_profit_price, min_profit_estimate, min_profit_time_to_sell | likely drift, ambiguous | not included in `10-canonical/contracts/listing-json.schema.json` | deferred | defer | These fields were not promoted because current evidence does not show they are required canonical fields or required automation fields. Their exclusion is acceptable for cutover. |
| `AGENTS.md` | Thin workflow summary surface for Cursor users | duplicated | `30-adapters/cursor/AGENTS.wrapper.md` | preserved | rewrite | Stage 3 preserves a thin compatibility summary that defers to canonical files. |
| `.cursorrules` | Thin root compatibility surface for Cursor users | duplicated, conflicting | `30-adapters/cursor/cursorrules.wrapper.md` | preserved | rewrite | Stage 3 preserves a thin compatibility surface while removing outdated source-of-truth drift. |
| `commands/run-moola.md` | Thin Run command-entry surface | wrapper-only, duplicated | `30-adapters/commands/run-moola.wrapper.md` | preserved | rewrite | Stage 3 preserves the command wrapper and keeps it thin. |
| `commands/edit-moola.md` | Thin Edit command-entry surface | wrapper-only, duplicated | `30-adapters/commands/edit-moola.wrapper.md` | preserved | rewrite | Stage 3 preserves the command wrapper and keeps it thin. |
| `.cursorrules`, `.cursor/skills/moola-run/SKILL.md` | Selector-priority behavior for current ListPerfectly automation | wrapper-only, automation-required | `30-adapters/commands/run-moola.wrapper.md`, `30-adapters/d004-wrapper-review.md` | preserved | rewrite | Preserved as explicit wrapper-specific behavior under W-003, not as hidden policy. |
| `.cursorrules`, `commands/run-moola.md` | Playwright UI handoff after List runs | wrapper-only, operationally important | `30-adapters/commands/run-moola.wrapper.md`, `30-adapters/d004-wrapper-review.md` | preserved | rewrite | Preserved as explicit wrapper-specific behavior under W-004. |
| `.cursorrules` | List creativity-level guidance | wrapper-only, likely intentional but badly placed | `30-adapters/d004-wrapper-review.md` | deferred | defer | Deferred under W-005 as optional non-canonical style guidance retained after approved cutover. |
| `.cursorrules` | CTA-style guidance | wrapper-only, likely intentional but badly placed | `30-adapters/d004-wrapper-review.md` | deferred | defer | Deferred under W-006 as optional non-canonical style guidance retained after approved cutover. |
| `.cursor/skills/moola-run/SKILL.md` | Vintage/Antique Etsy inclusion heuristic | wrapper-only, likely intentional but badly placed | `30-adapters/d004-wrapper-review.md` | deferred | defer | Deferred under W-007 as optional non-canonical guidance retained after approved cutover because List mode already covers all supported platforms. |
| `.cursor/skills/moola-run/SKILL.md` | Vintage/Antique Vinted inclusion heuristic | wrapper-only, likely intentional but badly placed | `30-adapters/d004-wrapper-review.md` | deferred | defer | Deferred under W-008 as optional non-canonical guidance retained after approved cutover because List mode already covers all supported platforms. |
| `.cursor/skills/moola-run/SKILL.md` | Vivid factual use-case and light-urgency copy guidance | wrapper-only, likely intentional but badly placed | `30-adapters/d004-wrapper-review.md` | deferred | defer | Deferred under W-009 as optional non-canonical style guidance retained after approved cutover. |

Usage rule
- Add or update trace rows whenever a canonical file preserves, rewrites, splits, merges, defers, archives, or deprecates a behavior.

Legacy-source anchors
- `Original-Editable/*`
- `Original/*`
- `commands/*`
- `AGENTS.md`
- `.cursorrules`
- `.cursor/rules/*`
- `.cursor/skills/moola-run/SKILL.md`