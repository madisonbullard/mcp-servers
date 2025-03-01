# @madisonbullard/shortcut-api-client
A [Shortcut](https://www.shortcut.com/) API client. See the [API docs](https://developer.shortcut.com/api/rest/v3) for requests supported by the client.

## Usage
`npm install @madisonbullard/shortcut-api-client`

```ts
import { Api } from "@madisonbullard/shortcut-api-client";

export const client = new Api({
	baseUrl: "https://api.app.shortcut.com",
	baseApiParams: {
		headers: {
			"Shortcut-Token": process.env.SHORTCUT_API_TOKEN,
		},
	},
});

export async function getStory(storyId: number, params?: RequestParams) {
	const res = await client.api.getStory(storyId, params);

	return res;
}
```

## Development
- Pull down this repo
- Install dependencies:
```bash
bun install
```

- Generate the API client:
```bash
bun generate-api-client
```

- Build the MCP server and CLI:
```bash
bun run build
```
- This will create a `dist` folder containing an `index.js` file that exports the API client

- Use the API client as described above.


