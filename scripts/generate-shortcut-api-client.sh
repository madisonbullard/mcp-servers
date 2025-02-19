#!/bin/bash

# Create a tmp directory if it doesn't exist
mkdir -p ./tmp

# Download the Shortcut API swagger spec
curl -o ./tmp/shortcut.swagger.json https://developer.shortcut.com/api/rest/v3/shortcut.swagger.json

# Generate the client
bunx openapi-generator-cli generate -i ./tmp/shortcut.swagger.json -g typescript -o ./src/shortcut-api-client

# Clean up
rm -rf ./tmp
