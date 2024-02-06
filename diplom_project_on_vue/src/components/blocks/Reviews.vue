<template>
  <section class="reviews center">
    <div class="reviews__box">
      <h1 class="reviews__title">{{ $t("testimonials") }}</h1>
      <div class="reviews__arrows">
        <div class="reviews__arrow" @click="scrollReviews(-1)">
          <img
            class="reviews__svgArrow"
            src="/img/sliderPhotos/Fill4.svg"
            alt="arrowLeft"
          />
        </div>
        <div class="reviews__arrow" @click="scrollReviews(1)">
          <img
            class="reviews__svgArrow"
            src="/img/sliderPhotos/Fillright.svg"
            alt="arrowRight"
          />
        </div>
      </div>
    </div>
    <div id="reviews-slider" class="reviews__box-reviews">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="reviews__small-box"
      >
        <img
          class="reviews__image"
          :src="`/img/reviews/Ellipse${(index % 2) + 1}.png`"
          alt="photo"
        />
        <div class="reviews__description">
          <h1 class="reviews__title">{{ $t(review.name) }}</h1>
          <div class="reviews__rating-mini">
            <span class="reviews__active active"></span>
          </div>
          <p class="reviews__text">{{ $t(review.text) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RewiewsVue",
  data() {
    return {
      currentIndex: 0,
      reviews: [
        {
          name: "sofiaPotter",
          text: "theseGuysAreIncredible",
        },
        {
          name: "jordanBrowler",
          text: "theseGuysAreIncredible",
        },
        {
          name: "sofiaPotter",
          text: "theseGuysAreIncredible",
        },
        {
          name: "jordanBrowler",
          text: "theseGuysAreIncredible",
        },
      ],
    };
  },
  methods: {

    // Метод для прокрутки отзывов
    scrollReviews(direction) {
      // Получаем элемент слайдера по ID
      const slider = document.getElementById("reviews-slider");

      // Получаем ширину элемента слайдера
      const itemWidth = slider.offsetWidth;

      // Вычисляем количество пикселей для прокрутки
      const scrollAmount = itemWidth * direction;

      // Прокручиваем слайдер на заданное количество пикселей
      slider.scrollLeft += scrollAmount;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.reviews__box-reviews {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 1200px;
}

.reviews__small-box {
  width: 580px;
}

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

.reviews {
  margin-top: 73px;

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 36px;
    color: #062126;
    font-weight: bold;
  }

  &__arrows {
    display: flex;
    gap: 12px;
  }

  &__arrow {
    cursor: pointer;
    background-color: #c4c4c4;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    margin-right: 20px;
    &:hover {
      background-color: #24bee0;
    }
  }

  &__box-reviews {
    margin-top: 84px;
    width: 1200px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }

  &__rating-mini {
    display: flex;
    margin-top: 12px;
    margin-bottom: 20px;
    span {
      padding: 0;
      font-size: 20px;
      line-height: 1;
      color: lightgrey;

      &:before {
        content: "★★★★★";
      }
    }

    > span.active {
      color: gold;
    }
  }

  &__small-box {
    background: rgba(207, 125, 78, 0.05);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 574px;
    height: 300px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    width: 386px;
    margin-top: 32px;
    margin-right: 32px;
    margin-bottom: 32px;
  }

  &__image {
    padding: 32px 24px 145px 32px;
  }
}
</style>
