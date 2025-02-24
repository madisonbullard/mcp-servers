#!/bin/bash

bun run --filter=@madisonbullard/shortcut-api-client build && \
bun run --filter=@madisonbullard/shortcut-mcp-server build && \
dotenvx run --env-file=.env.shortcut -- bun run --filter=@madisonbullard/mcp-server-tui build
