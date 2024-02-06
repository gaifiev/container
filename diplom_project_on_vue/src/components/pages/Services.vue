<template>
  <div>
    <router-link to="/services"></router-link>
    <Backlong/>
    <InfoItem></InfoItem>
    <Scope/>
    <Statistics/>
  </div>
</template>

<script>
import Backlong from "../blocks/Backlong.vue"
import InfoItem from "../blocks/InfoItem.vue";
import Scope from "../blocks/Scope.vue";
import Statistics from "../blocks/Statistics.vue";

export default {
  name: "ServicesVue",
  components: {
    Backlong,
    InfoItem,
    Scope,
    Statistics
},
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
</style>
