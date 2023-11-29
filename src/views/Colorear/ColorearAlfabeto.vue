<template>
    <Game
    title="Colorear Alfabeto"
    description="Juego de colorear las letras del alfabeto online. Puedes usar un pincel o bien el cubo de pintura para aplicar colores a las diferentes letras del abecedario para pintar. También dispones de una goma de borrar y un rodillo para pintar más de una sola pasada."
    game="https://www.digipuzzle.net/minigames/draw/alphabet/alphabet.htm?language=spanish"
    />

</template>

<script>
import Game from '../../components/Game.vue'

export default {
    name: 'App',
    components: {
        Game
    }
}
</script>