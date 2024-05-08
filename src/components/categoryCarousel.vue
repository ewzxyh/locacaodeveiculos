<template>
    <section class="container">
        <h1 class="container__title">Navegue por <strong>Categoria</strong></h1>
        <swiper :slidesPerView="4"  :loop="true" :spaceBetween="30" :speed="1200"   :centeredSlides="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="suvImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>SUV</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="sedanImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Sedan</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="hatchImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Hatch</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="pickupImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Pick-up</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="crossoverImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span class="link">Crossover</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="peruaImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Perua</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="minivanImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Minivan</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="furgaoImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Furgão</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="mySwiper__content">
                <img v-bind:src="sportiveImg" alt="" class="image__car">
               <div class="content__link-wraper">
                 <router-link to="/"><span>Esportivo</span></router-link>
               </div>
            </div>
        </SwiperSlide>
        </swiper>
        <router-link to='/home' class="container__see-more"><span class="see-more__text">Ver Mais</span></router-link>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
 export default{
    name: 'categoryCarousel',
    data(){
      return{
        suvImg:'../img/suv.png',
        pickupImg:'../img/pickup.png',
        hatchImg:'../img/hatch.png',
        sedanImg:'../img/sedan.png',
        sportiveImg:'../img/sportive.png',
        crossoverImg:'../img/crossover.png',
        peruaImg:'../img/perua.png',
        minivanImg:'../img/minivan.png',
        furgaoImg:'../img/furgao.png',
      }
    },
    components: { 
        SwiperSlide,
        Swiper
    }, setup() {
      return {
        modules: [Autoplay, Navigation],
      };
    },
}
</script>

<style scoped>
.container {
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container__title {
    color: var(--white-background);
    font-size: 3rem;
    font-weight: 400;
}
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 20px;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}
.mySwiper__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  gap: 20px;
  width: 100%;
}

.content__link-wraper{
  background-color: var(--white-background);
  width: 95%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
span{
  color: var(--black-background);
  font-size: 2rem;
  font-weight: 200;
  transition: all .5s ease;
 
}
span:hover{
  color: var(--neo-green);
  transition: all .5s ease;
}
.container__see-more {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--neo-green);
    margin-top: 5%;
    width: 15%;
    border-radius: 40px;
}

.see-more__text {
    color: var(--black-background);
    font-size: 2rem;
    margin-bottom: 4%;
    margin-top: 4%;
    font-weight: 400;
}
.see-more__text:hover{
    color: var(--black-background);
}
</style>