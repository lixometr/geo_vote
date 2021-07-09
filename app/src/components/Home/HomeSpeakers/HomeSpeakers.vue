<template>
  <div class="pt-16 container">
    <h2 class="max-w-[430px] mx-auto mb-3">
      <span>Спикеры </span> онлайн‑трансляции
    </h2>
    <home-speakers-slider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeSpeakersSlider from "./HomeSpeakersSlider.vue";

export default defineComponent({
  components: { HomeSpeakersSlider },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
