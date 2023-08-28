new Vue({
  el: "#app",
  data: {
    data: [
      {
        title: "title text",
        text: "description text info element",
      },
      {
        title: "new title text",
        text: "new description text info element",
      },
    ],
    likeToggle: true,
    listItems: [1, 2, 4],
    newList: "",
    blockWidth: 100,
    blockColor: "#ccc",
    firstNum: 0,
    secondNum: 0,
    result: 0,
    modelData: "",
    linkHref: "product.html",
    imgPhoto: "photo.png",
    styleBlock: {
      backgroundColor: "green",
      color: "red",
    },
  },
  methods: {
    addItem() {
      this.listItems.push(this.newList);
    },

    headingText() {
      if (this.modelData === "") {
        this.modelData = "Заголовок для блока";
      }
    },
    send() {
      console.log("Отправили данные внутри инпут");
    },

    plus() {
      this.result = this.firstNum + this.secondNum;
    },
    minus() {
      this.result = this.firstNum - this.secondNum;
    },
    mult() {
      this.result = this.firstNum * this.secondNum;
    },
    div() {
      this.result = this.firstNum / this.secondNum;
    },
  },

  computed: {
    changeBlock() {
      return {
        width: `${this.blockWidth}px`,
        heigth: `${this.blockWidth}px`,
        backgroundColor: this.blockColor,
      };
    },
  },
});
