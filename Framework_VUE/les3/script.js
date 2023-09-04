new Vue({
  el: "#app",
  data: {
    articles: ['info article 1','info article 2', 'info article 3'],
    nameButtons: ['one', 'two', 'tree'],
    currentTab: 'one',
  },
  methods: {
    newInfo() {
      console.log('hello methods');
    }
  },

  computed: {
    changeTabs() {
      return `change-${this.currentTab}`;
    },
  },
});
