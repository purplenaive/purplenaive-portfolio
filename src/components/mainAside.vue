<template>
  <aside class="sticky-contact">
    <a href="" class="contact__item resume">
      <i class="icon paper-fab"></i>
      이력서
    </a>
    <p class="contact__item phone">
      <i class="icon call-fab"></i>
      8435 3663
    </p>
    <a href="mailto:purplenaive@gmail.com" class="contact__item email">
      <i class="icon mail-fab"></i>
      purplenaive@gmail
    </a>
  </aside>
</template>

<script>
export default {
  name: "mainAside",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.sticky-contact {
  @include flex(row, nowrap, flex-start, center);

  position: sticky;
  left: 80px;
  margin-left: -4px;

  .contact__item {
    @include flex(row, nowrap, flex-start, center);

    margin-right: 8px;
    padding: 8px 4px;
    font-size: $font-small;

    &.resume {
      font-weight: 600;
    }
    .icon {
      margin-right: 4px;
      cursor: default;
      pointer-events: none;
    }
  }
}
</style>