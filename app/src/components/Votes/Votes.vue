<template>
  <div>
    <h2 class="text-center uppercase text-2xl mb-4">Как вы считаете, любят ли пингвины фрикадельки?</h2>
    <div class="space-y-1">
      <Vote
        v-for="(vote, idx) in votes"
        :key="idx"
        v-bind="vote"
        v-model:active="activeVotes[vote.id]"
      />
    </div>
    <button
      class="
        inline-block
        mt-5
        py-2
        px-7
        bg-purple-600
        rounded-sm
        shadow-sm
        text-white
        mx-auto
      "
      @click="sendAnswers"
    >
      Отправить
    </button>
  </div>
</template>
<script>
import Vote from "@/components/Votes/Vote.vue";
import { computed, defineComponent, inject, ref } from "vue";
import { useAppAxios } from "@/composables/useAppAxios";
export default defineComponent({
  props: {
    votes: {
      type: Array,
      default: () => [],
    },
  },
  components: { Vote },
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
