<template>
  <noise-background></noise-background>
  <main id="main">
    <nav class="main-nav">
      <a href="/" class="nav__item resume">이력서</a>
      <a href="/" class="nav__item project">프로젝트</a>
      <a href="/" class="nav__item work">개인작업</a>
      <a href="/" class="nav__item contact">contact me</a>
    </nav>
    <section class="main__content">
      <resume-tiles></resume-tiles>
    </section>
  </main>
</template>

<script>
import ResumeTiles from './components/resumeTiles.vue'
import noiseBackground from './components/background.vue'
export default {
  name: 'App',
  components: {
    ResumeTiles, noiseBackground
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/global.scss";

html, body {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0;
  margin: 0;
}
#app {
  @include flex(column, nowrap, center, flex-start);

  width: 100%;
  height: 100%;
  padding-left: 200px;
}
.main__content {
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 200px);
  grid-auto-rows: 1fr;
  grid-template-areas:  
  "memoji memoji license career"
  "tools introduce introduce career"
  "tools introduce introduce career"
  ;
  gap: 16px;
  margin: 32px 0;
}

</style>
