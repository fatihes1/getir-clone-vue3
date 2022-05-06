<template>
  <div class="container mx-auto mt-6">
    <h3 class="text-sm font-semibold text-gray-700 mb-3">Favoriler</h3>
    <div class="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
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