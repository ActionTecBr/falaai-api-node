
# AudioInputMeta


## Properties

Name | Type
------------ | -------------
`durationS` | number
`originalFormat` | string
`codec` | string
`sampleRate` | number
`channels` | number

## Example

```typescript
import type { AudioInputMeta } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "durationS": null,
  "originalFormat": null,
  "codec": null,
  "sampleRate": null,
  "channels": null,
} satisfies AudioInputMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioInputMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


