# Do Not Revert Without Consent

Purpose
- This file gives Cline a durable preservation-first rule for unexpected, unrelated, or unclear Git changes in this repository.
- Treat preservation as the default.
- Never treat `unexpected` as permission to remove something.

Scope
- Applies whenever repo state includes changes, files, branches, stashes, or worktrees that are outside the current task, unexpected, unrelated, or unclear.
- Applies alongside `.clinerules/fast-git-execution.md` and `.clinerules/git-safety.md`.
- For anything that could lose work, this rule takes precedence over cleanup-oriented simplification.

Core rule
- If unexpected, unrelated, or unclear changes are present in the repo, do not revert them, discard them, reset them, delete them, stash them away permanently, clean them up, or otherwise remove them unless the user explicitly says to do that.

Preserve first
- If Cline encounters changes it did not expect, changes outside the current task, or changes whose source is unclear:
  - do not revert them
  - do not reset them
  - do not checkout over them
  - do not delete them
  - do not clean them up automatically
  - do not drop them from a stash
  - do not remove temp branches or worktrees if doing so could lose work
  - do not rewrite history to make them disappear

Ask before destructive cleanup
- Ask the user before doing anything that could remove or override repo state, including:
  - `git reset --hard`
  - `git checkout -- <file>`
  - `git restore`
  - `git clean`
  - dropping stashes
  - deleting branches or worktrees that may contain unmerged work
  - force-pushes
  - rebases, amends, or squashes that would remove or rewrite user-intended work
  - deleting files because they look temporary or unrelated

Safe default when extra changes exist
- If extra changes are present and the user asks Cline to commit or push the current task:
  - isolate the intended changes if possible
  - leave unrelated or unclear changes untouched
  - preserve them in place unless the user explicitly says otherwise
  - if temporary preservation is needed, prefer a clearly named stash or branch and tell the user exactly what was preserved and where
  - do not treat preservation as cleanup or disposal

Unexpected does not mean disposable
- If a file, folder, branch, stash, or worktree seems unexpected:
  - do not assume it is junk
  - do not assume it is safe to delete
  - do not assume it was created by mistake
  - ask if there is real uncertainty about whether it should be preserved, included, or left alone

Explicit consent standard
- Explicit consent requires a direct user instruction approving the specific destructive action.
- A destructive action includes any action that could remove, discard, overwrite, hide, reset, revert, replace, drop, delete, or make existing work or repo state harder to recover.
- Do not infer consent for destructive actions from broad, goal-based, or outcome-based instructions such as:
  - `clean it up`
  - `push everything`
  - `sync it`
  - `fix git`
  - `make it work`
  - `get it into a good state`
- Those instructions authorize progress toward the goal, but they do not authorize destroying, reverting, discarding, overwriting, or removing unexpected, unrelated, unclear, or unreviewed changes.
- Only a direct instruction approving the specific destructive action counts as consent, for example:
  - delete these files
  - drop that stash
  - reset this branch
  - revert those changes
  - remove that worktree
  - overwrite local changes
  - force-push and replace remote history
- If that specific approval is missing, preserve the changes and ask before taking the destructive action.

Report clearly
- If Cline preserves unexpected changes instead of touching them, briefly report:
  - what was preserved
  - where it was preserved, if moved or stashed
  - whether it still needs the user’s decision

Conflict with other Git rules
- If another Git rule would encourage cleanup, reset, revert, or automatic simplification, this rule takes precedence for anything that could lose work.

Output style
- Keep it short and direct in normal use.
- Preserve unexpected changes and ask before destructive actions.