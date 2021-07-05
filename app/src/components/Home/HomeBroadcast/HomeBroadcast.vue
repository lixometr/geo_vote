<template>
  <div>
    <h2 class="max-w-[650px] mx-auto mb-5">
      <span>онлайн-трансляция</span> скоро начнется, Присоединяйтесь
    </h2>
    <div>
      <home-broadcast-video />
    </div>
  </div>
</template>

<script>
import HomeBroadcastVideo from "./HomeBroadcastVideo.vue";
export default {
  components: { HomeBroadcastVideo },
};
</script>

<style lang="postcss"></style>
