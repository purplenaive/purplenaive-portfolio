<template>
  <color-background></color-background>
  <main id="post">

    <section class="post">
      <div class="show-page-list-button">
        <p class="mini-title on">리스트<br>켜기</p>
        <button 
          class="toggle-page-list"
          :class="{'list--active': page_list.active}"
          @click="page_list.active = !page_list.active"
        >
          <p class="toggle__circle"></p>
        </button>
        <p class="mini-title off">리스트<br>끄기</p>
      </div>

      <div class="post-content">

        <!-- <header class="post__header">
            <h2 class="post-name" v-html="post.title"></h2>

            <div class="project-info">
              <div class="post__main-color">
                <p class="info-content">
                  <span 
                    v-for="color, index in project.color"
                    :key="`color${index + 1}`"
                    class="colorchip"
                    :style="`background-color: ${color}`"
                  ></span>
                </p>
                <h4 class="info-title">메인 색상</h4>
              </div>
              <div 
                class="post__contribution tooltipBox"
                :data-tooltip="project.contribution + '%'"
              >
                <p class="info-content">
                  <apexchart
                    type="radialBar" 
                    :options="contribution" 
                    :series="[project.contribution]"
                  ></apexchart>
                </p>
                <h4 class="info-title">참여도</h4>
              </div>
            </div>
            <div class="post__sub-title">
              <h3 class="project-period">
                {{project.period.start}} ~ {{project.period.end}} 
                ({{project.period.duration}})
              </h3>
              <p class="project-summary">
                {{project.description}}
              </p>
            </div>
        </header> -->

        <!-- <div class="content-text">
          <page-list v-if="page_list.active"></page-list>
          <pre id="content-pre" class="content-pre">
          </pre>
        </div> -->


      </div>

    </section>
  </main>
</template>

<script>
// import VueApexCharts from "vue3-apexcharts"
import axios from "axios";
// import pageList from "@/components/pageList.vue";

export default {
  name: "postTemplate",
  components: {
    // pageList,
    // apexchart: 
    // VueApexCharts,
  },
  props: [
    "id"
  ],
  data() {
    return {
      page_list: {
        active: false,
      },
      post: {
        data: [],
        title: "",
      },
      contribution: {
        chart: {
          height: '100%',
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              colors: ["#ffffff"],
            },
            track: {
              background: 'white',
              strokeWidth: '0',
              margin: 0,
            },
            dataLabels: {
              show: false,
            },
          },
        },
        fill: {
          colors: ["#333333"],
        },
        states: {
          hover: {
            filter: {
              type: "none",
            }
          }
        },
        grid: {
          padding: {
            top: -10,
            right: -10,
            bottom: -10,
            left: -10,
          }
        }
      },
    }
  },
  computed: {
    access_key() {
      return this.$store.state.tistory_access_key;
    },
    // project() {
    //   let data = JSON.parse(localStorage.getItem("project"));

    //   if(!data) return "";

    //   data.filter(value => value.id == this.id );
    //   return data[0];
    // }
  },
  methods: {
    getPostContent() {
      const post = this.post;
      const id = this.id;

      axios.get("https://www.tistory.com/apis/post/read?access_token=" + this.access_key + "&blogName=purplenaive&postId=" + id)
      .then((response) => { 
        const content_element = document.getElementById('content-pre');
        const parser = new DOMParser();

        post.data = response.data;

        this.$nextTick(() => {
          const text = parser.parseFromString(response.data, "text/html");
          const title = text.querySelector("title");
          const content = text.querySelector("content")

          post.title = title.textContent;
          content_element.innerHTML = content.textContent;
          this.$store.commit("assignTooltipTargets");
        });
      })
      .catch((error) => {
        console.log(error);
      })
    },
    trimData(data) {
      console.log(data);
      this.post.data = data.map((value) => {
        return {
          id: value.id,
          type: value.type,
        }
      });
      console.log(this.post.data);
    },
  },
  mounted() {
    // this.getPostContent();
    // console.log(this.project);

    const id = this.id;
    const ACCESS_KEY = "secret_QEaI6MPUF0jvojsltXj9lCmCcjfJznR1xwIUURiubXc"

    const options = {
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/blocks/${id}/children?page_size=100`,
      headers: {
        Acceps: "application/json",
        "Notion-Version": "2022-02-22",
        Authorization: `Bearer ${ACCESS_KEY}`
      }
    };

    axios.request(options)
    .then(response => {
      console.log(response);
      this.trimData(response.data.results);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}
</script>

<style lang="scss" scoped>

  .background {
    position: fixed;
  }

  #post {
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
    padding: 200px 0 200px;
    box-sizing: border-box;
  }
  .post {
    @include glassmorphism($tilt: false);

    width: 1140px;
    min-height: 500px;
    padding: 24px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    overflow: visible;
  }

  .show-page-list-button {
    @include flex(false, row, nowrap, flex-start, center);

    position: absolute;
    top: 0;
    left: 0;
    margin-top: -24px;
    opacity: 0.6;
    transform: translate(0, -100%);
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transition: all 0.3s ease;
    }

    .mini-title {
      text-align: center;
      font-size: 12px;

      &.on {
        position: absolute;
        left: 0;
        padding-right: 8px;
        transform: translate(-100%, 0);
      }
      &.off {
        padding-left: 8px;
      }
    }
    .toggle-page-list {
      display: block;
      width: 48px;
      height: 24px;
      border-radius: 15px;
      padding: 1px 2px;
      border: 1px solid $black;
      background-color: rgba($black, 0.2);
      
      &.list--active {

        .toggle__circle {
          margin-left: 0;
          transition: all 0.4s ease;
        }
      }
    }
    .toggle__circle {
      width: 18px;
      height: 18px;
      margin-left: 24px;
      border-radius: 50%;
      transition: all 0.4s ease;
      background-color: $black;
    }
  }

  .post__header {
    @include flex(false, row, wrap, stretch, flex-start);

    position: relative;

    .post-name {
      flex: 1 1 auto;
      font-weight: 900;
      font-size: 40px;
      color: $black;
      margin: 0;
    }

    .project-info {
      @include flex(false, row, nowrap, flex-end, center);

      flex: 0 0 auto;

      .info-title {
        font-size: $font-small;
        font-weight: 600;
        text-align: center;
        margin-top: 4px;
        color: $black;
      }

      .post__main-color {
        margin-right: 12px;

        .info-content {
          @include flex(false, row, nowrap, center, center);
        }
        .colorchip {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: gray;

          &:first-child { margin-right: -5px;}
          &:nth-child(3) { margin-left: -5px;}
        }
      }
      .post__contribution {

        .info-content {
          width: 24px;
          height: 24px;
          margin: 0 auto;

          > div {
            position: relative;
            bottom: -2px;
          }
        }
      }
    }
    .post__sub-title {
      flex: 1 1 100%;
      color: $black;

      &::before {
        content: "";
        display: block;
        width: 24px;
        height: 2px;
        background-color: $black;
      }
    }
    .project-period {
      font-weight: 600;
      font-size: $font-small;
      margin-bottom: 8px;
    }
    .project-summary {
      font-size: $font-small;
    }

  }

  .post-content {

    .content-pre {
      font-size: $font-regular;
      font-weight: 400;
      color: $black;
      padding: 64px 0;
    }
  }
</style>