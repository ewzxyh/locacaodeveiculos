<template>
  <head>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>
 <Header/>
 <section class="cards">
    <div class="cards__card">
      <img class="card__help" v-bind:src="questionIMG" alt="imagem ajuda com duvidas">
      <div class="card__columA">
        <div class="columA__long">
              <h1 class="long__title">Para longos periodos</h1>
              <img class="long__car" v-bind:src="confyCar" alt="">
        </div>
        <div class="columA__long">
              <h1 class="long__title">Para longos periodos</h1>
              <img class="long__car" v-bind:src="confyCar" alt="">
        </div>
      </div>

      <div class="card__columB">
        <div class="columA__long">
              <h1 class="long__title">Para longos periodos</h1>
              <img class="long__car" v-bind:src="confyCar" alt="">
        </div>
        <div class="columA__long">
              <h1 class="long__title">Para longos periodos</h1>
              <img class="long__car" v-bind:src="confyCar" alt="">
        </div>
      </div>
    </div>
 </section>
 <section class="banner">
   <div class="banner__wraper">
    <div class="wraper__disclaimer">
      <div class="disclaimer__image">
        <i class='bx bx-search-alt-2' ></i>
      </div>
      <div class="disclaimer__content">
        <h1 class="content__title">Econtre uma reserva</h1>
        <p class="content__paragraph">
          Precisa conferir os detalhes ou fazer uma alteração em sua reserva? Procure sua reserva da Alamo.
        </p>
      </div>
    </div>
    <div class="wraper__disclaimer">
      <div class="disclaimer__image">
        <i class='bx bx-medal bx-rotate-180' ></i>
      </div>
      <div class="disclaimer__content">
        <h1 class="content__title">Ativar o Check-in Rápido</h1>
        <p class="content__paragraph">
          Próxima reserva? Caia rapidamente na estrada! Ative o Check-in Rápido para economizar tempo no guichê de aluguel.
        </p>
      </div>
    </div>
    <div class="wraper__disclaimer">
      <div class="disclaimer__image">
        <i class='bx bx-check' ></i>
      </div>
      <div class="disclaimer__content">
        <h1 class="content__title">Nosso Padrão de Cuidado</h1>
        <p class="content__paragraph">
          Comprometemo-nos com seu atendimento excepcional e veículos de alta qualidade, seguindo nosso Padrão de Cuidado
        </p>
      </div>
    </div>
   </div>
 </section>
 <section class="reliability">
      <h1 class="reliability__title">Além da Matrix</h1>
      <p class="reliability__paragraph">Carros confiáveis para o que você precisa.</p>
      <p class="reliability__paragraph">Neste caminho, a liberdade de escolha é sua maior aliada.</p>
      <div class="reliability__discount">
        <div class="discount__wraper">
          <h1 class="wraper__percentage">98%</h1>
          <p class="wraper__paragraph">dos clientes que alugaram conosco relatam alta satisfação e afirmam que alugariam novamente.</p>
        </div>
        <div class="discount__wraper">
          <h1 class="wraper__percentage">65%</h1>
          <p class="wraper__paragraph">de veículos eco-friendly, atendendo à crescente demanda por opções de locação sustentáveis.</p>
        </div>
        <div class="discount__wraper">
          <h1 class="wraper__percentage">89%</h1>
          <p class="wraper__paragraph">dos clientes apreciam nosso serviço de atendimento ao cliente disponível 24/7 por WhatsApp, Telefone e E-mail.</p>
        </div>
        <div class="discount__wraper">
          <h1 class="wraper__percentage">1,9mi</h1>
          <p class="wraper__paragraph">milhões de veículos alugados, refletindo a confiança e a preferência dos consumidores por nossos serviços.</p>
        </div>
      </div>
 </section>
</template>

<script>
import Header from '../components/header.vue'


export default {
  name: 'HomeView',
  components: {
    Header
  },data(){
    return{
      questionIMG:'/img/questions.png',
      confyCar:'/img/confyCar.png',
      zoom:'/img/zoom.png'
    }
    
  }
}
</script>

<style scoped>

.card{
   width: 100vw;
}

.cards__card{
  display: flex;
  align-items: center;
  justify-content: center;
}
.card__help{
  margin-top: 4% ;
  width: 30.5%;
  border-radius: 20px;
}
.card__columA{
  margin-top:4%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
}
.columA__long{
  background-color: var(--white-background);
  border-radius: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
  cursor: pointer;
}
.long__title{
  width: 60%;
  margin: 3% 30%;
}
.long__car{
 display: flex ;
 width: 90%;
}
.card__columB{
  display: flex;
  flex-direction: column;
  margin-top:4%;
  gap: 30px;
}
.banner{
  margin-top:4%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.banner__wraper{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--white-background);
  width: 80%;
  border-radius: 20px;
}
.wraper__disclaimer{
  margin: .5% 0 .5% 0;
  background-color: var(--light-green-neo);
  width: 25%;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  gap: 10px;
  border-radius: 20px;
}
.disclaimer__image{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--neo-green);
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin: 0 0 0 .3% ;
}
.bx-search-alt-2{
  font-size: 3rem;
  display: flex;
  text-align: center;
}
.disclaimer__content{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content__title{
  font-size: 1.1rem;
}
.content__paragraph{
  font-size: 0.8rem;
}
.bx-rotate-180{
  font-size: 3rem;
  display: flex;
  text-align: center;
}
.bx-check{
  font-size: 3rem;
  display: flex;
  text-align: center;
}
.reliability{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4%;
  justify-content: center;
}
.reliability__title{
  color: var(--white-background);
  font-size: 4rem;
  font-weight: 800;
}
.reliability__paragraph{
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-background);
  font-size: 1.5rem;
}
.reliability__discount{
  margin-top: 4%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--white-background);
  width: 80%;
  border-radius: 20px ;
}
.discount__wraper{
  margin-top:.5% ;
  margin-bottom: .5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-green-neo);
  border-radius: 20px;
  width: 20%;
  gap: 4px;
}
.wraper__percentage{
  font-size: 2rem;
  font-weight: 800;
}
.wraper__paragraph{
  display: flex;
  text-align: center;
  width: 90%;
  margin-bottom: 5%;
}
</style>
