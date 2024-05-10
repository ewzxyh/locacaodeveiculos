<template>
   <img v-bind:src="matrix" alt="" class="matrix"> 
  <section class="login">
    <form action="submit" class="login__form">
      <div class="form__images">
        <img class="image__logoType" v-bind:src="logoType" alt="Logotipo neonaviation" >
        <img class="image__logoName" v-bind:src="logo" alt="Logo name neonavigation" >
      </div>
      <h1 class="form__title">Entrar</h1>
      <div class="form__input">
        <input type="email" class="input__email" placeholder="E-mail" required>
        <input type="password" class="input__password" placeholder="Senha" required>
        <button class="input__button"> Continuar</button>
      </div>
      <div class="login__links">
        <router-link to="/register" class="links__sing-in">Cadastrar-se</router-link>
        <router-link to="/" class="links__forget-my-password">Esqueci minha senha</router-link>
      </div>
      <div class="form__polices">
        <p>Ao fazer login, você concorda com os </p>
        <p><strong>termos de Serviço e Privacidade</strong> da NeoNavigation</p>
      </div>
    </form>
    <img class="login__car" v-bind:src="car" alt="Carro estilo Matrix">
  </section>
</template>
<script>

export default {
  name: 'login',
  data(){
    return{
      logoType:'/img/logotipo.png',
      logo:'/img/logo.png',
      car:'/img/matrixCar.png',
      matrix:'/img/matrix.png'
    }
  }
}
</script>
<style scoped>
body{
  overflow: hidden;
}
.matrix{
  margin-top: -10%;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.login{
  display: flex;
  justify-content: space-between;
}
.login__car{
  width: 39%;
}
.login__form{
  background-color: var(--white-background);
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  height: 100%;
  width: 37%;
  border-radius: 25% 20px 25% 20px;
  align-items: center;
  margin-top: 7%;
}
.form__images{
 display: flex;
 align-items: center;
 justify-content: center;
 gap:20px;
 margin-top: 5%;
 margin-left:30px;
}
.image__logoType{
  width: 10%;
}
.image__logoName{
 width: 70%;
}
.form__title{
  margin-top: 4%;
 font-weight: 200;
 font-size: 2rem;
}
.form__input{
  background-color: var(--light-green-neo) ;
  display: flex;
  flex-direction: column;
  align-items: center ;
  gap: 35px;
  justify-content: center;
  width: 80%;
  border-radius: 10px;
  height: 230px;
}
.input__email{
  font-family: var(--main-font);
  width: 80%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border:2px solid var(--neo-green )  ;
  font-size: 1rem;
}
.input__password{
  font-family: var(--main-font);
  width: 80%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border:2px solid var(--neo-green )  ;
  font-size: 1rem;
  
}
.input__button{
  font-family: var(--main-font);
  width: 25% ;
  height: 70px;
  border-radius: 60px;
  font-family: var(--main-font) ;
  font-size: 1.8rem;
  color: var(--white-background);
  background-color: var(--neo-green);
  outline: none;
  border:none;
  cursor: pointer;
  transition: all .5s ease;
  position: absolute;
  margin-top:16.5%;
  transition: all .5s ease;
}
.input__button:hover{
  background-color: var(--darker-green) ;
  transition: all .5s ease;
}
.login__links{
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 15%;
  gap: 80px;
}
.form__polices{
  margin-top:5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}
p{
  font-size: .8rem;
}
@media screen and (max-width: 1920px ) {
  .input__button{
    margin-top:15%;
  }
  
}
@media screen and (max-width: 1500px ) {
  .input__button{
    margin-top:20%;
  }
  
}
</style>
