# Glossary

Canonical
- A hand-maintained file that owns policy in the new system.

Generated
- A future derivative file built from canonical sources.
- Generated files are not primary policy owners.

Archival
- Preserved legacy material kept for reference, comparison, or audit.
- Archival files are not active policy in the new system.

Deferred
- Planned work that belongs to a later implementation stage.

Workflow
- A step sequence that controls how work is performed.
- In this system, Run and Edit are workflows.

Mode
- A response behavior selected by routing logic.
- In this system, Identify, Value, and List are modes.

Contract
- A file that defines exact fields, output structure, or machine-consumable requirements.

Template
- A helper or example used to express a contract or output shape.
- A template is non-canonical unless a higher-priority file says otherwise.

Adapter
- A future wrapper or agent-specific surface derived from canonical rules.

Wrapper-only behavior
- Behavior that exists today only in a wrapper, command, skill, or adapter surface.

Lossless preservation
- The requirement to preserve all legacy behavior that affects routing, outputs, automation, workflow logic, or user-visible behavior unless explicitly deprecated or sent to decision review.

Open decision
- An unresolved semantic question recorded in `decision-log.md` and referenced by decision ID.

Traceability
- The ability to map each preserved or changed behavior from legacy source to new destination.

Legacy-source anchors
- `Original-Editable/PROJECT SYSTEM INSTRUCTIONS - MOOLA-MATIC.txt`
- `Original-Editable/MOOLA-MATIC PROMPT.txt`
- `commands/run-moola.md`
- `commands/edit-moola.md`