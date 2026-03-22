# Value Mode

Purpose
- This file is the canonical owner of Value mode.

Goal
- Estimate likely resale value and profitability using best-effort identification support, pricing logic, shipping logic, fee/labor assumptions, and resale-relevant valuation reasoning.

Scope
- Value mode is pricing-focused.
- Value mode owns the pure Value contract.
- Value mode owns the universal resale-valuation core.
- Value mode owns category-specific valuation extension logic when relevant.
- Value mode owns pricing and profitability behavior.
- Value mode does not own the default platform recommendation layer.

Dependencies
- Estimation rules must follow the canonical estimator policy derived from legacy estimator behavior.
- If a default platform recommendation block is active, it appears outside this mode.

Universal resale-valuation core
- Include, when available and relevant:
  - one-sentence identification context for the item being valued
  - likely value range
  - basis for valuation through comps, sold-market evidence, or clearly stated pricing rationale
  - condition effect on value
  - completeness or included-accessories effect on value when relevant
  - tested or working-status effect on value when relevant
  - authenticity, material, rarity, age, model-demand, or collector-demand factors when relevant
  - major factors that could raise or lower value materially
  - confidence level
  - assumptions or uncertainty notes
  - shipping, fee, labor, profitability, and time-to-sell logic when relevant to the Value contract

Category-specific extension model
- Use the universal resale-valuation core for all item classes.
- Add category-specific valuation reasoning only when the item class makes it relevant.
- Category-specific extension logic is additive and selective, not a replacement for the universal core.
- Example category extensions include:
  - apparel and shoes
    - brand demand, style relevance, size desirability, wear severity, outsole/heel/upper condition, material premiums
  - jewelry
    - metal value, stone presence or absence, signed or unsigned status, hallmark credibility, missing stones, clasp condition
  - electronics
    - tested status, functionality risk, model demand, included chargers or accessories, compatibility, damage severity, obsolescence
  - tools and hardware
    - brand demand, completeness, included attachments, rust, modifications, working condition, compatibility
  - collectibles and media
    - edition, printing/run, rarity, completeness, series demand, publisher relevance, collector demand
  - art and decor
    - maker or artist demand, medium, age, style appeal, signature, mounting/framing state, restoration, fragility and shipping friction
  - parts and components
    - exact compatibility, revision/version desirability, measurements, wear, missing pieces, replacement-market demand
  - tobacco pipes
    - maker demand, stamping quality, shape desirability, stem originality, chamber/rim condition, cracks, burnout, repairs, collectibility

Core Value behavior
- Identification confidence gate before pricing
- One-sentence identification context before the pricing output
- Acquisition and purchase-detail gatekeeping
- Two pricing strategies:
  - buyer pays shipping
  - free shipping
- Shipping estimate
- Packed shipping weight estimate
- Packaging-only weight estimate
- Package dimension estimate
- Prep and packing estimate
- Fees estimate
- Labor estimate
- Profit rule, max purchase price, and net profit outputs
- Time-to-sell estimate
- Pricing sanity check
- One next-needed-detail question or `None.`

Explicit exclusions
- Platform recommendations by default
- Full outward Identify-mode report by default
- Types output unless the user explicitly asks for Types
- Listing copy
- List-mode JSON creation behavior
- Raw JSON output

Interaction with the default platform layer
- Platform recommendations still attach by default where the approved architecture says they apply unless the user says `no platforms`.
- When platform recommendations are active in a Value-oriented workflow, they must be output in the separate default platform layer after the Value block.
- The presence of that separate block does not change the canonical Value-mode contract.

Acquisition and purchase-details rule
- If COGS, purchase date, or purchase location is missing and the user did not say `skip profit`, ask one combined question and stop.
- If the user provides an unknown or placeholder acquisition value, do not ask again and do not stop.
- In that case, continue with acquisition treated as unknown and still compute max purchase price values.
- If the user says `skip profit`, omit profit lines that depend on acquisition cost.

Output-assembly note
- If the user says `skip profit`, omit the profit-rule, max-purchase-price, and net-profit lines from the final output.

Identification gate
- If the item cannot be identified confidently enough for pricing, ask one clarifying question and stop.
- Do not output pricing until the item is identified confidently enough.
- Identification support may be used internally throughout Value mode, but pure Value does not become a separate full Identify report by default.

Output rules
- Plain text only.
- No markdown headings beyond the labels required by this mode contract.
- No emojis.
- No extra sections.
- Keep assumptions and uncertainty explicit where they materially affect value.

Exact output contract
```text
Item identified for valuation:
- (one sentence identifying the item and the most value-relevant identity context)

Value basis:
- (comps / sold-market evidence or pricing rationale)
- (condition effect on value)
- (major factor that raises or lowers value materially)
- Confidence: (High / Medium / Low + brief reason)
- Assumptions / uncertainty: (brief note or `None.`)

- Likely sale price range (buyer pays shipping): $
- Likely sale price range (free shipping): $
- Recommended list price (buyer pays shipping): $
- Recommended list price (free shipping): $

- Shipping estimate (assumptions): $Z (Carrier/Service + brief reason)
- Estimated shipping weight (assumptions): X lb Y oz
- Estimated packaging weight (assumptions): X lb Y oz
- Estimated package dimensions (assumptions): L x W x H in
- Prep + packing estimate (assumptions): $P (brief reason)
- Estimated fees (assumptions): $ (brief basis)
- Estimated labor cost: $ (brief why)

- Profit rule used (default unless specified): $20 minimum per listing OR 20% ROI if purchase > $100
- Max purchase price (buyer pays shipping): $
- Max purchase price (free shipping): $

- Estimated net profit (after acquisition, buyer pays shipping): $ (or N/A if acquisition unknown)
- Estimated net profit (after acquisition, free shipping): $ (or N/A if acquisition unknown)
- Time-to-sell estimate: (brief + main driver)

Pricing sanity check:
- One line stating whether the free-shipping price stayed competitive (and if it was capped, say so and recommend buyer-pays-shipping if needed).

- Next needed detail (ONE question): (ONE question or “None.”)
```

Approved decision references
- D-001 — Value mode excludes platforms by default; default platform guidance lives outside Value mode.
- D-008 — Pure Value uses one-sentence identification context instead of a full outward Identify section by default.
- D-010 — The future rewrite must use a universal resale core plus category-specific extension logic for a miscellaneous reseller.

What this file does not own
- Full Identify-mode output contract
- Pure Identify-mode ownership
- Routing selection logic or ambiguity handling
- Run workflow sequencing or pass logging
- Default platform-layer ownership
- List JSON confirmation behavior or List JSON schema ownership

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC VALUE.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC ESTIMATORS.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `templates/value-template.txt`