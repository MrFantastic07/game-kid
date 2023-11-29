<template>
    <Game
    title="Colorea dinosaurios"
    description="Juego divertido para niños de colorear dinosaurios online de forma interactiva. Elige los colores que quieras para transformar este dinosaurio en blanco y negro en un dinosaurio lleno de vida y de color. Haz clic en las flechas y elige el dibujo de dinosaurio para pintar que más te guste. Se abrirá la herramienta con pinturas de colores para que apliques con el ratón o con el dedo si estás en un ordenador o tableta. Cuando termines de colorear el dinosaurio, puedes guardar la imagen o imprimirla haciendo clic en el icono de la impresora."
    game="https://html5.gamedistribution.com/3c608d69b858486ca8ec4d315fb887a1/?gd_sdk_referrer_url=https://www.cokitos.com/juego-de-colorear-dinosaurios/play/"
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
<!-- <iframe id="playframe" width="900" height="600" frameborder="0" scrolling="no" allowfullscreen="true" src="https://html5.gamedistribution.com/3c608d69b858486ca8ec4d315fb887a1/?gd_sdk_referrer_url=https://www.cokitos.com/juego-de-colorear-dinosaurios/play/"></iframe> -->