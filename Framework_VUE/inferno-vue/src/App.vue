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
import HeaderComponentVue from "./components/HeaderComponent.vue";
import TopComponentVue from "./components/TopComponent.vue";
import CardsComponentVue from "./components/CardsComponent.vue";
import CounterComponentVue from './components/CounterComponent.vue';
import BlogComponent from "./components/BlogComponent.vue";
import FooterComponentVue from './components/FooterComponent.vue';


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
