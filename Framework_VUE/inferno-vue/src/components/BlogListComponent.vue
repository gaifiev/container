<template>
  <div>
    <div class="blog-detalis__content">
      <div class="blog-detalis__content-vue">
        <blog-details
          v-for="item in articles"
          :itemDetails="item"
          :key="item.id"
        >
        </blog-details>
      </div>
      <div class="blog-detalis__tags">
        <h2 class="blog-detalis__title-btn">Tags</h2>
        <div class="blog-detalis__btn-item">
          <button
            class="blog-detalis__btn"
            v-for="button in buttons"
            :key="button.id"
            @click="sortArticle(button.title)"
          >
            {{ button.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBlogListComponent",

  props: {},

  data() {
    return {
      originalArticles: [
        {
          id: 1,
          tag: "Kitchen",
          title: "Kitchen",
          image: "./img/cardPagin/cardPagin1.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations",
          fullInfo: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injecthumour, or randomised words which don't look even slightly believable.

          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary.`,
        },
        {
          id: 2,
          tag: "Bedroom",
          title: "Bedroom",
          image: "./img/cardPagin/cardPagin2.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations",
          fullInfo: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injecthumour, or randomised words which don't look even slightly believable.

          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary.`,
        },
        {
          id: 3,
          tag: "Building",
          title: "Building",
          image: "./img/cardPagin/cardPagin3.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations",
          fullInfo: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injecthumour, or randomised words which don't look even slightly believable.

          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary.`,
        },
        {
          id: 4,
          tag: "Architecture",
          title: "Architecture",
          image: "./img/cardPagin/cardPagin4.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations",
          fullInfo: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injecthumour, or randomised words which don't look even slightly believable.

          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary.`,
        },
        {
          id: 5,
          tag: "Kitchen Planning",
          title: "Kitchen Planning",
          image: "./img/cardPagin/cardPagin5.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations",
          fullInfo: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injecthumour, or randomised words which don't look even slightly believable.

          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary.`,
        },
      ],

      articles: [],

      buttons: [
        { id: 0, title: "Reset" },
        { id: 1, title: "Kitchen" },
        { id: 2, title: "Bedroom" },
        { id: 3, title: "Building" },
        { id: 4, title: "Architecture" },
        { id: 5, title: "Kitchen Planning" },
      ],
    };
  },

  methods: {
    resetArticles() {
      this.articles = [...this.originalArticles];
    },

    sortArticle(title) {
      if (title === "Reset") {
        this.resetArticles();
      } else {
        this.articles = this.originalArticles.filter((article) => {
          return article.tag === title;
        });
      }
    },
  },

  mounted() {
    // При монтировании компонента копируем оригинальный массив статей в articles
    this.articles = [...this.originalArticles];
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
