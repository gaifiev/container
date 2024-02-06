<template>
  <section class="statistics center">
    <div class="statistics__boxes">
      <div class="statistics__box">
        <h3 class="statistics__title">
          {{ $t("positiveFeedbackPercentage") }}
        </h3>
        <p class="statistics__text">{{ $t("positiveFeedback") }}</p>
      </div>
      <div class="statistics__thick"></div>
      <div class="statistics__box">
        <h3 class="statistics__title">{{ $t("happyPatientsPerWeek") }}</h3>
        <p class="statistics__text">{{ $t("happyPatientsPerWeekText") }}</p>
      </div>
      <div class="statistics__thick"></div>
      <div class="statistics__box">
        <h3 class="statistics__title">{{ $t("professionalDoctorsCount") }}</h3>
        <p class="statistics__text">{{ $t("professionalDoctors") }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatisticsSection",
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

.statistics {
  background: #062126;
  height: 338px;
  padding-top: 114px;

  &__boxes {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  &__title {
    color: white;
    font-size: 64px;
    font-weight: bold;
  }

  &__text {
    margin-top: 12px;
    color: #12ccf4;
    font-size: 24px;
    font-weight: 300;
  }

  &__thick {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    height: 198px;
  }
}
</style>
