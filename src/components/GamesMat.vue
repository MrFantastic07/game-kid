<template>
    <Types title="Pacman de Calculo Matematico" 
    :img="'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/04/pac-man-2682107.jpg?tf=1200x'" 
    :path="'/pacman-calculo'"/>
    <Types title="Sopa de sumas" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/S/sopa-de-numeros.jpg'" 
    :path="'/sopa-sum'"/>
    <Types title="Sumas sencillas" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/J/juego-sumas-sencillas.jpg'" 
    :path="'/sum-sencillas'"/>
    <Types title="Memoria de matematicas" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/J/juego-memoria-matematicas-150x150.jpg'" 
    :path="'/memoria-mat'"/>
    <Types title="Rally de sumas y restas" 
    :img="'https://www.cokitos.com/wp-content/uploads/thumbs/custom/R/rally-sumas-150x150.jpg'" 
    :path="'/rally'"/>
    <Types title="Suma y colorea" 
    :img="'https://www.cokitos.com/wp-content/uploads/2020/04/suma-y-colorea-150x150.jpg'" 
    :path="'/suma-colorea'"/>
    <Types title="Reto matematico" 
    :img="'https://www.cokitos.com/wp-content/uploads/2019/03/calculo-matematicas-150x150.jpg'" 
    :path="'/reto-sumas'"/>
</template>

<script>
import Types from '../components/Types.vue'

export default {
    components: {
        Types
      }
}
</script>