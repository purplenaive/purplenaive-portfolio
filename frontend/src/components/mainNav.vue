<template>
  <nav class="main-nav">
    <a
      v-for="nv in nav_list"
      :key="`nav-${nv.name}`"
      :href="nv.path"
      class="nav__item"
      :class="`${nv.name} ${nv.name == 'contact' ? 'nav--active': ''}`"
      @click.prevent="moveToAnchor(nv.path)"
    >{{nv.title}}</a>
  </nav>
</template>

<script>
export default {
  name: "mainNav",
  data() {
    return {
      nav_list: [
        {
          title: "이력서",
          name: "resume",
          path: "#resume-tile"
        },
        {
          title: "프로젝트",
          name: "project",
          path: "#profile-tile"
        },
        {
          title: "개인작업",
          name: "work",
          path: "#work-tile"
        },
        {
          title: "contact me",
          name: "contact",
          path: "#contact"
        },
      ],
    }
  },
  methods: {
    moveToAnchor(path) {
      if(path == "#contact") return;

      const target = document.querySelector(path);
      const pos = target.getBoundingClientRect();
      
      document.documentElement.scrollLeft += pos.left;
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

.main-nav {
  position: sticky;
  left: 80px;
  z-index: 1;

  .nav__item {
    display: inline-block;
    box-sizing: border-box;
    padding: 8px 16px;
    margin-right: 4px;
    border: 1px solid transparent;
    transition: all 0.3s ease;

    &.nav--active,
    &:not(.contact):hover {
      border-radius: 20px;
      border: 1px solid rgba(white, 0.6);
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px 0 rgba($black, 0.25);
      background-color: rgba(white, 0.6);
    }
  }
  .contact {
    color: $font-gray;
    font-style: italic;
  }
}

</style>