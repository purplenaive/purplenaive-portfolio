<template v-show="gallery.show">
  <article id="profile-tile" class="tile work-profile scrollNav">
    <img src="@/assets/image/profile.jpg" alt="카메라를 들고 바다를 찍고 있는 여성" class="profile-image">
  </article>
  <article 
    v-for="page, index in gallery.data"
    :key="`gallery-${index}`"
    :id="index == 0 ? 'work-tile' : ''"
    class="tile tile-work"
    :grid-area="'work' + index"
  >
    <img :src="page.cover.file.url" alt="gallery image" class="cover-image">
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
    getNotionGallery() {

      this.$http.get("/api/work")
        .then(response => {
          this.trimGalleryData(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    trimGalleryData(data) {
      const trim = data.map(function(value) {
        return {
          title: value.properties["이름"].title[0].plain_text,
          cover: value.cover,
          url: value.url,
        };
      });
      this.gallery.data = trim;

      this.$nextTick(() => {
        this.gallery.show = true;
      })
    },
  },
  mounted() {
    this.getNotionGallery();
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tile {
  @include glassmorphism($padding: false);

  position: relative;
}
.tile-work {
  transition: width 0.3s ease, height 0.3s ease;

  &:nth-child(odd) {
    @include tile(2, 1);
  }
  &:nth-child(even) {
    @include tile(1, 1);
  }

  // &:nth-child(25) {
  //   @include tile(1, 2);
  // }

  // @for $i from 1 to 30 {
  //   &:nth-child(#{$i}) {
  //     grid-area: (work + $i) ;

  //     &::after {
  //       content: "work #{$i}";
  //     }
  //   }
  // }

  &:hover {
    overflow: visible;
    
    .cover-image {
      display: block;
      width: 120%;
      height: auto;
      max-width: unset;
      min-width: 420px;
      border-radius: 24px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease;
    }
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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