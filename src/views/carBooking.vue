<template>
  <div class="wraper">
    <div class="wraper__main-section">
      <div class="main-section__header">
        <h1 class="header__title">Como você quer retirar seu carro?</h1>
        <p class="header__hint">Escolha entre as opções a seguir:</p>
      </div>
      <div class="wraper__cards">
        <div class="cards_content">
          <div class="content__title">
            <h1 class="title__card">Fast Retirada - Digital</h1>
            <input
              type="radio"
              class="content__input"
              v-model="selectedOption"
              value="online"
            />
          </div>
          <img v-bind:src="onlineApp" alt="" class="content__image" />
          <p class="content__paragraph">
            Retire seu carro de forma
            <strong>100% digital, sem passar pelo balcão</strong> Você abre a
            porta pelo aplicativo e não paga nada mais por isso.
          </p>
        </div>
        <div class="cards_content-red">
          <div class="content__title">
            <h1 class="title__card">Com atendente no balcão</h1>
            <input
              type="radio"
              class="content__input"
              v-model="selectedOption"
              value="present"
            />
          </div>
          <img v-bind:src="counterStaff" alt="" class="content__image" />
          <p class="content__paragraph">
            Você pode retirar seu carro com uma atendente no balcão e, na
            agência, o atendimento é feito por ordem de chegada.
          </p>
        </div>
      </div>
      <div class="main-section__sumary">
        <div class="sumary__table">
          <h1 class="table__title">Resumo do aluguel</h1>
          <div class="wraper__table">
            <div class="table__content">
              <h2 class="content__title-2">Retirada</h2>
              <p class="content__paragraph-1">
                <strong>30 de Abril de 2024 às 23:30</strong>
              </p>
              <p class="content__paragraph-2">Aeroporto - Goiania</p>
              <hr />
              <h2 class="content__title-2">Devolução</h2>
              <p class="content__paragraph-1">
                <strong>30 de Abril de 2024 às 23:30</strong>
              </p>
              <p class="content__paragraph-2">Aeroporto - Goiania</p>
              <hr />
              <h2 class="content__title-2">Grupo</h2>
              <p class="content__paragraph-1">
                <strong>30 de Abril de 2024 às 23:30</strong>
              </p>
              <p class="content__paragraph-2">Aeroporto - Goiania</p>
              <hr />
            </div>
            <div class="table__content">
              <h2 class="content__title-2">Oferta Especial</h2>
              <table>
                <tr>
                  <th>Diárias</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>8x R$ 66,46</td>
                  <td>R$ 1.063,39</td>
                </tr>
              </table>
              <div class="card">
                <div class="card-header">
                  <h2>Pré-Autorização no cartão</h2>
                  <p>R$ 500,00</p>
                </div>
                <div class="card-content">
                  <p>
                    Esse valor será reservado no seu cartão de crédito na
                    retirada do carro e será devolvido no final do aluguel ou
                    utilizado para cobrir eventuais custos adicionais.
                  </p>
                  <p>
                    Faça sua reserva com proteção do carro e garanta o valor
                    reduzido.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="main-section__footer">
            <h1 class="footer__title">Valor total previsto</h1>
            <div class="footer__total">
              <h1 class="total__price">R$ 2.173,10</h1>
              <h3 class="total__parcels">Em até 6x de R$ 362,44</h3>
            </div>
          </div>
        </div>
        <button class="confirmation">Reserve Agora!</button>
      </div>
    </div>
    <serviceMenu />
    <Footer />
  </div>
</template>
<script>
import serviceMenu from "../components/serviceMenu.vue";
import Footer from "../components/footer.vue";
export default {
  name: "carBooking",
  components: {
    Footer,
    serviceMenu
  },
  data() {
    return {
      onlineApp: "../img/onlineApp.png",
      counterStaff: "../img/assistant.png",
      selectedOption: "",
    };
  },
};
</script>
<style scoped>
.wraper {
  margin-top: 5%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
}
.wraper__main-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.main-section__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 5%;
}
.header__title {
  color: var(--white-background);
  font-size: 2rem;
}
.header__hint {
  color: var(--white-background);
  font-size: 1.2rem;
}
.wraper__cards {
  margin-top: 3%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

}
.cards_content {
  padding: 0em 10em;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 40%;
  height: 500px;
  gap: 20px;
  background-color: var(--white-background);
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 5px rgba(0, 0, 255, 0.404);
}
.cards_content-red {
  padding: 0em 10em;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 40%;
  height: 500px;
  gap: 20px;
  background-color: var(--white-background);
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 5px rgba(245, 17, 17, 0.733);
}
.content__title {
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title__card {
  font-size: 1.2rem;
}
.content__input {
  width: 10%;
  cursor: pointer;
}
.content__image {
  width: 84%;
}
.content__paragraph {
  width: 80%;
  margin: 5%;
}
.main-section__sumary {
  margin-top: 5%;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sumary__table {
  width: 90%;
  background-color: var(--white-background);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wraper__table {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 5%;
}
.table__content {
  margin-top: 5%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2em;
}
.table__title {
  text-align: center;
  background-color: var(--light-green-neo);
  border-radius: 30px 30px 0 0;
  padding: 0.5em;
}
.content__title-2 {
  color: var(--darker-green);
}
th {
  text-align: start;
}
.card {

  border-radius: 10px;
  width: 90%;
}
.card-header {
  background-color: var(--darker-green);
  color: #fff;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-header h2 {
  margin: 0;
  font-size: 1.2em;
}
.card-header p {
  margin: 0;
  font-size: 1.2em;
}
.card-content {
  padding: 10px;
  color: #333;
  background-color: var(--light-green);
}
.main-section__footer {
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  background-color: var(--darker-green);
  gap: 25%;
  align-items: center;
  border-radius: 0 0 30px 30px;
  padding: 2em;
}
.confirmation {
  width: 90%;
  color: var(--white-background);
  background-color: #0a970a;
  font-size: 2.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.5em;
}
</style>
