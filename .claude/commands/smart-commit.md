# Smart Commit — Bundle Changes into Logical Commits

Analyze ALL uncommitted changes in the working directory and intelligently group them into separate, logical commits following best practices. Then execute each commit sequentially using conventional commit messages.

## Your Task

### Step 1: Analyze All Changes

Run the following to get a full picture of the current state:

```
git status
git diff
git diff --cached
```

Collect all modified, added, deleted, renamed, and untracked files.

### Step 2: Group Changes into Logical Commits

Examine the content of every changed file and group them into the fewest number of commits where each commit represents **one coherent, atomic unit of work**. Use these grouping principles:

**Group together files that:**
- Implement the same feature or fix the same bug
- Are tightly coupled (e.g., a source file and its corresponding test, a component and its styles)
- Represent a single refactor across multiple files
- Are config/build changes that belong together (e.g., `package.json` + `lock` file)
- Are documentation updates for the same topic

**Split into separate commits when:**
- Changes address unrelated concerns (e.g., a bug fix AND a new feature)
- There are formatting/style changes mixed with functional changes
- Documentation updates are unrelated to code changes in the same diff
- Build/CI changes are independent from application code changes
- A refactor is separate from a behavioral change

### Step 3: Present the Plan

Present a clear, numbered plan to the user in this format:

```
I found N logical groups of changes to commit:

Commit 1: <type>[scope]: <short description>
  - path/to/file1
  - path/to/file2

Commit 2: <type>[scope]: <short description>
  - path/to/file3

Commit 3: ...
```

For each group, briefly explain WHY those files belong together if it's not obvious.

**Ask the user to confirm the plan, or adjust groupings based on their feedback.** Wait for explicit confirmation before proceeding.

### Step 4: Execute the Commits (after confirmation)

For each commit group, in order:

1. Stage ONLY the files belonging to that group:
   - Use `git add <file1> <file2> ...` for the specific files.
   - If a file contains changes that belong to different commits, use `git add -p <file>` to stage only the relevant hunks — explain what you're doing to the user.
2. Generate a commit message strictly following the **Conventional Commits v1.0.0** specification:
   - Structure: `<type>[optional scope]: <description>` + optional body + optional footer(s)
   - Types: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`, `revert`
   - Description: imperative mood, lowercase start, no trailing period, under 72 chars
   - Body (only if non-trivial): one blank line after description, explains what and why
   - Footers when applicable: `BREAKING CHANGE:`, `Refs: #<issue>`, etc.
   - Breaking changes: indicate with `!` before `:` and/or `BREAKING CHANGE:` footer
3. Run the commit: `git commit -m "<message>"` (or multi-part with `-m` flags for body/footers).
4. Confirm success before moving to the next group.

### Step 5: Summary

After all commits are done, show a final summary:

```
✓ All N commits created successfully:

  <short-hash> <type>[scope]: <description>
  <short-hash> <type>[scope]: <description>
  ...
```

## Important Rules

- **Never mix unrelated changes in one commit.** Atomic commits are the priority.
- **Respect the user's intent.** If they disagree with a grouping, adjust without arguing.
- **Handle partial file staging carefully.** If only part of a file's changes belong to a commit, use `git add -p` or explain the situation and ask the user how to proceed.
- **Untracked files:** Ask the user whether new untracked files should be included or ignored (added to `.gitignore`).
- **If there's only one logical group**, just proceed as a single commit — no need to overcomplicate it.
- **Order commits logically:** infrastructure/config first, then refactors, then features/fixes, then docs/tests — unless dependencies between changes dictate otherwise.