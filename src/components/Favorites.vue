<template>
  <div class="px-2 md:container mx-auto mt-6">
    <h3 class="text-sm font-semibold text-gray-700 mb-3 pl-6 md:pl-0">Favoriler</h3>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
      <div class="bg-white" v-for="product in productData" :key="product.id">
        <Product :product=product />
      </div>
    </div>
  </div>
</template>

<script>
import productData from '@/api/products.json'
import Product from './ui/Product.vue';
export default {
  components : {
    Product
  },
  data () {
    return {
      productData,
    }
  }
}
</script>

<style>

</style>