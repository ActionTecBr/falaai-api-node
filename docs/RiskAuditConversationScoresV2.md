
# RiskAuditConversationScoresV2


## Properties

Name | Type
------------ | -------------
`consolidatedScore` | number
`violationDensityPerMin` | number
`sentimentTrend` | any
`pctTurnsWithViolation` | number
`mostCriticalTurn` | any
`positiveNegativeRatio` | any
`globalRiskSeverity` | string
`globalRiskSeverityLabel` | string
`globalRiskSeverityColor` | string
`riskLikelihoodAvg` | number
`riskImpactAvg` | number

## Example

```typescript
import type { RiskAuditConversationScoresV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "consolidatedScore": null,
  "violationDensityPerMin": null,
  "sentimentTrend": null,
  "pctTurnsWithViolation": null,
  "mostCriticalTurn": null,
  "positiveNegativeRatio": null,
  "globalRiskSeverity": null,
  "globalRiskSeverityLabel": null,
  "globalRiskSeverityColor": null,
  "riskLikelihoodAvg": null,
  "riskImpactAvg": null,
} satisfies RiskAuditConversationScoresV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditConversationScoresV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


