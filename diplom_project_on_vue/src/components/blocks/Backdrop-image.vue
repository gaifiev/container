<template>
  <section class="backdrop-image">
    <img
      class="backdrop-image__image"
      src="/img/aboutUs/Rectangle39.png"
      alt="photo"
    />
  </section>
</template>

<script>
export default {
  name: "BackdropImageVue",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>

@import "@/assets/css/style.scss";

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: "Poppins", sans-serif;
    background-color: #f7fcfd;
}

.container {
    max-width: 1920px;
    margin: 0 auto;
}
.backdrop-image {
  margin-top: 32px;
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    right: 0;
  }
}
</style>
