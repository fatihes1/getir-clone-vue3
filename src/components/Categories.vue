<template>
  <div class="bg-white py-4">
    <div class="container mx-auto">
      <h3 class="text-sm font-semibold text-gray-700 mb-3 pl-6 md:pl-0">Kategoriler</h3>
      <div class="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-10">
        <div class="px-3" v-for="category in categoryData" :key="category.id">
          <Category :category=category />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryData from '@/api/categories.json'
import Category from './ui/Category.vue';

export default {
  components : {
    Category
  },
  data () {
    return {
      categoryData,
    }
  }
}
</script>

<style>

</style>