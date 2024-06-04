<template>
  <formTemplate/>.
</template>
<script>
import formTemplate from '../components/formTemplate.vue'
export default {
  
  name: "confirmation",
  components:{
    formTemplate
  },
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
