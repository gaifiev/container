Vue.component("easy-counter", {
  props: {},

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment(a) {
      this.counter+= a;
    },
    discount(a) {
      this.counter-= a;
    },
  },

  template: `
          <div>
              <p>Счётчик {{ counter }}</p>
              <button @click="increment(1)">+1</button>
              <button @click="discount(1)">-1</button>
          </div>`,
});
