# EmailAlertsApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmailAlertV1EmailAlertsPost**](EmailAlertsApi.md#createemailalertv1emailalertspost) | **POST** /v1/email-alerts | Create email alert |
| [**deleteEmailAlertV1EmailAlertsAlertIdDelete**](EmailAlertsApi.md#deleteemailalertv1emailalertsalertiddelete) | **DELETE** /v1/email-alerts/{alert_id} | Delete email alert |
| [**listEmailAlertsV1EmailAlertsGet**](EmailAlertsApi.md#listemailalertsv1emailalertsget) | **GET** /v1/email-alerts | List email alerts |
| [**updateEmailAlertV1EmailAlertsAlertIdPut**](EmailAlertsApi.md#updateemailalertv1emailalertsalertidput) | **PUT** /v1/email-alerts/{alert_id} | Update email alert |



## createEmailAlertV1EmailAlertsPost

> EmailAlertItem createEmailAlertV1EmailAlertsPost(createEmailAlertRequest)

Create email alert

### Example

```ts
import {
  Configuration,
  EmailAlertsApi,
} from 'falaai-api';
import type { CreateEmailAlertV1EmailAlertsPostRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailAlertsApi(config);

  const body = {
    // CreateEmailAlertRequest
    createEmailAlertRequest: ...,
  } satisfies CreateEmailAlertV1EmailAlertsPostRequest;

  try {
    const data = await api.createEmailAlertV1EmailAlertsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEmailAlertRequest** | [CreateEmailAlertRequest](CreateEmailAlertRequest.md) |  | |

### Return type

[**EmailAlertItem**](EmailAlertItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEmailAlertV1EmailAlertsAlertIdDelete

> EmailAlertMessageResponse deleteEmailAlertV1EmailAlertsAlertIdDelete(alertId)

Delete email alert

### Example

```ts
import {
  Configuration,
  EmailAlertsApi,
} from 'falaai-api';
import type { DeleteEmailAlertV1EmailAlertsAlertIdDeleteRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailAlertsApi(config);

  const body = {
    // string
    alertId: alertId_example,
  } satisfies DeleteEmailAlertV1EmailAlertsAlertIdDeleteRequest;

  try {
    const data = await api.deleteEmailAlertV1EmailAlertsAlertIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **alertId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**EmailAlertMessageResponse**](EmailAlertMessageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEmailAlertsV1EmailAlertsGet

> EmailAlertListResponse listEmailAlertsV1EmailAlertsGet(page, limit)

List email alerts

### Example

```ts
import {
  Configuration,
  EmailAlertsApi,
} from 'falaai-api';
import type { ListEmailAlertsV1EmailAlertsGetRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailAlertsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ListEmailAlertsV1EmailAlertsGetRequest;

  try {
    const data = await api.listEmailAlertsV1EmailAlertsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**EmailAlertListResponse**](EmailAlertListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateEmailAlertV1EmailAlertsAlertIdPut

> EmailAlertMessageResponse updateEmailAlertV1EmailAlertsAlertIdPut(alertId, updateEmailAlertRequest)

Update email alert

### Example

```ts
import {
  Configuration,
  EmailAlertsApi,
} from 'falaai-api';
import type { UpdateEmailAlertV1EmailAlertsAlertIdPutRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailAlertsApi(config);

  const body = {
    // string
    alertId: alertId_example,
    // UpdateEmailAlertRequest
    updateEmailAlertRequest: ...,
  } satisfies UpdateEmailAlertV1EmailAlertsAlertIdPutRequest;

  try {
    const data = await api.updateEmailAlertV1EmailAlertsAlertIdPut(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **alertId** | `string` |  | [Defaults to `undefined`] |
| **updateEmailAlertRequest** | [UpdateEmailAlertRequest](UpdateEmailAlertRequest.md) |  | |

### Return type

[**EmailAlertMessageResponse**](EmailAlertMessageResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

