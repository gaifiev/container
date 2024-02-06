<template>
  <section class="scope center">
    <h1 class="scope__title">{{ $t("whyUs") }}</h1>
    <div class="scope__box">
      <div
        v-for="(item, index) in scopeItems"
        :key="index"
        class="scope__small-box"
      >
        <img :src="`./img/scope/${item.img}.svg`" :alt="item.alt" />
        <h1 class="scope__small-title">{{ $t(item.title) }}</h1>
        <p class="scope__text">{{ $t(item.text) }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ScopeComponentVue",
  data() {
    return {
      scopeItems: [
        {
          img: 1,
          alt: "svg",
          title: "dnaDiagnostics",
          text: "weAreProud",
        },
        {
          img: 2,
          alt: "svg",
          title: "insurance",
          text: "youCanGetOurInsurance",
        },
        {
          img: 3,
          alt: "svg",
          title: "medicalSupport",
          text: "weHaveHuge",
        },
        {
          img: 4,
          alt: "svg",
          title: "labAchievements",
          text: "iMedicalHas",
        },
        {
          img: 5,
          alt: "svg",
          title: "247Clean",
          text: "weCareAbout",
        },
        {
          img: 6,
          alt: "svg",
          title: "trainingRoutine",
          text: "ourDoctorsWill",
        },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
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

.scope {
  margin-top: 140px;
  margin-bottom: 210px;
  &__title {
    font-size: 48px;
    font-weight: bold;
  }

  &__box {
    margin-top: 84px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 64px;
  }

  &__small-box {
    width: 308px;
    height: 240px;
  }

  &__small-title {
    margin-top: 24px;
    font-size: 24px;
    color: #062126;
  }

  &__text {
    margin-top: 20px;
    font-size: 16px;
    color: rgba(6, 33, 38, 0.7);
  }
}
</style>
