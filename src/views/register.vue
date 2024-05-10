<template>
    <form action="submit" class="wraper">
        <div class="container">
            <div class="container__LGPD">
                <h1 class="LGPD__title">Olá <br> Para começar, preencha seus dados básicos :</h1>
                <p class="LGPD__paragraph">Todos os seus Dados são protegidos, conforme a LGPD. <a
                        href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" class="LGPD__link">
                        Saiba mais.</a></p>
            </div>
            <div class="container__checkpoint">
                <img v-bind:src="checkpoint" alt="" class="checkpoint__image" draggable="false">
            </div>
        </div>

        <div class="wraper__data">
            <input type="text" placeholder="Nome completo" required class="data__name">
            <select v-model="selectedNationality" class="data__nationality-select" required>
                <option disabled value=""><span>Nacionalidade</span></option>
                <option v-for="nationality in nationalities" :key="nationality" :value="nationality">
                    {{ nationality }}
                </option>
            </select>
            <input v-mask="'###.###.###-##'" v-model="cpf" placeholder="Digite seu CPF" class="data__cpf" required />
            <div class="data__gender">
                <h3 class="gender__title">Gênero</h3>
                <div class="gender__radio">
                    <label class="radio__values">
                        <input type="radio" value="male" name="gender" required>
                        Masculino
                        <span></span>
                    </label>
                    <label class="radio__values">
                        <input type="radio" value="male" name="gender" required>
                        Feminino
                        <span></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="wraper__contact">
            <div class="contact__input">
                <div class="input__warning">
                    <h1 class="waning__title">Preencha seus dados de contato</h1>
                    <div class="warning__paragraph">
                        <img v-bind:src="warning" alt="Sinal de exclamação" class="paragraph__image">
                        <p class="paragraph__text"><strong>Atenção!</strong> <br>Lembre-se de revisar os dados preenchidos,
                            serão importantes para concluir o seu cadastro e realizar a sua reserva.</p>
                    </div>
                </div>
                <div class="contact__data">
                    <div class="data__email">
                        <!-- <h1 class="title">E-mail</h1> -->
                        <input type="email" placeholder="Digite seu melhor e-mail" class="data-input" required>
                        <div class="email__wraper">
                            <h3 class="label">Confirme seu E-mail</h3>
                            <input type="email" placeholder="Digite novamente seu e-mail" class="data" required>
                        </div>

                    </div>
                    <div class="data__phone">

                        <input type="text" v-model="phoneNumber" @input="formatPhoneNumber($event.target.value)"
                            placeholder="Digete o seu melhor numero" class="data-input" required>
                        <div class="phone__wraper">
                            <h3 class="label">Confirme seu E-mail</h3>
                            <input type="text" v-model="phoneNumber" @input="formatPhoneNumber($event.target.value)"
                                placeholder="Digete o seu melhor numero" class="data" required>
                        </div>

                    </div>
                </div>
                <div class="contact__marketing">
                    <input type="checkbox" class="marketing__checkbox">
                    <p class="marketing__paragraph">Aceito receber comunicações de promoções e marketing.</p>
                </div>
                <div class="contact__confirm">
                    <div class="confirm__warning">
                        <img v-bind:src="important" alt="" class="warning__image">
                        <p class="warning__text">As informações coletadas no cadastro do cliente serão utilizadas para identificação das reservas e execução de contrato entre o titular e a NeoNavigation. Para mais informações sobre o tratamento de dados pessoais, acesse nosso Portal de Privacidade.</p>
                    </div>
                </div>
            </div>
            <div class="logo">
                <img v-bind:src="sideLogo" alt="Logo neoNavigation" class="contact__logo">
                <button class="logo__submit">Continuar</button>
            </div>
        </div>
    </form>
</template>
<script>
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    name: 'register',
    components: {
    },
    data() {
        return {
            checkpoint: '../img/checkpoint.png',
            selectedNationality: '',
            cpf: '',
            phoneNumber: '',
            nationalities: [
                'Brasileira',
                'Americana',
                'Canadense',
                'Francesa',
                'Alemã',
                'Japonesa',
                'Chinesa',
                'Russa',
                'Italiana',
                'Espanhola'
            ],
            sideLogo: '../img/sideLogo.png',
            warning: '../img/warning.png',
            important:'../img/important.png'
        }
    },
    methods: {
        validarCPF(cpf) {
            cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
            let soma = 0, resto;
            for (let i = 1; i <= 9; i++)
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11)) resto = 0;
            if (resto !== parseInt(cpf.substring(9, 10))) return false;
            soma = 0;
            for (let i = 1; i <= 10; i++)
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11)) resto = 0;
            return resto === parseInt(cpf.substring(10, 11));
        },
        formatPhoneNumber(value) {
            value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            let formatted = '';
            if (value.length > 0) {
                formatted += '(' + value.substring(0, 2);
            }
            if (value.length >= 3) {
                formatted += ') ' + value.substring(2, 7);
            }
            if (value.length > 7) {
                formatted += '-' + value.substring(7, 11);
            }
            this.phoneNumber = formatted; // Atualiza o número de telefone formatado
        }
    }
}
</script>
<style scoped>
.wraper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.container {
    display: flex;
    gap: 20%;
    width: 95%;
}

.container__LGPD {
    background-color: var(--white-background);
    border-radius: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
}

.LGPD__title {
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 5%;
    font-size: 1.5rem;
}

.LGPD__paragraph {
    margin-bottom: 2%;
    margin-left: 5%;
    font-size: 1rem;
    font-weight: 500;
}

.LGPD__link {
    color: var(--neo-green);
    font-size: 1rem;
    font-weight: 500;
}

.LGPD__link:hover {
    text-decoration: underline;
}

.container__checkpoint {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-background);
    border-radius: 20px;
}

.checkpoint__image {
    width: 70%;
    margin-top: 3.5%;
    margin-bottom: 3.5%;
}

.wraper__data {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--white-background);
    border-radius: 20px;
    width: 95%;
}

.data__name {
    margin-top: 2%;
    text-align: center;
    font-family: var(--secondary-font);
    width: 30%;
    margin-bottom: 2%;
    height: 6vh;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    outline: none;
    font-size: .9rem;

}

.data__name::placeholder {
    color: var(--font-color);
}

.data__nationality-select {
    margin-top: 2%;
    text-align: center;
    font-family: var(--secondary-font);
    width: 15%;
    height: 6vh;
    margin-bottom: 2%;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    cursor: pointer;
    outline: none;
    font-size: .9rem;
    -webkit-appearance: none;
    /* Remove a aparência padrão em navegadores WebKit */

}


.data__cpf {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 13%;
    height: 6vh;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    outline: none;
    text-align: center;
    font-family: var(--secondary-font);
    font-size: .9rem;
}

.data__cpf::placeholder {
    color: var(--font-color);
}

.data__gender {
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 5px;
    align-items: flex-start;
}

.gender__title {
    font-size: 1.2rem;
    font-weight: 500;
    padding-left: 2%;
}

.gender__radio {
    width: 100%;
    display: flex;
    gap: 10px;
    margin-bottom: 5%;
}

.gender__input {
    width: 10%;
}

.gender__input:checked {
    background-color: var(--neo-green);
}

.radio__values {
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
    font-weight: 400;
    color: var(--font-color);
    position: relative;
    padding-left: 30px;
    padding-top: 1px;
    cursor: pointer;
}

.radio__values+.radio__values {
    margin-left: 20px;
}

.radio__values input[type="radio"] {
    display: none;
}

.radio__values span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2.5px solid var(--dark-green);
    display: block;
    position: absolute;
    left: 0;
    top: 0%;
}

.radio__values span::after {
    content: "";
    height: 12px;
    width: 12px;
    background: var(--neo-green);
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: .3s ease-in-out 0s;
}

.radio__values [type="radio"]:checked~span::after {
    transform: translate(-50%, -50%) scale(1);
}

.wraper__contact {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 20%;
}

.contact__logo {
    width: 100%;
    height: 50vh;
}

.contact__input {
    width: 57%;
    display: flex;
    flex-direction: column;
    gap: 10%;
}

.input__warning {
    background-color: var(--white-background);
    width: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}

.waning__title {
    font-size: 2rem;
    font-weight: 400;
    margin-left: 3%;
    margin-bottom: 1%;
}

.warning__paragraph {
    width: 90%;
    display: flex;
    align-items: center;
    margin-left: 3%;
    gap: 10px;
    background-color: var(--light-green-neo);
    border-radius: 10px;
    margin-bottom: 1%;
}

.paragraph__image {
    width: 5%;
    margin-left: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
}

.paragraph__text {
    font-size: 1rem;
    font-weight: 400;
}

strong {
    font-weight: 800;
    font-size: 1.1rem;
}

.contact__data {
    display: flex;
    width: 100%;
    gap: 15%;
}

.data__email {
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: var(--white-background);
    border-radius: 20px;
    align-items: center;
}

.title {
    background-color: var(--neo-green);
    width: 6%;
    font-size: 1.5rem;
    position: absolute;
    text-align: center;
    margin-left: 2%;
    margin-bottom: 100%;
}

.data__phone {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    background-color: var(--white-background);
    border-radius: 20px;
}

.email__wraper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 5%;
}

.phone__wraper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 5%;
}

.label {
    margin-right: 30%;
}

.data {

    width: 90%;
    height: 5vh;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    outline: none;
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 1.1rem;
}

.data-input {
    margin-top: 5%;
    width: 90%;
    height: 5vh;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    outline: none;
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 1.1rem;
}

.contact__marketing {
    display: flex;
    background-color: var(--white-background);
    width: 70%;
    border-radius: 20px;
    gap: 1%;
}
.marketing__checkbox{
    margin-left: 2%;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 5%;
}
.marketing__paragraph{
    margin-top: 3%;
    margin-bottom: 3%;
}
.contact__confirm{
    display: flex;
}
.confirm__warning{
    display: flex;
    background-color: var(--white-background);
    width: 100%;
    border-radius:10px;
    gap: 1%;
    justify-content: center;
    align-items: center;
}
.logo{
    display: flex;
    justify-content: flex-end;
    width: 20%;
    flex-direction: column;
}
.logo__submit{
    margin-top:30%;
    margin-bottom:5% ;
    width: 80%;
    font-size:2rem;
    padding-bottom: 2%;
    padding-top: 2%;
    font-family: var(--main-font);
    cursor: pointer;
    border-radius: 10px;
    color: white;
    border: none;
    outline: none;
    background-color: gray ;
}
.logo__submit:hover{
    color: var(--neo-green);
    transition: all .5s ease-in-out;
}
.warning__image{
    width: 40px;
    height: 40px;
    margin-left: .5%;
}
</style>