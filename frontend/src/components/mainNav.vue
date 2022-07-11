<template>
  <header class="main-header">
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
</template>

<script>
export default {
  name: "mainNav",
  data() {
    return {
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
      
      this.$copyText(text).then(function(e) {
        console.log("copied", text);
      }, function(e) {
        console.log(e);
      })
    }
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
}

.nav {
  @include glassmorphism($tilt: false);
  @include flex(false, column, nowrap, flex-start, center);

  padding: 12px 0 !important;

  .nav__item {
    @include flex(true, column, nowrap, center, center);

    width: 60px;
    height: 60px;
    padding: 6px;
    position: relative;

    &:hover {

      .nav__text {
        max-width: 100px;
        transition: max-width 0.3s linear;
      }
    }

    .icon {
      @include icon-custom(32);
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
    }
  }
}

</style>