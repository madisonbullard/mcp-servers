import { z } from "zod";

export type post_Report__generate = typeof post_Report__generate;
export const post_Report__generate = {
  method: z.literal("POST"),
  path: z.literal("/v1/report.generate"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: z.object({
      scheduleRange: z.union([z.literal("Dates"), z.undefined()]).optional(),
      from: z.string(),
      to: z.string(),
      prompt: z.union([z.string(), z.undefined()]).optional(),
      promptTemplate: z
        .union([
          z.literal("Daily Standup Report"),
          z.literal("Sprint Report"),
          z.literal("Release Notes"),
          z.literal("Custom"),
          z.undefined(),
        ])
        .optional(),
      parameters: z
        .union([
          z.array(
            z.object({
              parameter: z.union([
                z.literal("REPOSITORY"),
                z.literal("LABEL"),
                z.literal("TEAM"),
                z.literal("USER"),
                z.literal("SOURCEBRANCH"),
                z.literal("TARGETBRANCH"),
              ]),
              operator: z.union([z.literal("IN"), z.literal("ALL")]),
              values: z.array(z.string()),
            }),
          ),
          z.undefined(),
        ])
        .optional(),
      groupBy: z
        .union([
          z.literal("NONE"),
          z.literal("REPOSITORY"),
          z.literal("LABEL"),
          z.literal("TEAM"),
          z.literal("USER"),
          z.literal("SOURCEBRANCH"),
          z.literal("TARGETBRANCH"),
          z.undefined(),
        ])
        .optional(),
      subgroupBy: z
        .union([
          z.literal("NONE"),
          z.literal("REPOSITORY"),
          z.literal("LABEL"),
          z.literal("TEAM"),
          z.literal("USER"),
          z.literal("SOURCEBRANCH"),
          z.literal("TARGETBRANCH"),
          z.undefined(),
        ])
        .optional(),
      orgId: z.union([z.string(), z.undefined()]).optional(),
    }),
  }),
  response: z.array(
    z.object({
      group: z.string(),
      report: z.string(),
    }),
  ),
};

// <EndpointByMethod>
export const EndpointByMethod = {
  post: {
    "/v1/report.generate": post_Report__generate,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type PostEndpoints = EndpointByMethod["post"];
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

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.post>
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
