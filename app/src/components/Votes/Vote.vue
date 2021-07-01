<template>
  <div class="vote" :class="{active}" @click="$emit('update:active', !active)">
    {{ answer }}
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    answer: String,
    active: Boolean
  },
});
</script>
<style lang="postcss">
.vote {
  @apply text-base py-2 px-2 cursor-pointer border border-transparent;
  &.active {
    @apply border-purple-800;
  }
}
</style>
