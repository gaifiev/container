new Vue ({
    el: '#app',
    data: {
       isShown: false,
    },
    methods: {
       toggle() {
        this.isShown = !this.isShown;
       }
    },
});