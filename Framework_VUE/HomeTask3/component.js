// 1. blog-details (компонент отображения подробной информации о статье)
// 2. blog (компонент отображения краткой информации о статье в компоненте blogs-list)
// 3. blogs-list (компонент который выводит список из компонент blog и фильтрует его на основе выбранного тега)
Vue.component("blog-full-details", {
  props: ["fullInfo"],
  template: `
    <div>
      <p>{{ fullInfo }}</p>
    </div>
  `,
});

Vue.component("blog-details", {
  props: ["itemDetails"],

  data() {
    return {
      showFullDetails: false, // Добавьте переменную, чтобы отслеживать, должна ли полная информация отображаться
    };
  },

  template: `
  <div >
      <h2>{{ itemDetails.title }}</h2>           
      <img :src="itemDetails.image" alt="photo">
      <div> {{ itemDetails.incompleteInformation }}...</div>
      <button @click="showFullDetails = !showFullDetails">Details...</button>
      <blog-full-details v-if="showFullDetails" :fullInfo="itemDetails.fullInfo"></blog-full-details>
  </div>
`,
});

Vue.component("blogs-list", {
  props: {},

  data() {
    return {
      originalArticles: [
        {
          id: 1,
          tag: "Kitchen",
          title: "Kitchen",
          image: "./img/cardPagin1.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...",
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
          image: "./img/cardPagin2.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...",
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
          image: "./img/cardPagin3.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...",
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
          image: "./img/cardPagin4.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...",
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
          image: "./img/cardPagin5.png",
          incompleteInformation:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by...",
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

  template: `
  <div>
      <div>
          <blog-details
              v-for="item in articles" :itemDetails="item" :key="item.id">  
          </blog-details>
      </div>
      <div>
      <button v-for="button in buttons" :key="button.id"
          @click="sortArticle(button.title)">{{ button.title }}</button>    
      </div>
  </div>
  `,
});
