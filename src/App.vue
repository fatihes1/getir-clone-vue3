<template>
  <main>
    <Header />
    <HeroSection />
    <Categories />
    <Campaigns />
    <Favorites />
    <MobileApp />
    <Cards />
    <Footer />
    
  </main>
</template>

<script>
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
    Footer
  }

}

</script>

<style>

</style>