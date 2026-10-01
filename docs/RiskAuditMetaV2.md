
# RiskAuditMetaV2


## Properties

Name | Type
------------ | -------------
`id` | string
`object` | string
`callDurationS` | number
`analyzedAt` | string
`usage` | [RiskAuditUsageV2](RiskAuditUsageV2.md)
`clientReferenceId` | string

## Example

```typescript
import type { RiskAuditMetaV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "object": null,
  "callDurationS": null,
  "analyzedAt": null,
  "usage": null,
  "clientReferenceId": null,
} satisfies RiskAuditMetaV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditMetaV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


