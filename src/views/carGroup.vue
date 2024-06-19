<template>
  <div class="wraper">
    <div class="wraper__upper-section">
      <h1 class="upper-section__title">Escolha o melhor carro que te atende</h1>
    </div>
    <div class="wraper__body-section">
      <div class="grid-container">
        <!-- Use v-for para iterar sobre os carros e criar dinamicamente os cards -->
        <div v-for="car in cars" :key="car.name" class="grid-item">
          <div class="card">
            <h1 class="card__group">{{ car.name }}</h1>
            <img
              :src="car.image"
              alt="Imagem do carro {{ car.name }}"
              class="card__image"
            />
            <p class="card__paragraph">
              {{ car.brand }} - {{ car.fuel }} - {{ car.manufactureYear }}
            </p>
            <router-link :to="`/car/${car.name}`" class="card__order-now">
              <span class="order-now__text">Reserve Agora</span>
            </router-link>
            <router-link :to="`/car/${car.name}`" class="card__see-details">
              <span class="see-details__text">Mostrar detalhes</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "carGroup",
  data() {
    return {
      cars: [], // Aqui armazenamos os dados dos carros retornados pela API
    };
  },
  mounted() {
    this.fetchCarData();
  },
  methods: {
    async fetchCarData() {
      try {
        const token = "8kEB6XOtma5jKnkUOR5OG2LRHr8KksXO5qGzCGAN"; // Defina o token diretamente aqui

        const instance = axios.create({
          headers: {
            "x-api-key": token,
            "Content-Type": "application/json",
          },
        });

        const response = await instance.get(
          "https://p62hqwsuq5.execute-api.us-east-1.amazonaws.com/neonav/core/auto?"
        );

        // Acessando a chave 'data.result' da resposta
        this.cars = response.data.data.result;
        console.log("Dados dos carros obtidos com sucesso:", this.cars);
      } catch (error) {
        console.error("Erro ao buscar os dados dos carros:", error);
      }
    },
  },
};
</script>
<style scoped>
.wraper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.wraper__upper-section {
  display: flex;
  width: 100%;
}

.upper-section__title {
  color: var(--white-background);
  margin-left: 5%;
}

.wraper__body-section {
  margin-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 2.5em;
  background-color: var(--white-background);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  box-shadow: inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px rgba(0, 0, 0, 0.1), 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
}

.card__group {
  color: var(--neo-green);
  width: 100%;
  text-align: center;
}

.card__image {
  margin-top: 5%;
  width: 90%;
}

.card__paragraph {
  color: var(--gray-font);
  width: 70%;
  text-align: center;
  font-family: var(--secondary-font);
  font-weight: 600;
}

.card__order-now {
  display: flex;
  justify-content: center;
  background-color: var(--neo-green);
  border-radius: 10px;
  width: 100%;
}

.order-now__text {
  color: var(--black-background);
  margin: 4%;
  font-weight: 600;
}

.card__see-details {
  margin-bottom: 3%;
}

.see-details__text {
  color: var(--dark-green);
  font-weight: 600;
  font-size: 1rem;
}

.see-details__text:hover {
  text-decoration: underline;
}
</style>