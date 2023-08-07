<template>
    <Game
    title="Sopa de Sumas"
    description="Sopa de sumas es un juego de sopa de letras educativo para jugar online, que contiene números en lugar de letras. El objetivo es hacer combinaciones de números que sumen el número destacado en el centro. Encuentra todas las combinaciones que suman el resultado en esta sopa de números."
    game="https://www.digipuzzle.net/minigames/numbersearch/numbersearch_additions_zero_to_ten.htm?language=spanish"
    descriptionInst="Sopa de sumas es un juego de sopa de letras educativo para jugar online, que contiene números en lugar de letras. El objetivo es hacer combinaciones de números que sumen el número destacado en el centro. Encuentra todas las combinaciones que suman el resultado en esta sopa de números."
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