<template>
  <div>
    <router-link to="/home"></router-link>
    <MainInfo />
    <Slider />
    <Scope />
    <ListDoctors />
    <Statistics />
    <Reviews />
  </div>
</template>

<script>
import MainInfo from "../blocks/MainInfo.vue";
import Slider from "../blocks/Slider.vue";
import Scope from "../blocks/Scope.vue";
import ListDoctors from "../blocks/ListDoctors.vue";
import Statistics from "../blocks/Statistics.vue";
import Reviews from "../blocks/Reviews.vue";

export default {
  name: "HomeVue",

  components: {
    MainInfo,
    Slider,
    Scope,
    ListDoctors,
    Statistics,
    Reviews,
  },

  computed: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
