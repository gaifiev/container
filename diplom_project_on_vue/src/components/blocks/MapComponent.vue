<template>
  <div class="map">
    <h2 class="title center">Мы здесь!</h2>
    <div class="map__box">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="markerCoords"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue3-leaflet";

export default {
  name: "MapComponentVue",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 13,
      center: [55.7522, 37.6156], // Координаты центра карты
      markerCoords: [55.7522, 37.6156], // Координаты маркера
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.title {
  font-size: 72px;
  text-align: center;
  margin-bottom: 30px;
}
.map {
  margin-top: 80px;
}

.map__box {
  max-width: 100%;
  height: 300px;
  max-height: 300px;
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

/* Настройка фона карты */
.leaflet-container {
  background-color: #1d1717;
}

/* Настройка цвета маркеров */
.leaflet-marker-icon {
  border-color: #ff0000;
}

/* Настройка цвета маркеров при наведении */
.leaflet-marker-icon:hover {
  border-color: #c0392b;
}

/* Настройка цвета линий на карте */
.leaflet-path {
  stroke: #2ecc71;
}

/* Настройка цвета и фона попапов */
.leaflet-popup-content-wrapper {
  background-color: #ecf0f1;
  color: #34495e;
}

/* Настройка стрелочки попапа */
.leaflet-popup-tip {
  background-color: #02ccff;
}

/* Настройка цвета контролов */
.leaflet-control {
  color: #11acd3;
}

/* Настройка цвета фона контролов */
.leaflet-control-container {
  background-color: #0078f0;
}
</style>
