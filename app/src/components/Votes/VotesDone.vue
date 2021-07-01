<template>
  <div>
    <div
      v-for="(vote, idx) in votes"
      :key="idx"
      class="border border-transparent"
      :class="{
        ' border-purple-600':
          answers.findIndex((answer) => answer.answer === vote.id) > -1,
      }"
    >
      {{ vote.answer }}
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    votes: {
      type: Array,
      default: () => [],
    },
    answers: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
<style lang=""></style>
