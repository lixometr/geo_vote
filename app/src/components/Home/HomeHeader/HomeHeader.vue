<template>
  <div class="home-header">
    <div class="z-30 relative">
      <div class="flex-center">
        <svgLogo class="home-header__logo" />
      </div>
      <h3 class="home-header__date">15 июля 2021</h3>
      <div>
        <h1 class="home-header__title">С Днём рождения, Росгеология!</h1>
      </div>
      <home-header-description />
      <svgScroll
        class="mt-9 mx-auto block "
      />
    </div>
    <home-header-bg />
  </div>
</template>

<script>
import svgLogo from "@/assets/icons/logo.svg";
import HomeHeaderDescription from "./HomeHeaderDescription.vue";
import HomeHeaderBg from "./HomeHeaderBg.vue";
import svgScroll from "@/assets/icons/header_scroll.svg";
export default {
  components: { svgLogo, HomeHeaderDescription, HomeHeaderBg, svgScroll },
  setup() {
    return {};
  },
};
</script>

<style lang="postcss">
.home-header {
  @apply relative bg-center bg-cover bg-no-repeat min-h-[900px] pt-[90px] text-center;
  background-image: url(~@/assets/img/home_header_bg.jpg);
  &__logo {
    @apply w-[200px];
  }
  &__date {
    @apply font-bold text-[36px] font-second mt-14;
  }
  &__title {
    @apply mt-9 max-w-[450px] mx-auto leading-none uppercase;
  }
}
</style>
