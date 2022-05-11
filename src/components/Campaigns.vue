<template>
  <div class="md:container mx-auto md:py-8">
    <h3 class="text-sm font-semibold text-gray-700 mb-3 hidden md:block">Kampanyalar</h3>
    <carousel :settings="settings" :items-to-show="1.5" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true" class="md:-mx-2">
    <Slide v-for="(camp) in campaign" :key="camp.id">
      <div class=" justify-center items-cente0r md:px-2">
        <img class="object-cover md:rounded w-full" :src="camp.image" />
      </div>
    </Slide>
    
  </carousel>
  </div>
</template>

<script>

import campaign from '@/api/banners.json';
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
      campaign,
      settings: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      breakpoints: {
      
      100 : {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      640: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      768: {
        itemsToShow: 2,
        snapAlign: 'center',
        },
       1024: {
        itemsToShow: 3,
        snapAlign: 'start',
       }
      },
    }
  }
}
</script>

<style>

</style>