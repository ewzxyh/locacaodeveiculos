<template>
    <section class="container">
        <h1 class="container__title">Oque dizem sobre a gente ?</h1>
        <div class="wraper">
            <div class="container__card">
                <div class="card__header">
                    <img v-bind:src="imagem" alt="" class="header__image">
                    <div class="header__content">
                        <h1 class="content__name">Alexandre C.</h1>
                        <div class="content__verified">
                            <img v-bind:src="verifiedImg" alt="" class="verified__image">
                            <h2 class="verified__text">Verificado</h2>
                        </div>
                        <div class="content__user-data">
                            <h3 class="user-data__trip">1.139 viagens</h3>
                            <h3 class="user-data__join">Juntou-se em 2020</h3>
                        </div>
                    </div>
                </div>
                <div class="container__stars">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                </div>
                <div class="container__review">
                    <p class="review__paragraph">Excelente comunicação, bom preço, carro limpo e muito mais fácil que outras locadoras!</p>
                </div>
            </div>
            <div class="container__card">
                <div class="card__header">
                    <img v-bind:src="imagem" alt="" class="header__image">
                    <div class="header__content">
                        <h1 class="content__name">Marcos S.</h1>
                        <div class="content__verified">
                            <img v-bind:src="verifiedImg" alt="" class="verified__image">
                            <h2 class="verified__text">Verificado</h2>
                        </div>
                        <div class="content__user-data">
                            <h3 class="user-data__trip">556 viagens</h3>
                            <h3 class="user-data__join">Juntou-se em 2020</h3>
                        </div>
                    </div>
                </div>
                <div class="container__stars">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                </div>
                <div class="container__review">
                    <p class="review__paragraph">Preços e serviços excelentes, com certeza irei alugar mais vezes.</p>
                </div>
            </div>
            <div class="container__card">
                <div class="card__header">
                    <img v-bind:src="imagem" alt="" class="header__image">
                    <div class="header__content">
                        <h1 class="content__name">Enzo</h1>
                        <div class="content__verified">
                            <img v-bind:src="verifiedImg" alt="" class="verified__image">
                            <h2 class="verified__text">Verificado</h2>
                        </div>
                        <div class="content__user-data">
                            <h3 class="user-data__trip">3.706 viagens</h3>
                            <h3 class="user-data__join">Juntou-se em 2020</h3>
                        </div>
                    </div>
                </div>
                <div class="container__stars">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                    <img v-bind:src="star" alt="estrelas de recomendação">
                </div>
                <div class="container__review">
                    <p class="review__paragraph">É o tipo de locadora que eu procura, sem complicações e ótimo suporte.</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'commendation',
    data() {
        return {
            imagem: '../img/enzo.png',
            verifiedImg: '../img/verified.png',
            star: '../img/star.png'
        }
    }
}
</script>

<style scoped>

.container {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.container__title{
    color: var(--white-background);
    font-size: 3rem;
    font-weight: 400;
 }
.wraper {
    margin-top: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


.container__card {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 25%;
    background-color: var(--white-background);
    border-radius: 20px;
    height: 35vh;
}

.card__header {
    margin-top: 10%;
    margin-left: 2%;
    display: flex;
    gap: 5%;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}

.header__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;

}

.header__content {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    gap: 10px;
}

.content__verified {
    display: flex;
    align-items: center;
}

.verified__image {
    width: 30px;
    height: 30px;
}

.verified__text {
    color: var(--neo-green);
    font-size: 1.2rem;
    font-weight: 100;
}

.content__user-data {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.user-data__trip {
    width: 80%;
    font-size: .9rem;
    font-weight: 00;
}

.user-data__join {
    width: 100%;
    font-size: .9rem;
    font-weight: 500;
}

.container__review {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 10%;
    flex-wrap: nowrap;
}

.container__stars {
    margin-top: 5%;
    margin-left: 4%;
}

.review__paragraph {
    text-align: left;
    
}
@media screen and (max-width: 1400px) {

    .container__card {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    background-color: var(--white-background);
    border-radius: 20px;
    height: 40vh;
}
}
</style>