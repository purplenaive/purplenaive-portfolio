<template>
  <div 
    v-show="show"
    class="componenet tooltip" 
    :style="{
      left: position.left + 'px',
      top: position.top + 'px',
    }"
  >
    <div class="tooltip__bubble">
      <p v-if="title != ''" class="tooltip__title">{{title}}</p>
      <p class="tooltip__content" v-html="text"></p>
    </div>
    <div class="tooltip__stick"></div>
    <div class="tooltip__stick-ball"></div>
  </div>
</template>

<script>
export default {
  name: "tooltipBox",
  data() {
    return {
      show: true,
      targets: [],
      title: "",
      text: "",
      position: {
        left: 0,
        top: 0,
      },
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    active(now, prev) {
      if(now) {
        this.targets = this.$store.state.tooltip.targets;
      }
    },
    targets(now, prev) {
      this.assignTargetsEvent();
    }
  },
  methods: {
    assignTargetsEvent() {
      const targets = this.targets;

      targets.forEach(value => {
        value.addEventListener("mouseenter", this.showTooltip);
        value.addEventListener("mouseleave", this.hideTooltip);
      })
    },
    showTooltip(event) {
      const target = event.target;
      const text = target.getAttribute("data-tooltip");
      const title = target.getAttribute("data-tt-title") || "";
      const rect = target.getBoundingClientRect();
      const width = parseInt(getComputedStyle(target).width);


      this.show = true;
      this.text = text;
      this.title = title;
      this.position = {
        left: parseInt(rect.left) + (width / 2),
        top: parseInt(rect.top),
      };
    },
    hideTooltip() {
      this.show = false;
      this.text = "";
      this.title = "";
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tooltip {
  @include flex(false, column, nowrap, center, center);

  position: fixed;
  top: 200px;
  left: 200px;
  z-index: 20;
  transform: translate(-50%, -100%);

  .tooltip__bubble {
    max-width: 350px;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: $black;
  }
  .tooltip__title {
    text-align: center;
    color: white;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .tooltip__content {
    text-align: center;
    color: white;
  }

  .tooltip__stick {
    width: 2px;
    height: 16px;
    margin-left: -1px;
    background-color: $black;
  }
  .tooltip__stick-ball {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-left: -1px;
    background-color: $black;
  }
}

</style>