<template>
    <Game
    title="Identificar Letras"
    description="Juega a identificar las letras del alfabeto en la matriz de letras.  Observa la letra del abecedario que has de buscar y señala en el cuadro las veces que se indique. Si señalas la letra correcta, se señala en verde, y en caso contrario, em rojo para que puedas rectificar. En el cuadro aparecen letras del abecedario, en mayúsculas y minúsculas, consonantes y vocales. En cada etapa, el juego de propone encontrar en el cuadro una de las letras del alfabeto. Mejora en la identificación de las letras del alfabeto con este juego interactivo y educativo para niños que aprenden las letras del alfabeto."
    game="https://www.digipuzzle.net/minigames/matrixabc/matrixabc.htm?language=spanish"
    descriptionInst="Juega a identificar las letras del alfabeto en la matriz de letras.  Observa la letra del abecedario que has de buscar y señala en el cuadro las veces que se indique. Si señalas la letra correcta, se señala en verde, y en caso contrario, em rojo para que puedas rectificar. En el cuadro aparecen letras del abecedario, en mayúsculas y minúsculas, consonantes y vocales. En cada etapa, el juego de propone encontrar en el cuadro una de las letras del alfabeto. Mejora en la identificación de las letras del alfabeto con este juego interactivo y educativo para niños que aprenden las letras del alfabeto."
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