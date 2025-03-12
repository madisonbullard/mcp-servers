/* tslint:disable */
/* eslint-disable */
/**
 * Notion API
 * Hello and welcome!  To make use of this API collection collection as it\'s written, please duplicate [this database template](https://www.notion.so/8e2c2b769e1d47d287b9ed3035d607ae?v=dc1b92875fb94f10834ba8d36549bd2a).  ﻿Under the `Variables` tab, add your environment variables to start making requests. You will need to [create an integration](https://www.notion.so/my-integrations) to retrieve an API token. You will also need additional values, such as a database ID and page ID, which can be found in your Notion workspace or from the database template mentioned above.  For our full documentation, including sample integrations and guides, visit [developers.notion.com](https://developers.notion.com/)﻿.  Please note: Pages that are parented by a database _must_ have the same properties as the parent database. If you are not using the database template provided, the request `body` for the page endpoints included in this collection should be updated to match the properties in the parent database being used. See documentation for [Creating a page](https://developers.notion.com/reference/post-page) for more information.  To learn more about creating an access token, see our [official documentation](https://developers.notion.com/reference/create-a-token) and read our [Authorization](https://developers.notion.com/docs/authorization#step-3-send-the-code-in-a-post-request-to-the-notion-api) guide.  Need more help? Join our [developer community on Slack](https://join.slack.com/t/notiondevs/shared_invite/zt-20b5996xv-DzJdLiympy6jP0GGzu3AMg)﻿.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface V1DatabasesIdGetRequest {
    id: string;
    notionVersion?: string;
}

export interface V1DatabasesIdPatchRequest {
    id: string;
    notionVersion?: string;
    body?: object;
}

export interface V1DatabasesIdQueryPostRequest {
    id: string;
    authorization?: string;
    contentType?: string;
    notionVersion?: string;
    body?: string;
}

export interface V1DatabasesPostRequest {
    contentType?: string;
    notionVersion?: string;
    body?: string;
}

/**
 * 
 */
export class DatabasesApi extends runtime.BaseAPI {

    /**
     * Retrieves a database object using the ID specified in the request path. 
     * Retrieve a database
     */
    async v1DatabasesIdGetRaw(requestParameters: V1DatabasesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1DatabasesIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['notionVersion'] != null) {
            headerParameters['Notion-Version'] = String(requestParameters['notionVersion']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/databases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieves a database object using the ID specified in the request path. 
     * Retrieve a database
     */
    async v1DatabasesIdGet(requestParameters: V1DatabasesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.v1DatabasesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update database properties
     */
    async v1DatabasesIdPatchRaw(requestParameters: V1DatabasesIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1DatabasesIdPatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['notionVersion'] != null) {
            headerParameters['Notion-Version'] = String(requestParameters['notionVersion']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/databases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update database properties
     */
    async v1DatabasesIdPatch(requestParameters: V1DatabasesIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.v1DatabasesIdPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Filter a database
     */
    async v1DatabasesIdQueryPostRaw(requestParameters: V1DatabasesIdQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1DatabasesIdQueryPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['authorization'] != null) {
            headerParameters['Authorization'] = String(requestParameters['authorization']);
        }

        if (requestParameters['contentType'] != null) {
            headerParameters['Content-Type'] = String(requestParameters['contentType']);
        }

        if (requestParameters['notionVersion'] != null) {
            headerParameters['Notion-Version'] = String(requestParameters['notionVersion']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/databases/{id}/query`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Filter a database
     */
    async v1DatabasesIdQueryPost(requestParameters: V1DatabasesIdQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.v1DatabasesIdQueryPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a database
     */
    async v1DatabasesPostRaw(requestParameters: V1DatabasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['contentType'] != null) {
            headerParameters['Content-Type'] = String(requestParameters['contentType']);
        }

        if (requestParameters['notionVersion'] != null) {
            headerParameters['Notion-Version'] = String(requestParameters['notionVersion']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/databases/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create a database
     */
    async v1DatabasesPost(requestParameters: V1DatabasesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.v1DatabasesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
