Vue.component("filter-list", {

  data() {
    return {
      items: ['list 1', 'list 2', 'list 3'],
      filterItem: '',
    };
  },

  methods: {
    increase(step) {
      this.counter += step;
    },
  },

  template: `
        <div>
            <h3>{{ title }}</h3>
            <comp></comp>
            <p>counter click {{ counter }}</p>
            <button @click="increase(2)">+2</button>
        </div>
    `,
});
