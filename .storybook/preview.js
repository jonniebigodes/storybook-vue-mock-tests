import { decorator } from '../__mocks__/isomorphic-fetch';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// Add the decorator to all stories
export const decorators = [decorator];