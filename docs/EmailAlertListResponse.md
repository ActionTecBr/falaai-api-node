
# EmailAlertListResponse


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;EmailAlertItem&gt;](EmailAlertItem.md)
`page` | number
`limit` | number

## Example

```typescript
import type { EmailAlertListResponse } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "page": null,
  "limit": null,
} satisfies EmailAlertListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailAlertListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


