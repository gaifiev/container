new Vue({
  el: "#app",
  data: {
    randomNumber: 0,
    randomNumberText: "",
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.round(Math.random() * 10);
      if (this.randomNumber < 5) {
        this.randomNumberText = "число < 5";
      } else if (this.randomNumber >= 5 && this.randomNumber <= 9) {
        this.randomNumberText = "число от 5 до 9";
      } else {
        this.randomNumberText = "число равно 10";
      }
    },
  },
});
