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

</style>
