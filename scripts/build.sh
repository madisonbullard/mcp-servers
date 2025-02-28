#!/bin/bash

# Build MCP server dependencies first
bun run --filter=@madisonbullard/shortcut-api-client --filter=@madisonbullard/mcp-server-tui build && \
# Build everything else
bun run --filter=!@madisonbullard/shortcut-api-client --filter=!@madisonbullard/mcp-server-tui build
