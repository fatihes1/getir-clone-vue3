<template>
<div class="flex flex-col items-center text-center gap-y-1 relative p-3">
    <button class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 group shadow-md  hover:border-brand-color transition-all">  
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current text-brand-color/75 group-hover:text-brand-color/100"><path d="M11.075 18.8V12.925H5.2V11.05H11.075V5.175H12.95V11.05H18.825V12.925H12.95V18.8Z"/></svg>    
    </button> 
    <img :src=product.image alt=product.title class="w-32 h-32 rounded-md" />
    <div class="text-sm font-semibold text-brand-color">{{product.price}}</div>
    <div class="text-sm font-semibold text-gray-900">{{product.title}}</div>
    <div class="text-sm font-semibold text-gray-500">{{product.alt}}</div>
</div>
</template>

<script>
export default {
    props : ['product']
}
</script>

<style>

</style>