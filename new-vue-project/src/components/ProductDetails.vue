<template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ formattedPrice }}</p>
      <p>{{ availabilityText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    computed: {
      formattedPrice() {
        // Функция для форматирования цены со знаком валюты
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD' // нужная валюта
        });
        return formatter.format(this.product.price);
      },
      availabilityText() {
        return this.product.available ? 'Available' : 'Out of stock';
      }
    }
  };
  </script>
  