<template>
  <section class="container">
    <h1 class="container__title">Perguntas Frequentes</h1>

    <div class="container__grid">
      <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
        <div class="accordion-title" @click="toggleAccordion(index)">
          <span>{{ faq.question }}</span>
          <span>{{ activeIndex === index ? '-' : '+' }}</span>
        </div>
        <div class="accordion-content" v-show="activeIndex === index">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "faq",
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: "O que preciso para reservar um carro na NeoNavigation?",
          answer: "Você precisa de uma carteira de motorista válida e um cartão de crédito.",
        },
        {
          question: "Preciso do meu próprio seguro?",
          answer: "Não, a NeoNavigation oferece seguro incluso no preço da reserva.",
        },
        {
          question: "Outras pessoas podem dirigir um carro que reservei?",
          answer: "Sim, desde que estejam adicionadas como motoristas adicionais na sua reserva.",
        },
        {
          question: "Qual é a política de cancelamento da NeoNavigation?",
          answer: "Você pode cancelar sua reserva até 24 horas antes do horário de retirada.",
        },
        {
          question: "O que acontece se eu tiver um acidente?",
          answer: "Em caso de acidente, entre em contato com o suporte da NeoNavigation imediatamente.",
        },
        {
          question: "Como posso obter descontos ao reservar um carro?",
          answer: "Você pode obter descontos ao utilizar cupons promocionais ou se inscrever em nosso programa de fidelidade.",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>


<style scoped>
.container {
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #292929 !important;
}
.container__title {
  color: #f9f9f9 !important;
  font-size: 3rem;
  font-weight: 400;
  color: #292929;
}
.container__grid {
  color: #292929 !important;
  margin-top: 5%;
  padding: 10px;
  width: 90%;
  justify-items: center;
  align-items: center;
}
.accordion-item {
  padding: 0.5em;
  width: 100%;
  color: #292929 !important;
  background-color: var(--white-background);
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
}

.accordion-title span{
  color: #292929 !important;
}
.accordion-title {
  color: #292929 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  font-size: 1.25rem;
  transition: background-color 0.3s ease;
}
.accordion-title span:hover {
  color: #33ff33 !important;
  background-color: var(--light-gray);
}
.accordion-content {
  color: #292929 !important;
  padding: 15px;
  font-size: 1rem;
  background-color: var(--light-gray);
  border-top: 1px solid var(--gray);
}
</style>
