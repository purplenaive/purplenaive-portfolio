<template>
  <noise-filter></noise-filter>
 
  <router-view/>

  <tooltip :target="tooltip_targets"></tooltip>
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
  computed: {
    tooltip_targets() {
      return this.$store.getters.getTooltipTargets;
    },
  },
  methods: {
  },
  mounted() {
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
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: auto;
  height: 100%;
  font-family: "pretendard";
}
</style>
