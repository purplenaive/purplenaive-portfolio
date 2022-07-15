<template>

  <main id="main">
    <section class="main__content">
      <resume-tiles></resume-tiles>
      <project-tiles></project-tiles>
      <note-tiles></note-tiles>
    </section>
  </main>

  <main-nav></main-nav>
  <main-footer></main-footer>

  <div class="background-image"></div>
  <loading-spinner></loading-spinner>

</template>

<script>
import mainNav from "@/components/mainNav.vue";
import mainFooter from "@/components/footer.vue";
import resumeTiles from "@/components/resumeTiles.vue";
import projectTiles from "@/components/projectTiles.vue";
import noteTiles from "@/components/noteTiles.vue";
import loadingSpinner from "@/components/loadingSpinner.vue"

export default {
  name: 'mainHome',
  components: {
    mainNav, mainFooter, resumeTiles, projectTiles, noteTiles, loadingSpinner,
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

    @include responsive-768 {
      padding: 0 24px;
    }
  }

</style>
