<template>
  <formTemplate/>
  <form action="">
    
  </form>
</template>

<script>
import formTemplate from '../components/formTemplate.vue'
export default {
  components:{
    formTemplate
  },
  data() {
    return {
      shield: "../img/shield.png",
      stepPassword: "../img/passwordStep.png",
      password: "",
      passwordConfirmation: "",
      showPassword: false,
    };
  },
  methods: {
    passwordVerification() {
      const { password, passwordConfirmation } = this;
      const capitalLetter = /[A-Z]/.test(password);
      const minuscular = /[a-z]/.test(password);
      const number = /[0-9]/.test(password);
      const specialLetter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (password === passwordConfirmation && password.length >= 6) {
        if (capitalLetter && minuscular && number && specialLetter) {
          console.log("Senha Criada com sucesso");
        } else {
          console.log("A sua senha não respeita os padrões solicitado");
        }
      } else {
        console.log("As senhas não conferem ou não contem 6 caracteres");
      }
    },
    togllePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    eyeSwapper() {
      return this.showPassword ? "../img/visibilityOn.png" : "../img/visibility.png";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
}

.container__uper-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;
}

.uper-section__warnig {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
}

.warning__square {
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-background);
  width: 100px;
  height: 100px;
  border-radius: 30px;
  margin-right: 3em;
}

.square__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-green-neo);
  width: 85%;
  height: 85%;
  border-radius: 30px;
}

.inner__image {
  width: 65%;
}

.warning__paragraph {
  font-size: 1.5rem;
  color: var(--white-background);
}

.uper-section__step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40%;
  background-color: var(--white-background);
  border-radius: 30px;
}

.step__image {
  width: 70%;
}

.container__password {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-green-neo);
  width: 80%;
  height: 100vh;
  border-radius: 500px 500px 0 0;
  gap: 5%;
}

.password__title {
  color: var(--white-background);
}

.password__wraper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 50%;
    
}

.wraper__title {
  font-size: 1.5rem;
  position: absolute;
  margin-bottom: 12%;
  margin-right: 20%;
  background-color: var(--neo-green);
  width: 6%;
  text-align: center;
  border-radius: 20px;
}

.wraper__input {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: var(--white-background);
  width: 100%;
  height: 90%;
  border-radius: 30px;
}

.input__border {
  display: flex;
  align-items: center;
  border: solid 2px var(--neo-green);
  width: 80%;
  height: 25%;
  gap: 5%;
  border-radius: 30px;
}

.border__image {
  width: 8%;
  cursor: pointer;
}

.input__password {
  width: 80%;
  height: 100%;
  margin-left: 2%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-font);
  font-family: var(--secondary-font);
  font-size: 1rem;
  background-color: transparent;
}

.wraper__button {
  background-color: var(--neo-green);
  width: 8%;
  border: none;
  outline: none;
  position: absolute;
  margin-top: 12%;
  font-size: 1.3rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: var(--main-font);
  height: 4%;
  font-weight: 600;
  transition: all ease-in-out 0.5s;
}

.wraper__button:hover {
  background-color: var(--darker-green);
  transition: all ease-in-out 0.5s;
}

.password__paragraph {
  text-align: center;
  color: var(--white-background);
}

@media screen and (max-width: 1500px) {
  .container__password {
    width: 98%;
  }
}

@media screen and (max-width: 1400px) {
  .wraper__title {
    margin-bottom: 13%;
    margin-right: 25%;
    width: 8%;
  }

  .wraper__button {
    margin-top: 14%;
    width: 13%;
  }
}

@media screen and (max-width: 1200px) {
  .container__password {
    border-radius: 400px 400px 0 0;
  }

  .password__title,
  .wraper__title,
  .wraper__button {
    font-size: 1.5rem;
    margin-bottom: 15%;
    margin-right: 25%;
    width: 8%;
    margin-top: 16%;
    width: 13%;
  }
}
</style>
