<template>
  <section class="backlong-service">
    <img
      class="backlong__image"
      src="/img/img_our_services/longIMG.png"
      alt="photo"
    />
  </section>
</template>

<script>
export default {
  name: "BacklongVue",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f7fcfd;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.container {
  max-width: 1920px;
  margin: 0 auto;
}
.backlong {
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
