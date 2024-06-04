<template>
    <footer class="neonavigation__footer">
        <img v-bind:src="logoName" alt="logo Neonavigation" class="footer__image">
        <div class="footer__container">
            <img v-bind:src="backgroundLogo" alt="logo Neonavigation" class="container__logo">
        <div class="container__content">
            <p class="content__paragraph">* Qualquer seguro pessoal que você possa ter que cubra danos ao veículo da NeoNavigation entraria em ação antes do seu plano de proteção. O seguro de responsabilidade civil é fornecido sob uma apólice emitida à NeoNavigation pela NeoNavigation Seguros. Aplicam-se termos, condições e exclusões. A apólice não oferece cobertura para danos ao veículo da NeoNavigation.</p>
            <p class="content__paragraph">*Para dúvidas ou informações sobre o seguro de responsabilidade civil para viagens no Brasil, os consumidores nos estados licenciados <strong>listados aqui</strong> podem entrar em contato com a NeoNavigation Seguros pelo telefone (62) 9090-8080 ou seguro@neonavigation.com.br. Para perguntas sobre como os danos ao veículo de um anfitrião são tratados, visite o site <strong>de Suporte NeoNavigation.</strong></p>
            <p class="content__paragraph">*Quando uma viagem é reservada no estado de Goiás, os danos físicos ao veículo da NeoNavigation são cobertos pelo seguro contratado pela NeoNavigation, mas o seguro NeoNavigation não altera as responsabilidades contratuais dos anfitriões ou hóspedes com relação a danos físicos no veículo da NeoNavigation.</p>
            <p class="content__paragraph">** Aplicam-se termos, condições e exclusões.</p>
            <p class="content__paragraph">*Consulte a <strong>Declaração de Divulgação de Produtos Convidados</strong>para obter mais informações.</p>
        </div>
        </div>
        <div class="footer__dev">
            <h3 class="dev__copyright">© NeoNavigation - Todos direitos reservados</h3>
            <img v-bind:src="logoName" alt="logo Neonavigation" class="dev__image">
            <h3 class="dev__developers"><strong>Desenvolvido por</strong> Desenvolvido por: Enzo Yoshida, José Marcos e Alexandre Cardoso.</h3>
        </div>
    </footer>
</template>
<script>
export default{
    name: 'footer',
    data(){
        return{
            logoName:'../img/logo.png',
            backgroundLogo:'../img/backgroundlogo.png'
        }
    }
}
</script>
<style scoped>
.neonavigation__footer{
    margin-top:10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer__image{
    width: 40%;
}
.footer__container{
  width: 95%;
  border-radius: 30px;
  background-color:var(--white-background);
  flex-shrink: 0;
  clip-path: polygon(0 0, 15% 0, 20% 10%, 80% 10%, 85% 0, 100% 0, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
}
.container__logo{
    width: 90%;
    height: 90%;
    position: absolute;
    z-index: -1;
}
.container__content{
    margin-top: 6%;
    margin-left:10%;
    margin-bottom: 4%;
    width: 80%;
    display: flex;
    flex-direction: column;
    
}
.content__paragraph{
    font-family: var(--secondary-font);
    margin-top:2%;
    font-size: 1.5rem;
}
.footer__dev{
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:7%;
    width: 95%;
    background-color: var(--white-background);
    border-radius:10px ;
    margin-bottom: 1%;
}
.dev__copyright{
    margin-top: 1%;
    margin-bottom: 1%;
    font-weight: 400;
}
.dev__image{
    width: 25%;
}
.dev__developers{
    font-weight: 400;
    width: 28%;
}
</style>