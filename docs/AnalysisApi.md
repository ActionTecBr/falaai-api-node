# AnalysisApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDiagnosticV1AnalyzeDiagnosticPost**](AnalysisApi.md#creatediagnosticv1analyzediagnosticpost) | **POST** /v1/analyze/diagnostic | Analyze a call transcript — 5 parallel analyses |
| [**createRiskAuditV1AnalyzeRiskAuditPost**](AnalysisApi.md#createriskauditv1analyzeriskauditpost) | **POST** /v1/analyze/riskAudit | Compliance Risk Audit — conversation compliance analysis |



## createDiagnosticV1AnalyzeDiagnosticPost

> DiagnosticResponse createDiagnosticV1AnalyzeDiagnosticPost(diagnosticRequest)

Analyze a call transcript — 5 parallel analyses

Analyzes a call transcript and returns six structured blocks: dialogue summary, contact reason, identified action, theme label, predominant sentiment and identified participants with roles, names, confidence and evidence; use it for a fast, generic diagnosis of what happened in a call, and use /v1/analyze/riskAudit instead when the goal is compliance violation auditing. Provide at least one of dialog (primary source: diarized transcript in the format \&#39;Speaker 1: [00:00:00.540 - 00:00:01.139] text\&#39;, speaker labels accepted in any case as Speaker, Interlocutor, Hablante, Locutor or Orador plus number) or text (plain transcript fallback), each up to 300,000 characters; when dialog is used duration_seconds is required by the schema and, when provided, must be &gt;&#x3D; the last turn end time. Required: language; optional: model (always \&#39;falaai-diagnostic-1\&#39;), audio_events, response_language (language of the results, defaulting to language), participants (up to 10 with interlocutor and optional name and role agent/client/bot, ground truth when the role is informed and otherwise inferred), call_direction (inferred when omitted), client_reference_id (echoed verbatim, charset [A-Za-z0-9 _/:.-], max 60). Returns id, object \&#39;analysis\&#39;, response_language, analysis with the six blocks, usage (characters, credits_consumed, processing_ms) and html_report (base64 gzip) only when dialog is provided; with text-only input the participant roles are forced to confidence \&#39;low\&#39;. Credits are charged per character of the transcript (0.03/char, counted without speaker labels, timestamps and inline expression tokens, minimum 500 characters, plus 50 characters per audio event) and the amount charged is returned in usage.credits_consumed. Stateless: neither the transcript nor the analysis is persisted (only billing and usage metadata is logged), protecting personal data under LGPD.

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

Runs a compliance risk audit on a diarized call transcript, detecting violations and positives, applying the ISO 31000 risk matrix, classifying the conversation into a level and returning the verdict with the applied actions and the NIST/OWASP risk framework enquadramento; use it for compliance and quality audits of company-agent-to-client calls, not for generic conversation summarization. Required fields: dialog (diarized transcript in the format \&#39;Speaker 1: [00:00:00.540 - 00:00:01.139] text\&#39;, speaker labels accepted in any case as Speaker, Interlocutor, Hablante, Locutor or Orador plus number; plain text is not accepted; max 300,000 characters), duration_seconds (total audio duration in seconds, must be &gt;&#x3D; the last turn end time) and language plus response_language (only pt-BR, en-US or es-ES). Optional: model (always \&#39;falaai-risk-audit-1\&#39;), audio_events (up to 500, each requiring event and start_s), participants (up to 10 with interlocutor and role agent/client/bot, ground truth when provided, else inferred), call_direction (inbound/outbound, inferred when omitted), response_format (only \&#39;v2\&#39;), client_reference_id (echoed verbatim, charset [A-Za-z0-9 _/:.-], max 60). Returns response (V2) with meta+usage, participants, verdict with level and applied actions, scores, detections (violations, positives, client alerts), analysis frameworks, timeline, categories_summary, executive summary, scoring explanation and an HTML report (gzip+base64). Credits are charged per character of the spoken transcript (0.09/char, counted without speaker labels and inline expression tokens, minimum 1,000 characters, plus 50 characters per audio event) and a minimum-cost guard may raise the final amount, so response.meta.usage.credits_consumed is the amount actually charged. Stateless: neither the transcript nor the analysis is persisted (only billing and usage metadata is logged), protecting personal data under LGPD.

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

