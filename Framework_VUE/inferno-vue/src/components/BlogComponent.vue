<template>
  <div>
    <section class="blog center">
      <div class="container">
        <div class="blog__two-items">
          <div class="blog__item-follow">
            <div
              class="blog__item-text"
              v-for="article in articles"
              :key="article.id"
            >
              <h3 class="blog__item-title">{{ article.title }}</h3>
              <p class="blog__paragraph">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using.
              </p>
            </div>
          </div>
          <div class="blog__items">
            <div class="blog__project">
              <img
                class="blog__photo"
                src="/img/cardPagin/cardPagin1.png"
                alt="photo"
              />
              <button class="blog__btn-design">Kitchan Design</button>
              <div class="blog__sub-content">
                <div class="blog__content">
                  <h3 class="blog__title-card">
                    Let’s Get Solution For Building Construction Work
                  </h3>
                </div>
                <div class="blog__texts">
                  <h3 class="blog__textP">26 December,2022</h3>
                  <button class="blog__btn">
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 19L9 10L1 1"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="blog__project">
              <img
                class="blog__photo"
                src="/img/cardPagin/cardPagin2.png"
                alt="photo"
              />
              <button class="blog__btn-design">Kitchan Design</button>
              <div class="blog__sub-content">
                <div class="blog__content">
                  <h3 class="blog__title-card">
                    Let’s Get Solution For Building Construction Work
                  </h3>
                </div>
                <div class="blog__texts">
                  <h3 class="blog__textP">26 December,2022</h3>
                  <button class="blog__btn">
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 19L9 10L1 1"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="blog__project">
              <img
                class="blog__photo"
                src="/img/cardPagin/cardPagin3.png"
                alt="photo"
              />
              <button class="blog__btn-design">Kitchan Design</button>
              <div class="blog__sub-content">
                <div class="blog__content">
                  <h3 class="blog__title-card">
                    Let’s Get Solution For Building Construction Work
                  </h3>
                </div>
                <div class="blog__texts">
                  <h3 class="blog__textP">26 December,2022</h3>
                  <button class="blog__btn">
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 19L9 10L1 1"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBlogComponent",

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
