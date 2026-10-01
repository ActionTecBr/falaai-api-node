
# RiskAuditDetectionsV2


## Properties

Name | Type
------------ | -------------
`violations` | [Array&lt;RiskAuditDetectionItemV2&gt;](RiskAuditDetectionItemV2.md)
`positives` | [Array&lt;RiskAuditDetectionItemV2&gt;](RiskAuditDetectionItemV2.md)
`clientRiskAlerts` | Array&lt;{ [key: string]: any; }&gt;
`clientBehaviorAlerts` | Array&lt;{ [key: string]: any; }&gt;
`clientNegatives` | [Array&lt;RiskAuditDetectionItemV2&gt;](RiskAuditDetectionItemV2.md)

## Example

```typescript
import type { RiskAuditDetectionsV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "violations": null,
  "positives": null,
  "clientRiskAlerts": null,
  "clientBehaviorAlerts": null,
  "clientNegatives": null,
} satisfies RiskAuditDetectionsV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditDetectionsV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


