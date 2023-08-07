<template>
  <div class="mx-4 my-4">
    <div class="w-64 h-64 shadow-xl rounded-lg">
      <div class="flex justify-center">
        <img 
        :src="img"
        alt="Img Game">
      </div>
      <div>
        <h1 class="mb-4 mt-2 font-sans">{{ title }}</h1>
        <a class="rounded-full font-sans text-white bg-red-500 hover:bg-red-800 px-12 shadow-lg shadow-red-500/50 py-1"
        :href="path"
        :target="target">Jugar</a>
      </div>
    </div>
  </div>
</template>

<script>
// import { stringifyQuery } from 'vue-router';

export default {
    props: {
        title: String,
        path: {
          type: String,
          default: ''
        },
        target: {
          type: String,
          default: ''
        },
        img: {
          type: String,
          default: ''
        }
    }
}
</script>