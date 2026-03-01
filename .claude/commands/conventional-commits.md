# Generate Conventional Commit Message

Analyze the currently staged changes (`git diff --cached`) and generate a commit message that **strictly** follows the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Specification Rules (MUST follow all)

The commit message MUST use this structure:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Type (REQUIRED)

The commit MUST be prefixed with one of these types (a noun), followed by an OPTIONAL scope, OPTIONAL `!`, and a REQUIRED terminal colon and space:

- **feat** – MUST be used when the commit adds a new feature (correlates with SemVer MINOR)
- **fix** – MUST be used when the commit represents a bug fix (correlates with SemVer PATCH)
- **build** – changes to the build system or external dependencies
- **chore** – maintenance tasks that don't modify src or test files
- **ci** – changes to CI configuration files and scripts
- **docs** – documentation only changes
- **style** – changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.)
- **refactor** – a code change that neither fixes a bug nor adds a feature
- **perf** – a code change that improves performance
- **test** – adding missing tests or correcting existing tests
- **revert** – reverts a previous commit (include `Refs: <SHA(s)>` in footer)

### Scope (OPTIONAL)

A scope MAY be provided after the type. It MUST be a noun describing a section of the codebase, surrounded by parentheses. Example: `fix(parser):`, `feat(api):`.

### Description (REQUIRED)

- MUST immediately follow the colon and space after the type/scope prefix.
- Use the imperative, present tense (e.g., "add" not "added" or "adds").
- Do NOT capitalize the first letter.
- Do NOT end with a period.
- Keep it concise (ideally under 72 characters).

### Body (OPTIONAL)

- MUST begin one blank line after the description.
- Free-form, MAY consist of any number of newline-separated paragraphs.
- Use to explain **what** and **why**, not how.
- Only include a body if the changes are non-trivial and benefit from additional context.

### Footer(s) (OPTIONAL)

- MUST be provided one blank line after the body (or description if no body).
- Each footer MUST consist of a word token, followed by `:<space>` or `<space>#` separator, followed by a string value.
- Footer tokens MUST use `-` in place of whitespace (e.g., `Acked-by`, `Reviewed-by`), except for `BREAKING CHANGE` which MAY use a space.
- Use footers for: `BREAKING CHANGE`, `Refs: #<issue>`, `Reviewed-by`, `Co-authored-by`, etc.

### Breaking Changes

- MUST be indicated either by appending `!` immediately before the `:` in the type/scope prefix, OR as a `BREAKING CHANGE:` entry in the footer, OR both.
- If `!` is used, `BREAKING CHANGE:` MAY be omitted from the footer, and the description SHALL describe the breaking change.
- `BREAKING CHANGE` in the footer MUST be uppercase.
- `BREAKING-CHANGE` is synonymous with `BREAKING CHANGE` when used as a footer token.
- Breaking changes correlate with SemVer MAJOR.

## Your Task

1. Run `git diff --cached` to inspect the staged changes.
2. If nothing is staged, inform the user and stop.
3. Determine the single most appropriate **type** based on the nature of the changes.
4. Determine if a **scope** is appropriate (only if the changes are clearly scoped to a specific module/component).
5. Write a clear, concise **description** in imperative mood.
6. Only include a **body** if the changes are complex or non-obvious.
7. Include **footers** only when applicable (breaking changes, issue references, etc.).
8. If the changes include a breaking change, you MUST indicate it with `!` and/or a `BREAKING CHANGE:` footer.
9. Output ONLY the final commit message — no explanations, no markdown fences, no commentary.
10. Ask the user to confirm, then run `git commit -m "<message>"` (or `git commit -m "<subject>" -m "<body>" -m "<footer>"` if multi-part).