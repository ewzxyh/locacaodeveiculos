<template>
  <form action="" class="code">
    <div class="code__input">
      <input v-for="(input, index) in inputs" :key="index" type="text" maxlength="1" v-model="inputs[index]"
        @input="onInput" @keydown.backspace="onBackspace" ref="inputs" class="input__value" placeholder="-" />
    </div>
  </form>
</template>
<script>
import formTemplate from '../components/formTemplate.vue'
export default {

  name: "confirmInput",
  components: {
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
    }, onBackspace(event) {
      // Focus previous input field if current field is empty
      const index = this.$refs.inputs.indexOf(event.target);
      console.log
      if (event.target.value === "" && index > 0) {
        this.$refs.inputs[index - 1].focus();
      }
    },
  },
};
</script>

<style>


.code {
  display: flex;
  flex-direction: column;
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



@media screen and (max-width: 1500px) {
  .container__code {
    display: flex;
    flex-direction: column;
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
