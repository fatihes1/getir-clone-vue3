<template>
  <div class="bg-white mt-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-4 pt-10">
        <section>
          <nav class="grid gap-y-4">
            <h6 class="text-lg text-primary-brand-color">
              Getir'i indirin!
            </h6>
            <a href="https://itunes.apple.com/app/id995280265" class="transition-all transform hover:scale-105">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="">
            </a>
            <a href="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" class="transition-all transform hover:scale-105">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="">
            </a>
            <a href="https://appgallery7.huawei.com/#/app/C100954039" class="transition-all transform hover:scale-105">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="">
            </a>
          </nav>
        </section>
        <section v-for="data in menuData" :key="data.id">
          <Menu :data=data  />
        </section>
      </div>
      <div class="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
        <div class="text-xs text-gray-700 flex gap-x-3">
          <span>&copy; 2022 Getir</span>
          <span>•</span>
          <a class="text-primary-brand-color hover:underline" href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806">Bilgi Toplumu Hizmetleri</a>
        </div>
        <nav class="flex gap-x-3">
          <a href="https://www.facebook.com/getir" class="w-9 h-9 text-gray-500 rounded-lg hover:bg-primary-brand-color/20 flex items-center justify-center group transition-colors">
            <svg class="fill-current group-hover:text-primary-brand-color" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
          </a>
          <a href="https://twitter.com/getir" class="w-9 h-9 text-gray-500 rounded-lg hover:bg-primary-brand-color/20 flex items-center justify-center group transition-colors">
            <svg class="fill-current group-hover:text-primary-brand-color" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
          </a>
          <a href="https://www.instagram.com/getir/" class="w-9 h-9 text-gray-500 rounded-lg hover:bg-primary-brand-color/20 flex items-center justify-center group transition-colors">
            <svg class="fill-current group-hover:text-primary-brand-color" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
          </a>
          <a href="" class="border h-9 text-sm border-gray-200 text-gray-500 rounded-lg px-2 py-1 flex justify-center items-center hover:bg-primary-brand-color/20 hover:text-primary-brand-color transition-colors hover:border-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" class="fill-current"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
            Türkçe (TR)
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from '@/api/footer-menu.json'
import Menu from './ui/Menu.vue';
export default {
  components : {
    Menu
  },
  data () {
    return {
      menuData,
    }
  }
}
</script>

<style>

</style>