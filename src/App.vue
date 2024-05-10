<template>
  <NavBar/>
  <router-view/>

</template>
<script>
import cabecalho from '../src/components/header.vue'
import NavBar from '../src/components/nav.vue'
import body from './components/favorityCarousel.vue'


export default{
  name: 'App',
  components:{
    cabecalho,
    NavBar,
    body
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
:root{
  --main-font: 'Orbitron';
  --secondary-font: 'Roboto Mono';
  --black-background:#292929;
  --neo-green:#00FF00;
  --darker-green:#13ca06;
  --white-background:#F9F9F9;
  --font-color:#000000;
  --light-green-neo:#33FF3333;
  --gray-font:#7F7F7F;
  --dark-green: #008000;
  --light-green:#00FF000D;
  --black-opacity:#00000099;
  --gray:#BDBDBD;
}
html,body{
  width: 100%;
	height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
body{
  box-sizing: border-box;
  background-color:var(--black-background) ;
  padding-top: 1% ;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar-thumb{
  background: var(--neo-green);
  border-radius: 50px ;
}
::-webkit-scrollbar{
  width:5px ;
}

</style>
