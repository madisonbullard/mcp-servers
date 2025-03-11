import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';


import { ObservableBlocksApi } from "./ObservableAPI";
import { BlocksApiRequestFactory, BlocksApiResponseProcessor} from "../apis/BlocksApi";

export interface BlocksApiV1BlocksIdChildrenGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenGet
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenGet
     */
    notionVersion?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BlocksApiv1BlocksIdChildrenGet
     */
    pageSize?: number
}

export interface BlocksApiV1BlocksIdChildrenPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenPatch
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenPatch
     */
    authorization?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenPatch
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenPatch
     */
    notionVersion?: string
    /**
     * 
     * @type string
     * @memberof BlocksApiv1BlocksIdChildrenPatch
     */
    body?: string
}

export interface BlocksApiV1BlocksIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdDelete
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdDelete
     */
    notionVersion?: string
}

export interface BlocksApiV1BlocksIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdGet
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdGet
     */
    notionVersion?: string
}

export interface BlocksApiV1BlocksIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdPatch
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BlocksApiv1BlocksIdPatch
     */
    notionVersion?: string
    /**
     * 
     * @type any
     * @memberof BlocksApiv1BlocksIdPatch
     */
    body?: any
}

export class ObjectBlocksApi {
    private api: ObservableBlocksApi

    public constructor(configuration: Configuration, requestFactory?: BlocksApiRequestFactory, responseProcessor?: BlocksApiResponseProcessor) {
        this.api = new ObservableBlocksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve block children
     * @param param the request object
     */
    public v1BlocksIdChildrenGetWithHttpInfo(param: BlocksApiV1BlocksIdChildrenGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1BlocksIdChildrenGetWithHttpInfo(param.id, param.notionVersion, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve block children
     * @param param the request object
     */
    public v1BlocksIdChildrenGet(param: BlocksApiV1BlocksIdChildrenGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1BlocksIdChildrenGet(param.id, param.notionVersion, param.pageSize,  options).toPromise();
    }

    /**
     * Append block children
     * @param param the request object
     */
    public v1BlocksIdChildrenPatchWithHttpInfo(param: BlocksApiV1BlocksIdChildrenPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1BlocksIdChildrenPatchWithHttpInfo(param.id, param.authorization, param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Append block children
     * @param param the request object
     */
    public v1BlocksIdChildrenPatch(param: BlocksApiV1BlocksIdChildrenPatchRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1BlocksIdChildrenPatch(param.id, param.authorization, param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Delete a block
     * @param param the request object
     */
    public v1BlocksIdDeleteWithHttpInfo(param: BlocksApiV1BlocksIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1BlocksIdDeleteWithHttpInfo(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Delete a block
     * @param param the request object
     */
    public v1BlocksIdDelete(param: BlocksApiV1BlocksIdDeleteRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1BlocksIdDelete(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve a block
     * @param param the request object
     */
    public v1BlocksIdGetWithHttpInfo(param: BlocksApiV1BlocksIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1BlocksIdGetWithHttpInfo(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve a block
     * @param param the request object
     */
    public v1BlocksIdGet(param: BlocksApiV1BlocksIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1BlocksIdGet(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
     * Update a block
     * @param param the request object
     */
    public v1BlocksIdPatchWithHttpInfo(param: BlocksApiV1BlocksIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1BlocksIdPatchWithHttpInfo(param.id, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
     * Update a block
     * @param param the request object
     */
    public v1BlocksIdPatch(param: BlocksApiV1BlocksIdPatchRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1BlocksIdPatch(param.id, param.notionVersion, param.body,  options).toPromise();
    }

}

import { ObservableCommentsApi } from "./ObservableAPI";
import { CommentsApiRequestFactory, CommentsApiResponseProcessor} from "../apis/CommentsApi";

export interface CommentsApiV1CommentsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsApiv1CommentsGet
     */
    notionVersion?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsApiv1CommentsGet
     */
    blockId?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CommentsApiv1CommentsGet
     */
    pageSize?: number
}

export interface CommentsApiV1CommentsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsApiv1CommentsPost
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsApiv1CommentsPost
     */
    notionVersion?: string
    /**
     * 
     * @type string
     * @memberof CommentsApiv1CommentsPost
     */
    body?: string
}

export class ObjectCommentsApi {
    private api: ObservableCommentsApi

    public constructor(configuration: Configuration, requestFactory?: CommentsApiRequestFactory, responseProcessor?: CommentsApiResponseProcessor) {
        this.api = new ObservableCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve comments
     * @param param the request object
     */
    public v1CommentsGetWithHttpInfo(param: CommentsApiV1CommentsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1CommentsGetWithHttpInfo(param.notionVersion, param.blockId, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve comments
     * @param param the request object
     */
    public v1CommentsGet(param: CommentsApiV1CommentsGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1CommentsGet(param.notionVersion, param.blockId, param.pageSize,  options).toPromise();
    }

    /**
     * Add comment to discussion
     * @param param the request object
     */
    public v1CommentsPostWithHttpInfo(param: CommentsApiV1CommentsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1CommentsPostWithHttpInfo(param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Add comment to discussion
     * @param param the request object
     */
    public v1CommentsPost(param: CommentsApiV1CommentsPostRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1CommentsPost(param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

}

import { ObservableDatabasesApi } from "./ObservableAPI";
import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";

export interface DatabasesApiV1DatabasesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdGet
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdGet
     */
    notionVersion?: string
}

export interface DatabasesApiV1DatabasesIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdPatch
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdPatch
     */
    notionVersion?: string
    /**
     * 
     * @type any
     * @memberof DatabasesApiv1DatabasesIdPatch
     */
    body?: any
}

export interface DatabasesApiV1DatabasesIdQueryPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdQueryPost
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdQueryPost
     */
    authorization?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdQueryPost
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesIdQueryPost
     */
    notionVersion?: string
    /**
     * 
     * @type string
     * @memberof DatabasesApiv1DatabasesIdQueryPost
     */
    body?: string
}

export interface DatabasesApiV1DatabasesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesPost
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DatabasesApiv1DatabasesPost
     */
    notionVersion?: string
    /**
     * 
     * @type string
     * @memberof DatabasesApiv1DatabasesPost
     */
    body?: string
}

export class ObjectDatabasesApi {
    private api: ObservableDatabasesApi

    public constructor(configuration: Configuration, requestFactory?: DatabasesApiRequestFactory, responseProcessor?: DatabasesApiResponseProcessor) {
        this.api = new ObservableDatabasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a database object using the ID specified in the request path. 
     * Retrieve a database
     * @param param the request object
     */
    public v1DatabasesIdGetWithHttpInfo(param: DatabasesApiV1DatabasesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1DatabasesIdGetWithHttpInfo(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieves a database object using the ID specified in the request path. 
     * Retrieve a database
     * @param param the request object
     */
    public v1DatabasesIdGet(param: DatabasesApiV1DatabasesIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1DatabasesIdGet(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Update database properties
     * @param param the request object
     */
    public v1DatabasesIdPatchWithHttpInfo(param: DatabasesApiV1DatabasesIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1DatabasesIdPatchWithHttpInfo(param.id, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Update database properties
     * @param param the request object
     */
    public v1DatabasesIdPatch(param: DatabasesApiV1DatabasesIdPatchRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1DatabasesIdPatch(param.id, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Filter a database
     * @param param the request object
     */
    public v1DatabasesIdQueryPostWithHttpInfo(param: DatabasesApiV1DatabasesIdQueryPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1DatabasesIdQueryPostWithHttpInfo(param.id, param.authorization, param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Filter a database
     * @param param the request object
     */
    public v1DatabasesIdQueryPost(param: DatabasesApiV1DatabasesIdQueryPostRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1DatabasesIdQueryPost(param.id, param.authorization, param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Create a database
     * @param param the request object
     */
    public v1DatabasesPostWithHttpInfo(param: DatabasesApiV1DatabasesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1DatabasesPostWithHttpInfo(param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Create a database
     * @param param the request object
     */
    public v1DatabasesPost(param: DatabasesApiV1DatabasesPostRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1DatabasesPost(param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

}

import { ObservablePagesApi } from "./ObservableAPI";
import { PagesApiRequestFactory, PagesApiResponseProcessor} from "../apis/PagesApi";

export interface PagesApiV1PagesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesIdGet
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesIdGet
     */
    notionVersion?: string
}

export interface PagesApiV1PagesIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesIdPatch
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesIdPatch
     */
    notionVersion?: string
    /**
     * 
     * @type any
     * @memberof PagesApiv1PagesIdPatch
     */
    body?: any
}

export interface PagesApiV1PagesPageIdPropertiesPropertyIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesPageIdPropertiesPropertyIdGet
     */
    pageId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesPageIdPropertiesPropertyIdGet
     */
    propertyId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesPageIdPropertiesPropertyIdGet
     */
    notionVersion?: string
}

export interface PagesApiV1PagesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesPost
     */
    authorization?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesPost
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PagesApiv1PagesPost
     */
    notionVersion?: string
    /**
     * 
     * @type string
     * @memberof PagesApiv1PagesPost
     */
    body?: string
}

export class ObjectPagesApi {
    private api: ObservablePagesApi

    public constructor(configuration: Configuration, requestFactory?: PagesApiRequestFactory, responseProcessor?: PagesApiResponseProcessor) {
        this.api = new ObservablePagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. 
     * Retrieve a page
     * @param param the request object
     */
    public v1PagesIdGetWithHttpInfo(param: PagesApiV1PagesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1PagesIdGetWithHttpInfo(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. 
     * Retrieve a page
     * @param param the request object
     */
    public v1PagesIdGet(param: PagesApiV1PagesIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1PagesIdGet(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Archive a page
     * @param param the request object
     */
    public v1PagesIdPatchWithHttpInfo(param: PagesApiV1PagesIdPatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1PagesIdPatchWithHttpInfo(param.id, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Archive a page
     * @param param the request object
     */
    public v1PagesIdPatch(param: PagesApiV1PagesIdPatchRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1PagesIdPatch(param.id, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Retrieve a page property item
     * @param param the request object
     */
    public v1PagesPageIdPropertiesPropertyIdGetWithHttpInfo(param: PagesApiV1PagesPageIdPropertiesPropertyIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1PagesPageIdPropertiesPropertyIdGetWithHttpInfo(param.pageId, param.propertyId, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve a page property item
     * @param param the request object
     */
    public v1PagesPageIdPropertiesPropertyIdGet(param: PagesApiV1PagesPageIdPropertiesPropertyIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1PagesPageIdPropertiesPropertyIdGet(param.pageId, param.propertyId, param.notionVersion,  options).toPromise();
    }

    /**
     * Create a page with content
     * @param param the request object
     */
    public v1PagesPostWithHttpInfo(param: PagesApiV1PagesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1PagesPostWithHttpInfo(param.authorization, param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Create a page with content
     * @param param the request object
     */
    public v1PagesPost(param: PagesApiV1PagesPostRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1PagesPost(param.authorization, param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiV1SearchPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchApiv1SearchPost
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchApiv1SearchPost
     */
    notionVersion?: string
    /**
     * 
     * @type string
     * @memberof SearchApiv1SearchPost
     */
    body?: string
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search
     * @param param the request object
     */
    public v1SearchPostWithHttpInfo(param: SearchApiV1SearchPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1SearchPostWithHttpInfo(param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

    /**
     * Search
     * @param param the request object
     */
    public v1SearchPost(param: SearchApiV1SearchPostRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1SearchPost(param.contentType, param.notionVersion, param.body,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiV1UsersGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiv1UsersGet
     */
    notionVersion?: string
}

export interface UsersApiV1UsersIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiv1UsersIdGet
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiv1UsersIdGet
     */
    notionVersion?: string
}

export interface UsersApiV1UsersMeGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiv1UsersMeGet
     */
    notionVersion?: string
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a paginated list of user objects for a workspace
     * List all users
     * @param param the request object
     */
    public v1UsersGetWithHttpInfo(param: UsersApiV1UsersGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1UsersGetWithHttpInfo(param.notionVersion,  options).toPromise();
    }

    /**
     * Returns a paginated list of user objects for a workspace
     * List all users
     * @param param the request object
     */
    public v1UsersGet(param: UsersApiV1UsersGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1UsersGet(param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve a user
     * @param param the request object
     */
    public v1UsersIdGetWithHttpInfo(param: UsersApiV1UsersIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1UsersIdGetWithHttpInfo(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve a user
     * @param param the request object
     */
    public v1UsersIdGet(param: UsersApiV1UsersIdGetRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1UsersIdGet(param.id, param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve your token’s bot user
     * @param param the request object
     */
    public v1UsersMeGetWithHttpInfo(param: UsersApiV1UsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.v1UsersMeGetWithHttpInfo(param.notionVersion,  options).toPromise();
    }

    /**
     * Retrieve your token’s bot user
     * @param param the request object
     */
    public v1UsersMeGet(param: UsersApiV1UsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.v1UsersMeGet(param.notionVersion,  options).toPromise();
    }

}
