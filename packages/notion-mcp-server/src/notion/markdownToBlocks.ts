import type { BlockObjectRequest } from "@notionhq/client/build/src/api-endpoints";

export function markdownToBlocks(markdown: string) {
	const lines = markdown.split("\n").filter(Boolean);
	const blocks: BlockObjectRequest[] = [];
	let currentCodeBlock: BlockObjectRequest | null = null;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmedLine = line.trim();

		// Handle code blocks
		if (trimmedLine.startsWith("```")) {
			if (currentCodeBlock) {
				// End code block
				blocks.push(currentCodeBlock);
				currentCodeBlock = null;
			} else {
				// Start code block
				currentCodeBlock = {
					object: "block",
					type: "code",
					code: {
						rich_text: [],
						language: "plain text",
					},
				};
			}
			continue;
		}

		if (currentCodeBlock) {
			// Add line to current code block
			currentCodeBlock.code.rich_text.push({
				type: "text",
				text: { content: line },
			});
			continue;
		}

		// Handle other block types
		let block: BlockObjectRequest | null = null;

		if (trimmedLine === "") {
			block = {
				object: "block",
				type: "paragraph",
				paragraph: { rich_text: [] },
			};
		} else if (trimmedLine.startsWith("# ")) {
			block = {
				object: "block",
				type: "heading_1",
				heading_1: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(2) },
						},
					],
				},
			};
		} else if (trimmedLine.startsWith("## ")) {
			block = {
				object: "block",
				type: "heading_2",
				heading_2: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(3) },
						},
					],
				},
			};
		} else if (trimmedLine.startsWith("### ")) {
			block = {
				object: "block",
				type: "heading_3",
				heading_3: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(4) },
						},
					],
				},
			};
		} else if (trimmedLine.startsWith("- [ ] ")) {
			block = {
				object: "block",
				type: "to_do",
				to_do: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(6) },
						},
					],
					checked: false,
				},
			};
		} else if (trimmedLine.startsWith("- [x] ")) {
			block = {
				object: "block",
				type: "to_do",
				to_do: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(6) },
						},
					],
					checked: true,
				},
			};
		} else if (trimmedLine.startsWith("- ")) {
			block = {
				object: "block",
				type: "bulleted_list_item",
				bulleted_list_item: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(2) },
						},
					],
				},
			};
		} else if (trimmedLine.startsWith("> ")) {
			block = {
				object: "block",
				type: "quote",
				quote: {
					rich_text: [
						{
							type: "text",
							text: { content: trimmedLine.substring(2) },
						},
					],
				},
			};
		} else if (trimmedLine.startsWith("---")) {
			block = {
				object: "block",
				type: "divider",
				divider: {},
			};
		} else if (trimmedLine.match(/^!\[.*\]\(.*\)$/)) {
			// Image in markdown format: ![alt](url)
			const match = trimmedLine.match(/^!\[(.*)\]\((.*)\)$/);
			if (match) {
				block = {
					object: "block",
					type: "image",
					image: {
						type: "external",
						external: { url: match[2] },
						caption: match[1]
							? [
									{
										type: "text",
										text: { content: match[1] },
									},
								]
							: [],
					},
				};
			}
		} else {
			block = {
				object: "block",
				type: "paragraph",
				paragraph: {
					rich_text: [
						{
							type: "text",
							text: { content: line },
						},
					],
				},
			};
		}

		if (block) {
			blocks.push(block);
		}
	}

	// Add any remaining code block
	if (currentCodeBlock) {
		blocks.push(currentCodeBlock);
	}

	return blocks;
}
