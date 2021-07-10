<template>
  <div class="space-y-10">
    <div v-for="(item, idx) in limitItems" :key="idx">
      <speaker-card v-bind="item" />
    </div>
    <show-full :text="'Открыть полностью'" v-model:open="isOpen" />
  </div>
</template>

<script lang="ts">
import ShowFull from "@/components/ShowFull/ShowFull.vue";
import SpeakerCard from "@/components/SpeakerCard.vue";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  components: { SpeakerCard, ShowFull },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const limitItems = computed(() => {
      if (!isOpen.value) {
        return props.items.slice(0, 3);
      }
      return props.items;
    });
    return { isOpen, limitItems };
  },
});
</script>

<style scoped></style>
