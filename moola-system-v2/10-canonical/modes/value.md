# Value Mode

Purpose
- This file is the canonical owner of Value mode.

Goal
- Estimate resale value and profitability using best-effort identification, pricing, shipping, fees, labor, and profitability logic.

Scope
- Value mode is pricing-focused.
- Value mode owns pricing and profitability behavior.
- Value mode does not own the default platform recommendation layer.

Dependencies
- Estimation rules must follow the canonical estimator policy derived from legacy estimator behavior.
- If a default platform recommendation block is active, it appears outside this mode.

Includes
- Identification confidence gate before pricing
- Facts and assumptions block for item identification
- Acquisition/purchase-detail gatekeeping
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
- Types output unless the user explicitly asks for Types
- Listing copy
- List-mode JSON creation behavior
- Raw JSON output

Interaction with the default platform layer
- Platform recommendations are still required by default on every item unless the user says `no platforms`.
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

Output rules
- Plain text only.
- No markdown headings beyond the labels required by this mode contract.
- No emojis.
- No extra sections.
- Facts and assumptions must remain separated.

Exact output contract
```text
Identify (facts):
- (max 5 bullets)

Identify (assumptions):
- (max 3 bullets)

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

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC VALUE.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC ESTIMATORS.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`