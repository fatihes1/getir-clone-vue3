<template>
  <div class="relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
    <carousel :settings="settings" :items-to-show="1.5" :autoplay="3000" :wrap-around="true">
    <Slide v-for="(image) in images" :key="image.id">
      <div class="w-full h-[500px] justify-center items-center">
        <img class="w-full h-full object-cover" :src="image.url" />
      </div>
    </Slide>
  </carousel>
  <div class="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
    <div>
      <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="">
      <h3 class="mt-8 text-4xl font-semibold text-white">
        Dakikalar içinde <br/> kapınızda <br />
      </h3>
    </div>
    <div class="w-[400px] rounded-lg bg-gray-50 p-6">
      <h4 class="text-primary-brand-color mb-3 text-center font-semibold">Giriş yap veya kayıt ol</h4> 
      <div class="grid gap-y-3">
        <div class="flex gap-x-2">
        <div class="flex w-28 h-14 bg-white border-2 py-2 px-3 transition-colors text-sm items-center border-gray-300 rounded hover:border-primary-brand-color">
          TR +90 
        </div>
        <label class="flex-1 relative group block cursor-text">
          <input required class="h-14 px-4 border-2 border-gray-300 rounded w-full group-hover:border-primary-brand-color focus:border-primary-brand-color transition-colors text-sm pt-2 outline-none peer" />
          <span class="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500  peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs transition-all">Telefon Numarası</span>
        </label>
      </div>
      <button class="h-12 flex items-center justify-center rounded-md w-full bg-brand-yellow text-sm font-semibold text-primary-brand-color hover:bg-primary-brand-color hover:text-brand-yellow transition-colors">
        Telefon numarası ile devam et
      </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data () {
    return {
      images : [
      { id: 1, url: "https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" },
      { id: 2, url: "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" },
      { id: 3, url: "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" },
      { id: 4, url: "https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" },
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    }
    }
  }
}
</script>

<style>

</style>