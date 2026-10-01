
# DiagnosticAnalysisMap


## Properties

Name | Type
------------ | -------------
`dialogueSummary` | [DiagnosticTextAnalysis](DiagnosticTextAnalysis.md)
`contactReason` | [DiagnosticTextAnalysis](DiagnosticTextAnalysis.md)
`identifiedAction` | [DiagnosticCategoricalAnalysis](DiagnosticCategoricalAnalysis.md)
`identifiedLabel` | [DiagnosticCategoricalAnalysis](DiagnosticCategoricalAnalysis.md)
`sentiment` | [DiagnosticCategoricalAnalysis](DiagnosticCategoricalAnalysis.md)
`participantsIdentified` | [Array&lt;ParticipantDiagnostic&gt;](ParticipantDiagnostic.md)

## Example

```typescript
import type { DiagnosticAnalysisMap } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "dialogueSummary": null,
  "contactReason": null,
  "identifiedAction": null,
  "identifiedLabel": null,
  "sentiment": null,
  "participantsIdentified": null,
} satisfies DiagnosticAnalysisMap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticAnalysisMap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


