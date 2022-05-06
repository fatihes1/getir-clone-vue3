<template>
    <a href="http:#" class="flex flex-col items-center text-center gap-y-2 p-4 text-gray-500 transition hover:bg-purple-50 group">
        <img :src=category.image alt="" class="w-12 h-12 rounded-md border border-gray-200">
        <span class="text-sm font-semibold group-hover:text-brand-color tracking-tight whitespace-nowrap">{{ category.title }}</span>
    </a>
</template>

<script>
export default {
    props : ['category'],
}
</script>

<style>

</style>