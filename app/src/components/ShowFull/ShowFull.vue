<template>
  <div class="flex flex-col items-center">
    <div class="show-full__plus" :class="{ open }" @click="toggle">
      <svgPlus width="16" />
    </div>
    <div class="show-full__read-full" @click="toggle" v-if="!open">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import svgPlus from "@/assets/icons/plus.svg";

export default defineComponent({
  components: { svgPlus },

  props: {
    open: Boolean,
    text: String,
  },
  setup(props, { emit }) {
    const toggle = () => {
      emit("update:open", !props.open);
    };
    return { toggle };
  },
});
</script>

<style lang="postcss">
.show-full {
  &__plus {
    @apply w-[38px] h-[38px] mx-auto flex-center 
    bg-yellow text-white transform transition-all duration-300 rounded-full
    hover:bg-yellow-dark cursor-pointer;
    &.open {
      @apply rotate-45;
    }
  }
  &__read-full {
    @apply mt-3 relative text-grey-light text-lg inline-block cursor-pointer hover:text-yellow transition-all;
    &::before {
      content: "";
      @apply w-full h-[1px] bg-yellow block absolute bottom-0 left-0 right-9;
    }
  }
}
</style>
