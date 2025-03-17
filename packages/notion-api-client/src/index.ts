import { z } from "zod";

export type get_V1usersId = typeof get_V1usersId;
export const get_V1usersId = {
  method: z.literal("GET"),
  path: z.literal("/v1/users/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_V1users = typeof get_V1users;
export const get_V1users = {
  method: z.literal("GET"),
  path: z.literal("/v1/users"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_V1usersme = typeof get_V1usersme;
export const get_V1usersme = {
  method: z.literal("GET"),
  path: z.literal("/v1/users/me"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_V1databasesId = typeof get_V1databasesId;
export const get_V1databasesId = {
  method: z.literal("GET"),
  path: z.literal("/v1/databases/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type patch_V1databasesId = typeof patch_V1databasesId;
export const patch_V1databasesId = {
  method: z.literal("PATCH"),
  path: z.literal("/v1/databases/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.unknown(),
  }),
  response: z.unknown(),
};

export type post_V1databasesIdquery = typeof post_V1databasesIdquery;
export const post_V1databasesIdquery = {
  method: z.literal("POST"),
  path: z.literal("/v1/databases/{id}/query"),
  requestFormat: z.literal("text"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.string(),
  }),
  response: z.unknown(),
};

export type post_V1databases = typeof post_V1databases;
export const post_V1databases = {
  method: z.literal("POST"),
  path: z.literal("/v1/databases/"),
  requestFormat: z.literal("text"),
  parameters: z.object({
    body: z.string(),
  }),
  response: z.unknown(),
};

export type post_V1pages = typeof post_V1pages;
export const post_V1pages = {
  method: z.literal("POST"),
  path: z.literal("/v1/pages/"),
  requestFormat: z.literal("text"),
  parameters: z.object({
    body: z.string(),
  }),
  response: z.unknown(),
};

export type get_V1pagesId = typeof get_V1pagesId;
export const get_V1pagesId = {
  method: z.literal("GET"),
  path: z.literal("/v1/pages/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type patch_V1pagesId = typeof patch_V1pagesId;
export const patch_V1pagesId = {
  method: z.literal("PATCH"),
  path: z.literal("/v1/pages/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.unknown(),
  }),
  response: z.unknown(),
};

export type get_V1pagesPage_idpropertiesProperty_id = typeof get_V1pagesPage_idpropertiesProperty_id;
export const get_V1pagesPage_idpropertiesProperty_id = {
  method: z.literal("GET"),
  path: z.literal("/v1/pages/{page_id}/properties/{property_id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      page_id: z.string(),
      property_id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_V1blocksIdchildren = typeof get_V1blocksIdchildren;
export const get_V1blocksIdchildren = {
  method: z.literal("GET"),
  path: z.literal("/v1/blocks/{id}/children"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      page_size: z.number().optional(),
    }),
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type patch_V1blocksIdchildren = typeof patch_V1blocksIdchildren;
export const patch_V1blocksIdchildren = {
  method: z.literal("PATCH"),
  path: z.literal("/v1/blocks/{id}/children"),
  requestFormat: z.literal("text"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.string(),
  }),
  response: z.unknown(),
};

export type patch_V1blocksId = typeof patch_V1blocksId;
export const patch_V1blocksId = {
  method: z.literal("PATCH"),
  path: z.literal("/v1/blocks/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.unknown(),
  }),
  response: z.unknown(),
};

export type get_V1blocksId = typeof get_V1blocksId;
export const get_V1blocksId = {
  method: z.literal("GET"),
  path: z.literal("/v1/blocks/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type delete_V1blocksId = typeof delete_V1blocksId;
export const delete_V1blocksId = {
  method: z.literal("DELETE"),
  path: z.literal("/v1/blocks/{id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: z.unknown(),
};

export type post_V1search = typeof post_V1search;
export const post_V1search = {
  method: z.literal("POST"),
  path: z.literal("/v1/search"),
  requestFormat: z.literal("text"),
  parameters: z.object({
    body: z.string(),
  }),
  response: z.unknown(),
};

export type get_V1comments = typeof get_V1comments;
export const get_V1comments = {
  method: z.literal("GET"),
  path: z.literal("/v1/comments"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      block_id: z.string().optional(),
      page_size: z.number().optional(),
    }),
  }),
  response: z.unknown(),
};

export type post_V1comments = typeof post_V1comments;
export const post_V1comments = {
  method: z.literal("POST"),
  path: z.literal("/v1/comments"),
  requestFormat: z.literal("text"),
  parameters: z.object({
    body: z.string(),
  }),
  response: z.unknown(),
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/v1/users/{id}": get_V1usersId,
    "/v1/users": get_V1users,
    "/v1/users/me": get_V1usersme,
    "/v1/databases/{id}": get_V1databasesId,
    "/v1/pages/{id}": get_V1pagesId,
    "/v1/pages/{page_id}/properties/{property_id}": get_V1pagesPage_idpropertiesProperty_id,
    "/v1/blocks/{id}/children": get_V1blocksIdchildren,
    "/v1/blocks/{id}": get_V1blocksId,
    "/v1/comments": get_V1comments,
  },
  patch: {
    "/v1/databases/{id}": patch_V1databasesId,
    "/v1/pages/{id}": patch_V1pagesId,
    "/v1/blocks/{id}/children": patch_V1blocksIdchildren,
    "/v1/blocks/{id}": patch_V1blocksId,
  },
  post: {
    "/v1/databases/{id}/query": post_V1databasesIdquery,
    "/v1/databases/": post_V1databases,
    "/v1/pages/": post_V1pages,
    "/v1/search": post_V1search,
    "/v1/comments": post_V1comments,
  },
  delete: {
    "/v1/blocks/{id}": delete_V1blocksId,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PatchEndpoints = EndpointByMethod["patch"];
export type PostEndpoints = EndpointByMethod["post"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.get>

  // <ApiClient.patch>
  patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("patch", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.patch>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("delete", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.delete>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
