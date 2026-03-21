# Deprecation Register

Purpose
- This file records explicit deprecations and archival classifications for the new system.

Rules
- No behavior is considered deprecated unless it is listed here or referenced by an approved decision.
- Structural archival classification is allowed without deleting or mutating the legacy system.
- Behavioral deprecation requires an approved semantic decision.

Current state
- The following behavioral dispositions are now approved for the rebuilt system.

Structural archival classifications

## A-001
- Scope: `Original/*.txt`
- Status: Active archival classification
- Meaning:
  - These files remain preserved legacy references.
  - They are not the active canonical source in the new system.
- Notes:
  - They remain important for comparison and traceability.
  - They are not deleted or modified.

## A-002
- Scope: legacy wrapper surfaces outside `moola-system-v2/`
- Status: Active legacy-wrapper classification
- Meaning:
  - These files remain evidence of current real behavior.
  - They do not automatically become canonical policy in the new system.
- Notes:
  - Wrapper-only behavior under review is tracked in D-004.

## A-003
- Scope: legacy List-mode download-line JSON outward confirmation behavior
- Status: Active archival classification
- Decision reference: D-002
- Old behavior:
  - Older legacy files describe a download-line or clickable-download response after JSON creation.
- New disposition:
  - The rebuilt system uses `JSON file created.` as the exact user-facing confirmation line.
- Rationale:
  - Current editable sources and active run workflow agree on the confirmation-line behavior.
- Risk:
  - Low after approval.
- Notes:
  - Older download-line behavior remains preserved only as archival legacy behavior.

## A-004
- Scope: legacy behavior that makes platform recommendations part of the canonical Value-mode output by default
- Status: Active deprecation in rebuilt system
- Decision reference: D-001
- Old behavior:
  - Some legacy files require platforms inside the Value-mode output format by default.
- New disposition:
  - Value mode excludes platforms by default.
  - Default platform recommendations are preserved in a separate default layer outside Value mode.
- Rationale:
  - This preserves platform guidance without keeping it as intrinsic Value-mode behavior.
- Risk:
  - Medium if not clearly separated in Stage 2 files.
- Notes:
  - This is a rebuilt-system behavior decision, not a mutation of legacy files.

## A-005
- Scope: undocumented mixed JSON contract behavior
- Status: Active deprecation in rebuilt system
- Decision reference: D-003
- Old behavior:
  - The legacy schema, template, and automation field requirements do not align cleanly.
- New disposition:
  - The rebuilt system uses one single canonical JSON schema that must include all required listing and automation fields.
- Rationale:
  - This removes the mixed-contract ambiguity while preserving all required fields.
- Risk:
  - Medium during Stage 2 schema drafting if field coverage is incomplete.
- Notes:
  - No split overlay model is used unless a later explicit decision changes that.

## A-006
- Scope: legacy `.cursorrules` instruction to follow `Original/MOOLA-MATIC LIST.txt` and `Original/MOOLA-MATIC JSON SCHEMA.txt`
- Status: Active archival classification
- Decision reference: D-004
- Old behavior:
  - The wrapper points active behavior at archival `Original/*` listing files.
- New disposition:
  - The rebuilt system treats this as outdated wrapper drift.
  - Current wrappers must defer to canonical files in `10-canonical/` instead.
- Rationale:
  - Prevents source-of-truth regression.
- Risk:
  - Low after explicit archival classification.
- Notes:
  - Reviewed as W-001 in `30-adapters/d004-wrapper-review.md`.

## A-007
- Scope: legacy `.cursorrules` source-of-truth language that treats `Original/*.txt` as the authoritative reference for active behavior
- Status: Active archival classification
- Decision reference: D-004
- Old behavior:
  - The wrapper frames archival files as the active reference source.
- New disposition:
  - The rebuilt system treats this as outdated ownership drift.
  - Governance and canonical files now own active behavior.
- Rationale:
  - Prevents hidden policy drift and authority confusion.
- Risk:
  - Low after explicit archival classification.
- Notes:
  - Reviewed as W-002 in `30-adapters/d004-wrapper-review.md`.

## A-008
- Scope: legacy workflow system outside `moola-system-v2/`
- Status: Active legacy-system classification after approved cutover
- Decision reference: D-006
- Old behavior:
  - The legacy workflow system remained the practical main system while `moola-system-v2` was being rebuilt in parallel.
- New disposition:
  - `moola-system-v2` is now the active main workflow system.
  - Legacy workflow files outside `moola-system-v2/` remain preserved as legacy, archival, and comparison material.
- Rationale:
  - Approved cutover must be reflected explicitly so active ownership is no longer ambiguous.
- Risk:
  - Low after explicit classification.
- Notes:
  - This classification does not delete or rewrite the legacy files.

Required future deprecation template
- Deprecation ID:
- Scope:
- Status:
- Decision reference:
- Old behavior:
- New disposition:
- Rationale:
- Risk:
- Notes:

Legacy-source anchors
- `Original/*`
- `AGENTS.md`
- `.cursorrules`
- `.cursor/rules/*.mdc`
- `.cursor/skills/moola-run/SKILL.md`