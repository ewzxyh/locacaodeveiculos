<template>
    <section class="container">
        <h1 class="container__title">Navegue pelos <strong>Grupos Favoritos</strong></h1>
        <swiper :slidesPerView="4"  :loop="true" :spaceBetween="30" :speed="1200"   :centeredSlides="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="carousel__wraper">
                    <div class="wraper__card">
                        <h1 class="card__group">Compacto com ar</h1>
                        <img v-bind:src="mostPickedCar" alt="Carros com melhores avaliações" class="card__image">
                        <p class="card__paragraph">Fiat mobi 1.0 Renault kwid 1.0 ou similar*</p>
                        <router-link to="/" class="card__order-now"><span class="order-now__text">Reserve
                                Agora</span></router-link>
                        <router-link to="/" class="card__see-details"><span class="see-details__text">Mostrar
                                detalhes</span></router-link>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <router-link to='/home' class="container__see-more"><span class="see-more__text">Ver Mais</span></router-link>
    </section>
</template>
<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Navigation } from 'swiper/modules';
export default {
    name: 'favorityCarousel',
    data() {
        return {
            mostPickedCar: '/img/ferrari2.png',
        }
    },
    components: {
        Swiper,
        SwiperSlide,
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
    gap: 30px;
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
    height: 100%;
    object-fit: cover;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}
strong {
    font-weight: 800;
}

.carousel__wraper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.wraper__card {
    margin-top: 20%;
    background-color: var(--white-background);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 80%;
}

.card__group {
    color: var(--neo-green);
    width: 50%;
    text-align: center;
}

.card__image {
    margin-top: 5%;
    width: 90%;
}

.card__paragraph {
    color: var(--gray-font);
    width: 70%;
    text-align: center;
    font-family: var(--secondary-font);
    font-weight: 600;
}

.card__order-now {
    display: flex;
    justify-content: center;
    background-color: var(--neo-green);
    border-radius: 10px;
    width: 80%;
}

.order-now__text {
    color: var(--black-background);
    margin: 4%;
    font-weight: 600;
}

.card__see-details {
    margin-bottom: 3%;
}

.see-details__text {
    color: var(--dark-green);
    font-weight: 600;
    font-size: 1rem;
}

.see-details__text:hover {
    text-decoration: underline;
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
@media screen and (max-width: 1300px) {
    .wraper__card{
        width: 100%;
    }
    .card__group {
    width: 65%;
    text-align: center;
    font-size: 1.5rem;
    }
    .container__see-more{
        width: 20%;
    }
}
</style>