
# RiskAuditAppliedActionV2


## Properties

Name | Type
------------ | -------------
`actionType` | string
`label` | string
`description` | string
`priority` | string
`color` | string
`icon` | string
`condition` | string
`reason` | string

## Example

```typescript
import type { RiskAuditAppliedActionV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "actionType": null,
  "label": null,
  "description": null,
  "priority": null,
  "color": null,
  "icon": null,
  "condition": null,
  "reason": null,
} satisfies RiskAuditAppliedActionV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditAppliedActionV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


