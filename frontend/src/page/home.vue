<template>

  <div id="home">
    <main-nav></main-nav>

    <main id="main">
      <section class="main__content">
        <resume-tiles></resume-tiles>
        <project-tiles></project-tiles>
        <work-tiles></work-tiles>
      </section>
    </main>

    <main-aside></main-aside>

    <main-footer></main-footer>

    <color-background></color-background>
  </div>

</template>

<script>
import colorBackground from "@/components/background.vue"
import mainNav from "@/components/mainNav.vue";
import mainAside from "@/components/mainAside.vue";
import mainFooter from "@/components/footer.vue";
import resumeTiles from "@/components/resumeTiles.vue";
import projectTiles from "@/components/projectTiles.vue";
import workTiles from "@/components/workTiles.vue";

export default {
  name: 'mainHome',
  components: {
    colorBackground, mainNav, mainAside, mainFooter, resumeTiles, projectTiles, workTiles,
  },
  data() {
    return {
    };
  }, 
  methods: {
    changeScrollDirection(event) {
      event.preventDefault();
      document.documentElement.scrollLeft += event.deltaY;
    },
  },
  mounted() {
    window.addEventListener("wheel", this.changeScrollDirection, {passive: false});
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

#home {
  @include flex(true, column, nowrap, center, flex-start);

  width: auto;
  height: 100%;
  padding: 0 400px 0 200px;
  margin-right: 200px;
  box-sizing: content-box;
  position: relative;
  z-index: 0;
}

#main {
  width: auto;
}

.main__content {
  display: grid;
  gap: 16px;
  margin: 32px 0;
  position: relative;
  z-index: 1;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 200px);
  grid-auto-flow: column dense;

  $resume-template-1: "memoji  memoji     license    career";
  $resume-template-2: "tools   introduce  introduce  career";
  $resume-template-3: "tools   introduce  introduce  career";

  $project-template-1: "kinderfest    barofactory   barohome  barohome    pd04       paik  cafe24    xiaomi";
  $project-template-2: "kinderfest    barofactory   umc       yhsbearing  pd04       elle  cafe24    shinhan";
  $project-template-3: "work-profile  work-profile  umc       portfolio   portfolio  elle  yg-stage  maeil";
  
  $work-template-1: "work19  work19  work20  work25";
  $work-template-2: "work22  work21  work21  work25";
  $work-template-3: "work23  work23  work24  work26";

  grid-template-areas:  
  "#{$resume-template-1} #{$project-template-1} #{$work-template-1}"
  "#{$resume-template-2} #{$project-template-2} #{$work-template-2}"
  "#{$resume-template-3} #{$project-template-3} #{$work-template-3}"
  ;
}

</style>
