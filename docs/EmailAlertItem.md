
# EmailAlertItem


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`name` | string
`email` | string
`events` | Array&lt;string&gt;
`active` | boolean
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { EmailAlertItem } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "name": null,
  "email": null,
  "events": null,
  "active": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EmailAlertItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailAlertItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


