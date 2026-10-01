
# RiskAuditV2

Response V2 (build_public_response_v2) — blocos logicos EN-US. Fonte: response_builder.py.

## Properties

Name | Type
------------ | -------------
`meta` | [RiskAuditMetaV2](RiskAuditMetaV2.md)
`participants` | [RiskAuditParticipantsV2](RiskAuditParticipantsV2.md)
`verdict` | [RiskAuditVerdictV2](RiskAuditVerdictV2.md)
`scores` | [RiskAuditScoresV2](RiskAuditScoresV2.md)
`detections` | [RiskAuditDetectionsV2](RiskAuditDetectionsV2.md)
`analysis` | [RiskAuditAnalysisV2](RiskAuditAnalysisV2.md)
`timeline` | [RiskAuditTimelineV2](RiskAuditTimelineV2.md)
`audioEventModel` | [RiskAuditAudioEventModelV2](RiskAuditAudioEventModelV2.md)
`categoriesSummary` | { [key: string]: any; }
`indexer` | [RiskAuditIndexerV2](RiskAuditIndexerV2.md)
`summary` | [RiskAuditSummaryV2](RiskAuditSummaryV2.md)
`actionsI18n` | { [key: string]: any; }
`auditDecisions` | [RiskAuditAuditDecisionsV2](RiskAuditAuditDecisionsV2.md)
`scoringExplanation` | [RiskAuditScoringExplanationV2](RiskAuditScoringExplanationV2.md)
`htmlReport` | string

## Example

```typescript
import type { RiskAuditV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "participants": null,
  "verdict": null,
  "scores": null,
  "detections": null,
  "analysis": null,
  "timeline": null,
  "audioEventModel": null,
  "categoriesSummary": null,
  "indexer": null,
  "summary": null,
  "actionsI18n": null,
  "auditDecisions": null,
  "scoringExplanation": null,
  "htmlReport": null,
} satisfies RiskAuditV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


