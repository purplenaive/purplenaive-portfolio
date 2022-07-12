<template v-show="gallery.show">
  <section class="section section-note">
    <div id="note-tile" class="tile-title">
      <h2 class="title__text">공부 노트</h2>
      <a class="view-all-list" href="https://www.notion.so/purplenaive/d1619275de714a158cc8d90bef99ddb4?v=83e98783aabf4d8bb7a2e36cef5a7829" target="_blank">
        <span class="button__text">글 전체 목록</span>
        <span class="icon-wrapper">
          <i class="icon hamburger-thin"></i>
        </span>
      </a>
    </div>
  
    <article class="tile work-profile">
      <img src="@/assets/image/profile.jpg" alt="카메라를 들고 바다를 찍고 있는 여성" class="profile-image">
    </article>
    <article 
      v-for="note, index in note.data"
      :key="`note-${index}`"
      class="tile tile-note"
      :class="note.emphasis ? 'tile--red' : ''"
    >
      <a :href="note.url" class="note__router" target="_blank">
        <i class="icon note__icon note"></i>
        <h3 class="note__title">{{note.title}}</h3>
        <p class="note__summary">{{note.summary}}</p>
      </a>
    </article>
  </section>
</template>

<script>
export default {
  name: "noteTiles",
  data() {
    return {
      note: {
        show: false,
        data: [],
      }
    }
  },
  methods: {
    getNotionNote() {
      this.$http.get("/api/note")
        .then(response => {
          this.trimNoteData(response.data);
        })
        .catch(error => {
          console.log("notion note gets error :", error);
        })
    },
    trimNoteData(data) {
      const trim_data = data.map(function(value) {
        const summary = value.properties["개요"].rich_text;

        return {
          title: value.properties["제목"].title[0].plain_text,
          summary: summary.length ? summary[0].plain_text : '',
          emphasis: value.properties["중요도"].checkbox,
          url: value.url,
        }
      });

      this.note.data = trim_data;
    },
  },
  mounted() {
    this.getNotionNote();
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

.tile-note {
  @include tile(1, 1);

  &.tile--red {
    background-color: lighten($tile-yellow, 15);
  }

  .note__router {
    @include flex(false, column, nowrap, center, center);

    width: 100%;
    height: 100%;
  }
  .note__icon {
    margin-bottom: 12px;
  }
  .note__title {
    width: 80%;
    font-size: $font-regular;
    text-align: center;
    margin-bottom: 8px;
  }
  .note__summary {
    width: 80%;
    font-size: $font-small;
    color: $font-gray;
    text-align: center;
  }
}
</style>