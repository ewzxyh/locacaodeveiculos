<template>
  <nav :class="{ 'header__menu-login': isLoginPage }" class="header__menu">
    <img v-bind:src="logoType" alt="LogoTipo NeoNavigation" class="menu__logo" draggable="false" />
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    
    <div class="menu__cargrup">
      <img v-bind:src="carIcon" alt="icone de carro" draggable="false" class="cargrup__image" />
      <a href="#" class="cargrup__link" @click="navigateToCarGroup">Escolha seu Carro</a>
    </div>

    <router-link to="/" class="menu__homeLink">
      <img v-bind:src="Logo" alt="Nome logo neonavigation" class="menu__logoname" draggable="false" />
    </router-link>


    <div class="menu__city">
      <a href="#" class="cargrup__link">Goiania</a>
    </div>

    <button class="menu__hamburguer">
      <i class='bx bx-menu'><span></span></i>
    </button>

    <div class="menu__user">
      <img v-bind:src="userIcon" alt="icone do usuario" draggable="false" class="cargrup__image" />
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      carIcon: '/img/carIcon.png',
      Logo: '/img/logo.png',
      userIcon: '/img/userIcon.png',
      logoType: '/img/logotipo.png',
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'login';
    },
    navigateToCarGroup() {
      this.$router.push('/carGroup');
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--black-background);
  padding-top: 1%;
  font-family: var(--main-font);
}

.header__menu-login {
  padding-bottom: 0.5%;
}

.header__menu {
  display: flex;
  gap: 40px;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  justify-content: center;
}

.menu__logo {
  height: 3%;
  width: 4%;
}

.menu__cargrup {
  display: flex;
  background-color: var(--white-background);
  border-radius: 30px;
  width: 17%;
  height: 45px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
}

.cargrup__image {
  width: 39px;
}

a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--font-color);
  transition: all 0.6s ease;
}

a:hover {
  color: var(--neo-green);
  transition: all 0.6s ease;
}

.menu__homeLink {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27%;
}

.menu__logoname {
  width: 100%;
  cursor: pointer;
}

.menu__city {
  display: flex;
  background-color: var(--white-background);
  border-radius: 30px;
  width: 8%;
  height: 45px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
}

.menu__user {
  display: flex;
  background-color: var(--white-background);
  border-radius: 30px;
  width: 12%;
  height: 45px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: nowrap;
  box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
}

.menu__hamburguer {
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  background-color: var(--white-background);
  flex-wrap: nowrap;
  box-shadow:
        inset 1px 0px 0px 0px rgba(0, 0, 0, 0.05),
        0px 0px 0px 1px rgba(0, 0, 0, 0.10), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.10), 
        0px 4px 4px 0px rgba(0, 0, 0, 0.10), 
        0px 8px 8px 0px rgba(0, 0, 0, 0.10); 
}

.bx-menu {
  font-size: 30px;
}

.bx-menu:hover {
  color: var(--neo-green);
  transition: 0.5s;
}

@media screen and (max-width:1300px) {
  .cargrup__link {
    font-size: 1rem;
  }

  .menu__cargrup {
    width: 20%;
  }
}
</style>
