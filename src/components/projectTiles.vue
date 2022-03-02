<template v-if="project.show">
  <article 
    v-for="project, index in project.trimed"
    :key="`project-${project.id}`"
    class="tile tile-project"
    :class="`tile-${project.name}`"
  >
    <h3 class="project__title">
      <span class="project-index">{{index < 10 ? "0" + index: index}}-{{project.id}}</span>
      {{project.title}}
    </h3>
    <p 
      v-if="project.image != ''" 
      class="project__thumbnail"
    >
      <img :src="`/image/project/${project.image}.png`" alt="">
    </p>
    <div class="tile__content">
      <p class="detail-info period">{{project.period.start}} ~ {{project.period.end}}</p>
      <p class="detail-info tools">
        <i 
          v-for="tool in project.tool"
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
          <a :href="project.link.git">
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
          <a :href="`post/${project.id}`">
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
    <ul class="project-tag">
      <li class="tag__item">#test</li>
    </ul>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "projectTiles",
  data() {
    return {
      project: {
        data: [],
        trimed: [],
        show: false,
      }
    }
  },
  methods: {
    filterCategory() {
      const category = this.$store.state.coding_category;
      let data = this.project.data;
      let trim = data.filter((value) => value.categoryId == category);

      data = trim.map((value) => {
        return Object.assign({}, value);
      })
      this.assignProjectDetail(data);
    },
    assignProjectDetail(data) {
      const project = this.project;
      let detail_data = {};

      axios.get("/json/project.json")
        .then((response) => {
          detail_data = response.data;

          this.$nextTick(() => {
            data.map((value) => {
              const spread = detail_data[value.id];
              if(!spread) return;
              Object.assign(value, spread);
            })
            project.trimed = data;
            project.show = true;
            localStorage.setItem("project", JSON.stringify(project.trimed));
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPostList() {
      const project = this.project;
      const ACCESS_KEY = this.$store.state.tistory_access_key;

      axios.get("https://www.tistory.com/apis/post/list?access_token=" + ACCESS_KEY + "&output=json&blogName=purplenaive&page=1&count=30")
      .then((response) => {
        project.data = response.data.tistory.item.posts;
 
        this.$nextTick(() => {
          this.filterCategory();
        });
      })
      .catch(function(error) {
        console.log(error)
      });
    },
  },
  mounted() {
    this.getPostList();
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tile {
  @include glassmorphism($padding: false);
  @include flex(column, nowrap, space-between, center);

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
    @include flex(column, nowrap, flex-start, center);

    margin: 0;
    font-size: $font-regular;
    font-weight: 600;

    .project-index {
      font-size: 10px;
      font-weight: 400;
      color: $font-gray;
      margin-bottom: 4px;
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
  }
  .tile__content {
    @include flex(column, nowrap, center, center);

    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .detail-info {
    font-size: $font-small;
    color: $font-gray;

    &.tools {
      @include flex(row, nowrap, center, center);

      margin-top: 4px;
    }
    &.link-buttons {
      @include flex(row, nowrap, center, center);

      margin-top: 12px;

      .button {
        height: 26px;
        margin-right: 8px;
        font-weight: $ptd;
        cursor: pointer;
        background-color: transparent;

        &:last-child { margin-right: 0; }

        > a {
          display: block;
        }
      }
      .button-page {
        padding-top: 1px;
        border-radius: 20px;
        background-color: $black;

        a {
          display: block;
          padding: 0 12px;
          font-size: $font-small;
          color: white;
        }
      }
    }
  }
  .project-tag {

    .tag__item {
      font-size: $font-xs;
      color: $font-gray;
    }
  }
}



.tile-barofactory {
  @include tile(1, 2);

  grid-area: barofactory;
  background-color: $tile-blue;
}
.tile-yhsbearing {
  @include tile(1, 1);

  grid-area: yhsbearing;
}
.tile-ums {
  @include tile(1, 1);

  grid-area: ums;
}
.tile-portfolio {
  @include tile(2, 1);

  grid-area: portfolio;
  background-color: $tile-purple;

  .project__thumbnail {
    margin-top: 16px;
  }
}
.tile-pd04 {
  @include tile(1, 2);

  grid-area: pd04;
  background-color: $tile-yellow;
}
.tile-paik {
  @include tile(1, 1);

  grid-area: paik;
}
.tile-elle {
  @include tile(1, 1);

  grid-area: elle;
}
.tile-cafe24 {
  @include tile(1, 2);

  grid-area: cafe24;
  background-color: $tile-red;
}
.tile-yg-stage {
  @include tile(1, 1);

  grid-area: yg-stage;
}
.tile-shinhan {
  @include tile(1, 1);

  grid-area: shinhan;
}
.tile-xiaomi {
  @include tile(1, 1);

  grid-area: xiaomi;
}
.tile-maeil {
  @include tile(1, 1);

  grid-area: maeil;
  background-color: $tile-blue;

  .project__thumbnail {
    margin: 15px 0 0 -10px;
  }
}
</style>