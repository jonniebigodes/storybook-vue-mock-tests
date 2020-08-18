module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.alias['isomorphic-fetch'] = require.resolve('../__mocks__/isomorphic-fetch.js');
    return config;
  },
}