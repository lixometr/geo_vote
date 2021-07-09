<template>
  <div>
    <div class="text-center font-medium mb-6">
      Выберите один или несколько вариантов
    </div>

    <div class="space-y-3.5">
      <Vote
        v-for="(vote, idx) in votes"
        :key="idx"
        v-bind="vote"
        v-model:active="activeVotes[vote.id]"
      />
    </div>
    <button
      class="
        mt-11
        w-full
        bg-yellow-light
        py-4
        px-4
        flex-center
        uppercase
        font-medium
        hover:bg-yellow
        transition-all
        leading-none
        text-sm
      "
      @click="sendAnswers"
    >
      <span>Проголосовать</span> <svgVoteCheckmark width="40" class="ml-5" />
    </button>
  </div>
</template>
<script>
import Vote from "@/components/Votes/Vote.vue";
import { computed, defineComponent, inject, ref } from "vue";
import { useAppAxios } from "@/composables/useAppAxios";
import svgVoteCheckmark from "@/assets/icons/vote_checkmark.svg";
export default defineComponent({
  props: {
    votes: {
      type: Array,
      default: () => [],
    },
  },
  components: { Vote, svgVoteCheckmark },
  setup(props, { emit }) {
    const votes = computed(() => props.votes);
    const activeVotes = ref({});
    const { exec: _sendAnswers, data: sendAnswersData } = useAppAxios();
    const sendAnswers = async () => {
      const answers = Object.keys(activeVotes.value).filter(
        (id) => !!activeVotes.value[id]
      );
      const toSend = {
        answers,
      };
      await _sendAnswers({
        method: "POST",
        url: "/vote/",
        data: toSend,
      });
      emit("send");
    };
    return { activeVotes, sendAnswers };
  },
});
</script>
<style lang="postcss"></style>
