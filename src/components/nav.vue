<template>
  <nav :class="{ 'header__menu-login': isLoginPage }" class="header__menu">
<<<<<<< HEAD
    <img v-bind:src="logoType" alt="LogoTipo NeoNavigation" class="menu__logo" draggable="false">
=======
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <img
      v-bind:src="logoType"
      alt="LogoTipo NeoNavigation"
      class="menu__logo"
      draggable="false"
    />
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e

    <div class="menu__cargrup">
      <img
        v-bind:src="carIcon"
        alt="icone de carro"
        draggable="false"
        class="cargrup__image"
      />
      <a href="#" class="cargrup__link">Grupo de Carros</a>
    </div>

<<<<<<< HEAD
    <router-link to="/" class="menu__homeLink"><img v-bind:src="Logo" alt="Nome logo neonavigation"
        class="menu__logoname" draggable="false"></router-link>
=======
    <router-link to="/home" class="menu__homeLink"
      ><img
        v-bind:src="Logo"
        alt="Nome logo neonavigation"
        class="menu__logoname"
        draggable="false"
    /></router-link>
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e

    <div class="menu__city">
      <a href="#" class="cargrup__link">Goiania</a>
    </div>

<<<<<<< HEAD
    <button class="menu__hamburguer"><i class='bx bx-menu'><span></span></i></button>
=======
    <button class="menu__hamburguer">
      <i class="bx bx-menu"><span></span></i>
    </button>
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e

    <div class="menu__user">
      <img
        v-bind:src="userIcon"
        alt="icone do usuario"
        draggable="false"
        class="cargrup__image"
      />
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>
<script>
export default {
<<<<<<< HEAD
  name: 'nav',
  data() {
    return {
      carIcon: '/img/carIcon.png',
      Logo: '/img/logo.png',
      userIcon: '/img/userIcon.png',
      logoType: '/img/logotipo.png',
    }
  },
  computed: {
    isLoginPage() {
      return this.$route.name == 'login'
    }
  }
}
=======
  name: "nav",
  data() {
    return {
      carIcon: "/img/carIcon.png",
      Logo: "/img/logo.png",
      userIcon: "/img/userIcon.png",
      logoType: "/img/logotipo.png",
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.name == "login";
    },
  },
};
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");

* {
  margin: 0;
  padding: 0;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
body {
  box-sizing: border-box;
  background-color: var(--black-background);
  padding-top: 1%;
  font-family: var(--main-font);
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.header__menu-login {
  background-color: var(--black-opacity);
  padding-bottom: 0.5%;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.header__menu {
  display: flex;
  gap: 40px;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  justify-content: center;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.menu__logo {
  height: 3%;
  width: 4%;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.menu__cargrup {
  display: flex;
  background-color: var(--white-background);
  border-radius: 30px;
  width: 17%;
  height: 45px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
<<<<<<< HEAD

.cargrup__image {
  width: 39px;
}

=======
.cargrup__image {
  width: 39px;
}
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--font-color);
  transition: all 0.6s ease;
<<<<<<< HEAD

}

=======
}
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
a:hover {
  color: var(--neo-green);
  transition: all 0.6s ease;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.menu__homeLink {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27%;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.menu__logoname {
  width: 100%;
  cursor: pointer;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.menu__city {
  display: flex;
  background-color: var(--white-background);
  border-radius: 30px;
  width: 8%;
  height: 45px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
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
}
<<<<<<< HEAD

=======
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.menu__hamburguer {
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  background-color: var(--white-background);
  flex-wrap: nowrap;
}
<<<<<<< HEAD

.bx-menu {
  font-size: 30px;
}

=======
.bx-menu {
  font-size: 30px;
}
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
.bx-menu:hover {
  color: var(--neo-green);
  transition: 0.5s;
}
<<<<<<< HEAD

@media screen and (max-width:1300px) {
  .cargrup__link {
    font-size: 1rem;
  }

  .menu__cargrup {
    width: 20%;
  }
}</style>
=======
</style>
>>>>>>> f31bfd084be3c3ba1187d8aa5108944fa96f138e
