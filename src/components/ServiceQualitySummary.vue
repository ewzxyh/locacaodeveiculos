<template>
    <section class="container">
        <div class="container__banner">
            <div class="banner__wraper">
                <div class="wraper__disclaimer">
                    <div class="disclaimer__image">
                        <i class='bx bx-search-alt-2'></i>
                    </div>
                    <div class="disclaimer__content">
                        <h1 class="content__title">Econtre uma reserva</h1>
                        <p class="content__paragraph">
                            Precisa conferir os detalhes ou fazer uma alteração em sua reserva? Procure sua reserva da
                            Alamo.
                        </p>
                    </div>
                </div>
                <div class="wraper__disclaimer">
                    <div class="disclaimer__image">
                        <i class='bx bx-medal bx-rotate-180'></i>
                    </div>
                    <div class="disclaimer__content">
                        <h1 class="content__title">Ativar o Check-in Rápido</h1>
                        <p class="content__paragraph">
                            Próxima reserva? Caia rapidamente na estrada! Ative o Check-in Rápido para economizar tempo no
                            guichê de aluguel.
                        </p>
                    </div>
                </div>
                <div class="wraper__disclaimer">
                    <div class="disclaimer__image">
                        <i class='bx bx-check'></i>
                    </div>
                    <div class="disclaimer__content">
                        <h1 class="content__title">Nosso Padrão de Cuidado</h1>
                        <p class="content__paragraph">
                            Comprometemo-nos com seu atendimento excepcional e veículos de alta qualidade, seguindo nosso
                            Padrão de Cuidado
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container__reliability">
            <h1 class="reliability__title">Além da Matrix</h1>
            <p class="reliability__paragraph">Carros confiáveis para o que você precisa.</p>
            <p class="reliability__paragraph">Neste caminho, a liberdade de escolha é sua maior aliada.</p>
            <div class="reliability__discount">
                <div class="discount__wraper">
                    <h1 class="wraper__percentage">98%</h1>
                    <p class="wraper__paragraph">dos clientes que alugaram conosco relatam alta satisfação e afirmam que
                        alugariam novamente.</p>
                </div>
                <div class="discount__wraper">
                    <h1 class="wraper__percentage">65%</h1>
                    <p class="wraper__paragraph">de veículos eco-friendly, atendendo à crescente demanda por opções de
                        locação sustentáveis.</p>
                </div>
                <div class="discount__wraper">
                    <h1 class="wraper__percentage">89%</h1>
                    <p class="wraper__paragraph">dos clientes apreciam nosso serviço de atendimento ao cliente disponível
                        24/7 por WhatsApp, Telefone e E-mail.</p>
                </div>
                <div class="discount__wraper">
                    <h1 class="wraper__percentage">1,9mi</h1>
                    <p class="wraper__paragraph">milhões de veículos alugados, refletindo a confiança e a preferência dos
                        consumidores por nossos serviços.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ServiceQualitySummary'
}
</script>
<style scoped>
.container {
    margin-top: 0.1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.container__banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88%;
}

.banner__wraper {
    box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--white-background);
    width: 95%;
    border-radius: 20px;
    padding: 1.5em;
}

.wraper__disclaimer {
    margin: .5% 0 .5% 0;
    background-color: var(--light-green-neo);
    width: 32.3%;
    min-height: 200px;
    height: auto;
    padding: 1.5em;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    gap: 10px;
    border-radius: 20px;
}

.disclaimer__image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--neo-green);
    border-radius: 50px;
    height: 50px;
    width: 50px;
    margin: 0 0 0 .3%;
    padding: 2em;
}

.bx-search-alt-2 {
    font-size: 3rem;
    display: flex;
    text-align: center;
}

.disclaimer__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.content__title {
    font-size: 1.1rem;
}

.content__paragraph {
    font-size: 0.8rem;
}

.bx-rotate-180 {
    font-size: 3rem;
    display: flex;
    text-align: center;
}

.bx-check {
    font-size: 3rem;
    display: flex;
    text-align: center;
}

.container__reliability {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
    justify-content: center;
}

.reliability__title {
    color: var(--white-background);
    font-size: 4rem;
    font-weight: 800;
}

.reliability__paragraph {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-background);
    font-size: 1.5rem;
}

.reliability__discount {
    box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
    margin-top: 4%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--white-background);
    width: 95%;
    border-radius: 20px;
    padding: 1.5em;
}

.discount__wraper {
    margin-top: .5%;
    margin-bottom: .5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--light-green-neo);
    border-radius: 20px;
    width: 24%;
    gap: 4px;
    min-height: 230px;
    height: auto;
    padding: 1.5em;
}

.wraper__percentage {
    font-size: 2rem;
    font-weight: 800;
}

.wraper__paragraph {
    display: flex;
    text-align: center;
    width: 90%;
    margin-bottom: 5%;
}</style>