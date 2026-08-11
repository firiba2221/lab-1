# AI Agent Rules & Guidelines (Celeste Travels)

## Fallow Codebase Hygiene & Quality Rules

All AI coding agents working on this codebase MUST strictly follow these rules and regulations for codebase cleanliness, dead code elimination, and structural health using **Fallow** (`fallow-rs/fallow`).

---

### 1. Zero Dead Code Standard
- **Always Audit with Fallow**: Before declaring any feature or refactor complete, run `npm run fallow` or `npx fallow`.
- **Eliminate Unused Exports & Files**: Do not leave dead files, unused components, orphan functions, or unreferenced types in the codebase.
- **Clean Dependencies**: Ensure all installed dependencies in `package.json` are used. Track and remove unused packages immediately unless explicitly ignored in `.fallowrc.json`.

### 2. Code Duplication & Refactoring
- **Avoid Copy-Paste Duplication**: Avoid duplicating complex logic, UI patterns, or helper functions across files.
- **Reusable Architecture**: Extract repetitive logic into shared utility functions, custom React hooks, or reusable Material UI components.
- **Fallow Duplication Checks**: Address duplication issues reported by `fallow dupes`.

### 3. Maintainability & File Health
- **Monitor Complexity**: Pay attention to Fallow's Maintainability Index (MI) and file health scores.
- **Keep Components Focused**: Avoid large, monolithic files with high cyclomatic complexity. Modularize code into clean sub-modules when complexity increases.

### 4. Pre-Commit / Pre-PR Verification
- **Run Branch Audits**: Execute `npm run fallow:audit` to verify that modified files meet quality standards and introduce zero structural regressions.
- **Verification Routine**: Always verify changes using:
  ```bash
  # Check full codebase health
  npm run fallow

  # Audit changed files
  npm run fallow:audit

  # Check dead code specifically
  npm run fallow:dead-code
  ```

---

### 5. Playwright UI Testing Policy
- **On-Demand Playwright Testing Only**: AI agents MUST ONLY run Playwright end-to-end UI tests (`npm run test:e2e` or `npx playwright test`) when explicitly requested by the user. Do NOT execute Playwright tests rapidly or automatically for routine edits unless the user explicitly asks to run UI tests.
