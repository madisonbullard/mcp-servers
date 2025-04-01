# Notion MCP Server

MCP Server for the Notion API, enabling LLM clients to interact with Notion workspaces.

## Installation
### Option 1: Use the installer
`npx @madisonbullard/notion-mcp-server-installer`

### Option 2: Install manually
Add the following to your client's MCP JSON configuration:
```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": [
        "-y",
        "@madisonbullard/notion-mcp-server"
      ],
      "env": {
        "NOTION_API_TOKEN": "<YOUR_NOTION_API_TOKEN>"
      }
    }
  }
}
```
