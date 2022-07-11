<template>
 
  <router-view/>

  <tooltip :active="$store.state.tooltip.active"></tooltip>
</template>

<script>
import tooltip from "@/components/tooltip.vue";

export default {
  name: 'App',
  components: {
    tooltip
  },
}
</script>

<style lang="scss">

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
  min-height: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Pretendard" !important;
}
</style>
