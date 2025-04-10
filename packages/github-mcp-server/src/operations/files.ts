import { z } from "zod";
import { GitHubContentSchema } from "../common/types.js";
import { githubRequest } from "../common/utils.js";

// Schema definitions
export const FileOperationSchema = z.object({
	path: z.string(),
	content: z.string(),
});

export const GetFileContentsSchema = z.object({
	owner: z.string().describe("Repository owner (username or organization)"),
	repo: z.string().describe("Repository name"),
	path: z.string().describe("Path to the file or directory"),
	branch: z.string().optional().describe("Branch to get contents from"),
});

// Type exports
export type FileOperation = z.infer<typeof FileOperationSchema>;

// Function implementations
export async function getFileContents(
	owner: string,
	repo: string,
	path: string,
	branch?: string,
) {
	let url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
	if (branch) {
		url += `?ref=${branch}`;
	}

	const response = await githubRequest(url);
	const data = GitHubContentSchema.parse(response);

	// If it's a file, decode the content
	if (!Array.isArray(data) && data.content) {
		data.content = Buffer.from(data.content, "base64").toString("utf8");
	}

	return data;
}
