<template>
  <div class="home-broadcast-video-placeholder">
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"
    ></div>
    <div
      class="
        absolute
        left-1/2
        top-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <home-broadcast-play @click="$emit('play')" />
    </div>
    <div
      class="
        text-lg text-white text-center
        absolute
        bottom-2
        left-0
        right-0
        sm:text-sm sm:bottom-1
      "
    >
      Нажмите, чтобы воспроизвести
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeBroadcastPlay from "./HomeBroadcastPlay.vue";
export default defineComponent({
  components: { HomeBroadcastPlay },
});
</script>

<style lang="postcss">
.home-broadcast-video-placeholder {
  @apply bg-cover bg-center bg-no-repeat;
  background-image: url(~@/assets/img/broadcast_placeholder.jpg);
  @screen sm {
    background-image: url(~@/assets/img/broadcast_placeholder_mob.jpeg);
  }
}
</style>
