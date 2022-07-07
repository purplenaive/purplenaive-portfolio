<template v-show="project.show">
  <article 
    v-for="project in project.data"
    :key="`project-${project.id}`"
    class="tile tile-project"
    :class="`tile-${project.name}`"
  >
    <h3 class="project__title">
      <ul class="project-tag">
        <li 
          v-for="tag, index in project.tags"
          :key="`tag-${project.id}-${index}`"
          class="tag__item"
        >#{{tag}}</li>
      </ul>
      {{project.sub_title}}
    </h3>
    <p 
      v-if="project.logo" 
      class="project__thumbnail"
    >
      <img :src="`/image/project/${project.name}.png`" :alt="project.name + 'logo'">
    </p>
    <div class="tile__content">
      <p class="detail-info period">
        {{project.date.start}}
        <template v-if="project.date.end !== ''"> ~ {{project.date.end}}</template>
        <template v-if="project.date.end == ''"> ~ 진행 중</template>
      </p>
      <p class="detail-info tools">
        <i 
          v-for="tool in project.tools"
          :key="`tool-${tool}`"
          class="icon tooltipBox"
          :class="`${tool}-outline`"
          :data-tooltip="tool"
        ></i>
      </p>
      <p class="detail-info link-buttons">
        <button 
          class="button button-git"
          :disabled="project.link.git == ''"
        >
          <a :href="project.link.git" target="_blank">
            <i 
              class="icon git-fab tooltipBox"
              :data-tt-title="project.link.git != '' ? '' : '링크 비활성화'"
              data-tooltip="프로젝트 깃 페이지로 이동합니다"
            ></i>
          </a>
        </button>
        <button 
          class="button button-detail"
        >
          <a :href="project.link.url" target="_blank">
            <i 
              class="icon page-fab tooltipBox"
              data-tooltip="프로젝트 상세 설명 페이지로 이동합니다"
            ></i>
          </a>
        </button>
        <button class="button button-page">
          <a :href="project.link.page" target="_blank">
            페이지
          </a>
        </button>
      </p>
    </div>
    <span class="project-mini-title">{{project.title}}</span>
  </article>
</template>

<script>
export default {
  name: "projectTiles",
  data() {
    return {
      project: {
        show: false,
        data: [],
        trimed: [],
      }
    }
  },
  methods: {
    // 노션에서 데이터 가져오기
    getNotionProject() {
      this.$http.get("/api/project")
        .then(response => {
          this.trimProjectData(response.data);
        }).catch(error => {
          console.log(error);
        })
    },
    // 가져온 데이터 가공
    trimProjectData(data) {
      const trim = data.map(function(value) {
        const date_start = value.properties["작업 날짜"].date.start;
        const date_end = value.properties["작업 날짜"].date.end;

        return {
          id: value.id,
          title: value.properties["이름"].title[0].plain_text,
          sub_title: value.properties["title"].rich_text[0].plain_text,
          link: {
            url: value.url,
            page: value.properties["페이지"].url,
            git: value.properties["Git"].url,
          },
          name: value.properties["name"].rich_text[0].plain_text,
          date: {
            start: date_start ? date_start.replaceAll("-", '.').substr(2) : "",
            end: date_end ? date_end.replaceAll("-", ".").substr(2) : "",
            period: value.properties["작업 기간"].rich_text[0].plain_text,
          },
          logo: value.properties["로고"].checkbox,
          description: value.properties["간단 설명"].rich_text[0].plain_text,
          tools: value.properties["사용 툴"].multi_select.map(v => v.name),
          colors: value.properties["색상"].multi_select.map(v => v.name),
          tags: value.properties["태그"].multi_select.map(v => v.name),
        }
      });
      this.project.data = trim;

      this.$nextTick(() => {
        this.$store.dispatch("tooltip/activeTooltips");
        this.project.show = true;
      })
    },
  },
  mounted() {
    this.getNotionProject();
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tile {
  @include glassmorphism($padding: false);
  @include flex(false, column, nowrap, space-between, center);

  padding: 24px;
  box-sizing: border-box;
  position: relative;

  &:hover {
    
    .project__thumbnail {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .tile__content {
      opacity: 1;
    }
  }

  .project__title {
    @include flex(false, column, nowrap, flex-start, center);

    margin: 0;
    font-size: $font-regular;
    font-weight: 600;
  }
  .project-tag {
    @include flex(false, row, nowrap, center, center);

    margin-bottom: 6px;

    .tag__item {
      font-size: 13px;
      color: $font-gray;
      margin-right: 4px;
      font-weight: 400;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  .project__thumbnail {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: opacity 0.3s ease;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;

    img {
      display: block;
      max-width: unset;
    }
  }
  .tile__content {
    @include flex(false, column, nowrap, center, center);

    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .detail-info {
    font-size: $font-small;
    color: $font-gray;

    &.tools {
      @include flex(false, row, nowrap, center, center);

      margin-top: 4px;
    }
    &.link-buttons {
      @include flex(false, row, nowrap, center, center);

      margin-top: 12px;

      .button {
        height: 26px;
        margin-right: 8px;
        font-weight: 600;
        cursor: pointer;
        background-color: transparent;

        &:last-child { margin-right: 0; }

        > a {
          display: block;
        }
      }
      .button-page {
        border-radius: 20px;
        background-color: $black;

        a {
          display: block;
          padding: 0 12px;
          font-size: $font-small;
          font-family: $ptd !important;
          color: white;
        }
      }
    }
  }
  .project-mini-title {
    font-size: $font-xs;
    font-weight: 400;
    color: $font-gray;
    margin-bottom: 4px;
  }
}


$tile-setting: (
  ( "name": kinderfest, "size": (1, 2), "color": $tile-red, ),
  ( "name": barofactory, "size": (1, 2), "color": $tile-blue, ),
  ( "name": barohome, "size": (2, 1), "color": "", ),
  ( "name": yhsbearing, "size": (1, 1), "color": "", ),
  ( "name": umc, "size": (1, 2), "color": "", ),
  ( "name": portfolio, "size": (2, 1), "color": $tile-purple, ),
  ( "name": pd04, "size": (1, 2), "color": $tile-yellow, ),
  ( "name": paik, "size": (1, 1), "color": "", ),
  ( "name": elle, "size": (1, 2), "color": "", ),
  ( "name": cafe24, "size": (1, 2), "color": $tile-red, ),
  ( "name": yg-stage, "size": (1, 1), "color": "", ),
  ( "name": shinhan, "size": (1, 1), "color": "", ),
  ( "name": xiaomi, "size": (1, 1), "color": "", ),
  ( "name": maeil, "size": (1, 1), "color": $tile-blue, ),
);

@each $tile in $tile-setting {
  $name: map-get($tile, "name");
  $size: map-get($tile, "size");
  $width: nth($size, 1);
  $height: nth($size, 2);
  $color: map-get($tile, "color");

  .tile-#{$name} {
    @include tile($width, $height);

    grid-area: $name;
    background-color: if($color, $color, inherit);
  }
}

.tile-portfolio {

  .project__thumbnail {
    padding-top: 25px;
  }
}
.tile-maeil {

  .project__thumbnail {
    margin: 15px 0 0 -10px;
  }
}
</style>