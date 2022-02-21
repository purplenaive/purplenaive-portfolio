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
  name: "noiseBackground"
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  min-width: 100vw;
  height: 100vh;
  position: fixed;
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
  filter: blur(180px);
}
.vector-1 {
  left: 135px;
  top: 130px;
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
  display: none;
}
.vector-5 {
  display: none;
}
.vector-7 {
  display: none;
}
.vector-8 {
  display: none;
}

.noise {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

</style>