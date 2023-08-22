new Vue ({
    el: '#app',
    data: {
        // text: '',
        isAllowed: false,
    },
    methods: {
        // onClickYes() {
        //     this.text = 'Мне исполнилось 14 лет';
        // },

        // onClickNo() {
        //     this.text = 'Доступ закрыт';
        // },

        answer(answer) {
            this.isAllowed = answer;
        }
    },
});