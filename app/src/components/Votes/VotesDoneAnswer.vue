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
      <svgCheckmark width="12" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666]" v-if="active" />
    </div>

    <div class="votes-done-answer__percents">{{ percents }}%</div>
  </div>
</template>
<script>
import { computed, defineComponent, toRefs } from "vue";
import svgCheckmark from "@/assets/icons/checkmark.svg";
export default defineComponent({
  components: { svgCheckmark },
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
      return result.toFixed(2);
    });
    return { percents };
  },
});
</script>
<style lang="postcss">
.votes-done-answer {
  @apply text-base relative flex-y-center;
  &__bar {
    @apply relative bg-[#F3F3F3] text-center  rounded-md py-3 px-10 flex-1;
  }
  &__active-bar {
    @apply absolute left-0 top-0 bottom-0 h-full bg-yellow-light rounded-md z-20 transition-all;
  }
  &__percents {
    @apply font-medium text-lg w-[40px] ml-5;
  }
}
</style>
