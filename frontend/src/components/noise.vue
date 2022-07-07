<template>
  <div class="noise">
    <canvas id="noise-canvas"></canvas>
  </div>
</template>

<script>

export default {
  name: "noiseFilter",
  data() {
    return {
      noise_data: [],
      frame: 0,
      events: 0,
      size: {
        width: 0,
        height: 0,
      }
    }
  },
  computed: {
    width: {
      get() {
        return window.innerWidth;
      },
      set(value) {
        return value;
      }
    },
    height: {
      get() {
        return window.innerHeight;
      },
      set(value) {
        return value;
      }
    },
    canvas() {
      return document.getElementById("noise-canvas");
    },
    ctx() {
      return this.canvas.getContext("2d");
    },
  },
  methods: {
    animationFrame(callback) {
      let timeout = null;
      return function() {
        if(timeout) {
          window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(function() {callback();});
      };
    },
    assignSize() {
      const size = this.size;
      
      size.width = window.innerWidth;
      size.height = window.innerHeight;
    },
    createNoise() {
      this.assignSize();
      
      const {width, height} = this.size;
      const image_data = this.ctx.createImageData(width * 4, height);
      const buffer32 = new Uint32Array(image_data.data.buffer);
      const length = buffer32.length;
      const half_length = length / 2;

      for(let i = 0; i < half_length; i++) {
        if(Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
          buffer32[length - i] = 0xff000000;
        }
      }
      this.noise_data.push(image_data);
      this.drawNoise();
    },
    drawNoise() {
      this.ctx.putImageData(this.noise_data[0], 0, 0);
      this.canvas.classList.add("noise--active");
    },
  },
  mounted() {
    this.canvas.width = this.width * 4;
    this.canvas.height = this.height;

    this.createNoise();
    window.addEventListener("resize", () => {
      this.canvas.classList.remove("noise--active");

      // throttle
      if(this.events) clearTimeout(this.events)

      this.events = setTimeout(() => {
        this.events = 0;
        this.createNoise();
      }, 600);
    });
  }
}
</script>

<style lang="scss" scoped>
.noise {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 21;
  pointer-events: none;

  #noise-canvas {
    opacity: 0.04;

    @keyframes noise-move {
      from {
        margin-left: 0;
      }
      to {
        margin-left: -300vw;
      }
    }

    &.noise--active {
      animation: noise-move 0.3s infinite steps(3); 
    }
  }
}
</style>