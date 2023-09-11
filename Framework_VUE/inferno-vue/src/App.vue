<template>
  <div id="app">
    <HeaderComponentVue></HeaderComponentVue>
    <TopComponentVue></TopComponentVue>
    <CardsComponentVue></CardsComponentVue>
    <CounterComponentVue></CounterComponentVue>
    <BlogComponent></BlogComponent>
    <FooterComponentVue></FooterComponentVue>
  </div>
</template>

<script>
import HeaderComponentVue from "./components/blocks/HeaderComponent.vue";
import TopComponentVue from "./components/blocks/TopComponent.vue";
import CardsComponentVue from "./components/blocks/CardsComponent.vue";
import CounterComponentVue from './components/blocks/CounterComponent.vue';
import BlogComponent from "./components/pages/BlogComponent.vue";
import FooterComponentVue from './components/blocks/FooterComponent.vue';


export default {
  name: "App",
  components: {
    HeaderComponentVue,
    TopComponentVue,
    CardsComponentVue,
    CounterComponentVue,
    BlogComponent,
    FooterComponentVue,
  },
};

</script>

<style></style>
