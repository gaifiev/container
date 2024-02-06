<template>
  <div>
    <router-link to="/aboutUs"></router-link>
    <BackdropImage />
    <TextAbout />
    <ListDoctors/>
    <Statistics/>
    <Reviews/>
  </div>
</template>

<script>
import BackdropImage from "../blocks/Backdrop-image.vue";
import ListDoctors from "../blocks/ListDoctors.vue";
import Reviews from "../blocks/Reviews.vue";
import Statistics from "../blocks/Statistics.vue";
import TextAbout from "../blocks/Text-about.vue";

export default {
  name: "AboutUsVue",
  data() {
    return {};
  },
  mounted() {},
  methods: {},

  components: {
    BackdropImage,
    TextAbout,
    ListDoctors,
    Statistics,
    Reviews
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
</style>
