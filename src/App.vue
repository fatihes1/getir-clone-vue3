<template>
  <main>
    <Header />
    <Campaigns v-if="windowWidth <= 768" />
    <HeroSection />
    <Categories />
    <Campaigns v-if="windowWidth > 768" />
    <Favorites />
    <MobileApp />
    <Cards />
    <Footer />
    
  </main>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
// import Header from '@/components/Header';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import Categories from './components/Categories.vue';
import Campaigns from './components/Campaigns.vue';
import Favorites from './components/Favorites.vue';
import MobileApp from './components/MobileApp.vue';
import Cards from './components/Cards.vue';
import Footer from './components/Footer.vue';

export default {
  components : {
    Header,
    HeroSection,
    Categories,
    Campaigns,
    Favorites,
    MobileApp,
    Cards,
    Footer,
  },
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      // console.log('New width : ' + newWidth)
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  methods: {  
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }

}

</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>