<template>
  <div class="grid grid-cols-3 gap-x-4 container mx-auto mt-14">
    <div v-for="card in cardData" :key="card.id" class="bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center">
      <Card :cardData=card />
    </div>
  </div>
</template>

<script>
import cardData from '@/api/cards.json'; 
import Card from './ui/Card.vue'; 
export default {
  components : {
      Card
    },
  data () {
    return {
      cardData,
    }
  }

}
</script>

<style>

</style>