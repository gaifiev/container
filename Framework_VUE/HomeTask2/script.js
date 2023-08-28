new Vue({
  el: "#app",
  data: {
    products: [
      { id: 1, name: "Яблоко", price: 80 },
      { id: 2, name: "Апельсин", price: 190 },
      { id: 3, name: "Ананас", price: 550 },
      { id: 4, name: "Банан", price: 120 },
      { id: 5, name: "Манго", price: 330 },
    ],
    selectSort: "list",
  },
  methods: {},

  computed: {
    sortProducts() {
      // создание копии массива products
      const copyProducts = [...this.products];
      // asc (по возрастанию) или desc (по убыванию)
      if (this.selectSort === "asc") {
        return copyProducts.sort((first, two) => first.price - two.price);
      } else if (this.selectSort === "desc") {
        return copyProducts.sort((first, two) => two.price - first.price);
      }
      return copyProducts;
    },
  },
});
