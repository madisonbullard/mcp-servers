# .UsersApi

All URIs are relative to *https://api.notion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1UsersGet**](UsersApi.md#v1UsersGet) | **GET** /v1/users | List all users
[**v1UsersIdGet**](UsersApi.md#v1UsersIdGet) | **GET** /v1/users/{id} | Retrieve a user
[**v1UsersMeGet**](UsersApi.md#v1UsersMeGet) | **GET** /v1/users/me | Retrieve your token’s bot user


# **v1UsersGet**
> any v1UsersGet()

Returns a paginated list of user objects for a workspace

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiV1UsersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiV1UsersGetRequest = {
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1UsersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **v1UsersIdGet**
> any v1UsersIdGet()

Retrieve a user object using the ID specified in the request path.

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiV1UsersIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiV1UsersIdGetRequest = {
  
  id: "{{USER_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1UsersIdGet(request);
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

# **v1UsersMeGet**
> any v1UsersMeGet()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiV1UsersMeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiV1UsersMeGetRequest = {
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1UsersMeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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


