<template>
  <section class="list-doctors center">
    <div class="list-doctors__box-1">
      <h1 class="list-doctors__name">{{ $t("ourQualifiedDoctors") }}</h1>
      <button class="list-doctors__btn">
        <router-link class="list-doctors__linkbtn" to="/roster"
          >{{ $t("seeAllDoctors")
          }}<img src="/img/list-doctors/ArrowRight.svg" alt="svg"
        /></router-link>
      </button>
    </div>
    <div class="list-doctors__box-2">
      <div
        v-for="(doctor, index) in doctors"
        :key="index"
        class="list-doctors__small-box"
      >
        <img :src="`./img/list-doctors/${doctor.image}`" :alt="doctor.alt" />
        <h2 class="list-doctors__title">{{ $t(doctor.name) }}</h2>
        <p class="list-doctors__type">{{ $t(doctor.specialty) }}</p>
        <h1 class="list-doctors__quantity">
          {{ formatNumber(doctor.happyPatients) }} {{ $t("happyPatients") }}
        </h1>
        <p class="list-doctors__street">
          {{ $t("iMedicalCentralClinic") }}, LA
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListDoctors",
  data() {
    return {
      doctors: [
        {
          image: "doctor1.png",
          alt: "doctors",
          name: "drJaneNicholson",
          specialty: "leadingDiagnosticDoctor",
          happyPatients: 500,
        },
        {
          image: "doctor2.png",
          alt: "doctors",
          name: "drAlisonPretty",
          specialty: "consultantDentist",
          happyPatients: 320,
        },
        {
          image: "doctor3.png",
          alt: "doctors",
          name: "drRebeccaFlows",
          specialty: "leadingDiagnosticDoctor",
          happyPatients: 900,
        },
        {
          image: "doctor4.png",
          alt: "doctors",
          name: "drMariaAnderson",
          specialty: "leadingDiagnosticDoctor",
          happyPatients: 500,
        },
        {
          image: "doctor5.png",
          alt: "doctors",
          name: "drDerekMendes",
          specialty: "consultantDentist",
          happyPatients: 320,
        },
        {
          image: "doctor6.png",
          alt: "doctors",
          name: "drBobSinger",
          specialty: "leadingDiagnosticDoctor",
          happyPatients: 900,
        },
      ],
    };
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat().format(value);
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
.list-doctors {
  &__box-1 {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    font-size: 48px;
    font-weight: bold;
    color: #062126;
  }

  &__btn {
    overflow: hidden;
    position: relative;
    width: 254px;
    height: 67px;
    border-radius: 55px;
    background: #cf7d4e;
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

  &__linkbtn {
    text-decoration: none;
    color: #f7fcfd;
  }

  &__box-2 {
    margin-top: 82px;
    margin-bottom: 140px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  &__small-box {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    padding: 32px;
    width: 372px;
    max-width: 372px;
    max-height: 343px;
    box-shadow: 17px 19px 24px 0px rgba(170, 71, 15, 0.26);
    display: flex;
    position: relative;
    transition: all 0.5s;
    border-radius: 30px;

    &:hover {
      transform: translateY(0.05em);
      box-shadow: 0.1em 0.1em 0.5em 0em rgba(170, 71, 15, 0.26);
    }
  }

  &__title {
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
    color: #062126;
  }

  &__type {
    margin-top: 12px;
    color: rgba(6, 33, 38, 0.6);
    font-size: 16px;
    font-weight: 300;
  }

  &__quantity {
    margin-top: 32px;
    color: #0f97b5;
    font-size: 18px;
    font-weight: 300;
  }

  &__street {
    margin-top: 12px;
    color: rgba(6, 33, 38, 0.6);
    font-weight: 300;
    font-size: 16px;
  }
}
</style>
