<template>
  <head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>

  <header class="header">
    <div class="container">
      <div class="container__case"> <img v-bind:src="shopBag" alt="icone da sacola" draggable="false" class="case__image">
      </div>
      <div :class="{ 'container__booking-form-hover': allFieldsFilled }" class="container__booking-form">
        <div class="wraper">
          <div class="booking-form__wrapper">

            <div class="wrapper__pickup">
              <h2 class="pickup__title">Digite o local de retirada</h2>
              <input v-model="localPickUp" type="text" class="pickup__city" placeholder="Cidade" required>
            </div>

            <img v-bind:src="mapsMark" alt="marcador do maps" class="wrapper__map-marker" draggable="false">

          </div>

          <div class="wrapper__schedule">
            <flat-pickr v-model="datePickUp" :config="config" class="schedule__input" placeholder="Data"></flat-pickr>
            <img v-bind:src="calendar" alt="Imagem do caendario" draggable="false">
          </div>

          <div class="wrapper__schedule">
            <flat-pickr v-model="timePickUp" :config="configTime" class="schedule__input" placeholder="Hora"></flat-pickr>
            <img v-bind:src="clock" alt="Imagem do relogio" draggable="false">
          </div>

          <button type="submit" :class="{'container__comfirm-expanded': allFieldsFilled}" class="container__comfirm"> Continuar</button>
          <button v-if="!allFieldsFilled" @mouseover="changeText" @mouseout="resetText" class="container__hamburguer"><i
              class='bx bx-menu'></i><span>{{ buttonText }}</span></button>
        </div>
        <!-- fileira de inputs da barra de alocação -->
        <div v-if="showElement" class="wraper">
          <div class="booking-form__wrapper">

            <div class="wrapper__pickup">
              <h2 class="pickup__title">Digite o local de entrega</h2>
              <input v-model="localDeliver" type="text" class="pickup__city" placeholder="Cidade" required>
            </div>

            <img v-bind:src="mapsMark" alt="marcador do maps" class="wrapper__map-marker" draggable="false">

          </div>

          <div class="wrapper__schedule">
            <flat-pickr v-model="dateDeliver" :config="config" class="schedule__input" placeholder="Data"></flat-pickr>
            <img v-bind:src="calendar" alt="Imagem do caendario" draggable="false">
          </div>

          <div class="wrapper__schedule">
            <flat-pickr v-model="timeDeliver" :config="configTime" class="schedule__input"
              placeholder="Hora"></flat-pickr>
            <img v-bind:src="clock" alt="Imagem do relogio" draggable="false">
          </div>
          <button type="submit" :class="{'container__orders-expanded': allFieldsFilled}" class="container__orders"> Minhas Reservas</button>
        </div>
        <!-- fileira de inputs da barra de categoria de carro -->
        <div v-if="showElement" class="wraper">
          <div class="booking-form__wrapper-category">

            <div class="wrapper__pickup">
              <h2 class="pickup__title">Categoria do Carro</h2>
              <input v-model="inputCategory" type="text" class="pickup__city" placeholder="Economico ?" required>
            </div>

            <img v-bind:src="category" alt="marcador do maps" class="wrapper__map-marker" draggable="false">
   
          </div>

          <div class="booking-form__wrapper-category">

            <div class="wrapper__pickup">
              <h2 class="pickup__title">Marca do Carro (opcional)</h2>
              <input v-model="inputBrand" type="text" class="pickup__city" placeholder="Honda ?" required>
            </div>

            <img v-bind:src="carBrand" alt="marcador do maps" class="wrapper__map-marker" draggable="false">

          </div>
          <div class="wrapper__colum-promotion">
            <div class="colum-promotion__promotion">
              <input v-model="inputPromo" type="text" class="promotio__input" placeholder="codigo Promocional" required>
              <img v-bind:src="redemImage" alt="Imagem do relogio" draggable="false">
            </div>
            <router-link to="/" class="colum-promotion__rent"><strong>Economize com aluguel mensal</strong></router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'cabecalho',
  components: {
    flatPickr
  },
  data() {
    return {
      clock: "/img/clock.png",
      calendar: "/img/calendar.png",
      mapsMark: "/img/mapMarker.png",
      shopBag: "/img/shop.png",
      category: "/img/category.png",
      carBrand: "/img/bookmark.png",
      redemImage: "/img/redeem.png",
      buttonText: '',
      originalText: '',
      hoverText: 'Minhas Reservas',
      datePickUp: null,
      localPickUp: '',
      timePickUp: '',
      dateDeliver: '',
      timeDeliver: '',
      inputCategory: '',
      inputBrand: '',
      inputPromo: '',
      showElement:false,
      config: {//metodo para formatar dia
        dateFormat: "d/m/Y"
      },
      configTime: { //metodo para formatar hora
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
      }
    }
  },
  methods: {
    changeText() {
      this.buttonText = this.hoverText;
    },
    resetText() {
      this.buttonText = this.originalText;
    },
  },
  computed: {
    allFieldsFilled() {
      return this.localPickUp && this.timePickUp && this.datePickUp
    },
  },
  watch:{
    allFieldsFilled(newValue){
      if(newValue){
        setTimeout(()=>{
          this.showElement=true;
        },180);
      }else{
        this.showElement=false
      }
    }
  }
}

</script>


<style >
.container {
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  gap: 12%;
}

.container__case {
  display: flex;
  background-color: var(--neo-green);
  width: 7%;
  height: 75px;
  border-radius: 0 50px 50px 0;
  align-items: center;
  justify-content: center;
}

.case__image {
  width: 50%;
}

/* css barra input */
.wraper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}

.container__booking-form {
  background-color: var(--white-background);
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  width: 64%;
  height: 75px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.container__booking-form-hover {
  height: 250px;
  gap: 5%;
  transition: all 0.5s ease;

}

.booking-form__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  border: 2px solid var(--neo-green);
  width: 32%;
  padding-right: 2%;
}

.booking-form__wrapper-category {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  border: 2px solid var(--neo-green);
  width: 32%;
  padding-right: 2%;
}

.wrapper__pickup {
  flex-direction: column;
  display: flex;
  gap: 5px;
  margin-left: 5%;
  width: 95%;
  height: 52px;
  background-color: transparent;
}

.pickup__title {
  font-family: var(--main-font);
  font-size: 0.9rem;
  font-weight: 400;
}

.pickup__city {
  outline: none;
  border: none;
  height: 25px;
  font-family: var(--main-font);
  background-color: var(--white-background);
  border-radius: 10px;
}

.pickup__city::placeholder {
  font-family: var(--main-font);
  font-size: 1.1rem;
}

.wrapper__schedule {
  flex-direction: row;
  display: flex;
  gap: 5px;
  align-items: center;
  width: 15%;
  height: 52px;
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid var(--neo-green);
  justify-content: center;
}

.schedule__input {
  font-family: var(--main-font);
  width: 60%;
  height: 60%;
  border: none;
  outline: none;
  background-color: var(--white-background);
  border-radius: 10px;
}

.schedule__input::placeholder {
  font-size: 1.1rem;
}

.container__comfirm {
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 14%;
  background-color: var(--neo-green);
  flex-wrap: nowrap;
  font-family: var(--main-font);
  font-weight: 800;
}

.container__comfirm:hover {
  background-color: var(--darker-green);
  transition: 0.7s;
}
.container__comfirm-expanded{
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 20%;
  background-color: var(--neo-green);
  flex-wrap: nowrap;
  font-family: var(--main-font);
  font-weight: 800;
}

.container__hamburguer {
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  background-color: var(--black-background);
  flex-wrap: nowrap;
  transition: all 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__hamburguer .bx-menu {
  color: var(--white-background);
  position: absolute;
}

.container__hamburguer:hover {
  width: 15%;
  transition: all 0.6s ease;
  z-index: 2;
}

.container__hamburguer:hover .bx-menu {
  opacity: 0;
  transition: all 0.3s ease;
}

span {
  color: transparent;
  font-family: var(--main-font);
  position: relative;
  font-weight: 800;
}

.container__hamburguer:hover span {
  color: var(--white-background);
  transition: all 3.8s;
}

.flatpickr-day {
  color: var(--font-color);
}

.flatpickr-day:hover {
  color: var(--neo-green);
  font-weight: 800;
  transition: all 0.5s ease;
  background-color: var(--font-color);
  border: none;
  outline: none;
}

.flatpickr-day.today:hover {
  background-color: var(--font-color);
  color: var(--neo-green);
}

.container__orders {
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 14%;
  color: var(--white-background);
  background-color: var(--black-background);
  flex-wrap: nowrap;
  font-family: var(--main-font);
  font-weight: 800;
}
.container__orders-expanded{
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 20%;
  color: var(--white-background);
  background-color: var(--black-background);
  flex-wrap: nowrap;
  font-family: var(--main-font);
  font-weight: 800;
}
.wrapper__colum-promotion{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  gap: 8px;
}
.colum-promotion__promotion{
  display: flex;
  border: 2px solid var(--neo-green);
  border-radius:50px;
  align-items: center;
  justify-content: center;
  
}
.promotio__input{
  outline: none;
  border: none;
  font-family: var(--main-font);
  background-color: var(--white-background);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.colum-promotion__rent{
  font-size: 0.8rem;
}
.colum-promotion__rent:hover{
  color: var(--main-font);
  text-decoration: underline;
}
</style>
