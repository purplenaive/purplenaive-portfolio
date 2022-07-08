<template v-show="gallery.show">
  <article id="profile-tile" class="tile work-profile scrollNav">
    <img src="@/assets/image/profile.jpg" alt="카메라를 들고 바다를 찍고 있는 여성" class="profile-image">
  </article>
</template>

<script>
export default {
  name: "workTiles",
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
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tile {
  @include glassmorphism($padding: false);

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