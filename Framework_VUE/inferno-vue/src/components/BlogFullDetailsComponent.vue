<template>
  <div>
    <div>
      <p>{{ fullInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBlogFullDetailsComponent",

  props: ["fullInfo"],
  
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
