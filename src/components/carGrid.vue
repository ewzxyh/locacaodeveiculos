<template>
  <div class="bento-container">
    <div class="bento-grid grid-1">
      <p class="card-title-grid-1"> Ficou <span class="highlight">com dúvidas</span> após fazer a sua reserva?
      </p>
      <div> 
        <button class="help-button">Entre em contato</button>
        <button class="portal-button">Acessar portal do cliente</button>
      </div>
      <div class="grid-img-div">
        <img v-bind:src="logoHero" alt="" class="grid-image">
      </div>
    </div>
    <div class="bento-grid grid-2">
      <div class="card-content">
        <h2 class="card-title">Para Longos Períodos</h2>
        <p class="card-description">Descrição</p>
        <img v-bind:src="eletrico" alt="" class="card-image">
      </div>
    </div>
    <div class="bento-grid grid-3">
      <div class="card-content">
        <h2 class="card-title">Deluxe &<br>Super Deluxe</h2>
        <p class="card-description">Descrição</p>
        <img v-bind:src="eletrico" alt="" class="card-image">
      </div>
    </div>
    <div class="bento-grid grid-4">
      <div class="card-content">
        <h2 class="card-title">Elétrico</h2>
        <p class="card-description">Descrição</p>
        <img v-bind:src="eletrico" alt="" class="card-image">
      </div>
    </div>
    <div class="bento-grid grid-5">
      <div class="card-content">
        <h2 class="card-title">Ideal para Uber</h2>
        <p class="card-description">Descrição</p>
        <img v-bind:src="eletrico" alt="" class="card-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarGrid',
  data() {
    return {
      deluxe: '../img/deluxe.png',
      longosPeriodos: '../img/longosPeriodos.png',
      eletrico: '../img/eletrico.png',
      uber: '../img/uber.png',
      logoHero: '../img/logohero.png',
    }
  },
};
</script> 

<style scoped>
.bento-container {
  padding: 8em;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* 8 colunas */
  grid-template-rows: repeat(6, 1fr);
  /* 6 linhas */
  gap: 10px;
  /* Espaço entre os grids */
  height: 100vh;
  /* Altura de 100% da viewport */
  width: 100%;
  /* Largura de 100% */
  box-sizing: border-box;
}

.bento-grid {
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  /* Para posicionamento absoluto da imagem */
  box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
  /* Sombra */
  background-color: #fffefa;
  /* Background branco para os cards */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 2em;
}

.grid-1 {
  grid-column: 1 / span 4;
  grid-row: 1 / span 6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* Diminuir o padding para evitar excesso de espaço */
  background-color: #33FF33;
  box-shadow: 0px 0px 0px 1px rgba(165, 165, 165, 0.04),
    -9px 9px 9px -0.5px rgba(0, 0, 0, 0.04),
    -18px 18px 18px -1.5px rgba(0, 0, 0, 0.08),
    -37px 37px 37px -3px rgba(0, 0, 0, 0.16),
    -75px 75px 75px -6px rgba(0, 0, 0, 0.24),
    -150px 150px 150px -12px rgba(19, 18, 18, 0.48) !important;
}


.grid-img-div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.grid-image {
  width: 100%;
  object-fit: contain;
  /* Mantém a proporção e recorta a imagem para caber no contêiner */
  object-position: center;
  /* Centraliza a imagem no contêiner */
}

.highlight {
  color: #000;
  /* Cor de destaque */
}

.card-title-grid-1 {
  padding: 1.5em 1em 0 1em;
  font-size: 3em;
  margin: 0 0 20px;
  /* Aumentar a margem inferior para dar espaço ao botão */
  font-weight: normal;
  text-align: center;
  /* Centralizar o texto */
}

.help-button {
  background-color: #ffffff;
  border: none;
  width: 100%;
  padding: 15px 0px;
  margin-top: 20px;
  /* Espaçamento entre o título e o botão */
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5em;
  color: #292929;
  box-shadow:
        inset 1px 0px 0px 0px rgba(255, 255, 255, 0.03),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10),
        0px 2px 2px 0px rgba(0, 0, 0, 0.10),
        0px 4px 4px 0px rgba(0, 0, 0, 0.10),
        0px 8px 8px 0px rgba(0, 0, 0, 0.10);
}

.portal-button {
  background-color: #ffffff;
  border: none;
  width: 100%;
  padding: 15px 0px;
  margin-top: 20px;
  /* Espaçamento entre o título e o botão */
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5em;
  color: #292929;
  box-shadow:
        inset 1px 0px 0px 0px rgba(255, 255, 255, 0.03),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10),
        0px 2px 2px 0px rgba(0, 0, 0, 0.10),
        0px 4px 4px 0px rgba(0, 0, 0, 0.10),
        0px 8px 8px 0px rgba(0, 0, 0, 0.10);
}

.card-title {
  font-size: 1.5em;
  margin: 10px 0;
  font-weight: bold;
}

.card-description {
  font-size: 1em;
  margin: 0;
  flex-grow: 1;
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  align-self: flex-end;
}

/* Especificações para cada cartão */

.grid-2 {
  grid-column: 5 / span 2;
  grid-row: 1 / span 3;
}

.grid-3 {
  grid-column: 7 / span 2;
  grid-row: 1 / span 3;
}

.grid-4 {
  grid-column: 5 / span 2;
  grid-row: 4 / span 3;
}

.grid-5 {
  grid-column: 7 / span 2;
  grid-row: 4 / span 3;
}
</style>
