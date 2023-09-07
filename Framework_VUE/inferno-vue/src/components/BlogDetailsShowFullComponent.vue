<template>
  <div>
    <div class="blog-detalis__content">
      <div class="blog-detalis__items-vue">
        <h2 class="blog-detalis__title-vue">{{ itemDetails.title }}</h2>
        <img
          class="blog-detalis__image-vue"
          :src="itemDetails.image"
          alt="photo"
        />
        <div class="blog-detalis__text-vue">
          {{ itemDetails.incompleteInformation }}...
        </div>
        <button
          class="blog-detalis__btn"
          @click="showFullDetails = !showFullDetails"
        >
          Details...
        </button>
        <blog-full-details
          class="blog-detalis__text-vue"
          v-if="showFullDetails"
          :fullInfo="itemDetails.fullInfo"
        ></blog-full-details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBlogDetailsShowFullComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
