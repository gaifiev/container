<template>
  <footer class="footer center">
    <div class="footer__box-1">
      <div class="footer__item">
        <img class="footer__logo" src="/img/footer/logo.svg" alt="logo" />
        <p class="footer__text-street">{{ $t("street") }}</p>
        <p class="footer__bold-text">{{ $t("call") }}</p>
        <div class="footer__social">
          <a class="footer__social-lap" href="#"
            ><img src="/img/footer/096-twitter.svg" alt="social"
          /></a>
          <a class="footer__social-lap" href="#"
            ><img src="/img/footer/023-facebook.svg" alt="social"
          /></a>
          <a class="footer__social-lap" href="#"
            ><img src="/img/footer/052-linkedin.svg" alt="social"
          /></a>
        </div>
      </div>
      <div class="footer__item">
        <h1 class="footer__title">{{ $t("exploreTitle") }}</h1>
        <a class="footer__text" href="#">{{ $t("feature") }}</a>
        <a class="footer__text" href="./about.html">{{ $t("aboutUs") }}</a>
        <a class="footer__text" href="#">{{ $t("faqs") }}</a>
        <a class="footer__text" href="./contact.html">{{ $t("contacts") }}</a>
      </div>
      <div class="footer__item">
        <h1 class="footer__title">{{ $t("legalTitle") }}</h1>
        <a class="footer__text" href="#">{{ $t("privacyPolicy") }}</a>
        <a class="footer__text" href="#">{{ $t("termsOfServices") }}</a>
        <a class="footer__text" href="#">{{ $t("documentations") }}</a>
        <a class="footer__text" href="#">{{ $t("helpCenter") }}</a>
      </div>
      <div class="footer__item">
        <h1 class="footer__title">{{ $t("subscribeTitle") }}</h1>
        <p class="footer__text">{{ $t("subscribeText") }}</p>
        <div class="footer__item-input">
          <form name="footer__subscribe-form" action="#">
            <div class="footer__sub-button">
              <input
                class="footer__input footer__input-email"
                type="email"
                :placeholder="$t('yourEmail')"
                required
              />
              <input
                class="footer__input footer__input-submit"
                type="submit"
                :value="$t('subscribe')"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer__horizontal-line"></div>
    <div class="footer__box-2">
      <h1 class="footer__year">
        {{ $t("copyRight", { year: new Date().getFullYear() }) }}
      </h1>
      <div class="footer__link">
        <a class="footer__span" href="#">{{ $t("privacyPolicy") }}</a>
        <a class="footer__span" href="#">{{ $t("termsOfServices") }}</a>
        <a class="footer__span" href="#">{{ $t("accessibility") }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
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

.footer {
  background: rgba(18, 204, 244, 0.1);
  padding-top: 53px;
  padding-bottom: 81px;
  &__box-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  &__logo {
    margin-bottom: 36px;
  }

  &__text-street {
    font-size: 18px;
    font-weight: 300;
    color: rgba(6, 33, 38, 0.6);
    text-decoration: none;
  }

  &__title {
    margin-bottom: 36px;
  }

  &__text {
    font-size: 18px;
    font-weight: 300;
    color: rgba(6, 33, 38, 0.6);
    text-decoration: none;
    margin-top: 20px;
    width: 238px;
  }

  &__bold-text {
    font-size: 18px;
    font-weight: 500;
    color: rgba(6, 33, 38, 1);
    margin-top: 20px;
  }

  &__social {
    margin-top: 20px;
    display: flex;
    gap: 19px;
  }

  &__social-lap {
    background: rgba(6, 33, 38, 0.1);
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    &:hover {
      background: #12ccf4;
      fill: #fff;
    }
  }

  &__horizontal-line {
    margin-top: 40px;
    margin-bottom: 32px;
    border: 1px solid rgba(6, 33, 38, 0.1);
    width: 1180px;
  }

  &__box-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__year {
    font-size: 16px;
    color: rgba(6, 33, 38, 0.3);
    font-weight: 300;
  }

  &__span {
    text-decoration: none;
    margin-left: 32px;
    color: rgba(6, 33, 38, 0.4);
    font-size: 16px;
    font-weight: 300;
  }
  // ==================================

  &__item-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    z-index: 2;
    margin-top: 20px;
  }

  &__sub-button {
    display: flex;
  }

  &__input {
    padding: 17px 19px;
    border: 1px solid transparent;
    display: block;
  }

  &__input-email {
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    background: rgba(18, 204, 244, 0.1);
    width: 100%;
    transition: all 0.3s;
  }

  &__input-email::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: rgba(6, 33, 38, 0.5);
  }

  &__input-email:focus-visible {
    outline: none;
    border: 1px solid #f16d7f;
  }

  &__input-submit {
    background: rgba(36, 190, 224, 1);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    transition: all 0.5s ease;
  }

  &__input-submit:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid #0f97b5;
    color: #0f97b5;
  }
}
</style>
