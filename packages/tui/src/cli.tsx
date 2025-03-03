#!/usr/bin/env node
import { render } from "ink";
import App, { type AppProps } from "./components/app.js";

export function cli(props: AppProps) {
	render(<App {...props} />);
}
