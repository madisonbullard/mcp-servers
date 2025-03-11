# .CommentsApi

All URIs are relative to *https://api.notion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CommentsGet**](CommentsApi.md#v1CommentsGet) | **GET** /v1/comments | Retrieve comments
[**v1CommentsPost**](CommentsApi.md#v1CommentsPost) | **POST** /v1/comments | Add comment to discussion


# **v1CommentsGet**
> any v1CommentsGet()

Retrieve a user object using the ID specified in the request path.

### Example


```typescript
import { createConfiguration, CommentsApi } from '';
import type { CommentsApiV1CommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsApi(configuration);

const request: CommentsApiV1CommentsGetRequest = {
  
  notionVersion: "{{NOTION_VERSION}}",
  
  blockId: "{{BLOCK_ID}}",
  
  pageSize: 100,
};

const data = await apiInstance.v1CommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notionVersion** | [**string**] |  | (optional) defaults to undefined
 **blockId** | [**string**] |  | (optional) defaults to undefined
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
**200** | OK |  * Content-Security-Policy -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-Permitted-Cross-Domain-Policies -  <br>  * Referrer-Policy -  <br>  * X-XSS-Protection -  <br>  * Content-Type -  <br>  * Content-Length -  <br>  * ETag -  <br>  * Vary -  <br>  * Date -  <br>  * Connection -  <br>  * Keep-Alive -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1CommentsPost**
> any v1CommentsPost()


### Example


```typescript
import { createConfiguration, CommentsApi } from '';
import type { CommentsApiV1CommentsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsApi(configuration);

const request: CommentsApiV1CommentsPostRequest = {
  
  contentType: "application/json",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: "{\n    \"discussion_id\": \"{{DISCUSSION_ID}}\",\n    \"rich_text\": [\n        {\n            \"text\": {\n                \"content\": \"https://www.healthline.com/nutrition/10-proven-benefits-of-kale\",\n                \"link\": {\n                    \"type\": \"url\",\n                    \"url\": \"https://www.healthline.com/nutrition/10-proven-benefits-of-kale\"\n                }\n            }\n        }\n    ]\n}",
};

const data = await apiInstance.v1CommentsPost(request);
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
**200** | OK |  * Content-Security-Policy -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-Permitted-Cross-Domain-Policies -  <br>  * Referrer-Policy -  <br>  * X-XSS-Protection -  <br>  * Content-Type -  <br>  * Content-Length -  <br>  * ETag -  <br>  * Vary -  <br>  * Date -  <br>  * Connection -  <br>  * Keep-Alive -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


