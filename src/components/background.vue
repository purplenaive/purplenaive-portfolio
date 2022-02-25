<template>
  <div class="background">
    <img className="vector vector-1" src="@/assets/image/vector/vector-1.svg" />
    <img className="vector vector-2" src="@/assets/image/vector/vector-2.svg" />
    <img className="vector vector-3" src="@/assets/image/vector/vector-3.svg" />
    <img className="vector vector-4" src="@/assets/image/vector/vector-4.svg" />
    <img className="vector vector-5" src="@/assets/image/vector/vector-5.svg" />
    <img className="vector vector-7" src="@/assets/image/vector/vector-7.svg" />
    <img className="vector vector-8" src="@/assets/image/vector/vector-8.svg" />
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

.vector {
  display: block;
  position: absolute;
  pointer-events: none;
  transform: scale(1.4);
}
.vector-1 {
  left: 135px;
  top: 130px;
  filter: blur(180px);
}
.vector-2 {
  left: 550px;
  top: 190px;
  filter: blur(130px);
}
.vector-3 {
  left: 960px;
  bottom: -130px;
  filter: blur(130px);
}
.vector-4 {
  left: 1530px;
  bottom: 40px;
  filter: blur(180px);
  transform: scale(0.95);
}
.vector-5 {
  left: 3145px;
  bottom: 305px;
  filter: blur(100px);
}
.vector-7 {
  left: 2500px;
  top: -30px;
  filter: blur(120px);
}
.vector-8 {
  left: 3040px;
  bottom: -20px;
  filter: blur(180px);
}

</style>