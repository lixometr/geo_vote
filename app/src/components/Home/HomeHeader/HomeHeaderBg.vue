<template>
  <div class="home-header-bg">
    <svgLinesLeft
      id="lines_left"
      class="
        animated-lines
        draw-svg
        home-header-bg__lines-left home-header-bg__lines
        rellax
      "
      data-rellax-speed="-2"
    />
    <svgLinesLeftBlur
      class="
        animated-lines
        draw-svg
        home-header-bg__lines-left-blur home-header-bg__lines
        rellax
      "
      data-rellax-speed="-4"
    />
    <svgLinesRight
      class="
        animated-lines
        draw-svg
        home-header-bg__lines-right home-header-bg__lines
        rellax
      "
      data-rellax-speed="-1"
    />
    <svgLinesRightBlur
      class="
        animated-lines
        draw-svg
        home-header-bg__lines-right-blur home-header-bg__lines
        rellax
      "
      data-rellax-speed="-6"
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
    window.addEventListener("load", () => {
      const els = [...document.querySelectorAll(".animated-lines")];
      els.forEach((el) => {
        new Vivus(el, { duration: 200, start: "autostart" }, function (obj) {
          obj.el.classList.add("finished");
        });
      });
    });
    return {};
  },
});
</script>

<style lang="postcss">
.home-header-bg {
  @apply z-[1] absolute top-0 left-0 right-0 bottom-0 overflow-hidden;

  &__lines {
    @apply transform top-[100px] w-[35%] lg:top-[250px] sm:opacity-50;
    &-left {
      @apply absolute left-0 z-20 lg:left-[-6%] sm:top-[100px] sm:w-[50%];
    }
    &-left-blur {
      @apply absolute left-[-15%] z-10 w-[60%] top-[-13%] lg:left-[-25%] lg:top-[15%] sm:hidden;
    }
    &-right {
      @apply absolute right-0 z-20 lg:right-[-5%] sm:top-[35%] sm:w-[70%];
    }
    &-right-blur {
      @apply absolute right-0 z-10 w-[60%] lg:right-[-28%] sm:hidden;
    }
  }
}
</style>
