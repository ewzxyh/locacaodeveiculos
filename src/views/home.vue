<template>
  <head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>
  <Header />
  <carGrid/>
  <ServiceQualitySummary />
  <favorityCarousel />
  <categoryCarousel />
  <commendation />
  <faq />
  <serviceMenu />
  <Footer/>
</template>

<script>
import Header from '../components/header.vue';

import favorityCarousel from '../components/favorityCarousel.vue';

import categoryCarousel from '../components/categoryCarousel.vue';

import commendation from '../components/commendation.vue';

import Footer from '../components/footer.vue';

import faq from '../components/faq.vue';

import serviceMenu from '../components/serviceMenu.vue';

import ServiceQualitySummary from '../components/ServiceQualitySummary.vue';
import carGrid from '../components/carGrid.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    favorityCarousel,
    categoryCarousel,
    commendation,
    Footer,
    faq,
    serviceMenu,
    ServiceQualitySummary,
    carGrid

  }, data() {
    return {
      questionIMG: '/img/questions.png',
      confyCar: '/img/confyCar.png',
      zoom: '/img/zoom.png'
    }

  }
}
</script>
