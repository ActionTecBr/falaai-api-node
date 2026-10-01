# AnalysisApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDiagnosticV1AnalyzeDiagnosticPost**](AnalysisApi.md#creatediagnosticv1analyzediagnosticpost) | **POST** /v1/analyze/diagnostic | Analyze a call transcript — 5 parallel analyses |
| [**createRiskAuditV1AnalyzeRiskAuditPost**](AnalysisApi.md#createriskauditv1analyzeriskauditpost) | **POST** /v1/analyze/riskAudit | Compliance Risk Audit — conversation compliance analysis |



## createDiagnosticV1AnalyzeDiagnosticPost

> DiagnosticResponse createDiagnosticV1AnalyzeDiagnosticPost(diagnosticRequest)

Analyze a call transcript — 5 parallel analyses

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from 'falaai-api';
import type { CreateDiagnosticV1AnalyzeDiagnosticPostRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalysisApi(config);

  const body = {
    // DiagnosticRequest
    diagnosticRequest: ...,
  } satisfies CreateDiagnosticV1AnalyzeDiagnosticPostRequest;

  try {
    const data = await api.createDiagnosticV1AnalyzeDiagnosticPost(body);
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
| **diagnosticRequest** | [DiagnosticRequest](DiagnosticRequest.md) |  | |

### Return type

[**DiagnosticResponse**](DiagnosticResponse.md)

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


## createRiskAuditV1AnalyzeRiskAuditPost

> RiskAuditV2Response createRiskAuditV1AnalyzeRiskAuditPost(riskAuditRequest)

Compliance Risk Audit — conversation compliance analysis

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from 'falaai-api';
import type { CreateRiskAuditV1AnalyzeRiskAuditPostRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalysisApi(config);

  const body = {
    // RiskAuditRequest
    riskAuditRequest: ...,
  } satisfies CreateRiskAuditV1AnalyzeRiskAuditPostRequest;

  try {
    const data = await api.createRiskAuditV1AnalyzeRiskAuditPost(body);
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
| **riskAuditRequest** | [RiskAuditRequest](RiskAuditRequest.md) |  | |

### Return type

[**RiskAuditV2Response**](RiskAuditV2Response.md)

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

