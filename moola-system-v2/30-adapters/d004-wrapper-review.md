# D-004 Wrapper-Only Behavior Review

Purpose
- This file records item-by-item review outcomes for wrapper-only additive behavior.

Required columns
- Review ID
- Wrapper source
- Behavior
- Operational impact
- Disposition
- Rationale
- Canonical destination if promoted
- Traceability impact

Review outcomes

| Review ID | Wrapper source | Behavior | Operational impact | Disposition | Rationale | Canonical destination if promoted | Traceability impact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| W-001 | `.cursorrules` | `Listing output: follow Original/MOOLA-MATIC LIST.txt and Original/MOOLA-MATIC JSON SCHEMA.txt.` | Re-points active behavior at archival files and conflicts with rebuilt canonical sources | archive | Outdated source reference drift; conflicts with current canonical ownership | none | Update traceability and deprecations as archival legacy drift |
| W-002 | `.cursorrules` | `Original/*.txt` are the authoritative reference and changes should be implemented in Cursor-native files | Reintroduces outdated source-of-truth logic | archive | Conflicts with rebuilt governance and ownership model | none | Update traceability and deprecations as archival legacy drift |
| W-003 | `.cursorrules`, `.cursor/skills/moola-run/SKILL.md` | Populate fields used by current ListPerfectly selectors first | Improves operational autofill usefulness for current automation surfaces | preserve | Clearly intentional and operationally important; preserved as explicit wrapper-specific behavior | none | Trace as preserved wrapper-specific behavior in the run wrapper |
| W-004 | `.cursorrules`, `commands/run-moola.md` | After a List run, load the generated JSON file in the current Playwright UI for review, edit, and download | Preserves current UI handoff behavior for the existing local workflow | preserve | Operationally important but UI-specific; keep as wrapper behavior, not canonical policy | none | Trace as preserved wrapper-specific behavior in the run wrapper |
| W-005 | `.cursorrules` | Creativity levels in LIST mode: Hook High, Description Medium, CTA Medium | Affects future List-mode copy behavior but not data validity or automation | defer | List-mode canonical file is not yet drafted; keep visible as optional non-canonical style guidance and do not silently promote or discard | future List-mode canonical file if later approved | Optional non-canonical guidance retained after approved cutover |
| W-006 | `.cursorrules` | CTA style similar to `Photos show condition and measurements; ask if you need a specific angle or detail confirmed.` | Affects future List-mode CTA shaping but not data validity or automation | defer | Needs future List-mode canonical review; retain as optional non-canonical guidance rather than hard policy | future List-mode canonical file if later approved | Optional non-canonical guidance retained after approved cutover |
| W-007 | `.cursor/skills/moola-run/SKILL.md` | If `era_status` is Vintage or Antique, include Etsy in platforms with a clear reason | Biases platform-reason composition but does not control platform coverage in List mode | defer | List mode already requires all supported platforms with Yes/No/Maybe reasons, so this heuristic is not required for baseline operational consistency | future platform-policy file if later approved | Optional non-canonical guidance retained after approved cutover |
| W-008 | `.cursor/skills/moola-run/SKILL.md` | If `era_status` is Vintage or Antique, include Vinted in platforms with a clear reason | Biases platform-reason composition but does not control platform coverage in List mode | defer | List mode already requires all supported platforms with Yes/No/Maybe reasons, so this heuristic is not required for baseline operational consistency | future platform-policy file if later approved | Optional non-canonical guidance retained after approved cutover |
| W-009 | `.cursor/skills/moola-run/SKILL.md` | Use vivid factual use-case framing and light urgency in Hook/Description/CTA | Affects future List-mode copy behavior but not data validity or automation | defer | Needs future List-mode canonical review; retain as optional non-canonical guidance rather than promote without approval | future List-mode canonical file if later approved | Optional non-canonical guidance retained after approved cutover |

Disposition rules
- preserve = explicitly retained as wrapper behavior
- promote = moved into canonical policy
- deprecate = active behavior should stop being used
- archive = preserved as historical drift/reference only
- defer = not safe to classify fully yet; keep explicit and visible