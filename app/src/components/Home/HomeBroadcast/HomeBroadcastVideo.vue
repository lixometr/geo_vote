<template>
  <div class="home-broadcast-video">
    <svgScroll class="mx-auto block sm:hidden" />

    <div class="relative">
      <div class="home-broadcast-video__wrapper">
        <div class="aspect-w-11 aspect-h-6 sm:aspect-h-8">
          <home-broadcast-video-placeholder
            class=""
            v-if="!isPlaying"
            @play="play"
          />
          <div class="bg-white" v-else>
            <YouTube
              ref="youtube"
              @ready="onReady"
              width="100%"
              height="100%"
              class="absolute w-full h-full"
              src="https://www.youtube.com/watch?v=BHACKCNDMW8"
            ></YouTube>
          </div>
        </div>
      </div>
      <div class="home-broadcast-video__bg">
        <svgLinesLeft
          class="
            home-broadcast-video__lines home-broadcast-video__lines-left
            draw-svg
          "
        />
        <svgLinesRight
          class="
            home-broadcast-video__lines home-broadcast-video__lines-right
            draw-svg
          "
        />
      </div>
      <div class="home-broadcast-video__bg-mob">
        <svgLinesMob class="home-broadcast-video__lines draw-svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import svgLinesLeft from "@/assets/icons/broadcast_lines_left.svg";
import svgLinesRight from "@/assets/icons/broadcast_lines_right.svg";
import svgLinesMob from "@/assets/icons/broadcast_lines_mob.svg";
import { defineComponent, ref } from "vue";
import HomeBroadcastVideoPlaceholder from "./HomeBroadcastVideoPlaceholder.vue";
import svgScroll from "@/assets/icons/header_scroll.svg";
import YouTube from "vue3-youtube";
import Vivus from "vivus";
export default defineComponent({
  components: {
    YouTube,
    svgLinesLeft,
    svgLinesRight,
    HomeBroadcastVideoPlaceholder,
    svgScroll,
    svgLinesMob,
  },
  setup() {
    const isPlaying = ref(false);
    const play = () => {
      isPlaying.value = true;
    };
    const youtube = ref();
    const onReady = () => {
      youtube.value.playVideo();
    };
    window.addEventListener("load", () => {
      const els = [
        ...document.querySelectorAll(".home-broadcast-video__lines"),
      ];
      els.forEach((el) => {
        new Vivus(el, { duration: 100 }, function (obj) {
          obj.el.classList.add("finished");
        });
      });
    });
    return { isPlaying, play, youtube, onReady };
  },
});
</script>

<style lang="postcss">
.home-broadcast-video {
  @apply relative pb-[130px];
  &__wrapper {
    @apply relative max-w-[960px] mx-auto z-20 lg:w-[90%];
    box-shadow: 0 40px 50px rgba(0, 0, 0, 0.4);
    @screen sm {
      box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
    }
  }
  &__bg {
    @apply absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center
        px-10 overflow-hidden sm:hidden;
  }
  &__bg-mob {
    @apply absolute bottom-0 transform left-1/2 translate-y-full -translate-x-1/2 hidden sm:block ;
    svg {
      @apply h-auto w-[160px] flex-none min-w-0 mx-auto;
    }
  }
  &__lines {
    @apply flex-1 min-w-[800px];
  }
  &__lines-left {
    @apply mr-10;
  }
  &__lines-right {
  }
}
</style>
