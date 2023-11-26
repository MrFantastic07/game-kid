<template>
  <div class="flex justify-center bg-sky-400">
    <div class="mt-20 mr-10">
      <h1
      class="font-mono font-bold text-7xl text-white"
      >!Bienvenido/a a API Games!</h1>
      <p
      class="font-mono text-4xl text-white text-center mt-8"
      >Escribe tu nombre aqui:
      </p>
      <div>
        <div class="flex mt-2">
          <input 
          type="text" 
          name="name" 
          id="name" 
          v-model="this.nameKidsF"
          class="h-12 mt-10 block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          placeholder="Tu nombre" />
          <button
          @click="relationName"
          href="/games-home"
          class="h-12 mt-10 ml-4 transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300 mb-2 text-2xl border font-sans text-white px-12 rounded-full"
          >
          <p
          class="font-mono text-xl text-white font-bold"
          >
          Listo!
          </p>
          </button>
        </div>
      </div>
      <div v-if="buttonName" class="flex justify-center">
        <a
          href="/games-home"
          class="h-12 mt-10 ml-4 transition ease-in-out delay-150 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 duration-300 mb-2 text-2xl border font-sans text-white px-12 rounded-full"
          >
          <p
          class="mt-2 font-mono text-xl text-white font-bold"
          >
          Empezemos a jugar {{ this.nameKidsF }} !
          </p>
        </a>
      </div>
    </div>
    <img class="mt-2 mb-20"
    src="../assets/logo_APIGames.png"
    alt="Img Game"
    width="500">
  </div>
  <div
    class="h-48 bg-lime-400"
    >
  </div>
</template>

<script>
import {state} from '../assets/store'

export default {
  data () {
    return {
      nameKidsF: '',
      buttonName: false
    }
  },
  methods: {
    relationName () {
      state.nameKids = this.nameKidsF

      this.buttonName = true
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
