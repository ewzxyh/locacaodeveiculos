<template>
    <div class="container">
        <img v-bind:src="chibi" alt="Imagem do agent smith" draggable="false">
       <router-link to="/" id="matrixText" draggable="false">{{ displayedMessage }}</router-link>
    </div>
</template>
<script>
 export default{
    name:'notFound',
    data(){
        return{
            chibi:'../img/agentSmith.png',
            targetMessage:"Você esta saindo da Matrix volte!",
            displayedMessage:"",
            interations:20,
            interval:100
            
        }
    },
    methods:{
        shuffleLetters(){
            let interation = 0;
            const originalMessage=this.targetMessage.split('');
            const length = this.targetMessage.length;
            
            const intervalId= setInterval(()=>{
                let displayMessage='';

                for(let i =0; i<length;i++){
                    if(interation>=this.interations){
                        displayMessage+=originalMessage[i];
                    }else{
                        if(Math.random()>0.5){
                            displayMessage+=String.fromCharCode(33+Math.floor(Math.random()*94));
                        }else{
                            displayMessage+=originalMessage[i];
                        }
                    }
                }
                this.displayedMessage=displayMessage;
                interation++;
                if(interation>this.interations){
                    clearInterval(intervalId);
                    this.displayedMessage=this.targetMessage;
                }

            },this.interval);
        }
    },mounted(){
        this.shuffleLetters();
        
    }
}
</script>
<style scoped>
 .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20%;
 }
 #matrixText{
    font-size: 2.5rem;
    width: 60%;
    text-align: center;
    color: var(--neo-green);
    text-shadow:
        0 0 2px var(--neo-green), /* Primeiro nível de sombra */
        0 0 2px var(--neo-green), /* Segundo nível de sombra */
        0 0 0px var(--neo-green), /* Terceiro nível de sombra */
        0 0 2px var(--neo-green), /* Quarto nível de sombra */
        0 0 3px var(--neo-green), /* Quinto nível de sombra */
        0 0 10px var(--neo-green);
 }
</style>