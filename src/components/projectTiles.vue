<template v-if="project.show">
  <article 
    v-for="project, index in project.data"
    :key="`project-${project.id}`"
    class="tile tile-project"
    :class="`tile-${project.name}`"
    :style="{gridArea: project.name }"
  >
    <h3 class="project__title">
      <span class="project-index">{{index < 10 ? "0" + index: index}}-{{project.id.substr(0, 2)}}</span>
      {{project.title}}
    </h3>
    <p 
      v-if="project.logo" 
      class="project__thumbnail"
    >
      <img :src="`/image/project/${project.name}.png`" alt="">
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
    <ul class="project-tag">
      <li 
        v-for="tag, index in project.tags"
        :key="`tag-${project.id}-${index}`"
        class="tag__item"
      >#{{tag}}</li>
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
    // 노션에서 데이터 가져오기
    getNotionProject() {
      const PROJECT_TOKEN = "bb8c08d768a2428990305d0427d63665";
      const ACCESS_KEY = "secret_QEaI6MPUF0jvojsltXj9lCmCcjfJznR1xwIUURiubXc"

      const options = {
        method: "POST",
        url: `https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/databases/${PROJECT_TOKEN}/query`,
        headers: {
          Accept: "application/json",
          "Notion-Version": "2022-02-22",
          Authorization: `Bearer ${ACCESS_KEY}`
        },
        data: {page_size: 20}
      };

      axios.request(options).then((response) => {
        console.log(response.data);
        this.trimProjectData(response.data.results);
      }).catch(function(error) {
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
      console.log(trim);
      this.project.data = trim;
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

    img {
      display: block;
      max-width: unset;
    }
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
    @include flex(row, nowrap, center, center);

    .tag__item {
      font-size: $font-xs;
      color: $font-gray;
      margin-right: 4px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}



.tile-barofactory {
  @include tile(1, 2);

  background-color: $tile-blue;
}
.tile-yhsbearing {
  @include tile(1, 1);
}
.tile-umc {
  @include tile(1, 1);
}
.tile-portfolio {
  @include tile(2, 1);

  background-color: $tile-purple;

  .project__thumbnail {
    padding-top: 25px;
  }
}
.tile-pd04 {
  @include tile(1, 2);

  background-color: $tile-yellow;
}
.tile-paik {
  @include tile(1, 1);

}
.tile-elle {
  @include tile(1, 2);

}
.tile-cafe24 {
  @include tile(1, 2);

  background-color: $tile-red;
}
.tile-yg-stage {
  @include tile(1, 1);

}
.tile-shinhan {
  @include tile(1, 1);

}
.tile-xiaomi {
  @include tile(1, 1);

}
.tile-maeil {
  @include tile(1, 1);

  background-color: $tile-blue;

  .project__thumbnail {
    margin: 15px 0 0 -10px;
  }
}
</style>