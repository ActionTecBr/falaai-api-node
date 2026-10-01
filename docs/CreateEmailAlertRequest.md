
# CreateEmailAlertRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`email` | string
`events` | [Array&lt;EmailEvent&gt;](EmailEvent.md)

## Example

```typescript
import type { CreateEmailAlertRequest } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "email": null,
  "events": null,
} satisfies CreateEmailAlertRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEmailAlertRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


