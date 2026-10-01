# WebhooksApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhookV1WebhooksPost**](WebhooksApi.md#createwebhookv1webhookspost) | **POST** /v1/webhooks | Create webhook |
| [**deleteWebhookV1WebhooksWebhookIdDelete**](WebhooksApi.md#deletewebhookv1webhookswebhookiddelete) | **DELETE** /v1/webhooks/{webhook_id} | Delete webhook |
| [**listWebhooksV1WebhooksGet**](WebhooksApi.md#listwebhooksv1webhooksget) | **GET** /v1/webhooks | List webhooks |
| [**updateWebhookV1WebhooksWebhookIdPut**](WebhooksApi.md#updatewebhookv1webhookswebhookidput) | **PUT** /v1/webhooks/{webhook_id} | Update webhook |



## createWebhookV1WebhooksPost

> WebhookItem createWebhookV1WebhooksPost(createWebhookRequest)

Create webhook

Creates a subscription for alert events (10 alerts). Payload delivered: WebhookPayload(event, data, timestamp) with HMAC FalaAI-Signature. To verify the origin, recompute HMAC-SHA256 of \&quot;timestamp.body\&quot; with your secret.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'falaai-api';
import type { CreateWebhookV1WebhooksPostRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookRequest
    createWebhookRequest: ...,
  } satisfies CreateWebhookV1WebhooksPostRequest;

  try {
    const data = await api.createWebhookV1WebhooksPost(body);
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
| **createWebhookRequest** | [CreateWebhookRequest](CreateWebhookRequest.md) |  | |

### Return type

[**WebhookItem**](WebhookItem.md)

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


## deleteWebhookV1WebhooksWebhookIdDelete

> MessageResponse deleteWebhookV1WebhooksWebhookIdDelete(webhookId)

Delete webhook

Deletes a webhook subscription by ID.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'falaai-api';
import type { DeleteWebhookV1WebhooksWebhookIdDeleteRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    webhookId: webhookId_example,
  } satisfies DeleteWebhookV1WebhooksWebhookIdDeleteRequest;

  try {
    const data = await api.deleteWebhookV1WebhooksWebhookIdDelete(body);
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
| **webhookId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**MessageResponse**](MessageResponse.md)

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


## listWebhooksV1WebhooksGet

> WebhookListResponse listWebhooksV1WebhooksGet(page, limit)

List webhooks

Lists the authenticated user\&#39;s webhooks (10 alerts). Paginated. Includes the URL signature secret (always visible to the owner).

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'falaai-api';
import type { ListWebhooksV1WebhooksGetRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // number | Pagina (1-indexed) (optional)
    page: 56,
    // number | Itens por pagina (max 100) (optional)
    limit: 56,
  } satisfies ListWebhooksV1WebhooksGetRequest;

  try {
    const data = await api.listWebhooksV1WebhooksGet(body);
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
| **page** | `number` | Pagina (1-indexed) | [Optional] [Defaults to `1`] |
| **limit** | `number` | Itens por pagina (max 100) | [Optional] [Defaults to `20`] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

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


## updateWebhookV1WebhooksWebhookIdPut

> MessageResponse updateWebhookV1WebhooksWebhookIdPut(webhookId, updateWebhookRequest)

Update webhook

Updates the webhook\&#39;s name/url/events/retry_enabled/active. Valid events: 10 alerts.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'falaai-api';
import type { UpdateWebhookV1WebhooksWebhookIdPutRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    webhookId: webhookId_example,
    // UpdateWebhookRequest
    updateWebhookRequest: ...,
  } satisfies UpdateWebhookV1WebhooksWebhookIdPutRequest;

  try {
    const data = await api.updateWebhookV1WebhooksWebhookIdPut(body);
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
| **webhookId** | `string` |  | [Defaults to `undefined`] |
| **updateWebhookRequest** | [UpdateWebhookRequest](UpdateWebhookRequest.md) |  | |

### Return type

[**MessageResponse**](MessageResponse.md)

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

