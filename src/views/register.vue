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
      axios.put()
      this.$router.push("/confirmation");
    },
  },
};
</script>
