import { GitHubReferenceSchema } from "../common/types.js";
import { githubRequest } from "../common/utils.js";

// Function implementations
export async function getDefaultBranchSHA(
	owner: string,
	repo: string,
): Promise<string> {
	try {
		const response = await githubRequest(
			`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/main`,
		);
		const data = GitHubReferenceSchema.parse(response);
		return data.object.sha;
	} catch (error) {
		const masterResponse = await githubRequest(
			`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/master`,
		);
		if (!masterResponse) {
			throw new Error(
				"Could not find default branch (tried 'main' and 'master')",
			);
		}
		const data = GitHubReferenceSchema.parse(masterResponse);
		return data.object.sha;
	}
}

export async function getBranchSHA(
	owner: string,
	repo: string,
	branch: string,
): Promise<string> {
	const response = await githubRequest(
		`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`,
	);

	const data = GitHubReferenceSchema.parse(response);
	return data.object.sha;
}
