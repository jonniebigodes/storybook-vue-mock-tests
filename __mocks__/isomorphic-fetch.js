let nextJson;
// This export isn't necessary if we don't actually use the polyfill
export default async function fetch() {
  // logs the function call and the content of nextJson
  console.log(`iso fetch:${JSON.stringify(nextJson, null, 2)}`);
  if (nextJson) {
    return {
      json: () => nextJson,
    };
  }
  nextJson = null;
}
// This does the trick
window.fetch = fetch;

// the decorator to be used in ./storybook/preview to apply the mock to all stories

export function decorator(story, { parameters }) {
  if (parameters && parameters.fetch) {
    nextJson = parameters.fetch.json;
  }
  console.log(`decorator:${JSON.stringify(nextJson, null, 2)}`);
  return story();
}
