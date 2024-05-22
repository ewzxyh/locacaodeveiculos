<template>
  <section class="container-carGrid">
    <swiper
      :effect="'flip'"
      :grabCursor="true"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          v-bind:src="questions"
          alt="Iagem de duvidas neo Navigation"
          class="swiper__image" /></swiper-slide
      ><swiper-slide
        ><img
          v-bind:src="clientePortal"
          alt="Iagem de duvidas neo Navigation"
          class="swiper__image"
      /></swiper-slide>
    </swiper>
    <div class="grid-container">
      <div class="grid-item">
        <img src="path_to_image/honda_city.png" alt="Para Longos Períodos" />
        <p>Para Longos Períodos</p>
      </div>
      <div class="grid-item">
        <img src="path_to_image/ferrari.png" alt="Deluxe & Super Deluxe" />
        <p>Deluxe & Super Deluxe</p>
      </div>
      <div class="grid-item">
        <img src="path_to_image/tesla.png" alt="Elétrico" />
        <p>Elétrico</p>
      </div>
      <div class="grid-item">
        <img src="path_to_image/chevrolet.png" alt="Carro para Uber" />
        <p>Carro para Uber</p>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip } from "swiper/modules";
export default {
  name: "carGrid",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFlip],
    };
  },
  data() {
    return {
      confyCar: "../img/confyCar.png",
      questions: "../img/questions.png",
      superCar: "../img/superCar.png",
      uberCar: "../img/uberCar.png",
      eletricCar: "../img/eletricCar.png",
      powerStation: "../img/powerStation.png",
      clientePortal: "../img/clientePortal.png",
    };
  },
};
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-right: 0;
}

.grid-item {
  display: flex;
  min-height: 180px;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  padding: 20px;
  border-radius: 10px;
  flex-grow: 1 !important;
}

.grid-item img {
  max-width: 100%;
  border-radius: 10px;
}

.grid-item p {
  margin-top: 10px;
  font-size: 18px;
  color: #292929 !important;
}

.container-carGrid {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 !important;
  margin-top: 5em;
}
.swiper {
  width: 40%;
  margin: 0;
  margin-right: 2em;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 20px;
}
</style>
