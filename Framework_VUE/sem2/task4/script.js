new Vue({
  el: "#app",
  data: {
    name: "",
    lastname: "",
    email: "",
    newContact: [],
  },
  methods: {
    addContact() {
      this.newContact.push({
        name: this.name,
        lastname: this.lastname,
        email: this.email,
      });
      this.name = '';
      this.lastname = '';
      this.email = '';
    },
  },
});
