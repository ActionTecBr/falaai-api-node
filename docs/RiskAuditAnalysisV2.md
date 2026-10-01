
# RiskAuditAnalysisV2


## Properties

Name | Type
------------ | -------------
`globalMetrics` | { [key: string]: any; }
`finalAnalysis` | { [key: string]: any; }
`frameworks` | { [key: string]: any; }

## Example

```typescript
import type { RiskAuditAnalysisV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "globalMetrics": null,
  "finalAnalysis": null,
  "frameworks": null,
} satisfies RiskAuditAnalysisV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditAnalysisV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


