# shortcut-mcp-server
An Moded Context Protocol server for Shortcut.

## Installation

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Coding style
Ensure `bun typecheck` and `bun check` pass. You can run `bun fix` to format the code.

To use the git hooks in the repo's `.githooks` folder, which will save you from waiting for CI to tell you that you forgot to these commands, run this:
```bash
git config core.hookspath .githooks
```
