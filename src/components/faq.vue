<template>
  <section class="container">
    <h1 class="container__title">Perguntas Frequentes</h1>

    <div class="container__grid">
      <div class="grid__link">
        <router-link to class="link__faq"
          ><span
            >O que preciso para reservar um carro na NeoNavigation?</span
          ></router-link
        >
      </div>
      <div class="grid__link">
        <router-link to class="link__faq"
          ><span>Preciso do meu próprio seguro?</span></router-link
        >
      </div>
      <div class="grid__link">
        <router-link to class="link__faq"
          ><span>Outras pessoas podem dirigir um carro que reservei?</span></router-link
        >
      </div>
      <div class="grid__link">
        <router-link to class="link__faq"
          ><span>Qual é a política de cancelamento da NeoNavigation?</span></router-link
        >
      </div>
      <div class="grid__link">
        <router-link to class="link__faq"
          ><span>O que acontece se eu tiver um acidente?</span></router-link
        >
      </div>
      <div class="grid__link">
        <router-link to class="link__faq"
          ><span>Como posso obter descontos ao reservar um carro?</span></router-link
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "faq",
  data() {},
};
</script>
<style scoped>
.container {
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container__title {
  color: var(--white-background);
  font-size: 3rem;
  font-weight: 400;
}
.container__grid {
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Define duas colunas com largura igual */
  grid-template-rows: auto auto auto; /* Define três linhas, cada uma ajustando-se ao conteúdo */
  gap: 20px; /* Espaço entre as células da grid */
  padding: 10px;
  width: 95%;
  justify-items: center;
  align-items: center;
}
.grid__link {
  width: 70%;
  background-color: var(--white-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.link__faq {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  width: 100%;
  margin-top: 3%;
  margin-bottom: 3%;
}
span {
  color: var(--font-color);
  font-size: 1.1rem;
  transition: all 0.5s ease;
}
span:hover {
  transition: all 0.5s ease;
  color: var(--neo-green);
}
</style>
