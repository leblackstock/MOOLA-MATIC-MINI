# Identify / Value / Routing Cline Rule

Purpose
- This file gives Cline thin operational guardrails for choosing and following the correct canonical Identify, Value, or combined path.
- It is not the canonical owner of mode, routing, or Run behavior.

Canonical owners to consult
- Identify contract: `moola-system-v2/10-canonical/modes/identify.md`
- Value contract: `moola-system-v2/10-canonical/modes/value.md`
- Default platform layer: `moola-system-v2/10-canonical/policies/default-platform-layer.md`
- Routing behavior: `moola-system-v2/10-canonical/system/routing.md`
- Run execution behavior: `moola-system-v2/10-canonical/system/run-workflow.md`

Operational stance
- Defer to canonical files before applying Identify, Value, or combined workflow behavior.
- Use this file to avoid stale bundled behavior, not to restate the full system.
- Keep operation selection category-agnostic at the rule level.
- Treat this repository as a miscellaneous reseller workflow with varied inventory.
- Leave category-specific detail handling to the canonical mode owners.
- Do not treat wrappers, adapters, or summaries as policy owners for Identify, Value, routing, or Run behavior.

Operation-selection guardrails
- Respect that routing chooses the operation.
- Respect that Run executes the chosen operation.
- Do not treat `/run-moola` as an automatic request for combined Identify+Value.
- Do not let wrappers or summaries override canonical routing behavior.

Identify-only guardrails
- Pure Identify means identify only.
- Do not add Value behavior by default.
- Do not add comps or pricing by default.
- Do not attach default platform recommendations to pure Identify by default.
- Follow the canonical Identify owner for the actual Identify contract.

Value-only guardrails
- Pure Value means value only.
- Include the one-sentence identification context required by canon.
- Do not expand Value into a full outward Identify report by default.
- Value may rely on internal identification support without becoming a separate full Identify output.
- Attach the platform layer only where the canonical platform-layer policy says it applies.

Combined Identify+Value guardrails
- Combined Identify+Value is explicit, not the default.
- Perform Identify first, then Value.
- Keep the Identify and Value outputs distinct.
- Do not blur both operations into one mixed mode.
- If the platform layer applies, keep it separate from the pure Identify and pure Value contracts.

Image-led request guardrails
- Images are evidence, not permission to auto-run every operation.
- Do not auto-run Identify+Value just because photos are present.
- Use canonical routing to determine whether the request is Identify-only, Value-only, combined, or something else.

Ambiguity-handling guardrails
- Follow canonical ambiguity handling.
- Do not resolve ambiguity by silently bundling Identify and Value together.
- If a clarifying question is needed, keep it to one question.

Anti-drift reminders
- Do not silently merge Identify and Value into one default behavior.
- Do not silently attach platform recommendations to pure Identify.
- Do not silently expand pure Value into a full outward Identify report.
- Do not revive older bundled behavior from wrapper wording, legacy instruction files, or stale habits.

What this file does not own
- The full Identify contract
- The full Value contract
- The default platform-layer policy
- The full routing contract
- The full Run-workflow contract
- List behavior, List schema rules, or git/shell execution rules