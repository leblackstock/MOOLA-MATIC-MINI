# Default Platform Recommendation Layer

Purpose
- This file is the canonical owner of the default platform recommendation layer.
- This layer exists outside the pure Identify and pure Value contracts.

Scope
- This layer is a separate recommendation attachment layer.
- This layer applies where the active architecture says platform recommendations attach by default.
- This layer does not own pricing logic, profitability logic, listing-copy logic, or Types selection.

Default-on rule
- Platform recommendations attach by default to:
  - pure Value workflows
  - combined Identify+Value workflows
  - List workflows where current architecture still requires platform output
- Platform recommendations do not attach to pure Identify workflows by default.
- A higher-priority user instruction such as `no platforms` can disable the layer where it would otherwise attach.

Supported platform set
- eBay
- Etsy
- Facebook Marketplace
- Mercari
- Poshmark
- Grailed
- Depop
- Shopify
- Vestiaire Collective
- Vinted
- Whatnot

Ownership boundaries
- Value mode does not own default platform recommendations.
- Pure Identify mode does not own or receive the default platform recommendation block by default.
- Pure Value workflows append the default platform recommendation block after the Value block.
- Combined Identify+Value workflows may append the default platform recommendation block after the Value portion of the combined output.
- List mode owns its own platform-output contract and may override the default block shape.

Default platform block shape
- Unless a higher-priority mode contract overrides the shape, the default platform recommendation block is:

```text
Platforms to list on (why):
- Platform: short reason
- Platform: short reason
```

- Default recommendation count for the generic block: 2–6 good-fit platforms.

List-mode override
- List mode does not use the generic 2–6 platform block.
- List mode must include all supported platforms with Yes/No/Maybe reasons as required by the List-mode contract.

Identify-mode interaction
- Pure Identify does not attach this layer by default.
- If a later higher-priority instruction explicitly requests platform guidance together with Identify, the Identify contract may reference this layer without becoming its owner.

Value-mode interaction
- When Value workflow output is active and platforms are not disabled, append the default platform recommendation block after the Value-mode block.
- Do not place the platform block inside the canonical Value-mode contract.

Combined Identify+Value interaction
- When combined Identify+Value output is active and platforms are not disabled, append the default platform recommendation block after the Value portion of the combined output.
- Do not reinterpret the presence of this layer as ownership by Identify mode.

Recommendation rules
- Base recommendations on item facts and clearly labeled assumptions.
- Use short factual reasons.
- Consider the item class when relevant, including factors such as authenticity burden, fragility, local-pickup friction, hobby or collector demand, compatibility, handmade relevance, or regulated-item risk.
- Only mention platform-rule or restriction details when there is a real mismatch or restriction risk.
- Do not claim platform safety or compliance without reasonable confidence.
- If the user explicitly asks for a different platform set, follow the user’s instruction.

Approved decision references
- D-001 — Value mode excludes platforms by default; default platform guidance lives outside Value mode.
- D-007 — Pure Identify excludes platform recommendations by default.
- D-010 — The future rewrite must use a universal resale core plus category-specific extension logic for a miscellaneous reseller.

What this file does not own
- Pure Identify-mode contract
- Pure Value-mode contract
- Routing selection logic or ambiguity handling
- Run workflow sequencing
- Pricing or profitability logic
- List JSON confirmation behavior or List JSON schema ownership

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `Original-Editable/MOOLA-MATIC IDENTIFY.txt`
- `Original-Editable/MOOLA-MATIC LIST.txt`
- `Original-Editable/MOOLA-MATIC VALUE.txt`