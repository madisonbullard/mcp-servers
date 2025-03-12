// biome-ignore lint/suspicious/noExplicitAny: It can really be anything
export function log(...args: any[]) {
	const msg = `[DEBUG ${new Date().toISOString()}] ${args.join(" ")}\n`;
	process.stderr.write(msg);
}
