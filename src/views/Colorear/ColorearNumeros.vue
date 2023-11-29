<template>
    <Game
    title="Colorear Numeros"
    description="Juego de colorear números online. Pinta y colorea la escena con dibujos y cada uno de los números que se corresponde con ellos, que contiene una escena con animales. Refuerza el aprendizaje de los números pintando una escena para cada número, en el que aparece ese mismo número de animales representados. Pinta 7 patitos, 1 gallo, o 3 cerdos en el fango. Discierne el número de animales, cuenta los individuos y pinta el número."
    game="https://www.digipuzzle.net/minigames/draw/count.htm?language=spanish"
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