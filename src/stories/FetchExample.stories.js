import FetchExample from "./FetchExample.vue";

export default {
  title: "App",
  component: FetchExample
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FetchExample },
  template: "<FetchExample />"
});

export const Success = Template.bind({});

Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      "C++": 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189
    }
  }
};
