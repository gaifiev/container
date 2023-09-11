<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      <ProductDetails :product="product"></ProductDetails>
    </div>
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';

export default {
  components: {
    ProductDetails,
},
  data() {
    return {
      products: [
        {
          name: 'Яблоко',
          price: 10,
          available: true
        },
        {
          name: 'Лимон',
          price: 9,
          available: false
        },
        {
          name: 'Слива',
          price: 15,
          available: true
        },
        {
          name: 'Абрикос',
          price: 50,
          available: true
        },
        {
          name: 'Банан',
          price: 6,
          available: true
        }
      ]
    };
  }
};
</script>
