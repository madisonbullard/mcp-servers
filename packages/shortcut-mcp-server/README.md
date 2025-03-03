# @madisonbullard/shortcut-mcp-server
A [Shortcut](https://www.shortcut.com/) [MCP](https://modelcontextprotocol.io/) server with a TUI to facilitate easy installation.

## Usage
`npx @madisonbullard/shortcut-mcp-server`

## Development
- Pull down this repo
- Install dependencies:
```bash
bun install
```

- Build the MCP server and CLI:
```bash
bun run build
```
- This will create a `dist` folder.
- You can use `bun run build:watch` to watch for changes and automatically rebuild.

- Run the CLI
```bash
bun run dist/index.js
```

- Run the MCP server
```bash
bun run dist/server.js
```
- The client (e.g. Claude Desktop, Cursor, Windsurf, etc.) will run and connect to the MCP server without the above command, so you usually don't need to run it unless you want to manually make requests to the MCP server.

