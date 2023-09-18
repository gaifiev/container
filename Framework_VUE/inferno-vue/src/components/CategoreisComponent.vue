<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="banner__phon">
          <div class="banner__photo">
            <img src="/img/categoreis/categoreisBanner.png" alt="photo" />
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
              <a href="blog.html"><span class="banner__name">Project</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="categories center">
      <div class="container">
        <div class="categories__two-items">
          <div class="categories__item-follow">
            <div class="categories__item-text">
              <button class="categories__btn-4">Bathroom</button>
              <button class="categories__btn-4">Bed Room</button>
              <button class="categories__btn-4">Kitchan</button>
              <button class="categories__btn-4">Living Area</button>
            </div>
          </div>
          <div class="categories__items">
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/3.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/2.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/1.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/4.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/8.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/6.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/7.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
            <div class="categories__project">
              <img
                class="categories__photo"
                src="/img/categoreis/8.png"
                alt="photo"
              />
              <div class="categories__sub-content">
                <div class="categories__content">
                  <h3 class="categories__title-card">Minimal Bedroom</h3>
                  <h3 class="categories__textP">Decor / Artchitecture</h3>
                </div>
                <button class="categories__btn">
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
          <div class="categories__pagination">
            <button class="categories__btn-pagination">01</button>
            <button class="categories__btn-pagination">02</button>
            <button class="categories__btn-pagination">03</button>
            <button class="categories__btn-pagination">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
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
    </section>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonCategoreisComponent",

  data() {
    return {
      articles: [
      {
        id: 1,
        title: "Our Project",
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
