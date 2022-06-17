<template>
  <article id="profile-tile" class="tile work-profile scrollNav">
    <img src="@/assets/image/profile.jpg" alt="카메라를 들고 바다를 찍고 있는 여성" class="profile-image">
  </article>
  <article 
    v-for="page, index in gallery.data"
    :key="`gallery-${index}`"
    :id="index == 0 ? 'work-tile' : ''"
    class="tile tile-work"
    :class="{'scrollNav': index == 0,}"
  >
    <img 
      :src="page.cover.file.url" alt="cover image" class="instagram-image"
      @load="index == 1 ? $emit('loaded') : ''"
    >
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "workTiles",
  data() {
    return {
      instagram: {
        data: [],
      },
      gallery: {
        data: [],
      }
    }
  },
  emits: [
    "loaded"
  ],
  methods: {
    // getInstagram() {
    //   const user_id = this.$store.state.instagram_user_id;
    //   const access_token = this.$store.state.instagram_long_lived_access_token;

    //   axios.get("https://graph.instagram.com/" + user_id + "/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption,timestamp&access_token=" + access_token)
    //   .then((repsonse) => {
    //     const instagram = this.instagram;
    //     instagram.data = repsonse.data.data;

    //     this.$store.commit("assignTooltipTargets");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // },
    getNotionGallery() {
      const GALLERY_TOKEN = "914c534dd5514aac9c296bc057362f4d";
      const ACCESS_KEY = "secret_QEaI6MPUF0jvojsltXj9lCmCcjfJznR1xwIUURiubXc"

      const options = {
        method: "POST",
        url: `https://corsproxy.io/?https://api.notion.com/v1/databases/${GALLERY_TOKEN}/query`,
        headers: {
          Accept: "application/json",
          "Notion-Version": "2022-02-22",
          Authorization: `Bearer ${ACCESS_KEY}`,
        },
        data: {page_size: 10}
      };
      
      axios.request(options).then((response) => {
        this.trimGalleryData(response.data.results);
      }).catch(function(error) {
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
      console.log("work response", trim);
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

  @for $i from 1 to 30 {
    &:nth-child(#{$i}) {
      grid-area: (work + $i) ;
    }
  }

  &:hover {
    overflow: visible;
    
    .instagram-image {
      @include tile(3, 2);

      display: block;
      max-width: unset;
      border-radius: 24px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease;
    }
  }

  .instagram-image {
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