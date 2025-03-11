# .DatabasesApi

All URIs are relative to *https://api.notion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DatabasesIdGet**](DatabasesApi.md#v1DatabasesIdGet) | **GET** /v1/databases/{id} | Retrieve a database
[**v1DatabasesIdPatch**](DatabasesApi.md#v1DatabasesIdPatch) | **PATCH** /v1/databases/{id} | Update database properties
[**v1DatabasesIdQueryPost**](DatabasesApi.md#v1DatabasesIdQueryPost) | **POST** /v1/databases/{id}/query | Filter a database
[**v1DatabasesPost**](DatabasesApi.md#v1DatabasesPost) | **POST** /v1/databases/ | Create a database


# **v1DatabasesIdGet**
> any v1DatabasesIdGet()

Retrieves a database object using the ID specified in the request path. 

### Example


```typescript
import { createConfiguration, DatabasesApi } from '';
import type { DatabasesApiV1DatabasesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DatabasesApi(configuration);

const request: DatabasesApiV1DatabasesIdGetRequest = {
  
  id: "{{DATABASE_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1DatabasesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * Content-Encoding -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DatabasesIdPatch**
> any v1DatabasesIdPatch()


### Example


```typescript
import { createConfiguration, DatabasesApi } from '';
import type { DatabasesApiV1DatabasesIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DatabasesApi(configuration);

const request: DatabasesApiV1DatabasesIdPatchRequest = {
  
  id: "{{DATABASE_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: {},
};

const data = await apiInstance.v1DatabasesIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **id** | [**string**] |  | defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * Content-Encoding -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DatabasesIdQueryPost**
> any v1DatabasesIdQueryPost()


### Example


```typescript
import { createConfiguration, DatabasesApi } from '';
import type { DatabasesApiV1DatabasesIdQueryPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DatabasesApi(configuration);

const request: DatabasesApiV1DatabasesIdQueryPostRequest = {
  
  id: "{{DATABASE_ID}}",
  
  authorization: "Bearer secret_t1CdN9S8yicG5eWLUOfhcWaOscVnFXns",
  
  contentType: "application/json",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: "{\n    \"filter\": {\n        \"property\": \"Status\",\n        \"select\": {\n            \"equals\": \"Reading\"\n        }\n    }\n}",
};

const data = await apiInstance.v1DatabasesIdQueryPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **id** | [**string**] |  | defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **contentType** | [**string**] |  | (optional) defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * Content-Encoding -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DatabasesPost**
> any v1DatabasesPost()


### Example


```typescript
import { createConfiguration, DatabasesApi } from '';
import type { DatabasesApiV1DatabasesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DatabasesApi(configuration);

const request: DatabasesApiV1DatabasesPostRequest = {
  
  contentType: "application/json",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: "{\n    \"parent\": {\n        \"type\": \"page_id\",\n        \"page_id\": \"{{PAGE_ID}}\"\n    },\n    \"title\": [\n        {\n            \"type\": \"text\",\n            \"text\": {\n                \"content\": \"Grocery List\",\n                \"link\": null\n            }\n        }\n    ],\n    \"properties\": {\n        \"Name\": {\n            \"title\": {}\n        },\n        \"Description\": {\n            \"rich_text\": {}\n        },\n        \"In stock\": {\n            \"checkbox\": {}\n        },\n        \"Food group\": {\n            \"select\": {\n                \"options\": [\n                    {\n                        \"name\": \"🥦Vegetable\",\n                        \"color\": \"green\"\n                    },\n                    {\n                        \"name\": \"🍎Fruit\",\n                        \"color\": \"red\"\n                    },\n                    {\n                        \"name\": \"💪Protein\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"Price\": {\n            \"number\": {\n                \"format\": \"dollar\"\n            }\n        },\n        \"Last ordered\": {\n            \"date\": {}\n        },\n        \"Store availability\": {\n            \"type\": \"multi_select\",\n            \"multi_select\": {\n                \"options\": [\n                    {\n                        \"name\": \"Duc Loi Market\",\n                        \"color\": \"blue\"\n                    },\n                    {\n                        \"name\": \"Rainbow Grocery\",\n                        \"color\": \"gray\"\n                    },\n                    {\n                        \"name\": \"Nijiya Market\",\n                        \"color\": \"purple\"\n                    },\n                    {\n                        \"name\": \"Gus's Community Market\",\n                        \"color\": \"yellow\"\n                    }\n                ]\n            }\n        },\n        \"+1\": {\n            \"people\": {}\n        },\n        \"Photo\": {\n            \"files\": {}\n        }\n    }\n}",
};

const data = await apiInstance.v1DatabasesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **contentType** | [**string**] |  | (optional) defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * Content-Encoding -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


