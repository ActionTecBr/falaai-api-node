
# UsageLogItem


## Properties

Name | Type
------------ | -------------
`id` | string
`endpoint` | string
`creditsCost` | number
`status` | string
`errorsCount` | number
`createdAt` | string

## Example

```typescript
import type { UsageLogItem } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "endpoint": null,
  "creditsCost": null,
  "status": null,
  "errorsCount": null,
  "createdAt": null,
} satisfies UsageLogItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageLogItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


