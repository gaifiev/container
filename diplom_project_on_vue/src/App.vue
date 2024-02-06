<template>
  <div>
    <HeaderVue />
    <router-view></router-view>
    <RegistrationVue />
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "./components/blocks/Header.vue";
import RegistrationVue from "./components/blocks/Registration.vue";
import FooterVue from "./components/blocks/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    RegistrationVue,
    FooterVue,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
</style>
