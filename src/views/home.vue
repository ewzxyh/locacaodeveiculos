<template>
  <div>
    <Header />
    <carGrid />
    <ServiceQualitySummary />
    <favorityCarousel />
    <categoryCarousel />
    <commendation />
    <faq />
    <serviceMenu />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header.vue";

import favorityCarousel from "../components/favorityCarousel.vue";

import categoryCarousel from "../components/categoryCarousel.vue";

import commendation from "../components/commendation.vue";

import Footer from "../components/footer.vue";

import faq from "../components/faq.vue";

import serviceMenu from "../components/serviceMenu.vue";

import ServiceQualitySummary from "../components/ServiceQualitySummary.vue";
import carGrid from "../components/carGrid.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    favorityCarousel,
    categoryCarousel,
    commendation,
    faq,
    serviceMenu,
    ServiceQualitySummary,
    carGrid,
    Footer,
  },
  data() {
    return {
      questionIMG: "/img/questions.png",
      confyCar: "/img/confyCar.png",
      zoom: "/img/zoom.png",
    };
  },
};
</script>
