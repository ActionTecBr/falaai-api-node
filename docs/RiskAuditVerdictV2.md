
# RiskAuditVerdictV2


## Properties

Name | Type
------------ | -------------
`label` | string
`levelCode` | string
`color` | string
`icon` | string
`riskMatrix` | { [key: string]: any; }
`appliedActions` | [Array&lt;RiskAuditAppliedActionV2&gt;](RiskAuditAppliedActionV2.md)
`decisionDetails` | any

## Example

```typescript
import type { RiskAuditVerdictV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "levelCode": null,
  "color": null,
  "icon": null,
  "riskMatrix": null,
  "appliedActions": null,
  "decisionDetails": null,
} satisfies RiskAuditVerdictV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditVerdictV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


