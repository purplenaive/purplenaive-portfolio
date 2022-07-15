<template>
  <header 
    id="main-header"
    class="main-header"
    :class="{
      'header--active': nav_active, 
    }"
  >
    <nav class="nav main-nav">
      <a
        v-for="nv in nav_list"
        :key="`nav-${nv.name}`"
        :href="nv.path"
        class="nav__item"
        :class="`${nv.name}`"
        @click.prevent="moveToAnchor(nv.path)"
      >
        <i class="icon" :class="nv.icon"></i>
        <span class="nav__text">{{nv.title}}</span>
      </a>
    </nav>
    <nav class="nav link-nav">
      <a
        v-for="link in link_list"
        :key="`nav-${link.name}`"
        :href="link.path"
        class="nav__item"
        :class="`${link.name}`"
        @click="copyText(link.text)"
      >
        <i class="icon" :class="link.icon"></i>
        <span class="nav__text">{{link.title}}</span>
      </a>
    </nav>
  </header>
  <button class="tablet-toggle-menu-button" @click="toggleTabletHeader">
    <i v-if="!nav_active" class="icon hamburger-thin"></i>
    <i v-else class="icon close-thin"></i>
  </button>
  <toast-message></toast-message>
</template>

<script>
import toastMessage from "@/components/toastMessage.vue";

export default {
  name: "mainNav",
  components: {
    toastMessage
  },
  data() {
    return {
      nav_active: false,
      nav_list: [
        {
          title: "자기소개",
          name: "resume",
          icon: "resume",
          path: "#resume-tile"
        },
        {
          title: "프로젝트",
          name: "project",
          icon: "tool",
          path: "#project-tile"
        },
        {
          title: "공부 노트",
          name: "work",
          icon: "calendar",
          path: "#note-tile"
        },
        {
          title: "contact",
          name: "contact",
          icon: "call",
          path: "#contact"
        },
      ],
      link_list: [
        {
          title: "이력서",
          name: "resume",
          icon: "paper-fab",
          path: "",
          text: "",
        },
        {
          title: "연락처",
          name: "call",
          icon: "call-fab",
          path: "tel:01084353663",
          text: "01084353663",
        },
        {
          title: "이메일",
          name: "email",
          icon: "mail-fab",
          path: "mailto:purplenaive@gmail.com",
          text: "purplenaive@gmail.com",
        },
      ],
    }
  },
  methods: {
    moveToAnchor(path) {
      if(path == "#contact") return;

      const target = document.querySelector(path);
      const pos = target.getBoundingClientRect();
      
      document.documentElement.scrollTop += pos.top;
    },
    copyText(text) {
      if(text == '') return;
      
      this.$copyText(text).then(() => {
        this.callToast(text + "이(가) 복사 되었습니다");
      }, function(e) {
        console.log(e);
      })

    },
    callToast(text) {
      this.$store.dispatch("activeToast", {text});
    },
    toggleTabletHeader() {
      const nav = document.getElementById("main-header");

      this.nav_active = !this.nav_active;
    },
  },
}
</script>

<style lang="scss" scoped>

.main-header {
  @include flex(flase, column, nowrap, flex-start, center);

  gap: 16px;
  position: sticky;
  top: 80px;
  z-index: 1;


  @include responsive-768 {
    @include glassmorphism($padding: false, $tilt: false);

    width: 50%;
    min-width: 320px;
    max-width: 450px;
    height: 100%;
    padding: 68px 24px 16px;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(120%, 0);
    transition: all 0.3s linear;
    background-color: rgba(white, 0.8);
    border-radius: 24px 0 0 24px;

    &.header--active {
      transform: translate(0, 0);
      transition: all 0.3s linear;
    }
  }
  @include responsive-375 {
    width: 100%;
    min-width: unset;
  }
}

.tablet-toggle-menu-button {
  display: none;
  cursor: pointer;
  position: fixed;
  top: 16px;
  right: 12px;
  z-index: 12;

  @include responsive-768 {
    @include flex(true, row, nowrap, flex-end, center);

    align-self: flex-end;
    padding: 8px 12px;
    background-color: transparent;
  }

  .icon {
    @include icon-custom(32);
  }
}

.nav {
  @include flex(false, column, nowrap, flex-start, center);

  padding: 12px 0 !important;

  @media all and (min-width: 768px) {
    @include glassmorphism($tilt: false);
  }
  @include responsive-768 {
    width: 100%;
  }

  .nav__item {
    @include flex(true, column, nowrap, center, center);

    width: 60px;
    height: 60px;
    padding: 6px;
    position: relative;

    @include responsive-768 {
      @include flex(false, row, nowrap, flex-start, center);

      width: 100%;
    }

    &:hover {

      .nav__text {
        max-width: 100px;
        transition: max-width 0.3s linear;

        @include responsive-768 {
          max-width: unset;
          transition: unset;
        }
      }
    }

    .icon {
      @include icon-custom(32);

      @include responsive-768 {
        @include icon-custom(28);

        margin-right: 12px;
      }
    }
    .nav__text {
      display: inline-block;
      max-width: 0;
      overflow: hidden;
      padding: 8px 0 0;
      white-space: nowrap;
      font-size: $font-small;
      transition: all 0.3s linear;
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translate(-50%, 0);

      @include responsive-768 {
        max-width: unset;
        font-size: $font-regular;
        padding: 0;
        position: static;
        left: unset;
        bottom: unset;
        transform: unset;
      }
    }
  }
}

.main-nav {
  
  @include responsive-768 {
    padding-top: 0 !important;
  }
}

</style>