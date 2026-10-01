
# TranscriptionUsage


## Properties

Name | Type
------------ | -------------
`audioSeconds` | number
`creditsConsumed` | number
`processingMs` | number

## Example

```typescript
import type { TranscriptionUsage } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "audioSeconds": null,
  "creditsConsumed": null,
  "processingMs": null,
} satisfies TranscriptionUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TranscriptionUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


