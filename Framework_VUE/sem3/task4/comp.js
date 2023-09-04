Vue.component("task-4", {
  //   props: [],

  data() {
    return {
      search: "",
      product: [
        { name: "товар 1", price: 15 },
        { name: "товар 2", price: 250 },
        { name: "товар 3", price: 133 },
        { name: "товар 14", price: 632 },
        { name: "товар 5", price: 12 },
      ],
    };
  },

  methods: {
    sortUp() {
      // this.product.sort((a, b) => (a.price > b.price ? 1 : -1));
      this.product.sort((a, b) => a.price - b.price);
    },

    sortDown() {
      // this.product.sort((a, b) => (a.price > b.price ? 1 : -1)).reverse();
      this.product.sort((a, b) => b.price - a.price);
    },
  },

  template: `
          <div>
            <span>отсортировать товар</span>
            <button @click="sortUp()">по возрастанию</button>
            <button @click="sortDown()">по убыванию</button>
            <ul>
                <li v-for="item in product" :key="item.id">
                    {{item.name}} - {{item.price}} руб.
                </li>
            </ul>
           </div>`,
});
