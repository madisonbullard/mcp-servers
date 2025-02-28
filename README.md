# @madisonbullard/mcp-servers
A monorepo containing [Model Context Protocol](https://modelcontextprotocol.io/) servers for various use cases.

## Installing MCP Servers
- [Shortcut](https://www.shortcut.com/) MCP server
  - `npx @madisonbullard/shortcut-mcp-server`

## Packages
- `@madisonbullard/shortcut-api-client`: A client for the Shortcut API
- `@madisonbullard/shortcut-mcp-server`: An MCP server for Shortcut
- `@madisonbullard/mcp-server-tui`: A TUI for installing MCP servers for various clients (Claude Desktop, Cursor, Windsurf, etc.)

## Development

- Install dependencies:
```bash
bun install
```

- Build the MCP server and CLI of the server you want to develop:
```bash
bun run build
```
- This will create a `dist` folder in each package folder required for the server you want to develop.

- Run the CLI
```bash
bun run packages/shortcut-mcp-server/dist/index.js # or the path to the dist folder of the CLI you want to run
```

- Run the MCP server
```bash
bun run packages/shortcut-mcp-server/dist/server.js
```
- The client (e.g. Claude Desktop, Cursor, Windsurf, etc.) will run and connect to the MCP server without the above command, so you usually don't need to run it unless you want to manually make requests to the MCP server.

## Coding style
Ensure `bun typecheck` and `bun check` pass. You can run `bun fix` to format the code.

To use the git hooks in the repo's `.githooks` folder, which will save you from waiting for CI to tell you that you forgot to these commands, run this:
```bash
git config core.hookspath .githooks
```
