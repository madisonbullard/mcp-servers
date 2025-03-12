#!/bin/bash

# Build MCP server dependencies first
bun run --filter=@madisonbullard/shortcut-api-client --filter=@madisonbullard/mcp-server-tui --filter=@madisonbullard/notion-api-client --filter=@madisonbullard/mcp-servers-core build && \
# Build everything else
bun run --filter=!@madisonbullard/shortcut-api-client --filter=!@madisonbullard/mcp-server-tui --filter=!@madisonbullard/notion-api-client --filter=!@madisonbullard/mcp-servers-core build
