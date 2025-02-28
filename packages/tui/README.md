# @madisonbullard/mcp-server-tui
A TUI for installing MCP servers

## Usage
`npm install @madisonbullard/mcp-server-tui`

```ts
import { cli } from '@madisonbullard/mcp-server-tui'

cli({
	packageName: 'shortcut-mcp-server', // The name of the package housing your MCP server (for display purposes only; you can make up a name if you want.)
	serviceNameHumanReadable: "Shortcut", // The name of the service your MCP server integrates with
	mcpServerName: "shortcut", // The namespace of your MCP server referenced by the client using it
	version: '1.0.0',
	execConfig: { // The command used to run your server
		command: "node", // This package will resolve the user's absolute path to the module referenced here. e.g. "node" will resolve to `/user/path/to/node`
		args: [fileURLToPath(new URL("./server.js", import.meta.url))], // The script to execute, and any additional arguments passed to the script
		env: [ // The config for any env vars that the user needs to provide. A list of { label: string; value: string };
			{
				label: "Shortcut API token",
				value: "SHORTCUT_API_TOKEN",
			},
		],
	},
});
```

## Development
- Pull down this repo
- `bun install`
- `bun run build` will create a `dist` folder containing `cli.js`, which can be used as described above.
