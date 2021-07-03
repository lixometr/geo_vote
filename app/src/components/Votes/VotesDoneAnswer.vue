<template>
  <div
    class="votes-done-answer"
    :class="{
      active: active,
    }"
  >
    {{ answer }} ({{ percents }}%)
  </div>
</template>
<script>
import result from "@/router/routes/result";
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    answer: String,
    active: Boolean,
    stat: {
      type: Object,
      default: () => ({}),
    },
    total: Number,
  },
  setup(props) {
    const { stat, total } = toRefs(props);
    const percents = computed(() => {
      const result = (stat.value.cnt / total.value) * 100;
      return Math.round(result);
    });
    return { percents };
  },
});
</script>
<style lang="postcss">
.votes-done-answer {
  @apply bg-gray-400 rounded-sm border border-transparent px-4 py-2;
  &.active {
    @apply bg-purple-600 text-white;
  }
}
</style>
