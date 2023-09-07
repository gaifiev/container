<template>
  <div id="app">
    <TopComponentVue></TopComponentVue>
    <CardsComponentVue></CardsComponentVue>
    <CounterComponentVue></CounterComponentVue>
    <BlogComponent></BlogComponent>
  </div>
</template>

<script>

import TopComponentVue from "./components/TopComponent.vue";
import CardsComponentVue from "./components/CardsComponent.vue";
import CounterComponentVue from "./components/CounterComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";

export default {
  name: "App",
  components: {
    TopComponentVue,
    CardsComponentVue,
    CounterComponentVue,
    BlogComponent,
  },
};
</script>

<style></style>
