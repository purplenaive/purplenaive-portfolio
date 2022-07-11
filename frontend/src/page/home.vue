<template>

  <main id="main">
    <section class="main__content">
      <resume-tiles></resume-tiles>
      <project-tiles></project-tiles>
      <note-tiles></note-tiles>
    </section>
  </main>

  <main-nav></main-nav>

  <div class="background-image"></div>
  <main-footer></main-footer>

</template>

<script>
import mainNav from "@/components/mainNav.vue";
import mainFooter from "@/components/footer.vue";
import resumeTiles from "@/components/resumeTiles.vue";
import projectTiles from "@/components/projectTiles.vue";
import noteTiles from "@/components/noteTiles.vue";

export default {
  name: 'mainHome',
  components: {
    mainNav, mainFooter, resumeTiles, projectTiles, noteTiles,
  },
  data() {
    return {
    };
  }, 
}
</script>

<style lang="scss" scoped>
#main {
  width: auto;
}

.main__content {
  @include flex(false, column, nowrap, flex-start, center);
  
  position: relative;
  gap: 16px;
  z-index: 1;
}

</style>
