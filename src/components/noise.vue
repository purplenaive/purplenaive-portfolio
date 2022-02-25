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
    }
  },
  computed: {
    width() {
      return window.innerWidth ;
    },
    height() {
      return window.innerHeight;
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
    createNoise() {
      const image_data = this.ctx.createImageData(this.width * 4, this.height);
      const buffer32 = new Uint32Array(image_data.data.buffer);
      const length = buffer32.length;

      for(let i = 0; i < length; i++) {
        if(Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }
      this.noise_data.push(image_data);
      this.drawNoise();
    },
    drawNoise() {
      this.ctx.putImageData(this.noise_data[0], 0, 0);
    },
  },
  mounted() {
    this.canvas.width = this.width * 4;
    this.canvas.height = this.height;

    this.createNoise();
    window.addEventListener("resize", this.animationFrame(this.createNoise));
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
    opacity: 0.03;

    @keyframes noise-move {
      from {
        margin-left: 0;
      }
      to {
        margin-left: -300vw;
      }
    }
    animation-name: noise-move;
    animation-duration: 0.3s;
    animation-timing-function: steps(3);
    animation-iteration-count: infinite;
  }
}

</style>