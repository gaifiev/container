<template>
  <div id="app">
    <header class="header center">
      <div class="header__logo">
        <router-link to="/"><img src="img/logo/logo.svg" alt="logo" /></router-link>
      </div>
      <nav class="header__menu">
        <router-link class="header__link" to="/home">{{ $t("home") }}</router-link>
        <router-link class="header__link" to="/services">{{ $t("ourServices") }}</router-link>
        <router-link class="header__link" to="/blog">{{ $t("blog") }}</router-link>
        <router-link class="header__link" to="/about">{{ $t("about") }}</router-link>
        <router-link class="header__link" to="/contact">{{ $t("contact") }}</router-link>
      </nav>
      <div class="svg-box">
        <button class="btn btn-primary" @click="changeLanguage('en')">
          <img class="svg-flag" src="/img/header/gb.svg" alt="svg" />
          English
        </button>
        <button class="btn btn-primary" @click="changeLanguage('ru')">
          <img class="svg-flag" src="/img/header/ru.svg" alt="svg" />
          Русский
        </button>
      </div>
      <button class="header__button">{{ $t("makeAppointment") }}</button>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
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
.svg-box {
  display: flex;
  gap: 5px;
}
.svg-flag {
  width: 15px;
}
.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  background-color: rgba(36, 190, 224, 1);
  border: none;
  height: 40px;
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.header {
  display: flex;
  margin-top: 23px;
  justify-content: space-between;

  &__logo {
    margin-right: 56px;
  }
  &__menu {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  &__link {
    cursor: pointer;
    color: rgba(6, 33, 38, 0.6);
    text-decoration: none;
  }

  &__button {
    width: 215px;
    height: 48px;
    font-size: 16px;
    color: white;
    background: rgba(36, 190, 224, 1);
    background: linear-gradient(
      90deg,
      rgba(36, 190, 224, 1) 0%,
      rgba(36, 190, 224, 1) 100%
    );
    border: none;
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgb(165, 227, 241);
    transition: all 0.5s;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    position: relative;

    &:after {
      content: "";
      display: block;
      width: 30px;
      height: 200px;
      margin-left: 60px;
      background: #fff;
      opacity: 0.5;
      position: absolute;
      left: -40px;
      top: -100px;
      z-index: 1;
      transform: rotate(45deg);
      transition: all 0.1s;
      animation-name: slideme;
      animation-duration: 3s;
      animation-delay: 0.05s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
    @keyframes slideme {
      0% {
        left: -30px;
        margin-left: 0px;
      }
      30% {
        left: 110%;
        margin-left: 80px;
      }
      100% {
        left: 110%;
        margin-left: 80px;
      }
    }
  }
}
</style>
