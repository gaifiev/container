<template>
  <section class="roster-doctors center">
    <div class="roster-doctors__box">
      <div
        v-for="(doctor, index) in doctors"
        :key="index"
        class="roster-doctors__cell"
      >
        <img class="roster-doctors__image" :src="doctor.image" alt="photo" />
        <div class="roster-doctors__result">
          <div class="roster-doctors__center-box">
            <h1 class="roster-doctors__number">{{ doctor.certificates }}</h1>
            <p class="roster-doctors__text-number">Certificates</p>
          </div>
          <div class="roster-doctors__center-box">
            <h1 class="roster-doctors__number">{{ doctor.clients }}</h1>
            <p class="roster-doctors__text-number">Happy Clients</p>
          </div>
        </div>
        <div class="roster-doctors__description">
          <h2 class="roster-doctors__title">{{ doctor.name }}</h2>
          <span class="roster-doctors__status">{{ doctor.status }}</span>
          <p class="roster-doctors__text">{{ doctor.description }}</p>
          <div class="roster-doctors__time">
            <h1 class="roster-doctors__title-time">Availability:</h1>
            <span
              v-for="(schedule, day) in doctor.availability"
              :key="day"
              class="roster-doctors__schelude"
            >
              {{ day }} {{ schedule }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RosterDoctorsVue",
  data() {
    return {
      doctors: [
        {
          name: "Harry McGuier",
          image: "./img/Doctors/doctor1.png",
          certificates: 32,
          clients: 1200,
          status: "Leading Dentist",
          description:
            "Meg is a leading dentist in our central hospital. She has made the name in California Silicon Valley when presenting the new technology, today called “anti-cancer”.",
          availability: {
            "Mon-Fri": "10AM-9PM",
            Sat: "10AM-2PM",
          },
        },
        {
          name: "Carlos Forbidden",
          image: "./img/Doctors/doctor2.png",
          certificates: 32,
          clients: 1200,
          status: "Leading Dentist",
          description:
            "Meg is a leading dentist in our central hospital. She has made the name in California Silicon Valley when presenting the new technology, today called “anti-cancer”.",
          availability: {
            "Mon-Fri": "10AM-9PM",
            Sat: "10AM-2PM",
          },
        },
        {
          name: "Austin Arment",
          image: "./img/Doctors/doctor3.png",
          certificates: 32,
          clients: 1200,
          status: "Leading Dentist",
          description:
            "Meg is a leading dentist in our central hospital. She has made the name in California Silicon Valley when presenting the new technology, today called “anti-cancer”.",
          availability: {
            "Mon-Fri": "10AM-9PM",
            Sat: "10AM-2PM",
          },
        },
        {
          name: "Meg Styles",
          image: "./img/Doctors/doctor4.png",
          certificates: 32,
          clients: 1200,
          status: "Leading Dentist",
          description:
            "Meg is a leading dentist in our central hospital. She has made the name in California Silicon Valley when presenting the new technology, today called “anti-cancer”.",
          availability: {
            "Mon-Fri": "10AM-9PM",
            Sat: "10AM-2PM",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
</style>
