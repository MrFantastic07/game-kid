<template>
    <Types title="Identificar Letras"
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/I/identificar-letras-del-abecedario-150x150.jpg'"
    :path="'/identificar-letras'"
    />
    <Types title="Ordenar Alfabeto"
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/O/ordenar-alfabeto-150x150.jpg'"
    :path="'/ordenar-alf'"
    />
    <Types title="Unir letras"
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/U/unir-mayusculas-minusculas-150x150.jpg'"
    :path="'/unir-letras'"
    />
    <Types title="Laberinto Abe"
    :img="'https://www.cokitos.com/wp-content/uploads/2020/05/laberinto-alfabeto-150x150.jpg'"
    :path="'/laberinto-abe'"
    />
    <Types title="Letras Teclado"
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/J/juego-letras-del-teclado-150x150.jpg'"
    :path="'/letras-teclado'"
    />
    <Types title="Orden Alfabetico"
    :img="'https://www.cokitos.com/wp-content/uploads/2022/01/orden-alfabetico-online-150x150.jpg'"
    :path="'/orden-alfabetico'"
    />
</template>

<script>
import Types from '../components/Types.vue'

export default {
    components: {
        Types
      }
}
</script>