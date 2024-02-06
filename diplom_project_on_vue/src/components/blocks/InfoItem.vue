<template>
  <section class="info-item center">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="info-item__box"
    >
      <img
        class="info-item__image"
        :src="`./img/img_our_services/${service.image}`"
        alt="фото"
      />
      <h1 class="info-item__title">{{ $t(service.title) }}</h1>
      <p class="info-item__text">{{ $t(service.text) }}</p>
      <div class="info-item__calendar">
        <div class="info-item__box-calendar">
          <img
            class="info-item__svg"
            src="/img/img_our_services/Calendar.svg"
            alt="svg"
          />
          <h2 class="info-item__name-calendar">{{ $t("Available Times") }}</h2>
        </div>
        <div class="info-item__box-schelude">
          <div
            v-for="(location, locIndex) in service.locations"
            :key="locIndex"
            class="info-item__schelude-location"
          >
            <img
              class="info-item__svg-location"
              src="/img/img_our_services/Location.svg"
              alt="svg"
            />
            <div class="info-item__schelude-frame">
              <h2 class="info-item__title-schelude">{{ $t(location.name) }}</h2>
              <div
                v-for="(schedule, schIndex) in location.schedule"
                :key="schIndex"
                class="info-item__schelude-date"
              >
                <h1 class="info-item__title-schelude-date">
                  {{ $t(schedule.day) }}
                </h1>
                <span class="info-item__time">{{ $t(schedule.time) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoItemVue",
  data() {
    return {
      services: [
        {
          image: "1doc.png",
          title: "Immediate Care",
          text: "Immediate Care Text",
          locations: [
            {
              name: "Brighton beach ave 23/2",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
            {
              name: "Bay Ridge Ave, Brooklyn, NY 11220",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
          ],
        },
        {
          image: "2doc.png",
          title: "Dental Care",
          text: "Immediate Care Text",
          locations: [
            {
              name: "Brighton beach ave 23/2",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
            {
              name: "Bay Ridge Ave, Brooklyn, NY 11220",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
          ],
        },
        {
          image: "3doc.png",
          title: "Surgey Center",
          text: "Immediate Care Text",
          locations: [
            {
              name: "Brighton beach ave 23/2",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
            {
              name: "Bay Ridge Ave, Brooklyn, NY 11220",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
          ],
        },
        {
          image: "4doc.png",
          title: "Diagnostic Center",
          text: "Immediate Care Text",
          locations: [
            {
              name: "Brighton beach ave 23/2",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
            {
              name: "Bay Ridge Ave, Brooklyn, NY 11220",
              schedule: [
                { day: "Mon-Fri", time: "11:00-20:00" },
                { day: "Weekends", time: "12:00-14:00" },
              ],
            },
          ],
        },
      ],
    };
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

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.container {
  max-width: 1920px;
  margin: 0 auto;
}
.info-item {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 80px;

  &__image {
    max-width: 574px;
    max-height: 332px;
  }

  &__title {
    color: rgba(6, 33, 38, 1);
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 16px;
    color: rgba(6, 33, 38, 0.7);
    max-width: 574px;
  }

  &__box-calendar {
    margin-top: 32px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    background: rgba(36, 190, 224, 1);
    width: 574px;
    border-radius: 30px 30px 0px 0px;
    height: 70px;
  }

  &__svg {
    margin-left: 32px;
  }

  &__name-calendar {
    font-size: 16px;
    font-weight: 500;
    color: white;
  }

  &__box-schelude {
    background: rgba(18, 204, 244, 0.05);
    max-width: 574px;
    border-radius: 0px 0px 30px 30px;
    display: flex;
    padding-bottom: 44px;
    max-height: 240px;
  }

  &__schelude-location {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin-top: 24px;
  }

  &__svg-location {
    margin: 24px 18px 0px 32px;
  }

  &__schelude-frame {
    display: flex;
    flex-direction: column;
  }

  &__title-schelude {
    color: rgba(6, 33, 38, 0.8);
    font-size: 16px;
    font-weight: bold;
    width: 197px;
  }

  &__schelude-date {
    margin-top: 12px;
    color: rgba(6, 33, 38, 0.6);
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  &__title-schelude-date {
    color: rgba(6, 33, 38, 0.6);
    font-size: 14px;
    font-weight: 400;
  }

  &__time {
    font-size: 14px;
    font-weight: 400;
    color: rgba(6, 33, 38, 0.8);
  }
}
</style>
