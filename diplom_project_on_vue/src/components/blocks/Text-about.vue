<template>
  <section class="text-about center">
    <div class="text-about__svg">
      <img src="/img/aboutUs/Vector.svg" alt="svg" />
    </div>
    <div class="text-about__text-box">
      <p class="text-about__text">
        Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt
        urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed
        sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie
        efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis ligula.
        Ut nunc erat, lobortis vel ultrices aliquet, efficitur id mauris. Duis
        posuere hendrerit est lacinia consectetur. Morbi nec volutpat ipsum.
        Cras blandit efficitur velit ut consequat. Suspendisse potenti.
      </p>
      <br />
      <p class="text-about__text">
        Quisque vitae nisi tempor, ultricies purus et, maximus metus. Phasellus
        tempus a lorem vel ultricies. Pellentesque a pharetra tellus, sit amet
        blandit ante. Morbi sollicitudin lacus ut orci fermentum, in vestibulum
        nulla egestas. Pellentesque nisi orci, ullamcorper ac bibendum quis,
        congue eget tellus. In sed est dolor. Mauris gravida sem diam, et
        placerat metus lacinia non. Morbi pellentesque ultricies ante at
        ultricies. Suspendisse vulputate elit vel sapien volutpat pharetra. In
        hac habitasse platea dictumst.
      </p>
      <br />
      <p class="text-about__text">
        Integer felis lorem, cursus ac leo quis, tristique elementum dolor. In
        hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed
        interdum tincidunt suscipit. Sed sit amet tincidunt libero. Praesent id
        condimentum lacus. Vivamus congue scelerisque pulvinar.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TextAbout.vue",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
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
.text-about {
  padding-top: 30px;
  display: flex;
  background: rgba(18, 204, 244, 0.1);
  padding-bottom: 40px;
  margin-bottom: 70px;

  &__text-box {
    width: 776px;
    height: 100%;
    margin-left: 32px;
    margin-top: 40px;
  }

  &__text {
    color: rgba(6, 33, 38, 0.7);
    font-size: 20px;
    font-weight: 200;
  }
}
@import "@/assets/css/style.scss";
</style>
