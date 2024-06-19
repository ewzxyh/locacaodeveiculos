<template>
<div class="contact-section">
    <div class="header">
        <h1>Fale Conosco</h1>
        <p>Olá! Será um prazer falar com você! Antes de iniciar o seu atendimento, confira os assuntos e as melhores formas de falar com a gente sobre cada um deles!</p>
    </div>
    <div class="contact-options">
        <div class="contact-box">
            <img src="@/assets/icon-chat.svg" alt="Ícone de Fale Conosco">
            <h2>Fale Conosco</h2>
            <p>Sua resposta de forma imediata. Recomendado para assuntos como pane, acidente, furto, roubo e solicitações pós locação.</p>
            <p><strong>De domingo a domingo, 24h.</strong></p>
            <button class="contact-button chat-button">Iniciar Chat</button>
        </div>
        <div class="contact-box">
            <img src="@/assets/icon-whatsapp.svg" alt="Ícone de Atendimento via WhatsApp">
            <h2>Atendimento via WhatsApp</h2>
            <p>Sobre assuntos relacionados à reservas, como valores, alterações de reserva, dentre outros.</p>
            <p><strong>De domingo a domingo, 24h.</strong></p>
            <button class="contact-button whatsapp-button">WhatsApp</button>
        </div>
        <div class="contact-box">
            <img src="@/assets/icon-email.svg" alt="Ícone de Atendimento via E-mail">
            <h2>Atendimento via E-mail</h2>
            <p>Recomendado para assuntos que não exigem resposta imediata.</p>
            <p><strong>De segunda a sexta, das 08h às 18h.</strong></p>
            <button class="contact-button email-button">Enviar E-mail</button>
        </div>
        <div class="contact-box">
            <img src="@/assets/icon-privacy.svg" alt="Ícone de Portal da Privacidade">
            <h2>Portal da Privacidade</h2>
            <p>Para demandas relacionadas à dados cadastrais, como não conseguir recuperar senha após trocar de telefone/e-mail, etc.</p>
            <p><strong>De segunda a sexta, das 08h às 18h.</strong></p>
            <button class="contact-button privacy-button">Acessar Portal</button>
        </div>
        <div class="contact-box">
            <img src="@/assets/icon-access.svg" alt="Ícone de Credenciais de Acesso">
            <h2>Credenciais de Acesso</h2>
            <p>Para demandas sobre credenciais de acesso aos nossos serviços, como alterações de e-mail ou telefone.</p>
            <p><strong>De domingo a domingo, 24h.</strong></p>
            <button class="contact-button access-button" @click="navigateToDados">Acessar Portal</button>
        </div>
        <div class="contact-box">
            <img src="@/assets/icon-client.svg" alt="Ícone de Portal do Cliente">
            <h2>Portal do Cliente</h2>
            <p>Acesse suas locações, débitos, infrações, contratos, protocolos, revisão do carro e outros.</p>
            <p><strong>De domingo a domingo, 24h.</strong></p>
            <button class="contact-button client-button" @click="navigateToDados">Acessar Portal</button>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name: 'sac',
    data(){
        return{
            // Data
        }
    },
    methods: {
    navigateToDados() {
      this.$router.push('/dados');
    }
    }

}
</script>

<style scoped>
.contact-section {
    background-color: #333;
    padding: 30px;
    border-radius: 15px;
    color: #fff;
    text-align: center;
}

.header {
    margin-bottom: 20px;
}

.header h1 {
    font-size: 28px;
    margin-bottom: 10px;
}

.header p {
    font-size: 16px;
}

.contact-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
}

.contact-box {
    background-color: #f9f9f9;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-box:hover {
    background-color: #ccffcc;
}

.contact-box img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}

.contact-box h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.contact-box p {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
}

.contact-box strong {
    display: block;
    margin-bottom: 15px;
}

.contact-button {
    background-color: #33ff33;
    color: #333;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.contact-button:hover {
    background-color: #00cc00;
}


</style>