<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="banner__phon">
          <div class="banner__photo">
            <img src="/img/blog/Banner.jpg" alt="photo" />
          </div>
          <div
            class="banner__news"
            v-for="article in articles"
            :key="article.id"
          >
            <h2 class="banner__title">{{ article.title }}</h2>
            <div>
              <a href="index.html"><span class="banner__name">Home</span></a>
              <span class="banner__name">/</span>
              <a href="blog.html"><span class="banner__name">Blog</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBannerComponent",

  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Articles & News",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
