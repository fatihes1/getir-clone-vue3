<template>
  <div class="bg-white mt-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-4 pt-10">
        <section>
          <nav class="grid gap-y-4">
            <h6 class="text-lg text-primary-brand-color">
              Getir'i indirin!
            </h6>
            <a href="">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="">
            </a>
            <a href="">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="">
            </a>
            <a href="">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="">
            </a>
          </nav>
        </section>
        <section v-for="data in menuData" :key="data.id">
          <Menu :menuData=data />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './ui/Menu.vue';
import menuData from '@/api/footer-menu.json'
export default {
  components : {
    Menu
  },
  data () {
    return {
      menuData
    }
  }
}
</script>

<style>

</style>