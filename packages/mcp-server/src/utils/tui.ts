/*
 *
 * Methods copied from create-cloudflare, same names used where possible
 *
 */

import chalk from "chalk";

export const { white, gray, dim, hidden, bold, cyanBright, bgCyan } = chalk;
const brandColor = chalk.hex("#0088ff");

export const shapes = {
	diamond: "◇",
	dash: "─",
	radioInactive: "○",
	radioActive: "●",

	backActive: "◀",
	backInactive: "◁",

	bar: "│",
	leftT: "├",
	rigthT: "┤",

	arrows: {
		left: "‹",
		right: "›",
	},

	corners: {
		tl: "╭",
		bl: "╰",
		tr: "╮",
		br: "╯",
	},
};

// Returns a string containing n non-trimmable spaces
// This is useful for places where clack trims lines of output
// but we need leading spaces
export const space = (n = 1) => {
	return hidden("\u200A".repeat(n));
};

// Primitive for printing to STDERR. We must use STDERR for human-readable messages
// as MCP uses STDOUT
export const logRaw = (msg: string) => {
	process.stderr.write(`${msg}\n`);
};

// A simple stylized log for use within a prompt
export const log = (msg: string) => {
	const lines = msg.split("\n").map((ln) => `${gray(shapes.bar)} ${white(ln)}`);

	logRaw(lines.join("\n"));
};

// Strip the ansi color characters out of the line when calculating
// line length, otherwise the padding will be thrown off
// Used from https://github.com/natemoo-re/clack/blob/main/packages/prompts/src/index.ts
export const stripAnsi = (str: string) => {
	const pattern = [
		"[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
		"(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
	].join("|");
	const regex = RegExp(pattern, "g");

	return str.replace(linkRegex, "$2").replace(regex, "");
};

// Regular Expression that matches a hyperlink
// e.g. `\u001B]8;;http://example.com/\u001B\\This is a link\u001B]8;;\u001B\`
export const linkRegex =
	// biome-ignore lint/suspicious/noControlCharactersInRegex: <explanation>
	/\u001B\]8;;(?<url>.+)\u001B\\(?<label>.+)\u001B\]8;;\u001B\\/g;

export function createDialog(lines: string[]) {
	const screenWidth = process.stdout.columns;
	const maxLineWidth = Math.max(
		...lines.map((line) => stripAnsi(line).length),
		60, // Min inner width
	);
	const dividerWidth = Math.min(maxLineWidth, screenWidth);

	return [
		gray(shapes.dash).repeat(dividerWidth),
		...lines,
		gray(shapes.dash).repeat(dividerWidth),
		"",
	].join("\n");
}

export const startSection = (
	heading: string,
	subheading?: string,
	printNewLine = true,
) => {
	logRaw(
		`${gray(shapes.corners.tl)} ${brandColor(heading)} ${subheading ? dim(subheading) : ""}`,
	);
	if (printNewLine) {
		newline();
	}
};

export const newline = () => {
	log("");
};

// Log a simple status update with a style similar to the clack spinner
export const updateStatus = (msg: string, printNewLine = true) => {
	logRaw(
		format(msg, {
			firstLinePrefix: gray(shapes.leftT),
			linePrefix: gray(shapes.bar),
			newlineAfter: printNewLine,
		}),
	);
};

type FormatOptions = {
	linePrefix?: string;
	firstLinePrefix?: string;
	newlineBefore?: boolean;
	newlineAfter?: boolean;
	formatLine?: (line: string) => string;
	multiline?: boolean;
};
export const format = (
	msg: string,
	{
		linePrefix = gray(shapes.bar),
		firstLinePrefix = linePrefix,
		newlineBefore = false,
		newlineAfter = false,
		formatLine = (line: string) => white(line),
		multiline = true,
	}: FormatOptions = {},
) => {
	const lines = multiline ? msg.split("\n") : [msg];
	const formattedLines = lines.map(
		(line, i) =>
			(i === 0 ? firstLinePrefix : linePrefix) + space() + formatLine(line),
	);

	if (newlineBefore) {
		formattedLines.unshift(linePrefix);
	}
	if (newlineAfter) {
		formattedLines.push(linePrefix);
	}

	return formattedLines.join("\n");
};

export const endSection = (heading: string, subheading?: string) => {
	logRaw(
		`${gray(shapes.corners.bl)} ${brandColor(heading)} ${subheading ? dim(subheading) : ""}\n`,
	);
};

// Create a hyperlink in terminal
// It works in iTerm2 and VSCode's terminal, but not macOS built-in terminal app
export const hyperlink = (url: string, label = url) => {
	return `\u001B]8;;${url}\u001B\\${label}\u001B]8;;\u001B\\`;
};
