
# UpdateWebhookRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`url` | string
`events` | [Array&lt;WebhookEvent&gt;](WebhookEvent.md)
`retryEnabled` | boolean
`active` | boolean

## Example

```typescript
import type { UpdateWebhookRequest } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "url": null,
  "events": null,
  "retryEnabled": null,
  "active": null,
} satisfies UpdateWebhookRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateWebhookRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


