<template v-show="gallery.show">
  <section class="section section-note">
    <div id="note-tile" class="tile-title">
      <h2 class="title__text">공부 노트</h2>
      <a class="view-all-list">
        <span class="button__text">글 전체 목록</span>
        <span class="icon-wrapper">
          <i class="icon hamburger-thin"></i>
        </span>
      </a>
    </div>
  
    <article class="tile work-profile scrollNav">
      <img src="@/assets/image/profile.jpg" alt="카메라를 들고 바다를 찍고 있는 여성" class="profile-image">
    </article>
  </section>
</template>

<script>
export default {
  name: "noteTiles",
  data() {
    return {
      gallery: {
        show: false,
        data: [],
      }
    }
  },
  methods: {
  },
  mounted() {

    this.$http.get("/api/note")
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.section-note {
  grid-template-areas: 
    "note-title     note-title     note-title     note-title     note-title"
    "work-profile   work-profile   .              .              ."
  ;
}

.tile-title {
  grid-area: note-title;
}

.tile {
  @include glassmorphism($padding: false, $tilt: false);

  position: relative;
}
.work-profile {
  @include tile(2, 1);

  grid-area: work-profile;

  .profile-image {
    display: block;
    width: 100%;
    height: auto;
    margin-top: -160px;
  }
}
</style>