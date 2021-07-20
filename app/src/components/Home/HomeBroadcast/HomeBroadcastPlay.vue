<template>
  <div class="play-button">
    <div class="play-button__inner">
      <svgPlay width="15" class="play-button__play" />
      <svgPlayCircle class="play-button__circle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import svgPlay from "@/assets/icons/play.svg";
import svgPlayCircle from "@/assets/icons/play_circle.svg";
export default defineComponent({
  components: { svgPlay, svgPlayCircle },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss">
.play-button {
  @apply text-yellow flex-center w-[180px] h-[180px] 
        backdrop-filter backdrop-blur-[11px] bg-white bg-opacity-10 rounded-full relative cursor-pointer
        sm:w-[90px] sm:h-[90px];
  &::before {
    content: "";
    @apply absolute bottom-5 right-5 block w-[14px] h-[14px] bg-yellow rounded-full transform transition-all duration-500
        sm:w-[7px] sm:h-[7px] sm:right-2.5 sm:bottom-2.5;
    transform-origin: -56px -56px;
    @screen sm {
      transform-origin: -28px -28px;
    }
  }
  &__inner {
    @apply w-[70px] h-[70px] bg-yellow flex-center rounded-full transition-all sm:w-[35px] sm:h-[35px];
  }
  &__play {
    @apply transition-all sm:w-[7px] text-white;
  }
  &__circle {
    @apply absolute top-0 left-0 right-0 bottom-0 transform rotate-[45deg] transition-all duration-300;
    stroke-dasharray: 700;
    stroke-dashoffset: 300;
  }
  &:hover & {
    &__circle {
      /* stroke-dashoffset: 0; */
    }
    &__inner {
      @apply bg-yellow-light;
    }
    &__play {
      @apply text-white;
    }
  }
  &:hover::before {
    @apply rotate-[260deg];
  }
}
</style>
