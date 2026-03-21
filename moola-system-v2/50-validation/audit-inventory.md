# Validation and Audit Inventory

Purpose
- This file lists the rebuilt-system artifacts and decision areas audited for cutover and retained as reference points for future audits.

Audit scope
- Stage 1 governance files
- Stage 2 canonical policy, mode, contract, and schema files
- Stage 3 adapter and wrapper files
- Approved decisions D-001 through D-006
- Deprecation and archival records
- Traceability records

Audit areas
- Precedence and ownership consistency
- Traceability coverage
- Losslessness of preserved behavior
- Decision implementation consistency
- Wrapper-policy leak review
- Schema-status honesty
- Cutover readiness

In-scope artifacts
- `00-governance/precedence.md`
- `00-governance/ownership-and-sources.md`
- `00-governance/decision-log.md`
- `00-governance/deprecations.md`
- `10-canonical/system/*.md`
- `10-canonical/policies/default-platform-layer.md`
- `10-canonical/modes/value.md`
- `10-canonical/contracts/listing-response-contract.md`
- `10-canonical/contracts/listing-json.schema.json`
- `30-adapters/adapter-inventory.md`
- `30-adapters/cursor/*.md`
- `30-adapters/commands/*.md`
- `30-adapters/d004-wrapper-review.md`
- `50-validation/traceability-matrix.md`
- `50-validation/stage-roadmap.md`

Out-of-scope for this stage
- Legacy file modification
- Additional cutover changes beyond approved-status application
- Adapter generation tooling
- Automated validation tooling
- Migration scripting