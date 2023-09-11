<template>
  <div>
<!--    <BooksList />-->
    <h1>Mortgage Calculator</h1>
    <label for="loanAmount">Величина займа:</label>
    <input type="number" id="loanAmount" v-model.number="loanAmount">
    <br>
    <label for="interestRate">Процентная ставка:</label>
    <input type="number" id="interestRate" step="0.01" v-model.number="interestRate">
    <br>
    <label for="loanTerm">Срок кредита (количество месяцев):</label>
    <input type="number" id="loanTerm" v-model.number="loanTerm">

    <div>
      <h2>Каждый месяц:</h2>
      <p>{{ monthlyPayment }}</p>
    </div>

    <div>
      <h2>Всего к оплате:</h2>
      <p>{{ totalPayment }}</p>
    </div>
  </div>
</template>
<script>
// import BooksList from "@/components/BooksList.vue";
export default {
  components: {
    // BooksList,
  },
  data() {
    return {
      loanAmount: 0,
      interestRate: 0,
      loanTerm: 0,
    }
  },
  computed: {
    monthlyPayment: function() {
      const rate = this.interestRate / 100 / 12;
      const term = this.loanTerm;
      const principal = this.loanAmount;
      const numerator = rate * Math.pow(1 + rate, term);
      const denominator = Math.pow(1 + rate, term) - 1;
      const payment = principal * (numerator / denominator);
      return payment.toFixed(2);
    },
    totalPayment: function() {
      const term = this.loanTerm;
      const payment = parseFloat(this.monthlyPayment);
      return (term * payment).toFixed(2);
    }
  }
}
</script>
<!--Task 2-->
<!--<template>-->
<!--  <div>-->
<!--    <div-->
<!--        v-for="(item, index) in cartItems"-->
<!--        :key="index"-->
<!--    >-->
<!--      <p>{{ item.title }}</p>-->
<!--      <p>Price: {{ item.price }}</p>-->
<!--      <input type="number" v-model.number="item.quantity">-->
<!--      <p>Sub total: {{ item.price * item.quantity }}</p>-->
<!--    </div>-->
<!--    <div>Total: {{ totalPrice }}</div>-->
<!--    <TestComp @mySupaEvent="testListener"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import TestComp from "@/components/TestComp.vue";-->
<!--export default {-->
<!--  components: {-->
<!--    TestComp,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      cartItems: [-->
<!--        { id: 1, title: 'Good 1', quantity: 2, price: 10 },-->
<!--        { id: 2, title: 'Good 2', quantity: 5, price: 15 }-->
<!--      ],-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    testListener(data) {-->
<!--      console.log(data);-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    totalPrice() {-->
<!--      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--Task 1-->
<!--<template>-->
<!--  <div class="hello">-->
<!--    <form v-if="!isAuthentificated" @submit.prevent="login">-->
<!--      <label for="username">Имя пользователя:</label>-->
<!--      <input type="text" id="username" v-model="username" required>-->
<!--      <label for="password">Пароль:</label>-->
<!--      <input type="password" id="password" v-model="password" required>-->
<!--      <button type="submit">Войти</button>-->
<!--    </form>-->
<!--    <p v-else>Вы успешно авторизованы!</p>-->
<!--&lt;!&ndash;    <h1>{{ isAuthentificated }}</h1>&ndash;&gt;-->
<!--&lt;!&ndash;    <template v-if="isAuthentificated">Вход разрешен</template>&ndash;&gt;-->
<!--&lt;!&ndash;    <template v-if="isAuthentificated">Вход запрещен</template>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'Authentification-comp',-->
<!--  data() {-->
<!--    return {-->
<!--      isAuthentificated: false,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    login() {-->
<!--      this.isAuthentificated = true;-->
<!--    }-->
<!--  }-->
<!--  // props: {-->
<!--  //   isAuthentificated: Boolean,-->
<!--  // }-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
