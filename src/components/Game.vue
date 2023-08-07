<template>
    <div class="mt-8 mb-8 ">
        <h1 class="text-2xl font-sans font-semibold">{{ title }}</h1>
    </div>
    <div class="mb-8 mx-20">
        <p class="font-sans font-extralight">{{ description }}</p>
    </div>
    <div class="flex flex-wrap justify-center mb-8">
    <iframe
    width="1000"
    height="600"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true"
    :src="game" 
    ></iframe>
    </div>
    <div class="flex justify-center mb-8">
        <div class="border-b-4 w-96">
            <h1 class="text-2xl font-sans mb-2">Instrucciones</h1>
        </div>
    </div>
    <div class="mx-20 mb-20">
        <p class="font-sans font-extralight">{{ descriptionInst }}</p>
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