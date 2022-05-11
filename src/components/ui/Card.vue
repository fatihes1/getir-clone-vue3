<template>
        <img :src=cardData.image alt="" class="w-[150px] h-[150px] mb-6">
        <h6 class="font-semibold text-lg text-primary-brand-color">{{ cardData.title }}</h6>
        <p class="mt-2 text-sm text-gray-500">{{ cardData.description }}</p>
</template>

<script>
export default {
    props: ['cardData'] 

}
</script>

<style>

</style>