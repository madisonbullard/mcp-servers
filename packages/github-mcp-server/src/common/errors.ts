export class GitHubError extends Error {
	constructor(
		message: string,
		public readonly status: number,
		public readonly response: unknown,
	) {
		super(message);
		this.name = "GitHubError";
	}
}

export class GitHubValidationError extends GitHubError {
	constructor(message: string, status: number, response: unknown) {
		super(message, status, response);
		this.name = "GitHubValidationError";
	}
}

export class GitHubResourceNotFoundError extends GitHubError {
	constructor(resource: string) {
		super(`Resource not found: ${resource}`, 404, {
			message: `${resource} not found`,
		});
		this.name = "GitHubResourceNotFoundError";
	}
}

export class GitHubAuthenticationError extends GitHubError {
	constructor(message = "Authentication failed") {
		super(message, 401, { message });
		this.name = "GitHubAuthenticationError";
	}
}

export class GitHubPermissionError extends GitHubError {
	constructor(message = "Insufficient permissions") {
		super(message, 403, { message });
		this.name = "GitHubPermissionError";
	}
}

export class GitHubRateLimitError extends GitHubError {
	constructor(
		public readonly resetAt: Date,
		message = "Rate limit exceeded",
	) {
		super(message, 429, { message, reset_at: resetAt.toISOString() });
		this.name = "GitHubRateLimitError";
	}
}

export class GitHubConflictError extends GitHubError {
	constructor(message: string) {
		super(message, 409, { message });
		this.name = "GitHubConflictError";
	}
}

export function isGitHubError(error: unknown): error is GitHubError {
	return error instanceof GitHubError;
}

export function createGitHubError(
	status: number,
	response: Record<string, unknown>,
): GitHubError {
	switch (status) {
		case 401:
			return new GitHubAuthenticationError(response?.message as string);
		case 403:
			return new GitHubPermissionError(response?.message as string);
		case 404:
			return new GitHubResourceNotFoundError(
				(response?.message as string) || "Resource",
			);
		case 409:
			return new GitHubConflictError(
				(response?.message as string) || "Conflict occurred",
			);
		case 422:
			return new GitHubValidationError(
				(response?.message as string) || "Validation failed",
				status,
				response,
			);
		case 429:
			return new GitHubRateLimitError(
				new Date((response?.reset_at as string) || Date.now() + 60000),
				response?.message as string,
			);
		default:
			return new GitHubError(
				(response?.message as string) || "GitHub API error",
				status,
				response,
			);
	}
}
