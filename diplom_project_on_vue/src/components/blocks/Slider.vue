<template>
  <section class="slider center">
    <div class="slider__box">
      <h1 class="slider__title">{{ $t("ourServices") }}</h1>
      <div class="slider__arrows">
        <div class="slider__arrow" @click="scrollPhotos(-3)">
          <img
            class="slider__svgArrow"
            src="/img/sliderPhotos/Fill4.svg"
            alt="arrowLeft"
          />
        </div>
        <div class="slider__arrow" @click="scrollPhotos(3)">
          <img
            class="slider__svgArrow"
            src="/img/sliderPhotos/Fillright.svg"
            alt="arrowRight"
          />
        </div>
      </div>
    </div>
    <div id="slider__photo-container" class="slider__box-sliders">
      <div id="photo-slider" class="slider__photo-slider" ref="slider">
        <!-- Итерация по массиву изображений и их описаний -->
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="slider__box-photo-name"
        >
          <img class="slider__photo" :src="photo.src" :alt="photo.alt" />
          <h1 class="slider__name">{{ $t(photo.name) }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MultiWordSlider", 

  data() {
    // Состояние компонента
    return {
      currentIndex: 0, // Индекс текущего изображения
      intervalId: null, // Идентификатор интервала для автопрокрутки
      intervalDuration: 10000, // Интервал автопрокрутки в миллисекундах
      photos: [
        // Массив объектов с информацией об изображениях
        {
          src: "img/sliderPhotos/image1.png",
          alt: "Photo 1",
          name: "immediateCare",
        },
        {
          src: "img/sliderPhotos/image2.png",
          alt: "Photo 2",
          name: "dentalCare",
        },
        {
          src: "img/sliderPhotos/image3.png",
          alt: "Photo 3",
          name: "diagnosticCenter",
        },
        {
          src: "img/sliderPhotos/image1.png",
          alt: "Photo 1",
          name: "immediateCare",
        },
        {
          src: "img/sliderPhotos/image2.png",
          alt: "Photo 2",
          name: "dentalCare",
        },
        {
          src: "img/sliderPhotos/image3.png",
          alt: "Photo 3",
          name: "diagnosticCenter",
        },
      ],
    };
  },

  mounted() {
    // Вызывается после того, как компонент был добавлен в DOM
    this.startAutoScroll(); // Начинаем автопрокрутку при загрузке компонента
  },

  methods: {
    // Метод для прокрутки изображений
    scrollPhotos(direction) {
      this.currentIndex =
        (this.currentIndex + direction + this.photos.length) %
        this.photos.length; // Вычисление нового индекса
      const translateValue = -this.currentIndex * 403; // Заменить 403 на ширину фото
      this.$refs.slider.style.transform = `translateX(${translateValue}px)`; // Применение стиля прокрутки
    },

    // Метод для автоматической прокрутки
    autoScroll() {
      this.intervalId = setInterval(() => {
        this.scrollPhotos(3); // Прокручиваем на 3 картинки
      }, this.intervalDuration);
    },

    // Метод для запуска автопрокрутки
    startAutoScroll() {
      this.autoScroll();
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },

  beforeUnmount() {
    // Вызывается перед тем, как компонент будет удален
    clearInterval(this.intervalId); // Очищаем интервал при удалении компонента
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

.slider {
  margin-top: 132px;
  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 48px;
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

  &__box-sliders {
    width: 1200px;
    overflow: hidden;
    position: relative;
  }

  &__photo-slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    gap: 32px;
    justify-content: space-between;
    margin-top: 84px;
  }

  &__slider__photo {
    width: 372px;
    height: 282px;
  }

  &__name {
    margin-top: 32px;
    font-size: 24px;
    color: #062126;
    font-weight: 500;
  }
}
</style>
