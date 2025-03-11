import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { ObservableBlocksApi } from './ObservableAPI';

import { BlocksApiRequestFactory, BlocksApiResponseProcessor} from "../apis/BlocksApi";
export class PromiseBlocksApi {
    private api: ObservableBlocksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BlocksApiRequestFactory,
        responseProcessor?: BlocksApiResponseProcessor
    ) {
        this.api = new ObservableBlocksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve block children
     * @param id
     * @param [notionVersion]
     * @param [pageSize]
     */
    public v1BlocksIdChildrenGetWithHttpInfo(id: string, notionVersion?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdChildrenGetWithHttpInfo(id, notionVersion, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve block children
     * @param id
     * @param [notionVersion]
     * @param [pageSize]
     */
    public v1BlocksIdChildrenGet(id: string, notionVersion?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdChildrenGet(id, notionVersion, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Append block children
     * @param id
     * @param [authorization]
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1BlocksIdChildrenPatchWithHttpInfo(id: string, authorization?: string, contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdChildrenPatchWithHttpInfo(id, authorization, contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Append block children
     * @param id
     * @param [authorization]
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1BlocksIdChildrenPatch(id: string, authorization?: string, contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdChildrenPatch(id, authorization, contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a block
     * @param id
     * @param [notionVersion]
     */
    public v1BlocksIdDeleteWithHttpInfo(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdDeleteWithHttpInfo(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a block
     * @param id
     * @param [notionVersion]
     */
    public v1BlocksIdDelete(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdDelete(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a block
     * @param id
     * @param [notionVersion]
     */
    public v1BlocksIdGetWithHttpInfo(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdGetWithHttpInfo(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a block
     * @param id
     * @param [notionVersion]
     */
    public v1BlocksIdGet(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdGet(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
     * Update a block
     * @param id
     * @param [notionVersion]
     * @param [body]
     */
    public v1BlocksIdPatchWithHttpInfo(id: string, notionVersion?: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdPatchWithHttpInfo(id, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
     * Update a block
     * @param id
     * @param [notionVersion]
     * @param [body]
     */
    public v1BlocksIdPatch(id: string, notionVersion?: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1BlocksIdPatch(id, notionVersion, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCommentsApi } from './ObservableAPI';

import { CommentsApiRequestFactory, CommentsApiResponseProcessor} from "../apis/CommentsApi";
export class PromiseCommentsApi {
    private api: ObservableCommentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsApiRequestFactory,
        responseProcessor?: CommentsApiResponseProcessor
    ) {
        this.api = new ObservableCommentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve comments
     * @param [notionVersion]
     * @param [blockId]
     * @param [pageSize]
     */
    public v1CommentsGetWithHttpInfo(notionVersion?: string, blockId?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1CommentsGetWithHttpInfo(notionVersion, blockId, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve comments
     * @param [notionVersion]
     * @param [blockId]
     * @param [pageSize]
     */
    public v1CommentsGet(notionVersion?: string, blockId?: string, pageSize?: number, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1CommentsGet(notionVersion, blockId, pageSize, observableOptions);
        return result.toPromise();
    }

    /**
     * Add comment to discussion
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1CommentsPostWithHttpInfo(contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1CommentsPostWithHttpInfo(contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Add comment to discussion
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1CommentsPost(contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1CommentsPost(contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDatabasesApi } from './ObservableAPI';

import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";
export class PromiseDatabasesApi {
    private api: ObservableDatabasesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabasesApiRequestFactory,
        responseProcessor?: DatabasesApiResponseProcessor
    ) {
        this.api = new ObservableDatabasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a database object using the ID specified in the request path. 
     * Retrieve a database
     * @param id
     * @param [notionVersion]
     */
    public v1DatabasesIdGetWithHttpInfo(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesIdGetWithHttpInfo(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a database object using the ID specified in the request path. 
     * Retrieve a database
     * @param id
     * @param [notionVersion]
     */
    public v1DatabasesIdGet(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesIdGet(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Update database properties
     * @param id
     * @param [notionVersion]
     * @param [body]
     */
    public v1DatabasesIdPatchWithHttpInfo(id: string, notionVersion?: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesIdPatchWithHttpInfo(id, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Update database properties
     * @param id
     * @param [notionVersion]
     * @param [body]
     */
    public v1DatabasesIdPatch(id: string, notionVersion?: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesIdPatch(id, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Filter a database
     * @param id
     * @param [authorization]
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1DatabasesIdQueryPostWithHttpInfo(id: string, authorization?: string, contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesIdQueryPostWithHttpInfo(id, authorization, contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Filter a database
     * @param id
     * @param [authorization]
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1DatabasesIdQueryPost(id: string, authorization?: string, contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesIdQueryPost(id, authorization, contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a database
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1DatabasesPostWithHttpInfo(contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesPostWithHttpInfo(contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a database
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1DatabasesPost(contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1DatabasesPost(contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePagesApi } from './ObservableAPI';

import { PagesApiRequestFactory, PagesApiResponseProcessor} from "../apis/PagesApi";
export class PromisePagesApi {
    private api: ObservablePagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PagesApiRequestFactory,
        responseProcessor?: PagesApiResponseProcessor
    ) {
        this.api = new ObservablePagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. 
     * Retrieve a page
     * @param id
     * @param [notionVersion]
     */
    public v1PagesIdGetWithHttpInfo(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesIdGetWithHttpInfo(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. 
     * Retrieve a page
     * @param id
     * @param [notionVersion]
     */
    public v1PagesIdGet(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesIdGet(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a page
     * @param id
     * @param [notionVersion]
     * @param [body]
     */
    public v1PagesIdPatchWithHttpInfo(id: string, notionVersion?: string, body?: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesIdPatchWithHttpInfo(id, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a page
     * @param id
     * @param [notionVersion]
     * @param [body]
     */
    public v1PagesIdPatch(id: string, notionVersion?: string, body?: any, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesIdPatch(id, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a page property item
     * @param pageId
     * @param propertyId
     * @param [notionVersion]
     */
    public v1PagesPageIdPropertiesPropertyIdGetWithHttpInfo(pageId: string, propertyId: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesPageIdPropertiesPropertyIdGetWithHttpInfo(pageId, propertyId, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a page property item
     * @param pageId
     * @param propertyId
     * @param [notionVersion]
     */
    public v1PagesPageIdPropertiesPropertyIdGet(pageId: string, propertyId: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesPageIdPropertiesPropertyIdGet(pageId, propertyId, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a page with content
     * @param [authorization]
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1PagesPostWithHttpInfo(authorization?: string, contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesPostWithHttpInfo(authorization, contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a page with content
     * @param [authorization]
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1PagesPost(authorization?: string, contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1PagesPost(authorization, contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1SearchPostWithHttpInfo(contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1SearchPostWithHttpInfo(contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Search
     * @param [contentType]
     * @param [notionVersion]
     * @param [body]
     */
    public v1SearchPost(contentType?: string, notionVersion?: string, body?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1SearchPost(contentType, notionVersion, body, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a paginated list of user objects for a workspace
     * List all users
     * @param [notionVersion]
     */
    public v1UsersGetWithHttpInfo(notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1UsersGetWithHttpInfo(notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paginated list of user objects for a workspace
     * List all users
     * @param [notionVersion]
     */
    public v1UsersGet(notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1UsersGet(notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve a user
     * @param id
     * @param [notionVersion]
     */
    public v1UsersIdGetWithHttpInfo(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1UsersIdGetWithHttpInfo(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user object using the ID specified in the request path.
     * Retrieve a user
     * @param id
     * @param [notionVersion]
     */
    public v1UsersIdGet(id: string, notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1UsersIdGet(id, notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve your token’s bot user
     * @param [notionVersion]
     */
    public v1UsersMeGetWithHttpInfo(notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1UsersMeGetWithHttpInfo(notionVersion, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve your token’s bot user
     * @param [notionVersion]
     */
    public v1UsersMeGet(notionVersion?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.v1UsersMeGet(notionVersion, observableOptions);
        return result.toPromise();
    }


}



