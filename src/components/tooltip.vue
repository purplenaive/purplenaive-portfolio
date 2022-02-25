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
      <p class="tooltip__content">
        {{text}}
      </p>
    </div>
    <div class="tooltip__stick"></div>
  </div>
</template>

<script>
export default {
  name: "tooltipBox",
  data() {
    return {
      show: true,
      title: "",
      text: "",
      position: {
        left: 0,
        top: 0,
      }
    }
  },
  computed: {
    targets() {
      this.$store.getter.getTooltipTargets;
    }
  },
  methods: {
    assignTargetsEvent() {
      const targets = document.querySelectorAll(".tooltipBox");
      // const targets = this.$store.getter.getTooltipTargets;
      const length =  targets.length;
      console.log(targets);
      
      for(let i = 0; i < length; i++) {
        const target = targets[i];
        target.addEventListener("mouseenter", this.showTooltip);
        target.addEventListener("mouseleave", this.hideTooltip);
      }
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
    this.assignTargetsEvent();
    this.$store.commit("assignTooltipTargets");
    console.log(this.targets);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.tooltip {
  @include flex(column, nowrap, center, center);

  position: fixed;
  top: 200px;
  left: 200px;
  z-index: 20;
  transform: translate(-50%, -100%);

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: $black;
  }

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
    background-color: $black;
  }
}

</style>