<template>
  <section class="main-info center center">
    <div class="main-info__one-box">
      <h1 class="main-info__title">{{ $t("feelComfort") }}</h1>
      <p class="main-info__text1">
        {{ $t("ourProfessional") }}
      </p>
      <div class="main-info__window-box">
        <div class="main-info__box1">
          <img src="/img/main-info/Calendar.svg" alt="calendar" />
          <div class="main-info__text-box">
            <h1 class="main-info__title-box">{{ $t("makeAppointment") }}</h1>
            <p class="main-info__text">{{ $t("selectBest") }}</p>
          </div>
        </div>
        <div class="main-info__box2">
          <img src="/img/main-info/Location.svg" alt="location" />
          <div class="main-info__text-box">
            <h1 class="main-info__title-box">{{ $t("visit") }}</h1>
            <p class="main-info__text">{{ $t("takeCare") }}</p>
          </div>
        </div>
        <div class="main-info__box3">
          <img src="/img/main-info/2User.svg" alt="2user" />
          <div class="main-info__text-box">
            <h1 class="main-info__title-box">{{ $t("findTheBest") }}</h1>
            <p class="main-info__text">{{ $t("findThe") }}</p>
          </div>
        </div>
        <div class="main-info__box4">
          <img src="/img/main-info/Message.svg" alt="message" />
          <div class="main-info__text-box">
            <h1 class="main-info__title-box">{{ $t("askQuestions") }}</h1>
            <p class="main-info__text">{{ $t("askQuestionsAny") }}</p>
          </div>
        </div>
      </div>
      <div class="main-info__btn-and-schelude">
        <button class="main-info__btn">
          {{ $t("makeAppointment")
          }}<img src="/img/main-info/ArrowRight.svg" alt="arrow" />
        </button>
        <div class="main-info__schelude">
          <h1 class="main-info__title-schelude">{{ $t("Mon-Fri") }}</h1>
          <h1 class="main-info__title-schelude">{{ $t("Sat") }}</h1>
        </div>
      </div>
    </div>
    <div class="main-info__two-box">
      <img
        class="main-info__image"
        src="/img/main-info/photoMain.png"
        alt="photo"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "MainInfoVue",

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

.main-info {
  display: flex;
  gap: 104px;
  margin-top: 84px;

  &__title {
    font-size: 72px;
    font-weight: 400px;
    color: rgba(6, 33, 38, 1);
    max-width: 522px;
  }

  &__text1 {
    margin-top: 32px;
    margin-bottom: 52px;
    color: rgba(6, 33, 38, 0.7);
    font-size: 20px;
    max-width: 509px;
  }

  &__window-box {
    background: #f4f5f4;
    border-radius: 30px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width: 624px;
    height: 233px;
    justify-content: center;
    gap: 32px;
    row-gap: 32px;
    align-content: center;
  }

  &__box1 {
    display: flex;
    width: 222px;
  }

  &__box2 {
    display: flex;
    width: 222px;
  }

  &__box3 {
    display: flex;
    width: 222px;
  }

  &__box4 {
    display: flex;
    width: 222px;
  }

  &__text-box {
    margin-left: 12px;
  }

  &__title-box {
    color: rgba(6, 33, 38, 0.8);
    font-size: 16px;
    max-width: 182px;
  }

  &__text {
    color: rgba(6, 33, 38, 0.7);
    font-size: 14px;
  }

  &__btn-and-schelude {
    display: flex;
    margin-top: 52px;
  }

  &__btn {
    overflow: hidden;
    position: relative;
    width: 297px;
    height: 67px;
    border-radius: 55px;
    background: #24bee0;
    cursor: pointer;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    font-size: 20px;

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

  &__schelude {
    margin-left: 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  &__title-schelude {
    color: #cf7d4e;
    font-size: 16px;
    font-weight: 400;
  }

  &__image {
    width: 473px;
    height: 821px;
  }
}
</style>
