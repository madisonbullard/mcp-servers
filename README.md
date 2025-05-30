# @madisonbullard/mcp-servers
A monorepo containing a TUI ([`@madisonbullard/mcp-server-tui`](./packages/tui/)) to aid in the installation of [Model Context Protocol](https://modelcontextprotocol.io/) servers. Bring your own MCP server and publish it to NPM or your JS package manager of choice in minutes.

Here is an example the TUI in action, used to install [`@madisonbullard/shortcut-mcp-server`](./packages/shortcut-mcp-server/README.md):

![A terminal window running an example of this TUI](./packages/tui/screenshots/shortcut-mcp-server.png)

It also contains MCP servers for various use cases, all installed via the TUI.

## Packages
- `@madisonbullard/mcp-server-tui`: A TUI for installing MCP servers for various clients (Claude Desktop, Cursor, Windsurf, etc.)
- `@madisonbullard/shortcut-mcp-server`: An MCP server for Shortcut
- `@madisonbullard/shortcut-mcp-server-installer`: A CLI for installing the Shortcut MCP server
- `@madisonbullard/shortcut-api-client`: A client for the Shortcut API
- `@madisonbullard/notion-mcp-server`: An MCP server for Notion
- `@madisonbullard/notion-mcp-server-installer`: A CLI for installing the Notion MCP server
- `@madisonbullard/notion-api-client`: A client for the Notion API
- `@madisonbullard/coderabbit-mcp-server`: An MCP server for Coderabbit
- `@madisonbullard/coderabbit-api-client`: A client for the Coderabbit API

## Development

- Install dependencies:
```bash
bun install
```

- Build the MCP server and CLI of the server you want to develop (this command builds every package in the monorepo):
```bash
bun run build
```
- This will create a `dist` folder in each package folder required for the server you want to develop.

- Run the CLI
```bash
bun run packages/shortcut-mcp-server-installer/dist/index.js # or the path to the dist folder of the CLI you want to run
```

- Run the MCP server
```bash
bun run packages/shortcut-mcp-server/dist/index.js
```
- The client (e.g. Claude Desktop, Cursor, Windsurf, etc.) will run and connect to the MCP server without the above command, so you usually don't need to run it unless you want to manually make requests to the MCP server.

## Coding style
Ensure `bun typecheck` and `bun check` pass. You can run `bun fix` to format the code.

To use the git hooks in the repo's `.githooks` folder, which will save you from waiting for CI to tell you that you forgot to these commands, run this:
```bash
git config core.hookspath .githooks
```
