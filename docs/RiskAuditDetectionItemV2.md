
# RiskAuditDetectionItemV2


## Properties

Name | Type
------------ | -------------
`turn` | number
`interlocutor` | string
`role` | string
`timestampStartS` | number
`timestampEndS` | number
`timestampFormatted` | string
`termText` | string
`suggestedTermForBank` | any
`category` | string
`categoryLabel` | string
`categoryColor` | string
`categoryIcon` | string
`criticality` | string
`categoryThreshold` | number
`categoryType` | string
`categoryGroup` | string
`nature` | string
`llmConfidence` | number
`reason` | string
`isValidContext` | boolean
`riskProbability` | number
`riskImpact` | number
`categoryWeight` | number
`turnSentiment` | string
`intensity` | any
`modApplied` | number
`macApplied` | number
`mvadApplied` | number
`modFormula` | string
`macDetails` | Array&lt;{ [key: string]: any; }&gt;
`calibrationReason` | string
`finalScore` | number
`finalScoreFormula` | string
`conversationLimit` | any
`applySaturation` | boolean
`blockRepetition` | boolean
`status` | string
`effectiveImpact` | number
`saturationFactor` | number
`saturationFormula` | string
`thresholdFormula` | string
`blockedFormula` | string
`reconciliationNote` | string
`violatedFrameworks` | Array&lt;any&gt;
`citationFidelity` | boolean
`subcategory` | string
`subcategoryLabel` | string

## Example

```typescript
import type { RiskAuditDetectionItemV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "turn": null,
  "interlocutor": null,
  "role": null,
  "timestampStartS": null,
  "timestampEndS": null,
  "timestampFormatted": null,
  "termText": null,
  "suggestedTermForBank": null,
  "category": null,
  "categoryLabel": null,
  "categoryColor": null,
  "categoryIcon": null,
  "criticality": null,
  "categoryThreshold": null,
  "categoryType": null,
  "categoryGroup": null,
  "nature": null,
  "llmConfidence": null,
  "reason": null,
  "isValidContext": null,
  "riskProbability": null,
  "riskImpact": null,
  "categoryWeight": null,
  "turnSentiment": null,
  "intensity": null,
  "modApplied": null,
  "macApplied": null,
  "mvadApplied": null,
  "modFormula": null,
  "macDetails": null,
  "calibrationReason": null,
  "finalScore": null,
  "finalScoreFormula": null,
  "conversationLimit": null,
  "applySaturation": null,
  "blockRepetition": null,
  "status": null,
  "effectiveImpact": null,
  "saturationFactor": null,
  "saturationFormula": null,
  "thresholdFormula": null,
  "blockedFormula": null,
  "reconciliationNote": null,
  "violatedFrameworks": null,
  "citationFidelity": null,
  "subcategory": null,
  "subcategoryLabel": null,
} satisfies RiskAuditDetectionItemV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditDetectionItemV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


