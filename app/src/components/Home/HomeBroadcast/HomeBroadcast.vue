<template>
  <div class="sm:mt-[100px]">
    <div class="container">
      <h2 class="max-w-[650px] mx-auto mb-5 sm:max-w-[400px] sm:mb-8">
        <span>онлайн-трансляция</span> скоро начнется, Присоединяйтесь
      </h2>
    </div>
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
