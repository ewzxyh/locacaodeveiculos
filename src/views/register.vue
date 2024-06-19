<template>
  <Form ref="formRegister" @form-submitted="handleFormSubmitted"></Form>
</template>
<script>
import Form from "../components/form.vue";
import axios from "axios";

export default {
  name: "register",
  components: {
    Form,
  },
  methods: {
    handleFormSubmitted(formData) {
      sessionStorage.setItem('Ususario',JSON.stringify(formData));
      this.$router.push("/dados");
    },
  },
};
</script>
