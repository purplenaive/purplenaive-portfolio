<template>
  <transition 
    :duration="{enter: 500, leave: 500}"
  >
    <div 
      v-if="active"
      class="loading-spinner"
      :class="{
        'loading--fixed': fixed,
        'loading--absolute': absolute,
      }"
    >
      <div class="background"
        v-if="background"
        :backgroundColor="backgroundColor"
        :opacity="backgroundOpacity * 0.01"
        :class="backgroundBlur ? 'background--blur' : ''"
      ></div>
      <div 
        class="spinner"
        :style="{
          'width': width + 'px',
          'height': width + 'px'
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
          :width="width" 
          :height="width" 
          fill="none" 
          :viewBox="`0 0 ${width} ${width}`"
        >
          <circle 
            :cx="r + (strokeWidth / 2)" 
            :cy="r + (strokeWidth / 2)" 
            :r="r" 
            :stroke="strokeColor" 
            stroke-linejoin="round" 
            fill="none"
            :stroke-width="strokeWidth"
          />
        </svg>
      </div>
      <p class="loading__text">
        {{text}}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "loadingSpinner",
  computed: {
    active() {
      return this.$store.state.spinner_active;
    },
    width() {
      return (this.r * 2) + this.strokeWidth;
    },
  },
  data() {
    return {

    }
  },
  props: {
    r: {
      type: Number,
      default: 20,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    strokeWidth: {
      type: Number,
      default: 6,
    },
    strokeColor: {
      type: String,
      default: "#C182D8",
    },
    background: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
      default: "#ffffff"
    },
    backgroundOpacity: {
      type: Number,
      default: 50,
    },
    backgroundBlur: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: "반갑습니다",
    }
  }
}
</script>

<style lang="scss" scoped>

  @keyframes loading {
    0% {
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dashoffset: -300;
    }
  }
  @keyframes loadingRotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    @include flex(false, column, nowrap, center, center);

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 19;

    &.loading--fixed {
      position: fixed;
    }
    &.loading--absolute {
      position: absolute;
    }
  }
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &.background--blur {
      backdrop-filter: blur(12px);
    }
  }
  .spinner {
    position: relative;
    z-index: 1;
    animation: loadingRotate 1s ease-in-out infinite;

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    circle {
      stroke-dasharray: 130;
      animation: loading 3s ease-in-out infinite alternate;
    }
  }
  .loading__text {
    z-index: 1;
    margin-top: 16px;
  }

</style>