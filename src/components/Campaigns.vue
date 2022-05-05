<template>
  <div class="container mx-auto py-8">
    <h3 class="text-sm font-semibold text-gray-700 mb-3">Kampanyalar</h3>
    <carousel :settings="settings" :items-to-show="1.5" :autoplay="3000" :wrap-around="true" class="-mx-2">
    <Slide v-for="(camp) in campaign" :key="camp.id">
      <div class=" justify-center items-center px-2">
        <img class="object-cover rounded" :src="camp.image" />
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
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
      }
    }
  }
}
</script>

<style>

</style>