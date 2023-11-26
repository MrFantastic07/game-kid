<template>
  <div class="flex justify-end bg-sky-400 h-16">
    <div class="">
      <div class="">
        <h1 class="mr-10 mt-5 font-mono text-white text-lg font-bold">
          !Bienvenido/a {{ this.nombreKid }}!
        </h1>
      </div>
    </div>
  </div>
  <div class="flex justify-center bg-white h-24 mt-4">
    <div>
      <img 
      src="./assets/banner_APIGames.png"
      alt="logo-api"
      width="270">
    </div>
    <div class="ml-64">
      <div class="flex mt-4">
        <div class="mx-4 my-4">
          <div class=" rounded-lg">
            <div>
              <a class="rounded-full font-sans font-bold text-red-500 hover:bg-red-800 hover:text-white px-12 shadow-lg py-1"
                href="/"
              >INICIO</a>
            </div>
          </div>
        </div>
        <div>
          <div class="mx-4 my-4">
            <div class="rounded-lg">
              <div>
                <a class="rounded-full font-sans font-bold text-orange-500 hover:bg-orange-800 hover:text-white px-12 shadow-lg py-1"
                  href="/games-home"
                >MATERIAS</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mx-4 my-4">
            <div class=" rounded-lg">
              <div>
                <a class="rounded-full font-sans font-bold text-green-500 hover:bg-green-800 hover:text-white px-12 shadow-lg py-1"
                  href="/games-home"
                >NOSOTROS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
  
</template>

<script>
import {state} from './assets/store'

export default {
  data(){
    return {
      nombreKid: state.nameKids
    }
  }
}
</script>



<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

</style>
