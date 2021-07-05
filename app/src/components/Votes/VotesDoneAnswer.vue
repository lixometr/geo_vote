<template>
  <div
    class="votes-done-answer"
    :class="{
      active: active,
    }"
  >
    <div class="votes-done-answer__bar">
      <div
        class="votes-done-answer__active-bar"
        :style="{ width: percents + '%' }"
      ></div>
      <span class="relative z-30">{{ answer }}</span>
    </div>

    <div class="votes-done-answer__percents">{{ percents }}%</div>
  </div>
</template>
<script>
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
  @apply text-base relative flex-y-center;
  &__bar {
    @apply relative bg-yellow-light text-center  rounded-md py-3 px-10 flex-1;
  }
  &__active-bar {
    @apply absolute left-0 top-0 bottom-0 h-full bg-[#FFEA7A] rounded-tl-md rounded-bl-md z-20 transition-all;
  }
  &__percents {
    @apply font-medium text-lg w-[40px] ml-5;
  }
}
</style>
