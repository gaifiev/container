new Vue({
  el: "#app",
  data: {
    text: "Привет, меня зовут Виталя =)",
    reverse: "",
    newElementList: [],
  },
  methods: {
    reverseText() {
      this.reverse = this.text.split("").reverse().join("");
    },

    add() {
      this.newElementList.push("Новый элемент списка");
    },

    remove(element) {
      this.newElementList.splice(element, 1);
    },
  },
});
