e
<template>
  <div
    class="vote"
    :class="{ active }"
    @click="$emit('update:active', !active)"
  >
    <transition name="t-fade">
      <span v-if="active" class="vote__active-bar">
        <svgCheckmark width="12" />
      </span>
    </transition>
    <span class="relative z-20">{{ answer }}</span>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import svgCheckmark from "@/assets/icons/checkmark.svg";
export default defineComponent({
  components: { svgCheckmark },
  props: {
    answer: String,
    active: Boolean,
  },
});
</script>
<style lang="postcss">
.vote {
  @apply bg-[#F3F3F3] text-center rounded-md py-3 px-10 text-base cursor-pointer relative transition-all select-none
    hover:bg-[#DADADA];
  &::before {
    content: "";
    @apply absolute left-0 right-0 bottom-0 top-0 bg-[#666666] transform scale-x-0 translate-x-1 transition-all z-10 rounded-md
      origin-left ;
  }
  &.active {
    @apply text-white ;
  }
  &.active::before {
    @apply scale-x-100 translate-x-0;
  }
  &__active-bar {
    @apply absolute left-0 top-0 bottom-0 h-full w-[33px] bg-[#FFDB1C] rounded-tl-md rounded-bl-md
        text-[#666666] flex-center z-20;
  }
}
</style>
