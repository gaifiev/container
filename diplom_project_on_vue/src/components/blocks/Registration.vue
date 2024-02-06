<template>
  <section class="registration center">
    <div class="registration__forms">
      <form class="registration__form" @submit.prevent="submitForm">
        <h1 class="registration__title">
          {{ $t("makeAppointmentTitle") }}
        </h1>
        <div class="registration__box">
          <input
            v-model="formData.firstName"
            class="registration__input"
            type="text"
            :placeholder="$t('firstName')"
            name="firstName"
            required
          />
          <input
            v-model="formData.lastName"
            class="registration__input"
            type="text"
            :placeholder="$t('lastName')"
            name="lastName"
            required
          />
          <input
            v-model="formData.email"
            class="registration__input"
            type="email"
            :placeholder="$t('email')"
            name="email"
            required
          />
          <input
            v-model="formData.phone"
            class="registration__input"
            type="tel"
            :placeholder="$t('phone')"
            name="phone"
            required
          />
          <input
            v-model="formData.calendar"
            class="registration__input"
            type="date"
            name="calendar"
            required
          />
          <input
            v-model="formData.watch"
            class="registration__input"
            type="time"
            name="watch"
            required
          />
          <textarea
            v-model="formData.comment"
            class="registration__textarea-comment"
            :placeholder="$t('describe')"
            name="comment"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button class="registration__btn" type="submit">
          {{ $t("send") }}
          <img src="/img/registration/Send.svg" alt="send" />
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "RegistrationVue",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        calendar: "",
        watch: "",
        comment: "",
      },
    };
  },
  methods: {
    submitForm() {
      // код для отправки формы

      // Определите URL для отправки данных
      const apiUrl = "https://example.com/api/submit";

      // Отправка данные на сервер
      axios
        .post(apiUrl, this.formData)
        .then((response) => {
          console.log(response.data);
          // Обработка успешного ответа
        })
        .catch((error) => {
          console.error(error);
          // Обработка ошибок
        });
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

.registration {
  margin-top: 140px;
  margin-bottom: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 52px;
  }

  &__forms {
    width: 776px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__box {
    display: flex;
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__input {
    padding: 17px 240px 17px 20px;
    width: 372px;
    height: 50px;
    color: rgba (6, 33, 38, 0.5);
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.05);
    border: 1px solid #ccc;
    box-sizing: border-box;
    &:focus {
      color: #04a3ff;
      outline: 1px solid #04a3ff;
    }
  }

  &__textarea-comment {
    padding: 20px 0px 0px 20px;
    width: 776px;
    height: 150px;
    color: rgba (6, 33, 38, 0.5);
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.05);
    border: 1px solid #ccc;
    box-sizing: border-box;
    &:focus {
      color: #04a3ff;
      outline: 1px solid #04a3ff;
    }
  }

  &__btn {
    margin-top: 52px;
    width: 155px;
    height: 67px;
    border-radius: 47px;
    background: rgba(36, 190, 224, 1);
    color: #f7fcfd;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
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
