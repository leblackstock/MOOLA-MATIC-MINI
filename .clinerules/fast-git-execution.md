# Fast Git Execution

Purpose
- This file gives Cline a fast, execution-first rule for routine Git work in this repository.
- Treat routine Git requests as action requests, not analysis tasks.
- This rule overrides slower, more cautious routine-Git behavior while preserving safety for real blockers.

Scope
- Applies to routine requests such as `commit`, `push`, `commit and push`, `commit push and sync all changes`, `push everything`, and `sync it`.
- Applies when the user’s Git intent is already clear from the request and available repo state.
- `.clinerules/git-safety.md` remains the companion file for shell safety and genuine blocker escalation.

Core behavior
- For routine Git tasks, do not deliberate at length.
- Do not narrate possibilities when one obvious workflow already fits the user’s wording.
- Do not ask scope questions when the intended routine action is already clear.
- Bias toward execution.

No long Git reasoning
- Do not produce long reasoning chains about routine Git state.
- Do not narrate multiple possible workflows unless there is a real blocking problem.
- Do not investigate side paths just in case.
- For normal Git work, prefer one obvious path and execute it.

Interpret clear intent directly
- If the user says things like:
  - `commit`
  - `push`
  - `commit and push`
  - `commit push and sync all changes`
  - `push everything`
  - `sync it`
- Assume they want the obvious Git workflow completed end-to-end.
- Do not stop to ask which of several routine options they want if one clearly matches the user’s wording.

Default meaning of `all changes`
- If the user says `all changes`, interpret that to mean:
  - include all relevant repo changes they were actively working on
  - restore relevant stashed work if it is clearly part of the current task
  - do not include obvious junk, temp folders, worktree leftovers, or unrelated accidental files
  - do not ask whether the intended changes were meant unless there is real ambiguity

Ignore irrelevant Git noise
- Do not get distracted by:
  - temporary worktree folders
  - stash inspection trivia
  - duplicate branch cleanup
  - command transcript details
  - minor repo clutter
- Ignore those unless they actually block the requested action.

Ask only for real blockers
- Only interrupt the user if there is a real problem that requires judgment, such as:
  - merge or rebase conflict needing content decisions
  - protected branch restriction
  - auth or permission failure
  - genuinely ambiguous intended file scope
  - dangerous or destructive history rewrite risk
  - unclear target branch or remote that cannot be inferred safely
- If none of those are true, continue.
- When a real blocker exists, ask clearly and specifically for the missing decision.

Prefer the shortest safe Git path
- Default order:
  - stage intended changes
  - commit if needed
  - pull --rebase if needed
  - push
  - sync if requested
- Do not use elaborate worktree, cherry-pick, or isolation flows unless they are truly necessary.

No follow-up questions after enough evidence exists
- If there is already enough repo state to act, act.
- Do not ask the user to choose between:
  - pushing current committed work
  - restoring obvious related stash and including it
  - stopping and reporting state
- Only ask if the correct choice is genuinely unclear.
- If the user said `all changes`, prefer including clearly related stashed work instead of asking.

No command archaeology
- Do not keep running extra inspection commands once the next action is already obvious.
- Do not repeatedly inspect stash, worktree, or branch details after the path forward is clear.

Routine Git decision rule
- When multiple Git facts are true at once, do not expand into a long analysis.
- Pick the next obvious action that best matches the user’s request and continue.
- Examples:
  - if there is a stash and the user said `all changes`, include the stash if it is clearly related
  - if there is an untracked temp or worktree folder, ignore it unless it blocks the requested action
  - if the branch is ahead and pushable, push it
  - if push needs a routine rebase, do the rebase and continue
  - if a temp branch or worktree exists from an earlier workaround, do not treat that as a scope question by itself

Anti-hesitation rule
- Do not ask the user to choose between routine Git paths when one is obviously the best fit for the user’s wording.
- Choose and act.

Anti-transcript rule
- Do not paste or summarize long command history unless the user asked for debugging details.
- Only report the result and anything that still needs a decision.

Routine intent handling

`commit`
- Interpret `commit` to mean:
  - stage the intended changes
  - create the commit
  - do not ask for extra confirmation if scope is already clear

`push`
- Interpret `push` to mean:
  - use the simplest safe path to get the work pushed
  - if needed, use `git pull --rebase` and then push
  - do not stop just because routine Git mechanics are required

`commit and push`
- Interpret `commit and push` to mean:
  - stage intended changes
  - commit them
  - pull --rebase if needed
  - push

`sync`
- Interpret `sync` to mean:
  - complete the obvious push/update workflow first if requested together with commit or push
  - then check whether pushed work branches could now be merged into the repo default branch
  - then ask whether the user wants those branches merged and pruned
- Do not merge or prune without asking at the sync step.

Output style
- Keep routine Git updates to 5 lines or fewer.
- Report only the practical result:
  - what you did
  - commit hash or hashes
  - branch pushed
  - sync result
  - anything needing the user’s decision
- No essays, no legal brief, no extended reasoning dump.

Important reminder
- Use fast, boring Git for normal workflows.
- Execute first when intent is clear.
- Analyze deeply only when something is actually broken.