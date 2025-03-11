# .BlocksApi

All URIs are relative to *https://api.notion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1BlocksIdChildrenGet**](BlocksApi.md#v1BlocksIdChildrenGet) | **GET** /v1/blocks/{id}/children | Retrieve block children
[**v1BlocksIdChildrenPatch**](BlocksApi.md#v1BlocksIdChildrenPatch) | **PATCH** /v1/blocks/{id}/children | Append block children
[**v1BlocksIdDelete**](BlocksApi.md#v1BlocksIdDelete) | **DELETE** /v1/blocks/{id} | Delete a block
[**v1BlocksIdGet**](BlocksApi.md#v1BlocksIdGet) | **GET** /v1/blocks/{id} | Retrieve a block
[**v1BlocksIdPatch**](BlocksApi.md#v1BlocksIdPatch) | **PATCH** /v1/blocks/{id} | Update a block


# **v1BlocksIdChildrenGet**
> any v1BlocksIdChildrenGet()


### Example


```typescript
import { createConfiguration, BlocksApi } from '';
import type { BlocksApiV1BlocksIdChildrenGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlocksApi(configuration);

const request: BlocksApiV1BlocksIdChildrenGetRequest = {
  
  id: "{{PAGE_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  pageSize: 100,
};

const data = await apiInstance.v1BlocksIdChildrenGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to undefined


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
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * Set-Cookie -  <br>  * ETag -  <br>  * Vary -  <br>  * Content-Encoding -  <br>  * CF-Cache-Status -  <br>  * cf-request-id -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1BlocksIdChildrenPatch**
> any v1BlocksIdChildrenPatch()


### Example


```typescript
import { createConfiguration, BlocksApi } from '';
import type { BlocksApiV1BlocksIdChildrenPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlocksApi(configuration);

const request: BlocksApiV1BlocksIdChildrenPatchRequest = {
  
  id: "{{PAGE_ID}}",
  
  authorization: "Bearer secret_t1CdN9S8yicG5eWLUOfhcWaOscVnFXns",
  
  contentType: "application/json",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: "{\n\t\"children\": [\n\t\t{\n\t\t\t\"object\": \"block\",\n\t\t\t\"type\": \"heading_2\",\n\t\t\t\"heading_2\": {\n\t\t\t\t\"rich_text\": [{ \"type\": \"text\", \"text\": { \"content\": \"Lacinato kale\" } }]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"object\": \"block\",\n\t\t\t\"type\": \"paragraph\",\n\t\t\t\"paragraph\": {\n\t\t\t\t\"rich_text\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"text\",\n\t\t\t\t\t\t\"text\": {\n\t\t\t\t\t\t\t\"content\": \"Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.\",\n\t\t\t\t\t\t\t\"link\": { \"url\": \"https://en.wikipedia.org/wiki/Lacinato_kale\" }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t]\n}",
};

const data = await apiInstance.v1BlocksIdChildrenPatch(request);
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
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * Set-Cookie -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * cf-request-id -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1BlocksIdDelete**
> any v1BlocksIdDelete()


### Example


```typescript
import { createConfiguration, BlocksApi } from '';
import type { BlocksApiV1BlocksIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlocksApi(configuration);

const request: BlocksApiV1BlocksIdDeleteRequest = {
  
  id: "{{BLOCK_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1BlocksIdDelete(request);
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
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1BlocksIdGet**
> any v1BlocksIdGet()


### Example


```typescript
import { createConfiguration, BlocksApi } from '';
import type { BlocksApiV1BlocksIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlocksApi(configuration);

const request: BlocksApiV1BlocksIdGetRequest = {
  
  id: "{{BLOCK_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1BlocksIdGet(request);
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
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * Set-Cookie -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1BlocksIdPatch**
> any v1BlocksIdPatch()

This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)

### Example


```typescript
import { createConfiguration, BlocksApi } from '';
import type { BlocksApiV1BlocksIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlocksApi(configuration);

const request: BlocksApiV1BlocksIdPatchRequest = {
  
  id: "{{BLOCK_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: {},
};

const data = await apiInstance.v1BlocksIdPatch(request);
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
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * Set-Cookie -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


