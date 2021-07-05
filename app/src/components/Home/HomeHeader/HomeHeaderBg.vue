<template>
  <div class="home-header-bg">
    <svgLinesLeft
      id="lines_left"
      class="animated-lines home-header-bg__lines-left home-header-bg__lines"
    />
    <svgLinesLeftBlur
      class="
        animated-lines
        home-header-bg__lines-left-blur home-header-bg__lines
      "
    />
    <svgLinesRight
      class="animated-lines home-header-bg__lines-right home-header-bg__lines"
    />
    <svgLinesRightBlur
      class="
        animated-lines
        home-header-bg__lines-right-blur home-header-bg__lines
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import svgLinesLeft from "@/assets/icons/header_bg/lines_left.svg";
import svgLinesRight from "@/assets/icons/header_bg/lines_right.svg";
import svgLinesLeftBlur from "@/assets/icons/header_bg/lines_left_blur.svg";
import svgLinesRightBlur from "@/assets/icons/header_bg/lines_right_blur.svg";
import Vivus from "vivus";
export default defineComponent({
  components: {
    svgLinesLeft,
    svgLinesLeftBlur,
    svgLinesRight,
    svgLinesRightBlur,
  },
  setup() {
    onMounted(() => {
      const els = [...document.querySelectorAll(".animated-lines")];
      //   els.forEach((el) => {
      //     new Vivus(el, { duration: 200 }, function (obj) {
      //       obj.el.classList.add("finished");
      //     });
      //   });
    });
    return {};
  },
});
</script>

<style lang="postcss">
.home-header-bg {
  @apply z-[1] absolute top-0 left-0 right-0 bottom-0;

  /* .animated-lines {
    stroke: #393939;
    fill-opacity: 0;
    fill: transparent;
  }

  .animated-lines.finished * {
    transition: all 1s;
    fill-opacity: 1;
  } */
  &__lines {
    @apply transform top-[100px] w-[35%];
    &-left {
      @apply absolute left-0 z-20;
    }
    &-left-blur {
      @apply absolute left-0 z-10;
    }
    &-right {
      @apply absolute right-0 z-20;
    }
    &-right-blur {
      @apply absolute right-0 z-10;
    }
  }
}
</style>
