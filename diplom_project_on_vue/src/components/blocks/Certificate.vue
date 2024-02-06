<template>
  <section class="certificate center">
    <div class="certificate__box-1">
      <div class="certificate__item-sert-1">
        <h1 class="certificate__title">Our Achievements</h1>
        <img src="/img/aboutUs/sert1.png" alt="sert1" />
      </div>
      <p class="certificate__text-1">
        Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt
        urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed
        sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie
        efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis ligula.
        Ut nunc erat, lobortis vel ultrices aliquet, efficitur id mauris.
      </p>
    </div>
    <div class="certificate__box-2">
      <div class="certificate__item-sert-2">
        <h2 class="certificate__title-2">COVID-19 cure participants</h2>
        <p class="certificate__text-2">
          Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt
          urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed
          sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie
          efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis
          ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id
          mauris.
        </p>
      </div>
      <img src="/img/aboutUs/sert2.png" alt="sert2" />
    </div>
    <div class="certificate__box-3">
      <img src="/img/aboutUs/sert3.png" alt="sert3" />
      <div class="certificate__item-sert-3">
        <h3 class="certificate__title-3">Best Medicine Delivery 2021</h3>
        <p class="certificate__text-3">
          Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt
          urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed
          sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie
          efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis
          ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id
          mauris.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CertificateVue",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f7fcfd;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.container {
  max-width: 1920px;
  margin: 0 auto;
}
.certificate {
  margin-bottom: 140px;
  &__box-1 {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 84px;
    font-size: 48px;
    color: rgba(6, 33, 38, 1);
  }

  &__text-1 {
    margin-top: 230px;
    width: 574px;
    font-size: 20px;
    font-weight: 300;
    color: rgba(6, 33, 38, 0.7);
  }

  &__box-2 {
    display: flex;
    margin-top: 84px;
    flex-direction: row;
    justify-content: space-between;
  }

  &__text-2 {
    font-size: 20px;
    font-weight: 300;
    margin-top: 25px;
    width: 574px;
    height: 210px;
    color: rgba(6, 33, 38, 0.7);
  }

  &__title-2 {
    margin-top: 43px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(6, 33, 38, 1);
  }

  &__box-3 {
    margin-top: 84px;
    display: flex;
    justify-content: space-between;
  }

  &__text-3 {
    font-size: 20px;
    font-weight: 300;
    margin-top: 25px;
    width: 574px;
    height: 210px;
    color: rgba(6, 33, 38, 0.7);
  }

  &__title-3 {
    margin-top: 43px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(6, 33, 38, 1);
  }
}
</style>
