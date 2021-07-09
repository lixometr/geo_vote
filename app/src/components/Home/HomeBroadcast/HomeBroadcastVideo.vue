<template>
  <div class="home-broadcast-video">
    <svgScroll class="mx-auto block" />

    <div class="relative">
      <div class="home-broadcast-video__wrapper">
        <div class="aspect-w-11 aspect-h-6">
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
          class="home-broadcast-video__lines home-broadcast-video__lines-left"
        />
        <svgLinesRight
          class="home-broadcast-video__lines home-broadcast-video__lines-right"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import svgLinesLeft from "@/assets/icons/broadcast_lines_left.svg";
import svgLinesRight from "@/assets/icons/broadcast_lines_right.svg";
import { defineComponent, ref } from "vue";
import HomeBroadcastVideoPlaceholder from "./HomeBroadcastVideoPlaceholder.vue";
import svgScroll from "@/assets/icons/header_scroll.svg";
import YouTube from "vue3-youtube";

export default defineComponent({
  components: {
    YouTube,
    svgLinesLeft,
    svgLinesRight,
    HomeBroadcastVideoPlaceholder,
    svgScroll,
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
    return { isPlaying, play, youtube, onReady };
  },
});
</script>

<style lang="postcss">
.home-broadcast-video {
  @apply relative;
  &__wrapper {
    @apply relative max-w-[960px] mx-auto z-20 lg:w-[90%];
    box-shadow: 0 40px 50px rgba(0, 0, 0, 0.4);
  }
  &__bg {
    @apply absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center
        px-10 overflow-hidden;
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
