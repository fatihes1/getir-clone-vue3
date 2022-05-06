<template>
  <nav class="grid gap-y-3">
      <h6 class="text-lg text-brand-color">{{ data.title }}</h6>
      <nav>
          <ul class="grid gap-y-3">
              <li v-for="item in data.items" :key="item">
                  <a class="text-sm font-thin text-gray-600 hover:text-primary-brand-color/90" :href=item.url>{{ item.subTitle }}</a>
              </li>
          </ul>
      </nav>
  </nav>
</template>

<script>

export default {
    props : ['data']
}
</script>

<style>

</style>