new Vue ({
    el: '#app',
    data: {
        product: {
            title: 'Малина',
            price: 1500,
            urlPhoto: 'https://w.forfun.com/fetch/8f/8f9e3319193b127c48c5aedeafaa42d6.jpeg',
            hasDiscount: false,
        }
    },
    methods: {
       discount() {
            if(!this.product.hasDiscount) {
                let random = parseInt(Math.random() * 20);
                this.product.price = this.product.price - this.product.price * random / 100;
                this.product.hasDiscount = true;
            }
       }
    },
});