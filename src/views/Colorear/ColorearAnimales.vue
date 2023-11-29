<template>
    <Game
    title="Colorear Animales"
    description="Libro online con dibujos para colorear animales, es un juego para niños chiquitos que aprenden a colorear. Este libro de dibujo solo permite pintar con la herramienta de bote de pintura, por lo que es una actividad para niños muy pequeños. Los niños deben elegir el color en la parte derecha. Pueden deslizar los botes de pintura arriba y abajo para ver toda la gama de colores disponibles. Una vez que elijan el color haciendo clic, solo deberán aplicar el color a la región del dibujo que hayan elegido. "
    game="https://www.cokitos.com/juegos/libro-animales/"
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