#!/bin/bash

bun run --filter=@madisonbullard/shortcut-api-client --filter=@madisonbullard/mcp-server-tui build && \
bun run --filter=@madisonbullard/shortcut-mcp-server build
