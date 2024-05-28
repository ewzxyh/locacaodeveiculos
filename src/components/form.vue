<template>
    <form @submit.prevent="handleSubmit" class="container">
        <div class="container__row">
            <div class="row__LGPD">
                <h1 class="LGPD__title">Olá <br> Para começar, preencha seus dados básicos :</h1>
                <p class="LGPD__paragraph">Todos os seus Dados são protegidos, conforme a LGPD. <a
                        href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" class="LGPD__link">
                        Saiba mais.</a></p>
            </div>
            <div class="container__checkpoint">
                <img v-bind:src="checkpoint" class="checkpoint__image" alt="">
            </div>
        </div>
        <div class="container__row">
            <div class="row__data">
                <input type="text" v-model="name" placeholder="Nome completo" required class="data__name">
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
                            <input type="radio" value="male" name="gender" v-model="gender" required>
                            Masculino
                            <span></span>
                        </label>
                        <label class="radio__values">
                            <input type="radio" value="female" name="gender" v-model="gender" required>
                            Feminino
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="container__column">
            <div class="container__mid-section">
                <div class="mid-section__column">
                    <div class="mid-section__warning">
                        <h1 class="waning__title">Preencha seus dados de contato</h1>
                        <div class="warning__paragraph">
                            <img v-bind:src="warning" alt="Sinal de exclamação" class="paragraph__image">
                            <p class="paragraph__text"><strong>Atenção!</strong> <br>Lembre-se de revisar os dados
                                preenchidos,
                                serão importantes para concluir o seu cadastro e realizar a sua reserva.</p>
                        </div>
                    </div>
                    <div class="mid-section__input">
                        <div class="mid-section__row">
                            <h3 class="row__title">E-mail</h3>
                            <div class="row__input">
                                <div class="data__email">
                                    <input type="email" v-model="email" placeholder="Digite seu melhor e-mail"
                                        class="data-input" required>
                                    <div class="email__wraper">
                                        <h3 class="label">Confirme seu E-mail</h3>
                                        <input type="email" v-model="verifiedEmail"
                                            placeholder="Digite novamente seu e-mail" class="data" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mid-section__row">
                            <h3 class="row__title">Celular</h3>
                            <div class="row__input">
                                <div class="data__email">
                                    <input type="text" v-model="primaryPhoneNumber"
                                        @input="updatePrimaryPhoneNumber($event.target.value)"
                                        placeholder="Digite o seu melhor numero" class="data-input" required>
                                    <div class="phone__wraper">
                                        <h3 class="label">Confirme seu numero</h3>
                                        <input type="text" v-model="secondaryPhoneNumber"
                                            @input="updateSecondaryPhoneNumber($event.target.value)"
                                            placeholder="Digite o seu melhor numero" class="data" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img v-bind:src="sideLogo" alt="Logo neoNavigation" class="contact__logo">
            </div>
            <div class="container__checkbox">
                <input type="checkbox" class="checkbox">
                <p class="checkbox__paragraph">Aceito receber comunicações de promoções e marketing.</p>
            </div>
        </div>

        <div class="container__row">
            <div class="row__warning">
                <img v-bind:src="important" alt="" class="warning__image">
                <p class="warning__text">As informações coletadas no cadastro do cliente serão utilizadas para identificação
                    das reservas e execução de contrato entre o titular e a NeoNavigation. Para mais informações sobre o
                    tratamento de dados pessoais, acesse nosso Portal de Privacidade.</p>
            </div>
            <button type="submit" class="container__submit">Continuar</button>
        </div>
    </form>
</template>
<script>
import { mask } from 'vue-the-mask';
export default {
    name: 'form',
    directives: { mask },
    data() {
        return {
            checkpoint: '../img/checkpoint.png',
            selectedNationality: '',
            cpf: '',
            name: '',
            email: '',
            gender: '',
            verifiedEmail: '',
            primaryPhoneNumber: '',
            secondaryPhoneNumber: '',
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
            important: '../img/important.png'
        }
    }, methods: {
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
            return formatted;
        }, updatePrimaryPhoneNumber(value) {
            this.primaryPhoneNumber = this.formatPhoneNumber(value);
        },
        updateSecondaryPhoneNumber(value) {
            this.secondaryPhoneNumber = this.formatPhoneNumber(value);
        },
        inputsEqual(verifiedEmail, email, primaryPhoneNumber, secondaryPhoneNumber) {
            if(verifiedEmail!=email||primaryPhoneNumber!=secondaryPhoneNumber){
                alert('Alguns campos nao correspondem ')
                return false
            }else{
                return true
            }
        },
        handleSubmit() {
            if (this.inputsEqual( this.verifiedEmail, this.email, this.primaryPhoneNumber, this.secondaryPhoneNumber,)) {
                this.error = false;
                const formData={
                    name:this.name,
                    nationality:this.selectedNationality,
                    cpf:this.cpf,
                    email:this.email,
                    gender:this.gender,
                    primaryPhoneNumber:this.primaryPhoneNumber,
                    secondaryPhoneNumber:this.secondaryPhoneNumber,
                };
                this.$emit('form-submitted',formData)
            } else {
                this.error = true;
                alert('Preencha os dados corretamente');

            }
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 50px;
}

.container__row {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 5%;
}

.checkbox {
    margin-left: 2%;
    width: 2%;
}

.checkbox__paragraph {
    font-size: 1.2rem;
    margin-top: 2%;
    margin-bottom: 2%;
}

.container__checkbox {
    display: flex;
    margin-left: 5%;
    gap: 20px;
    background-color: var(--white-background);
    width: 50%;
    border-radius: 10px;
}

.row__LGPD {
    background-color: var(--white-background);
    border-radius: 20px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
}

.LGPD__title {
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 1.5rem;
}

.LGPD__paragraph {
    margin-bottom: 2%;
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

.row__data {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--white-background);
    border-radius: 20px;
    width: 75%;
    margin-left: 5%;
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

.container__column {
    display: flex;
    flex-direction: column;
    gap: 5%;
}

.container__mid-section {
    display: flex;
    gap: 20%;
}

.mid-section__column {
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.mid-section__warning {
    background-color: var(--white-background);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    width: 75%;
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

.mid-section__input {
    display: flex;
    width: 100%;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
}

.mid-section__row {
    margin-top: 5%;
    width: 50%;
    display: flex;
    flex-direction: column;
}

.row__title {
    background-color: var(--neo-green);
    width: 5%;
    margin-top: .5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: absolute;
    margin-left: .5%;
}

.row__input {
    background-color: var(--white-background);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 3.5%;
    border-radius: 10px;
}

.data__email {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    gap: 10px;
}

.data {
    width: 100%;
    height: 5vh;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    outline: none;
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 1.1rem;
    margin-bottom: 6%;
}

.label {
    margin-left: 6%;
}

.data-input {
    margin-top: 6%;
    width: 100%;
    height: 5vh;
    border-radius: 50px;
    border: solid 2px var(--neo-green);
    outline: none;
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 1.1rem;
}

.contact__logo {
    width: 20%;
}

.row__warning {
    display: flex;
    background-color: var(--white-background);
    width: 70%;
    border-radius: 10px;
    gap: 1%;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
}

.container__submit {
    width: 15%;
    padding-top: .5%;
    padding-bottom: .5%;
    border-radius: 10px;
    border: none;
    outline: none;
    font-family: var(--main-font);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white-background);
    background-color: var(--gray);
    cursor: pointer;
}

.container__submit:hover {
    color: var(--dark-green);
    transition: all .5s ease;
}

@media screen and (max-width: 1900px) {
    .container__mid-section{
        gap: 5%;
    }
    .mid-section__warning{
        width: 85%;
    }
    .mid-section__column{
        width: 80%;
    }
}

@media screen and (max-width: 1500px) {
    .container__column {
        gap: 50px;
    }

}

@media screen and (max-width: 1400px) {
    .container__row {
        width: 100%;
    }
    .row__title{
        width: 6%;
    }
    .row__data {
        width: 90%;
    }
}
@media screen and (max-width: 1200px) {
    
    .row__data {
        width: 98%;
    }
}

</style>