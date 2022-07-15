<template>
  <transition>
    <p v-if="active" class="toast-message" >
      {{text}}
    </p>
  </transition>
</template>

<script>
  export default {
    name: "toastMessage",
    computed: {
      active() {
        return this.$store.state.toast.active;
      },
      text() {
        return this.$store.state.toast.text;
      }
    },
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>

  .toast-message {
    @include glassmorphism($padding: false, $tilt: false);

    font-family: $ptd;
    padding: 10px 18px !important;
    font-size: $font-regular;
    transform: translate(-50%, 0);
    border-radius: 20px;
    position: fixed;
    bottom: 18px;
    left: 50%;
    z-index: 12;
    background-color: $tile-red;
  }

</style>