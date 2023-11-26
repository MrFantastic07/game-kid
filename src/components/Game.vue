<template>
    <div class="flex justify-center bg-sky-400 ">
        <h1 class="font-mono text-white text-4xl font-bold mb-8 mt-4">{{ title }}</h1>
    </div>
    <div class="flex">
        <div>
            <div class="shadow-2xl mt-10 h-64 rounded-lg mb-6 mx-20">
                <h1 class="text-center text-red-600 text-2xl font-mono font-bold mb-2 mt-8">Instrucciones</h1>
                <p class="font-sans font-bold mx-4">{{ description }}</p>
            </div>
            <a
            class="flex justify-center mt-16"
            href="/games-home"
            >
                <img class="mt-2"
                src="../assets/home.png"
                alt="Img Game"
                width="200">    
            </a>
        </div>
        <div class="bg-red-500 flex flex-wrap justify-center m-4 rounded-2xl">
            <div class="m-10">
                <iframe
                width="900"
                height="600"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true"
                :src="game" 
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        description: String,
        game: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: ''
        },
        descriptionInst: String
    }
}
</script>