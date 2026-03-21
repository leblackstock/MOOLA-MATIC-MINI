# Default Platform Recommendation Layer

Purpose
- This file is the canonical owner of the default platform recommendation layer.
- This layer exists outside Value mode.

Scope
- This layer applies to item-scoped workflows by default.
- This layer does not own pricing logic, listing-copy logic, or Types selection.

Default-on rule
- Platform recommendations are required by default on every item unless the user explicitly says `no platforms`.

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
- Identify workflows may embed the default platform recommendation block inside the Identify response contract.
- Value workflows may append the default platform recommendation block after the Value block.
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

Value-mode interaction
- When Value workflow output is active and platforms are not disabled, append the default platform recommendation block after the Value-mode block.
- Do not place the platform block inside the canonical Value-mode contract.

Recommendation rules
- Base recommendations on item facts and clearly labeled assumptions.
- Use short factual reasons.
- Only mention platform-rule or restriction details when there is a real mismatch or restriction risk.
- Do not claim platform safety or compliance without reasonable confidence.
- If the user explicitly asks for a different platform set, follow the user’s instruction.

Approved decision references
- D-001 — Value mode excludes platforms by default; default platform guidance lives outside Value mode.

Legacy-source anchors
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `Original-Editable/MOOLA-MATIC MODES.txt`
- `Original-Editable/MOOLA-MATIC IDENTIFY.txt`
- `Original-Editable/MOOLA-MATIC LIST.txt`
- `Original-Editable/MOOLA-MATIC VALUE.txt`