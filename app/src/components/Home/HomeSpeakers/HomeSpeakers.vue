<template>
  <div class="pt-16 container relative z-50">
    <h2 class="max-w-[430px] mx-auto mb-3 sm:max-w-[280px] sm:mb-10">
      <span>Спикеры </span> онлайн‑трансляции
    </h2>
    <home-speakers-slider :items="items" v-if="showSlider" />
    <home-speakers-list :items="items" v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import HomeSpeakersList from "./HomeSpeakersList.vue";
import HomeSpeakersSlider from "./HomeSpeakersSlider.vue";
import speakersData from "./speakers-data";

export default defineComponent({
  components: { HomeSpeakersSlider, HomeSpeakersList },
  setup() {
    const items = computed(() => {
      return speakersData;
    });
    const showSlider = ref(true);
    const checkResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        showSlider.value = false;
      } else {
        showSlider.value = true;
      }
    };
    window.addEventListener("resize", checkResize);
    checkResize();
    return { items, showSlider };
  },
});
</script>

<style scoped></style>
