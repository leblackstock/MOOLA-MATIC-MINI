# Git / Shell Safety Cline Rule

Purpose
- This file gives Cline thin operational safety rules for git and shell work in this repository.
- It is about safe execution in this repo environment, not MOOLA workflow or business logic.
- It complements `.clinerules/fast-git-execution.md`, which owns fast routine-Git intent handling and anti-over-analysis behavior.

Scope
- Applies to routine git status, branch, upstream, commit-prep, commit, and push tasks.
- Does not override canonical workflow behavior owned inside `moola-system-v2/`.
- It preserves shell safety and genuine blocker escalation without reintroducing slow routine-Git analysis.

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
- For a clear `commit`, `push`, or combined Git intent, do not block routine execution when intended scope is already clear.
- Do not amend unless explicitly asked.
- Do not switch branches unless the user’s clear Git intent requires it.
- Keep repo actions conservative and limited to the user’s stated task.
- Do not include unrelated files, unrelated changes, or workspace noise.
- If intended file scope is genuinely ambiguous, ask specifically what belongs in the commit.

Push guardrails
- For a clear `push` intent, prefer the shortest safe path to get the work pushed.
- Prefer `git pull --rebase` over unnecessary merge commits when integrating remote changes before push.
- Do not introduce temporary worktrees, cherry-pick isolation branches, or elaborate cleanup unless a real Git problem makes them necessary.
- Do not guess about remotes, branch names, or upstream targets.
- If the repo state is genuinely ambiguous, stop and report the specific ambiguity instead of improvising a larger workflow.
- If push would require a non-routine shared-history rewrite, hits protected-branch restrictions, or fails due to auth or permissions, stop and ask for the specific decision needed.

Temp and junk exclusion discipline
- Exclude `.tmp.driveupload/` and `.tmp.drivedownload/` from routine repo actions unless the user explicitly asks about them.
- Exclude temp files, cache files, upload/download artifacts, editor junk, and unrelated workspace noise from commit-prep and repo-action suggestions.

Ambiguity handling
- If a repo action would require guessing, stop and report the ambiguity.
- If a command fails unexpectedly, report the failure clearly before expanding the workflow.
- Prefer safe clarification over speculative repo changes.

What this file does not own
- Fast routine-Git intent mapping or anti-over-analysis defaults
- Identify, Value, or List workflow behavior
- Routing or Run behavior
- Canonical MOOLA business logic
- Project policy outside of git/shell execution safety