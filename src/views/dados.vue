<template>
    <div class="dados-container">
        <div class="tabs">
            <button class="tab-button" :class="{ active: activeTab === 'dadosPessoais' }"
                @click="setActiveTab('dadosPessoais')">
                DADOS PESSOAIS
            </button>
            <button class="tab-button" :class="{ active: activeTab === 'cnh' }" @click="setActiveTab('cnh')">
                CNH
            </button>
            <button class="tab-button" :class="{ active: activeTab === 'endereco' }" @click="setActiveTab('endereco')">
                ENDEREÇO
            </button>
            <button class="tab-button" :class="{ active: activeTab === 'pagamento' }" @click="setActiveTab('pagamento')">
                PAGAMENTO
            </button>
            <button class="tab-button" :class="{ active: activeTab === 'ajuda' }" @click="setActiveTab('ajuda')">
                AJUDA
            </button>
        </div>
        <div class="tab-content">
            <div v-if="activeTab === 'dadosPessoais'" class="dados-pessoais">
                <div class="content-container">
                    <div class="text-content">
                        <h1>Olá!</h1>
                        <p>Para começar, preencha seus dados básicos:</p>
                        <p>Todos os seus Dados são protegidos, conforme a LGPD. <a href="#">Saiba mais.</a></p>
                    </div>
                    <div class="image-content">
                        <img :src="confirmation" alt="Imagem de confirmação" class="confirmation__image" />
                    </div>
                </div>
                <div class="alert-box">
                    <img src="@/assets/shield.svg" alt="Ícone de atenção" class="alert-icon">
                    <div class="alert-content">
                        <h2>Atenção!</h2>
                        <p>Lembre-se de revisar os dados preenchidos, serão importantes para concluir o seu cadastro e
                            realizar a sua reserva.</p>
                    </div>
                </div>
                <div class="input-container">
                    <div class="input-field">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" placeholder="Nome Completo" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="nacionalidade">Nacionalidade</label>
                        <input type="text" id="nacionalidade" value="Brasil" disabled>
                    </div>
                    <div class="input-field">
                        <label for="documento">Documento</label>
                        <input type="number" id="documento" placeholder="CPF" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field genero">
                        <label>Gênero</label>
                        <div class="genero-options">
                            <label><input type="radio" name="genero" value="masculino" checked :disabled="dadosConfirmados">
                                Masculino</label>
                            <label><input type="radio" name="genero" value="feminino" :disabled="dadosConfirmados">
                                Feminino</label>
                        </div>
                    </div>
                    <div class="additional-info">
                        <div class="email-field">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" value="e*****@hotmail.com" disabled>
                        </div>
                        <div class="phone-fields">
                            <div class="phone-field">
                                <label for="celular">Celular</label>
                                <input type="text" id="celular" value="(62)9****-8492" disabled>
                            </div>
                            <div class="confirm-phone-field">
                                <label for="confirm-celular">Confirme seu Celular</label>
                                <input type="number" id="confirm-celular" placeholder="Digite novamente seu número">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkbox-container">
                    <label>
                        <input type="checkbox" id="promotions">
                        Aceito receber comunicações de promoções e marketing.
                    </label>
                </div>
                <div class="info-button-container">
                    <div class="info-container">
                        <img src="@/assets/info.svg" alt="Ícone de informação" class="info-icon">
                        <p>As informações coletadas no cadastro do cliente serão utilizadas para identificação das reservas
                            e execução de contrato entre o titular e a NeoNavigation. Para mais informações sobre o
                            tratamento de dados pessoais, acesse nosso Portal de Privacidade.</p>
                    </div>
                    <button v-if="!dadosConfirmados" @click="confirmarDados">Confirmar Dados</button>
                </div>
            </div>

            <div v-if="activeTab === 'cnh'" class="dados-pessoais">
                <div class="content-container">
                    <div class="text-content">
                        <h1>Carteira Nacional de Habilitação</h1>
                        <p>Todos os seus Dados são protegidos, conforme a LGPD. <a href="#">Saiba mais.</a></p>
                    </div>
                    <div class="image-content">
                        <img :src="confirmation" alt="Imagem de confirmação" class="confirmation__image" />
                    </div>
                </div>
                <div class="alert-box">
                    <img src="@/assets/shield.svg" alt="Ícone de atenção" class="alert-icon">
                    <div class="alert-content">
                        <h2>Atenção!</h2>
                        <p>Lembre-se de revisar os dados preenchidos, serão importantes para concluir o seu cadastro e
                            realizar a sua reserva.</p>
                    </div>
                </div>
                <div class="input-container">
                    <div class="input-field">
                        <label for="rg">RG</label>
                        <input type="text" id="rg" placeholder="RG" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="nascimento">Nascimento</label>
                        <input type="text" id="nascimento" placeholder="DD/MM/AAAA" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="registro">Nº de Registro</label>
                        <input type="text" id="registro" placeholder="Nº de Registro" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="numeroCnh">Nº da CNH</label>
                        <input type="text" id="numeroCnh" placeholder="Nº da CNH" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="validade">Validade</label>
                        <input type="text" id="validade" placeholder="DD/MM/AAAA" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="estado">Estado</label>
                        <input type="text" id="estado" placeholder="Selecione" :disabled="dadosConfirmados">
                    </div>
                </div>
                <div class="info-button-container">
                    <div class="info-container">
                        <img src="@/assets/info.svg" alt="Ícone de informação" class="info-icon">
                        <p>As informações coletadas no cadastro do cliente serão utilizadas para identificação das reservas
                            e execução de contrato entre o titular e a NeoNavigation. Para mais informações sobre o
                            tratamento de dados pessoais, acesse nosso Portal de Privacidade.</p>
                    </div>
                    <button v-if="!dadosConfirmados" @click="confirmarDados">Salvar Dados</button>
                </div>
            </div>

            <div v-if="activeTab === 'endereco'" class="dados-pessoais">
                <div class="content-container">
                    <div class="text-content">
                        <h1>Endereço</h1>
                        <p>Todos os seus Dados são protegidos, conforme a LGPD. <a href="#">Saiba mais.</a></p>
                    </div>
                    <div class="image-content">
                        <img :src="confirmation" alt="Imagem de confirmação" class="confirmation__image" />
                    </div>
                </div>
                <div class="alert-box">
                    <img src="@/assets/shield.svg" alt="Ícone de atenção" class="alert-icon">
                    <div class="alert-content">
                        <h2>Atenção!</h2>
                        <p>Lembre-se de revisar os dados preenchidos, serão importantes para concluir o seu cadastro e
                            realizar a sua reserva.</p>
                    </div>
                </div>
                <div class="input-container">
                    <div class="input-field">
                        <label for="cep">CEP*</label>
                        <input type="text" id="cep" placeholder="CEP" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="logradouro">Logradouro*</label>
                        <input type="text" id="logradouro" placeholder="Selecione" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="endereco">Endereço*</label>
                        <input type="text" id="endereco" placeholder="Endereço" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="numero">Número*</label>
                        <input type="text" id="numero" placeholder="Número" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="complemento">Complemento*</label>
                        <input type="text" id="complemento" placeholder="Complemento" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="bairro">Bairro*</label>
                        <input type="text" id="bairro" placeholder="Bairro" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="cidade">Cidade*</label>
                        <input type="text" id="cidade" placeholder="Cidade" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="uf">UF*</label>
                        <input type="text" id="uf" placeholder="Selecione" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="telefone">Celular/Telefone Fixo*</label>
                        <input type="text" id="telefone" placeholder="Digite seu melhor número"
                            :disabled="dadosConfirmados">
                    </div>
                </div>
                <div class="info-button-container">
                    <div class="info-container">
                        <img src="@/assets/info.svg" alt="Ícone de informação" class="info-icon">
                        <p>As informações coletadas no cadastro do cliente serão utilizadas para identificação das reservas
                            e execução de contrato entre o titular e a NeoNavigation. Para mais informações sobre o
                            tratamento de dados pessoais, acesse nosso Portal de Privacidade.</p>
                    </div>
                    <button v-if="!dadosConfirmados" @click="confirmarDados">Salvar Dados</button>
                </div>
            </div>

            <div v-if="activeTab === 'pagamento'" class="dados-pessoais">
                <div class="content-container">
                    <div class="text-content">
                        <h1>Cartão de Crédito</h1>
                        <p>Solicitamos os dados do cartão de crédito para acelerar a sua jornada conosco. Não se preocupe,
                            não fazemos cobranças no momento da reserva.</p>
                    </div>
                    <div class="image-content">
                        <img :src="confirmation" alt="Imagem de confirmação" class="confirmation__image" />
                    </div>
                </div>
                <div class="alert-box">
                    <img src="@/assets/shield.svg" alt="Ícone de atenção" class="alert-icon">
                    <div class="alert-content">
                        <h2>Atenção!</h2>
                        <p>O cartão de crédito deve ser da mesma titularidade da pessoa cadastrada nos dados pessoais.</p>
                    </div>
                </div>
                <div class="input-container">
                    <div class="input-field">
                        <label for="numero-cartao">Número do Cartão*</label>
                        <input type="text" id="numero-cartao" placeholder="Digite o número aqui"
                            :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="validade-cartao">Validade*</label>
                        <input type="text" id="validade-cartao" placeholder="MM/AA" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="cvv-cartao">CVV*</label>
                        <input type="text" id="cvv-cartao" placeholder="XXXX" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="nome-titular">Nome do titular no cartão*</label>
                        <input type="text" id="nome-titular" placeholder="Digite o nome do titular"
                            :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="cpf-titular">CPF*</label>
                        <input type="text" id="cpf-titular" placeholder="Digite o CPF do titular"
                            :disabled="dadosConfirmados">
                    </div>
                </div>
                <div class="input-container-cartao-endereco">
                    <div class="input-field">
                        <label for="cep-endereco">CEP*</label>
                        <input type="text" id="cep-endereco" placeholder="CEP" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="logradouro-endereco">Logradouro*</label>
                        <input type="text" id="logradouro-endereco" placeholder="Selecione" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="endereco-endereco">Endereço*</label>
                        <input type="text" id="endereco-endereco" placeholder="Endereço" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="numero-endereco">Número*</label>
                        <input type="text" id="numero-endereco" placeholder="Número" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="complemento-endereco">Complemento*</label>
                        <input type="text" id="complemento-endereco" placeholder="Complemento" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="bairro-endereco">Bairro*</label>
                        <input type="text" id="bairro-endereco" placeholder="Bairro" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="cidade-endereco">Cidade*</label>
                        <input type="text" id="cidade-endereco" placeholder="Cidade" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="uf-endereco">UF*</label>
                        <input type="text" id="uf-endereco" placeholder="Selecione" :disabled="dadosConfirmados">
                    </div>
                    <div class="input-field">
                        <label for="telefone-endereco">Celular/Telefone Fixo*</label>
                        <input type="text" id="telefone-endereco" placeholder="Digite seu melhor número"
                            :disabled="dadosConfirmados">
                    </div>
                </div>
                <div class="info-button-container">
                    <div class="info-container">
                        <img src="@/assets/info.svg" alt="Ícone de informação" class="info-icon">
                        <p>As informações coletadas no cadastro do cliente serão utilizadas para identificação das reservas
                            e execução de contrato entre o titular e a NeoNavigation. Para mais informações sobre o
                            tratamento de dados pessoais, acesse nosso Portal de Privacidade.</p>
                    </div>
                    <button v-if="!dadosConfirmados" @click="confirmarDados">Salvar Cartão</button>
                </div>
            </div>
            <div v-if="activeTab === 'ajuda'">
                <div class="options-container">
                    <div class="option-box">
                        <img src="@/assets/icon-locacoes.svg" alt="Ícone de Minhas Locações">
                        <p>Minhas Locações</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-debitos.svg" alt="Ícone de Débitos">
                        <p>Débitos</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-infracoes.svg" alt="Ícone de Infrações">
                        <p>Infrações</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-prorrogar.svg" alt="Ícone de Prorrogar Contrato">
                        <p>Prorrogar Contrato</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-protocolos.svg" alt="Ícone de Protocolos">
                        <p>Protocolos</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-revisao.svg" alt="Ícone de Revisão do Carro">
                        <p>Revisão do Carro</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-ajuda.svg" alt="Ícone de Central de Ajuda">
                        <p>Central de Ajuda</p>
                    </div>
                    <div class="option-box">
                        <img src="@/assets/icon-faleconosco.svg" alt="Ícone de Fale Conosco">
                        <p>Fale Conosco</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
    components: {
        Footer,
    },
    data() {
        return {
            activeTab: 'dadosPessoais',
            confirmation: require('@/assets/confirmation.png'),
            dadosConfirmados: false,
        };
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab;
        },
        confirmarDados() {
            this.dadosConfirmados = true;
        },
    },
};
</script>

<style scoped>
.dados-container {
    background-color: #333;
    padding: 20px;
    border-radius: 8px;
    max-width: 100%;
    margin: auto;
    overflow: hidden;
}

.tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.tab-button {
    flex: 1;
    background: #444;
    border: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin: 0 5px;
    text-align: center;
}

.tab-button.active {
    background: #666;
}

.tab-button:hover {
    background: #555;
}

.tab-content {
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: #000;
}

.dados-pessoais {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
}

.text-content {
    background: #f0f0f0;
    padding: 2.5em;
    border-radius: 30px;
    flex: 1;
    margin-bottom: 20px;
    width: 100%;
}

.text-content h1 {
    margin: 0;
    font-size: 24px;
}

.text-content p {
    margin: 10px 0;
}

.image-content {
    flex: 1;
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
}

.image-content img {
    max-width: 100%;
    border-radius: 8px;
}

.alert-box {
    background-color: #e6ffe6;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 2em;
    margin: 20px 0;
    width: 100%;
}

.alert-icon {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.alert-content {
    display: flex;
    flex-direction: column;
}

.alert-content h2 {
    margin: 0;
    color: #009900;
    font-size: 18px;
}

.alert-content p {
    margin: 0;
    color: #000;
    font-size: 14px;
}

.input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-radius: 30px;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
}

.input-container-cartao-endereco {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-radius: 30px;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-top: 2em;
}

.input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.input-field label {
    margin-bottom: 5px;
}

.input-field input {
    padding: 10px 100px;
    border: 1px solid #00ff00;
    border-radius: 20px;
    text-align: center;
}

.genero {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.genero-options {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.genero-options label {
    display: flex;
    align-items: center;
    margin: 0 10px;
}

.genero-options input {
    margin-right: 5px;
}

.additional-info {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.email-field {
    background-color: #f9f9f9;
    padding: 1em;
    border-radius: 8px;
    flex: 1;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.phone-fields {
    background-color: #f9f9f9;
    padding: 1em;
    border-radius: 8px;
    flex: 2;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.phone-field,
.confirm-phone-field {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.phone-field label,
.confirm-phone-field label {
    color: #00ff00;
    font-size: 16px;
    margin-bottom: 5px;
}

.email-field input,
.phone-field input,
.confirm-phone-field input {
    border: 1px solid #00ff00;
    border-radius: 50px;
    padding: 10px;
    background-color: #f9f9f9;
    color: #292929;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
}

.checkbox-container {
    background-color: #f9f9f9;
    border-radius: 14px;
    padding: 20px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
}

.checkbox-container input {
    margin-right: 10px;
}

.info-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
}

.info-container {
    background-color: #eeeeee;
    border-radius: 14px;
    padding: 20px;
    width: 75%;
    display: flex;
    align-items: center;
}

.info-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    background-color: #f0f9f0;
    border-radius: 15px;
    gap: 10px;
}

.option-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e6ffe6;
    border-radius: 15px;
    width: 180px;
    height: 100px;
    padding: 15px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    text-align: center;
}

.option-box:hover {
    background-color: #ccffcc;
}

.option-box img {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
}

.option-box p {
    margin: 0;
    font-size: 16px;
    color: #333;
}

button {
    background-color: #BDBDBD;
    border: none;
    color: white;
    padding: 22px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 15px;
    width: 20%;
    font-weight: bold;
    font-size: 22px;
}

button:hover {
    background-color: #33ff33;
}</style>