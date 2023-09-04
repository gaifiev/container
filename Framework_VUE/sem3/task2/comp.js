Vue.component('list-item', {
  props: ['itemData'],

  methods: {
    removeItem(id) {
        this.$emit('removeItem', id);
    }
  },

  data() {
    return {};
  },

  template: `
        <div>
            <p> {{ itemData.title }} </p>
            <button @click="removeItem(itemData.id)">remove</button> 
           
        </div>
    `,
});

Vue.component("comp", {
  props: {},

  data() {
    return {
      items: [],
      newItem: "",
    };
  },

  methods: {
    add() {
      const newItem = {
        id: Date.now(),
        title: this.newItem,
      };

      this.items.push(newItem);
      this.newItem = "";
    },

    remove(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },

  template: `
        <div>
            <input type="text" v-model="newItem">
            <button @click="add">Добавить</button> 
            <!-- <div v-for="{ id, title } in items"> {{ title }}
            <button @click="remove(id)">remove</button> 
            </div>-->

            <list-item  v-for="item in items" :item-data="item" @removeItem="remove" :key="item.id"></list-item>
        </div>
    `,
});
