#!/usr/bin/env node
import { render } from "ink";
import meow from "meow";
import React from "react";
import App from "./app.js";

const cli = meow(
	`
	Usage
	  $ mcp-server-tui

	Options
		--name  Your name

	Examples
	  $ mcp-server-tui --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: "string",
			},
		},
	},
);

render(<App name={cli.flags.name} />);
