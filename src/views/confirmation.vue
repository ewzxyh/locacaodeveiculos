<template>
  <form action="" class="container">
    <div class="container__uper-section">
      <div class="uper-section__example">
        <div class="example__image">
          <div class="image__background">
            <img
              v-bind:src="mailIcon"
              alt="icone de um email"
              class="background__content"
              draggable="false"
            />
          </div>
        </div>
        <p class="example__paragraph">
          Para sua segurança, enviamos um código para o seu e-mail
          <strong>e****xemplo@hotmail.com.</strong>
        </p>
      </div>
      <div class="uper-section__step">
        <img
          v-bind:src="secondStep"
          alt="barra de progresso"
          class="step__image"
          draggable="false"
        />
      </div>
    </div>
    <div class="container__code">
      <h1 class="code__title">Insira o código que te enviamos por e-mail</h1>
      <div class="code__input">
        <input
          v-for="(value, index) in inputs"
          :key="index"
          v-model="inputs[index]"
          @input="onInput"
          maxlength="1"
          class="input__value"
          type="text"
          ref="inputs"
          placeholder="-"
        />
      </div>
      <button class="container__resend-link">Não recebi! Reenviar código.</button>
      <p class="container__paragraph">
        Dificuldades para receber o código? <br />
        Entre em contato com a Assistência ao Cliente no 0800 969 2024. *O tempo de
        recebimento do código pode variar, verifique a sua Caixa de SPAM.
      </p>
    </div>
  </form>
</template>
<script>
export default {
  name: "confirmation",
  data() {
    return {
      mailIcon: "../img/mailIcon.png",
      secondStep: "../img/secondStep.png",
      inputs: ["", "", "", "", "", ""],
    };
  },
  methods: {
    onInput(event) {
      const index = this.$refs.inputs.indexOf(event.target);
      if (index < this.inputs.length - 1 && event.target.value !== "") {
        this.$refs.inputs[index + 1].focus();
      }
    },
  },
};
</script>
<style>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 30%;
}

.container__uper-section {
  display: flex;
  width: 100%;
  justify-content: center;
}

.uper-section__example {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 50%;
}

.example__image {
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-background);
  width: 120px;
  height: 120px;
  border-radius: 30px;
}

.image__background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-green-neo);
  width: 85%;
  height: 85%;
  border-radius: 30px;
}

.background__content {
  width: 75%;
}

.uper-section__step {
  display: flex;
  background-color: var(--white-background);
  width: 30%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.step__image {
  width: 70%;
}

.example__paragraph {
  width: 50%;
  color: var(--white-background);
  font-size: 1.5rem;
}

.container__code {
  display: flex;
  flex-direction: column;
  background-color: var(--light-green-neo);
  width: 80%;
  align-items: center;
  border-radius: 500px 500px 0 0;
  gap: 45px;
}

.code__title {
  margin-top: 5%;
  color: var(--white-background);
}

.code__input {
  display: flex;
  gap: 40px;
  width: 80%;
  align-items: center;
  justify-content: center;
}

.input__value {
  width: 60px;
  height: 60px;
  text-align: center;
  background-color: transparent;
  border: solid 2px var(--neo-green);
  border-radius: 15px;
  outline: none;
  font-size: 1.5rem;
  color: var(--white-background);
}

.input__value::placeholder {
  color: var(--white-background);
  font-size: 2rem;
  font-weight: bold;
}

.container__resend-link {
  background-color: transparent;
  color: var(--white-background);
  width: 30%;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.container__resend-link:hover {
  text-decoration: underline;
}

.container__paragraph {
  width: 65%;
  color: var(--white-background);
  text-align: center;
  font-size: 1.4rem;
  font-family: var(--secondary-font);
}
@media screen and (max-width: 1500px) {
  .container__code {
    display: flex;
    flex-direction: column;
    background-color: var(--light-green-neo);
    width: 90%;
    align-items: center;
    border-radius: 450px 450px 0 0;
    gap: 45px;
  }
  .code__title {
    margin-top: 5%;
    width: 40%;
    text-align: center;
  }
}
@media screen and (max-width: 1200px) {
  .container {
    gap: 10%;
  }
  .container__code {
    display: flex;
    flex-direction: column;
    background-color: var(--light-green-neo);
    width: 90%;
    align-items: center;
    border-radius: 350px 350px 0 0;
    gap: 45px;
  }
  .container__uper-section {
    display: flex;
    align-items: center;
    gap: 10%;
  }
  .example__image {
    margin-top: 1%;
    margin-bottom: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-background);
    width: 100px;
    height: 100px;
    border-radius: 30px;
  }
  .code__title {
    margin-top: 5%;
    width: 40%;
    text-align: center;
  }
  .uper-section__step {
    display: flex;
    background-color: var(--white-background);
    width: 35%;
    height: 100%;
    border-radius: 20px;
  }
  .container__paragraph {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .uper-section__example {
    justify-content: center;
  }
  .example__paragraph {
    width: 60%;
    color: var(--white-background);
    font-size: 1rem;
  }
  .step__image {
    width: 95%;
  }
}
</style>
