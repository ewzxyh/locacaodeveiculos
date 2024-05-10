<template>
    <section class="container"> 
        <swiper
      :effect="'flip'"
      :grabCursor="true"
      :pagination="true"

      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img v-bind:src="questions" alt="Iagem de duvidas neo Navigation" class="swiper__image"></swiper-slide
      ><swiper-slide
        ><img v-bind:src="clientePortal" alt="Iagem de duvidas neo Navigation" class="swiper__image"></swiper-slide
      >
    </swiper>
    </section>
    <div class="container__grid">
        
    </div>
  </template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectFlip } from 'swiper/modules';
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
            confyCar: '../img/confyCar.png',
            questions: '../img/questions.png',
            superCar: '../img/superCar.png',
            uberCar: '../img/uberCar.png',
            eletricCar: '../img/eletricCar.png',
            powerStation: '../img/powerStation.png',
            clientePortal:'../img/clientePortal.png'
        }
    }

}
</script>
<style scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper {
  width: 30%;
  
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 20px ;
}
</style>