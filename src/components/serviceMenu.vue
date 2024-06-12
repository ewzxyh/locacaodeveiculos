<template>
    <section class="container">
        <div class="container__menu">
            <div class="menu__wraper-links">
                <h1 class="wraper-links__title">INSTITUCIONAL</h1>
                <router-link to class="wraper-links__link"><span>Sobre a NeoNavigation</span></router-link>
                <router-link to class="wraper-links__link"><span>Relação com o investidor</span></router-link>
                <router-link to class="wraper-links__link"><span>Sala de impresa</span></router-link>
                <router-link to class="wraper-links__link"><span>Trabalhe conosco</span></router-link>
            </div>
            <div class="menu__wraper-links">
                <h1 class="wraper-links__title">PARA VOCÊ</h1>
                <router-link to class="wraper-links__link"><span>Minhas reservas</span></router-link>
                <router-link to class="wraper-links__link"><span>Roteiros de viagem</span></router-link>
                <router-link to class="wraper-links__link"><span>Fidelidade</span></router-link>
                <router-link to class="wraper-links__link"><span>Cadastre-se</span></router-link>
            </div>
            <div class="menu__wraper-links">
                <h1 class="wraper-links__title">CONTATOS</h1>
                <router-link to class="wraper-links__link"><span>Envie sua mensagem</span></router-link>
                <router-link to class="wraper-links__link"><span>Pergutas Frequentes</span></router-link>
                <router-link to class="wraper-links__link"><span>Central de reservas 24h</span></router-link>
                <router-link to class="wraper-links__link"><span>Suport WhatsApp 24h</span></router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'serviceMenu'
}
</script>
<style scoped>

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container__menu{
    box-shadow: 0px 0px 0px 1px rgba(165, 165, 165, 0.04),
    -9px 9px 9px -0.5px rgba(0, 0, 0, 0.04),
    -18px 18px 18px -1.5px rgba(0, 0, 0, 0.08),
    -37px 37px 37px -3px rgba(0, 0, 0, 0.16),
    -75px 75px 75px -6px rgba(0, 0, 0, 0.24),
    -150px 150px 150px -12px rgba(19, 18, 18, 0.48) !important;

    padding: 1.5em 2.5em;
    background-color: var(--white-background);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    width: 90%;
    border-radius: 10px;
}
.menu__wraper-links{
    min-width: 32.3%;
    padding: 2em;
    margin-top: 1%;
    margin-bottom: 1%;
    background-color: var(--light-green);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    gap: 10px;
}
.wraper-links__title{
    margin-top: 2%;
    color: var(--neo-green);
    font-weight: 600;
}
span{
    color: var(--black-font);
    font-weight: 400;
}
.wraper-links__link{
margin-bottom: 2%;

}
.wraper-links__link:hover{
    color: var(--black-font);
    text-decoration: underline;
    
}
</style>