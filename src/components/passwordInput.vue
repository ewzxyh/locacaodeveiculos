<template>
  <form class="container">
    <span class="container__title">Senha</span>
    <div class="wraper">
      <div class="wraper__password">
        <input type="password" placeholder="Crie sua senha" />
      </div>

      <div class="wraper__password-confirm">
        <span class="password-confirm__title">Confirme sua senha</span>
        <input type="password" placeholder="Digite novamente senha" />
      </div>
    </div>
  </form>
</template>
<script>
export default{
    name:'passwordInput',
    data(){
        return{
            eyeOpen:'../img/visibilityOn.png'
        }
    }
}
</script>