<template>
  <noise-filter></noise-filter>
 
  <router-view/>

  <tooltip></tooltip>
</template>

<script>
import noiseFilter from '@/components/noise.vue'
import tooltip from "@/components/tooltip.vue";

export default {
  name: 'App',
  components: {
    noiseFilter, tooltip
  },
  data() {
    return {
    };
  }, 
  methods: {
  },
  mounted() {
  },
}
</script>

<style lang="scss">
@import "~@/assets/css/global.scss";

html {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
body {
  min-width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: auto;
  height: 100%;
}
</style>
