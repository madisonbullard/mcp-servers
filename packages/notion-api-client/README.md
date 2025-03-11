# @madisonbullard/notion-api-client
A [Notion](https://www.notion.com/) API client. See the [API docs](https://developers.notion.com/docs/getting-started) for requests supported by the client.

## Usage
`npm install @madisonbullard/notion-api-client`

```ts
import Api from "@madisonbullard/notion-api-client";

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

- Grab the latest Notion Postman collection by exporting it from [this Postman Workspace](https://www.postman.com/notionhq/notion-s-api-workspace/overview).
- Replace the file in the `assets` folder with the resulting JSON document.

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


