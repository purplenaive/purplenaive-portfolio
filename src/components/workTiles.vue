<template>
  <article id="profile-tile" class="tile work-profile scrollNav">
    <img src="@/assets/image/profile.jpg" alt="카메라를 들고 바다를 찍고 있는 여성" class="profile-image">
  </article>
  <article 
    v-for="insta, index in instagram.data.slice(0, 8)"
    :key="`instagram-${insta.id}`"
    :id="index == 0 ? 'work-tile' : ''"
    class="tile tile-work"
    :class="{'scrollNav': index == 0,}"
  >
    <img 
      :src="insta.media_url" alt="instagram image" class="instagram-image"
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
      }
    }
  },
  emits: [
    "loaded"
  ],
  methods: {
    getInstagram() {
      const user_id = this.$store.state.instagram_user_id;
      const access_token = this.$store.state.instagram_long_lived_access_token;

      axios.get("https://graph.instagram.com/" + user_id + "/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption,timestamp&access_token=" + access_token)
      .then((repsonse) => {
        const instagram = this.instagram;
        instagram.data = repsonse.data.data;

        this.$store.commit("assignTooltipTargets");
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getInstagram();
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
  &:nth-child(25) {
    @include tile(1, 2);
  }

  @for $i from 1 to 30 {
    &:nth-child(#{$i}) {
      grid-area: (work + $i) ;
    }
  }

  &:hover {
    overflow: visible;
    
    .instagram-image {
      @include tile(3, 2);

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