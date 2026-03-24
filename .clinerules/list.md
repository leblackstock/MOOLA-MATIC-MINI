# List Cline Rule

Purpose
- This file gives Cline thin operational guardrails for handling List work.
- It is not the canonical owner of List response behavior, schema behavior, platform behavior, or mode contracts.

Canonical owners to consult
- Listing response contract: `moola-system-v2/10-canonical/contracts/listing-response-contract.md`
- Listing JSON schema: `moola-system-v2/10-canonical/contracts/listing-json.schema.json`
- Default platform layer: `moola-system-v2/10-canonical/policies/default-platform-layer.md`
- Routing behavior: `moola-system-v2/10-canonical/system/routing.md`
- Run execution behavior: `moola-system-v2/10-canonical/system/run-workflow.md`
- Identify contract: `moola-system-v2/10-canonical/modes/identify.md`
- Value contract: `moola-system-v2/10-canonical/modes/value.md`

Operational stance
- Defer to canonical files before applying List behavior.
- Use this file to avoid schema improvisation, response drift, and stale bundled behavior.
- Keep List handling category-agnostic at the rule level.
- Treat this repository as a miscellaneous reseller workflow with varied inventory.
- Leave category-specific listing detail to canonical contracts, schemas, and approved evidence surfaces where relevant.
- Do not treat wrappers, templates, or evidence summaries as policy owners for List behavior.

List operational guardrails
- Follow the active canonical response contract for List work.
- Follow the active canonical JSON schema for List work.
- Do not invent extra JSON fields, response fields, platform behavior, or output sections.
- Do not silently reintroduce bundled Identify+Value behavior inside List work.
- If List relies on Identify or Value output by reference, do not overwrite the ownership of those mode contracts.
- Respect canonical routing and Run behavior when List is the selected operation.

Schema and response-contract guardrails
- The canonical schema and canonical response contract are the active owners of List structure and outward confirmation behavior.
- Do not restate the schema in `.clinerules`.
- Do not restate the full List response contract in `.clinerules`.
- If a field, output behavior, or response rule is not owned canonically, do not invent it.

Platform-layer guardrails
- Treat platform behavior in List as a canonical concern, not a Cline-owned rule.
- If platform recommendations attach in List, follow the canonical platform-layer and Run/List behavior.
- Do not invent a new platform-output shape in `.clinerules`.

Cross-category guardrails
- List work must support varied item types, not only apparel or footwear.
- Use a universal resale core at the rule level.
- Apply category-specific listing detail only when canonical contracts, schemas, or approved evidence surfaces make it relevant.
- Do not assume a fashion-first worldview for general List behavior.

Evidence and deferred-surface handling
- Treat legacy List files, templates, selector-priority notes, and other evidence surfaces as guidance or compatibility material unless canon explicitly makes them active.
- Do not let deferred or evidence-only List surfaces override the canonical schema or response contract.
- Do not treat old types, templates, or legacy summaries as hidden policy owners.

Anti-drift reminders
- Do not invent schema fields or response-contract behavior.
- Do not assume every item is apparel, shoes, or size-driven merchandise.
- Do not silently merge Identify and Value into List as if bundled behavior were still the default.
- Do not revive stale List behavior from wrappers, legacy files, or templates when canon already narrows the rule.

What this file does not own
- The full List response contract
- The full listing JSON schema
- The default platform-layer policy
- The full Identify contract
- The full Value contract
- Git or shell execution rules