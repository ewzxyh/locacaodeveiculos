<template>
    <section class="container">
        <img v-bind:src="questions" alt="" class="container__image">
        <div class="container__columnA">
            <div class="container__card-confy">
                <h2 class="card__title">Para Longos Periodos</h2>
                <img v-bind:src="confyCar" alt="" class="card__image">
            </div>
            <div class="container__card-eletric">
                <h2 class="card__title">Carros Eletrico</h2>
                
                <img v-bind:src="eletricCar" alt="" class="card__image">
            </div>
        </div>
        <div class="container__columnA">
            <div class="container__card-deluxe">
                <h2 class="card__title-deluxe">Deluxe & Super Deluxe</h2>
                <img v-bind:src="superCar" alt="" class="card__image">
            </div>
            <div class="container__card-uber">
                <h2 class="card__title">Carros para Ubers</h2>
                <img v-bind:src="uberCar" alt="" class="card__image">
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "carGrid",
    data() {
        return {
            confyCar: '../img/confyCar.png',
            questions:'../img/questions.png',
            superCar:'../img/superCar.png',
            uberCar:'../img/uberCar.png',
            eletricCar:'../img/eletricCar.png',
            powerStation:'../img/powerStation.png'
        }
    },

}
</script>
<style scoped>
.container {
    margin-top: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.container__image{
    width: 33%;
    border-radius: 20px;
}
.container__columnA{
    display: flex;
    width: 20%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.container__card-confy {
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    
}
.container__card-eletric {
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    
}
.container__card-deluxe {
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    
}
.container__card-uber {
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    
}

.card__title {
    margin-top: 5%;
    margin-left: 5%;
    width: 90%;
}
</style>