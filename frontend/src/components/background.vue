<template>
  <div class="background">
    
    <svg class="svg-wrapper">
      <!-- filter -->
      <filter 
        id="blurry" 
        x="-50%" y="-50%" 
        width="200%" height="300%" 
        filterUnits="userSpaceOnUse" 
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="160" result="effect1_foregroundBlur_1388_1588"/>
      </filter>
  
      <!-- vector -->
      <circle cx="127" cy="150" r="150" class="vector vector-1" filter="url(#blurry)"/>
      <circle cx="520" cy="230" r="90" class="vector vector-2" filter="url(#blurry)"/>
      <path
        d="M591.5 94.4354C591.5 204.892 310.457 294.435 200 294.435C89.5431 294.435 0 204.892 0 94.4354C0 -16.0216 64.5431 0.935773 175 0.935773C285.457 0.935773 591.5 -16.0216 591.5 94.4354Z" 
        class="vector vector-3" 
        filter="url(#blurry)"
      />
      <path 
        d="M259.5 319C259.5 372.413 295.141 471.961 264 528C230.742 587.848 149.364 597.5 92.3205 597.5C-18.1364 597.5 1.32055 424.457 1.32055 314C1.32055 203.543 59.8636 0 170.321 0C239.859 0 329.685 50.1708 339 137.5C344.481 188.888 259.5 278.081 259.5 319Z" 
        class="vector vector-4"
        filter="url(#blurry)"
      />
      <circle cx="2950" cy="80vh" r="110" class="vector vector-5" filter="url(#blurry)"/>
      <circle cx="2500" cy="-30" r="111" class="vector vector-6" filter="url(#blurry)"/>

      <path 
        d="M574.5 296.999C574.5 367.139 527 485.5 435 572.5C343 659.5 0.5 636.14 0.5 566C0.5 530.784 206.096 484.188 351.5 356C495.702 228.872 600.576 0 635.5 0C705.64 0 574.5 226.859 574.5 296.999Z"
        class="vector vector-7" 
        filter="url(#blurry)"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "colorBackground",
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>

.background {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  pointer-events: none;
  background-color: #FFFDFA;
}

.svg-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
}
.vector {
  position: absolute;
  pointer-events: none;
}

.vector-1 {
  width: 245px;
  height: 245px;
  fill: #B042E4;
}
.vector-2 {
  bottom: 0;
  fill: #FF9900;
}
.vector-3 {
  // left: 960px;
  // bottom: -130px;
  transform: translate(900px, 86vh);
  fill: #FFCC4A;
}
.vector-4 {
  transform: translate(1530px, 38vh);
  fill: #FF549C;
}
.vector-5 {
  fill: #FF9900;
}
.vector-6 {
  fill: #3AADEE;
}
.vector-7 {
  transform: translate(3040px, -20px);
  fill: #B042E4;
}

</style>