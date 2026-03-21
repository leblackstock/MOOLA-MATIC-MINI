# /run-moola Wrapper

Status
- Hand-maintained wrapper

Purpose
- Thin command-entry wrapper for the Run workflow.

Command text
```text
/run-moola
Enter Run mode for MOOLA-MATIC.
Use the canonical Run workflow and canonical contracts.
```

Canonical owners
- `../../10-canonical/system/routing.md`
- `../../10-canonical/system/run-workflow.md`
- `../../10-canonical/policies/default-platform-layer.md`
- `../../10-canonical/modes/value.md`
- `../../10-canonical/contracts/listing-response-contract.md`
- `../../10-canonical/contracts/listing-json.schema.json`

Preserved wrapper-specific operational behaviors
- Prioritize fields used by the current ListPerfectly selectors first.
- After a List run, load the generated JSON file in the current Playwright UI for review, edit, and download.

Wrapper-specific behavior status
- The preserved behaviors above are explicit wrapper behaviors reviewed under D-004.
- They do not override canonical files.

Decision references
- D-002
- D-003
- D-004