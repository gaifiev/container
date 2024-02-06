<template>
  <div>
    <router-link to="/blog"></router-link>
    <FunctionalBlog />
  </div>
</template>

<script>
import FunctionalBlog from "../blocks/FunctionalBlog.vue";

export default {
  name: "BlogVue",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { FunctionalBlog },
};
</script>

<style lang="scss" scoped></style>
