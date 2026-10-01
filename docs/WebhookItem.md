
# WebhookItem


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`name` | string
`url` | string
`secret` | string
`events` | Array&lt;string&gt;
`active` | boolean
`retryEnabled` | boolean
`lastDeliveryAt` | string
`lastStatus` | number
`failureCount` | number
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { WebhookItem } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "name": null,
  "url": null,
  "secret": null,
  "events": null,
  "active": null,
  "retryEnabled": null,
  "lastDeliveryAt": null,
  "lastStatus": null,
  "failureCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies WebhookItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


