<template>
    <div>
      <div class="bg-sky-400">
        <div class="flex justify-center my-6">
          <h1 class="font-sans text-4xl font-bold mt-6 text-white">
            ¡Aprende jugando! </h1>
        </div>
        <div class="flex justify-center mx-32">
          <p class="text-white font-bold font-sans t text-2xl text-center mb-12"> El conocimiento, el juego y la imaginación desbloquean un futuro brillante y lleno de posibilidades.</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mt-4 mb-6">
        <div class="flex justify-center mt-4 border-b-4 w-96 border-red-600">
          <img class="mt-2"
          src="../assets/icono-numeros.png"
          alt="Img Game">
          <button 
          @click="showmat = !showmat" 
          class="h-10 mt-8 transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 mb-2 text-2xl border font-sans text-white px-12 rounded-full"
          >Matematicas</button>
        </div>
      </div>
      <Transition name="bounce" class="flex overflow-x-auto mx-32">
      <div v-if="showmat">
          <GamesMat />
      </div>
      </Transition>
      <div class="flex flex-wrap justify-center mt-4 mb-6">
        <div class="flex justify-center mt-4 border-b-4 w-96 border-blue-600">
          <img class="mt-2"
          src="../assets/icono-letras.png"
          alt="Img Game"
          width="80">
          <button 
          @click="showabe = !showabe" 
          class="h-10 mt-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 mb-2 text-2xl border font-sans text-white px-12 rounded-full"
          >Abecedario</button>
        </div>
      </div>
      <Transition name="bounce" class="flex overflow-x-auto mx-32">
      <div v-if="showabe">
        <GamesAbe />
      </div>
      </Transition>
      <div class="flex flex-wrap justify-center mt-4 mb-6">
        <div class="flex justify-center mt-4 border-b-4 w-96 border-yellow-600">
          <img class="mt-2"
          src="../assets/icono-colorea.png"
          alt="Img Game"
          width="70">
          <button 
          @click="showcol = !showcol" 
          class="h-10 mt-8 transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300 mb-2 text-2xl border font-sans text-white px-12 rounded-full"
          >Colorear</button>
        </div>
      </div>
      <Transition name="bounce" class="flex overflow-x-auto mx-32">
      <div v-if="showcol">
        <GamesCol />
      </div>
      </Transition>
      <div
      class="h-64 bg-lime-400"
      >
      </div>
    </div>
  </template>
  
  <script>
  import GamesMat from '../components/GamesMat.vue'
  import GamesAbe from '../components/GamesAbe.vue'
  import GamesCol from '../components/GamesCol.vue'
  import {state} from '../assets/store'
  
  export default {
    components: {
      GamesMat,
      GamesAbe,
      GamesCol
    },
    data () {
      return {
        state,
        showmat: false,
        showabe: false,
        showcol:false,
        // nameKidL: state.nameKids
      }
    }
  }
  
  </script>
  
  <style scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  body {
    background: url('https://img.freepik.com/free-vector/hand-drawn-doodle-background_23-2149973179.jpg?w=1380&t=st=1690762747~exp=1690763347~hmac=118369649dea6c8224da9cfbb39b58aea7e53c753af62bc4528255673e439af8');
  }
  </style>