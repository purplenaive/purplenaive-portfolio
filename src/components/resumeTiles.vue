<template>

  <!-- memoji -->
  <article class="tile tile-resume tile-memoji">
    <div class="tile__content">
      hiu
    </div>
  </article>
  <!-- link n tool -->
  <article class="tile tile-resume tile-link-tools">
    <div class="tile__content">
      <ol class="basic-info-list">
        <li 
          v-for="info in basic_info_list" 
          :key="`basic-info-${info.type}`" 
          class="info__item"
        >
          {{info.data}}
        </li>
      </ol>
      <ul class="tools-list">
        <li 
          v-for="link in link_list" 
          :key="`tool-${link.name}`"
          class="tool__item"
        >
          <i class="icon large" :class="link.icon"></i>
        </li>
      </ul>
      <ul class="link-list">
        <li 
          v-for="tool in tools_list" 
          :key="`link-${tool.name}`"
          class="link__item"
        >
          <i class="icon large" :class="tool.icon"></i>
        </li>
      </ul>
    </div>
  </article>
  <!-- license -->
  <article class="tile tile-resume tile-license">
    <div class="tile__content">
      hiu
    </div>
  </article>
  <!-- introduce -->
  <article class="tile tile-resume tile-introduce">
    <div class="tile__content">
      hiu
    </div>
  </article>
  <!-- career -->
  <article class="tile tile-resume tile-career">
    <div class="tile__content">
      hiu
    </div>
  </article>

</template>

<script>
export default {
  name: "resumeTiles",
  data() {
    return {
      basic_info_list: [
        {
          type: "birth",
          data: "00.01.20 (23세)"
        },
        {
          type: "phone",
          data: "8435 3663"
        },
        {
          type: "address",
          data: "경기도 김포시 거주"
        },
        {
          type: "email",
          data: "purplenaive@gmail.com"
        },
      ],
      tools_list: [
        {
          name: "vue",
          icon: "vue-flat",
          description: "메인 프로젝트로 사용한 경험이 있으며, 업무에 활용이 가능합니다",
        },
        {
          name: "git",
          icon: "git-flat",
          description: "모든 프로젝트로 사용했으며 업무에 활용이 가능합니다",
        },
        {
          name: "javascript",
          icon: "js-flat",
          description: "dom 조작 및 간단한 스크립트 작성이 가능하며, 업무에 활용이 가능합니다",
        },
        {
          name: "scss",
          icon: "scss-flat",
          description: "메인 프로젝트로 사용했었으며 css보다 사용을 선호합니다, 업무에 활용이 가능합니다",
        },
        {
          name: "css",
          icon: "css-flat",
          description: "전반적인 사용에 능숙하며, flex는 업무에 활용이 가능하며, grid는 어느정도 사용이 가능합니다",
        },
        {
          name: "html",
          icon: "html-flat",
          description: "전반적인 사용에 능숙하며, 시맨틱 마크업 등, 업무에 활용이 가능합니다",
        },
        {
          name: "figma",
          icon: "figma-flat",
          description: "개인 포트폴리오와, 작은 프로젝트에 사용한 경험이 있으며, 업무에도 활용이 가능합니다",
        },
        {
          name: "premier",
          icon: "pr-flat",
          description: "간단한 유튜브 영상이 가능합니다",
        },
        {
          name: "illustration",
          icon: "ai-flat",
          description: "간단한 효과와 로고 작업 등, 어느 정도 사용할 수 있습니다",
        },
        {
          name: "photoshop",
          icon: "ps-flat",
          description: "간단한 사진 편집등 어느 정도 사용이 가능합니다",
        },
        {
          name: "lightroom",
          icon: "lr-flat",
          description: "취미인 사진 촬영 후 보정할 때 사용하였으며, 어느 정도 사용이 가능합니다",
        },
      ],
      link_list: [
        {
          name: "git",
          icon: "git",
          link: "/",
        },
        {
          name: "instagram",
          icon: "instagram",
          link: "/",
        },
        {
          name: "resume",
          icon: "resume",
          link: "/",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tile {
  @include glassmorphism;
}

.tile-memoji {
  @include tile(2, 1);

  grid-area: memoji;
}

.tile-link-tools {
  @include tile(1, 2);

  grid-area: tools;

  .tile__content {
    @include flex(column, nowrap, center, center);
  }

  .basic-info-list {
    margin-bottom: 24px;

    .info__item {
      text-align: center;
      font-size: $font-small;
    }
  }
  .tools-list {
    display: grid;
    grid-template-columns: repeat(3, 40px);
    justify-content: center;
    align-content: start;
    gap: 4px;
    margin-bottom: 4px;
  }
  .link-list {
    display: grid;
    grid-template-columns: repeat(3, 40px);
    align-content: start;
    justify-content: center;
    gap: 4px;
  }
}

.tile-license {
  @include tile(1, 1);

  grid-area: license;
}
.tile-introduce {
  @include tile(2, 2);

  grid-area: introduce;
}
.tile-career {
  @include tile(1, 3);

  grid-area: career;
}

</style>