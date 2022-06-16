<template>

  <!-- memoji -->
  <article id="resume-tile" class="tile tile-resume tile-memoji scrollNav">
    <div class="tile__content">
      <p class="memoji">
        <!-- <img src="" alt="" class="memoji-image"> -->
      </p>
      <p class="memoji-introduce">
        <strong class="strong">
          스스로 계속 배우며<br>
          끊임없이 성장합니다.
        </strong><br>
          안녕하세요 <span class="underline">3년차 퍼블리셔</span><br>
          이은희입니다.
      </p>
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
          <i 

            class="icon large tooltipBox" 
            :class="link.icon"
            :data-tt-title="link.title"
            data-tooltip="바로가기"
          ></i>
        </li>
      </ul>
      <ul class="link-list">
        <li 
          v-for="tool in tools_list" 
          :key="`link-${tool.name}`"
          class="link__item"
        >
          <i 
            class="icon large tooltipBox" 
            :class="tool.icon"
            :data-tt-title="tool.name"
            :data-tooltip="tool.description"
          ></i>
        </li>
      </ul>
    </div>
  </article>
  <!-- license -->
  <article class="tile tile-resume tile-license tile--has-header">
    <h3 class="tile__title">
      📙 License
    </h3>
    <div class="tile__content">
      <ul class="license-list">
        <li 
          v-for="license, index in license_list"
          :key="`license-${index}`"
          class="license__item"
        >
          <p class="license-name">{{license.name}}</p>
          <span class="license-date">{{license.date}}</span>
        </li>
      </ul>
    </div>
  </article>
  <!-- introduce -->
  <article class="tile tile-resume tile-introduce tile--has-header">
    <h3 class="tile__title">
      <img src="@/assets/image/smile-emj.png" alt="웃고 있는 이모티콘" class="smile">  
      반갑습니다! 소개드려요!
    </h3>
    <div class="tile__content">
      <div class="introduce-paragraph">
        <p class="introduce__title">배려</p>
        <p class="introduce__content">
          앞에서 이끌기 보다 뒤에서 도와주는 사람입니다.<br>
          하지만 항상 뒤에만 있지 않으며, 이 자세를 바탕으로 협동이 잘 이루어지게 하기 위해 노력합니다.<br>
        </p>
      </div>
      <div class="introduce-paragraph">
        <p class="introduce__title">발전</p>
        <p class="introduce__content">
          누군가를 도와줌에 있어서는 먼저 자신의 분야에 대해 잘 알아야 된다고 생각합니다.<br>
          그래서 웹 퍼블리싱에 있어 항상 스스로 공부합니다.<br>
          이에 그치지 않고 javasrcript와 vue 등 <br>
          더 나아가 공부하고 있습니다.<br>
        </p>
      </div>
      <div class="introduce-paragraph">
        <p class="introduce__title">유연성</p>
        <p class="introduce__content">
          어느 환경에서든 잘 어우러집니다.<br>
          그렇다고 제 주관성이 없이 마냥 물 같은 사람은 아닙니다.<br>
          제 스스로의 색깔을 가진 반죽 같은 사람입니다.<br>
        </p>
      </div>
    </div>
  </article>
  <!-- career -->
  <article class="tile tile-resume tile-career tile--has-header">
    <h3 class="tile__title">💻 경력사항</h3>
    <div class="tile__content">
      <ol class="career-list">
        <li 
          v-for="career, index in career_list"
          :key="`career-${index}`"
          class="career__item"
        >
          <p class="company-name">{{career.name}}</p>
          <p class="period">{{career.period.start}} ~ {{career.period.end}}</p>
          <p class="position-detail" v-html="career.position"></p>
        </li>
      </ol>
      <p class="mini-introduce">
        어떻게 하면 더 효율적일까<br>
        더 좋은 방법이 있지 않을까<br>
        끝없이 고민하며<br>
        계속해서 성장해갑니다<br>
        <br>
        <strong class="strong">
          이런 저와 닮은,<br>
          계속해서 발전해가는<br>
          모든 코드를 좋아합니다!<br>
        </strong>
      </p>
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
          icon: "javascript-flat",
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
          description: "간단한 유튜브 영상 편집이 가능합니다",
        },
        {
          name: "illustration",
          icon: "ai-flat",
          description: "간단한 효과와 로고 작업 등, 어느 정도 사용할 수 있습니다",
        },
        {
          name: "photoshop",
          icon: "photoshop-flat",
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
          title: "git",
          icon: "git",
          link: "/",
        },
        {
          name: "instagram",
          title: "인스타그램",
          icon: "instagram",
          link: "/",
        },
        {
          name: "resume",
          title: "이력서",
          icon: "resume",
          link: "/",
        },
      ],
      license_list: [
        {
          name: "웹디자인 기능사",
          date: "2018.07.23"
        },
        {
          name: "웹&앱 디자인 교육",
          date: "2018년 1000시간 수료"
        }
      ],
      career_list: [
        {
          name: "**시스템",
          period: {
            start: "2020.10",
            end: "재직 중"
          },
          position: "자사 웹 서비스 및<br>홈페이지 퍼블리싱",
          warn: ""
        },
        {
          name: "플로**",
          period: {
            start: "2019.03",
            end: "2020.01"
          },
          position: "자사 홈페이지, 이벤트 페이지 및 어플리케이션<br>퍼블리싱",
          warn: "지속적인(6개월) 임금체불로 퇴사"
        },
        {
          name: "진담*",
          period: {
            start: "2018.12",
            end: "2019.01"
          },
          position: "Cafe24를 이용한 쇼핑몰 퍼블리싱",
          warn: "지속적인(6개월) 임금체불로 퇴사"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tile {
  @include glassmorphism($tilt: false);
}

.tile-memoji {
  @include tile(2, 1);

  grid-area: memoji;
  
  .tile__content {
    @include flex(row, nowrap, center, center);

  }

  .memoji {
    width: 90px;
    height: 110px;
    margin-right: 24px;
    background-color: beige;

    img {
      display: block;
      width: auto;
      height: 100%;
    }
  }
  .memoji-introduce {
    line-height: 1.2;
  }
  .strong {
    font-weight: 700;
  }
  .underline {
    text-decoration: underline;
  }
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

  .tile__title {
    background-color: $tile-yellow;
  }
  .tile__content {
    @include flex(column, nowrap, center, flex-start);
  }
  .license__item {
    margin-bottom: 16px;

    &:last-child { margin-bottom: 0; }
  }
  .license-name {
    font-weight: 600;
  }
  .license-date { 
    color: $font-gray;
    font-size: $font-xs;
  }
}
.tile-introduce {
  @include tile(2, 2);

  grid-area: introduce;

  .tile__title {
    background-color: $tile-purple;
  }
  .smile {
    display: block;
    width: 24px;
    height: auto;
    margin-right: 8px;
  }
  .tile__content {
    @include flex(column, nowrap, center, stretch);
  }
  .introduce-paragraph {
    margin-bottom: 12px;
  }
  .introduce__title {
    font-weight: 600;
    margin-bottom: 4px;
  }
  .introduce__content {
    color: $font-gray;
  }
}
.tile-career {
  @include tile(1, 3);

  grid-area: career;

  .tile__content {
    @include flex(column, nowrap, flex-start, stretch);
  }
  .career-list {
    padding-left: 12px;
    position: relative;
    border-left: 1px solid $black;

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
    }
    &::before { 
      width: 0px;
      height: 0px;
      border: 8px solid $black;
      border-top-color: transparent;
      border-right-color: transparent;
      border-left-color: transparent;
      top: 0; 
      transform: translate(-53%, -100%) scale(0.4, 1);
      transform-origin: center bottom;
    }
    &::after { 
      width: 6px;
      height:6px;
      border-radius: 6px;
      bottom: 0; 
      transform: translate(-50%, 0);
      background-color: $black;
    }
  }
  .career__item {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .company-name {
    font-weight: 600;
  }
  .period {
    font-size: $font-xs;
    color: $font-gray;
    margin: 4px 0;
  }
  .position-detail {
    font-size: $font-small;
  }

  .mini-introduce {
    justify-self: flex-end;
    font-size: $font-small;
    color: $font-gray;
    margin-top: auto;

    .strong { font-weight: 600; }
  }
}

</style>