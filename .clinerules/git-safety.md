# Git / Shell Safety Cline Rule

Purpose
- This file gives Cline thin operational safety rules for git and shell work in this repository.
- It is about safe execution in this repo environment, not MOOLA workflow or business logic.

Scope
- Applies to routine git status, branch, upstream, commit-prep, commit, and push tasks.
- Does not override canonical workflow behavior owned inside `moola-system-v2/`.

Simple-command discipline
- Prefer one simple command at a time.
- Use the smallest sufficient command for the task.
- Do not chain commands with `&`.
- Do not over-investigate if a simple command answers the user’s request.

PowerShell upstream-check safety
- Never use raw `@{u}` in PowerShell.
- Always quote upstream syntax as `"@{u}"` or `'@{u}'`.
- For routine upstream checks, prefer:
  - `git rev-parse --abbrev-ref --symbolic-full-name "@{u}"`
- If upstream or branch state is missing, ambiguous, or errors out, stop and report instead of guessing.

Routine git-check discipline
- Do not wrap routine git checks in Python.
- Prefer direct git commands for status, branch, upstream, and push tasks.
- Do not invent extra diagnostics when the user asked for a simple repo action.

Commit-prep guardrails
- Do not commit unless explicitly asked.
- Do not amend unless explicitly asked.
- Do not switch branches unless explicitly asked.
- Keep repo actions conservative and limited to the user’s stated task.
- Do not include unrelated files, unrelated changes, or workspace noise.

Push guardrails
- Do not push unless explicitly asked.
- If a push task is simple and upstream is already configured, prefer minimal checks and then `git push`.
- Do not guess about remotes, branch names, or upstream targets.
- If the repo state is ambiguous, stop and report instead of improvising a larger workflow.

Temp and junk exclusion discipline
- Exclude `.tmp.driveupload/` and `.tmp.drivedownload/` from routine repo actions unless the user explicitly asks about them.
- Exclude temp files, cache files, upload/download artifacts, editor junk, and unrelated workspace noise from commit-prep and repo-action suggestions.

Ambiguity handling
- If a repo action would require guessing, stop and report the ambiguity.
- If a command fails unexpectedly, report the failure clearly before expanding the workflow.
- Prefer safe clarification over speculative repo changes.

What this file does not own
- Identify, Value, or List workflow behavior
- Routing or Run behavior
- Canonical MOOLA business logic
- Project policy outside of git/shell execution safety