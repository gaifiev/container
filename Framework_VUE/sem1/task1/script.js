new Vue ({
    el: '#app',
    data: {
        productAddInCart: true,
        counter: 0,
        buttons: [
            {id: 1, text: 'Купить', inCart: false},
            {id: 2, text: 'Купить', inCart: false},
            {id: 3, text: 'Купить', inCart: false},
            {id: 4, text: 'Купить', inCart: false},
        ],
    },
    methods: {
        onClick(button) {
            if (!button.inCart) {
                this.counter++;
                button.inCart = true;
                button.text = 'Товар в корзине';
            }
        },
    },
});