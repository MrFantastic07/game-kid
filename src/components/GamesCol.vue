<template>
    <Types title="Colorea dinosaurios" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/J/juego-de-colorear-dinosaurios-150x150.jpg'" 
    :path="'/colorea-dinosaurios'"/>
    <Types title="Pizarra de Pixel" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/P/pizarra-pixel-art-150x150.jpg'" 
    :path="'/pizarra'"/>
    <Types title="Colorear Animales" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/J/juego-libro-colorear-animales-150x150.jpg'" 
    :path="'/colorear-animales'"/>
    <Types title="Colorear Numeros" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/C/colorear-numeros-150x150.jpg'" 
    :path="'/colorea-numeros'"/>
    <Types title="Colorear Alfabeto" 
    :img="'https://www.cokitos.com/wp-content/uploads/2021/01/colorear-alfabeto-150x150.jpg'" 
    :path="'/colorear-alfabeto'"/>
    <Types title="Pintar Primavera" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/P/pintar-dibujos-primavera-150x150.jpg'" 
    :path="'/pintar-primavera'"/>
</template>

<script>
import Types from '../components/Types.vue'

export default {
    components: {
        Types
      }
}
</script>