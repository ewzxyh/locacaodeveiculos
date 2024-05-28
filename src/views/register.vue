<template>
  <Form ref="formRegister" @form-submitted="handleFormSubmitted" />
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
      axios.put('https://p62hqwsuq5.execute-api.us-east-1.amazonaws.com/neonav/auth/login')
      this.$router.push("/confirmation");
    },
  },
};
</script>
