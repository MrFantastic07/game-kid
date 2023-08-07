<template>
    <Game
    title="Laberinto Abecedario"
    description="Recorre este laberinto de abecedario online, eligiendo las letras del abecedario en orden. Empieza por la A, y da un paso saltando a la letra siguiente del abecedario, que esté a su lado, para dibujar un recorrido o camino en el laberinto. Cuando llegues a la Z, tendrás que comenzar de nuevo por la A. Una actividad educativa ideal para repasar el abecedario con niños y niñas de aproximadamente 5 años, dependerá del aprendizaje de cada niño. Elige en la rueda de configuración el tipo de letra, mayúsculas y minúsculas, para completar este laberinto cada vez diferente con las letras del abecedario."
    game="https://www.digipuzzle.net/minigames/mathmaze/mathmaze_alphabet.htm?language=spanish"
    descriptionInst="Recorre este laberinto de abecedario online, eligiendo las letras del abecedario en orden. Empieza por la A, y da un paso saltando a la letra siguiente del abecedario, que esté a su lado, para dibujar un recorrido o camino en el laberinto. Cuando llegues a la Z, tendrás que comenzar de nuevo por la A. Una actividad educativa ideal para repasar el abecedario con niños y niñas de aproximadamente 5 años, dependerá del aprendizaje de cada niño. Elige en la rueda de configuración el tipo de letra, mayúsculas y minúsculas, para completar este laberinto cada vez diferente con las letras del abecedario."
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