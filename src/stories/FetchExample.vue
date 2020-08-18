<template>
  <div>
    <h1>the list of languages</h1>
    <li v-for="(item, key, index) in frameworks" :key="index">
      {{ key }} - {{ item }}
    </li>
  </div>
</template>

<script>
export default {
  name: "Fetch-Example",
  props: {
    frameworks: {
      type: Object
    }
  },
  async created() {
    //console.log(`fetch:=>${JSON.stringify(this.fetch, null, 2)}`);
    const GITHUB_URL = "https://api.github.com";
    /* fetch(`${GITHUB_URL}/repos/facebook/react/languages`).then(result =>
      console.log(
        `this is the api result=>${JSON.stringify(result.json(), 2, null)}`
      )
    ); */
    const response = await fetch(
      `${GITHUB_URL}/repos/facebook/react/languages`
    );
    const data = await response.json();
    console.log(`data obtained from async call: ${JSON.stringify(data,null,2)}`)
    this.frameworks = data;
  },
 /*  mounted() {
    console.log(`mounted fetch:=>${JSON.stringify(this.$props, null, 2)}`);
  } */
};
</script>
