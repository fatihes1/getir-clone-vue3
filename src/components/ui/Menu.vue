<template>
  <nav  class="gap-y-3">
      <nav v-if="windowWidth <= 768">
            <vue-collapsible-panel-group accordion base-color="#ffffff">
                <ul class="grid gap-y-1 md:gap-y-2">
                  <vue-collapsible-panel :expanded="false">
                    <template #title>
                        <h6 class="text-lg text-brand-color">{{ data.title }}</h6>
                    </template>
                    <template #content>
                        <li v-for="item in data.items" :key="item">
                          <a class="text-sm font-thin text-gray-600 hover:text-primary-brand-color/90" :href=item.url>{{ item.subTitle }}</a>
                        </li>
                    </template>
                  </vue-collapsible-panel>
                </ul>
            </vue-collapsible-panel-group>
      </nav>
      <nav v-else>
          <h6 class="text-lg text-brand-color">{{ data.title }}</h6>
          <ul class="grid gap-y-1 md:gap-y-2">
              <li v-for="item in data.items" :key="item">
                <a class="text-sm font-thin text-gray-600 hover:text-primary-brand-color/90" :href=item.url>{{ item.subTitle }}</a>
              </li>
          </ul>
      </nav>
  </nav>
</template>

<script>
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
export default {
    props : ['data'],
    components : {
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel
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

</style>