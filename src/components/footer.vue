<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="ps">제 스스로 만들어가기에<br>즐겁습니다</p>

      <ul class="footer-contact">
        <li class="contact__item">&copy; 이은희</li>
        <li class="contact__item">010 8435 3663</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "mainFooter",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.footer {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: #FFFAF2;

  .footer__inner {
    @include flex(false, row, nowrap, space-between, center);

    width: 632px;
    position: absolute;
    left: 50%;
    top: calc(50% - 16px);
    transform: translate(-50%, -50%) rotate(-90deg);
  }
  .ps {
    font-weight: 600;
    color: $black;
  }

  .contact__item {
    font-size: $font-small;
    text-align: right;
    color: $font-gray;
  }
}

</style>