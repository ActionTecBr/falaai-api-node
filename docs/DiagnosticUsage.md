
# DiagnosticUsage


## Properties

Name | Type
------------ | -------------
`characters` | number
`creditsConsumed` | number
`processingMs` | number

## Example

```typescript
import type { DiagnosticUsage } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "characters": null,
  "creditsConsumed": null,
  "processingMs": null,
} satisfies DiagnosticUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


