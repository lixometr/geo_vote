<template>
  <div>
    <div class="text-center font-medium mb-6">Результаты опроса</div>
    <div class="space-y-3.5">
      <votes-done-answer
        v-for="(vote, idx) in votes"
        :key="idx"
        v-bind="vote"
        :active="
          activeAnswers.findIndex((answer) => answer.answer === vote.id) > -1
        "
        :stat="statistics.find((item) => item.id === vote.id)"
        :total="stats.total"
      />
    </div>
    <div class="text-sm uppercase mt-10 font-medium text-center font-third">Благодарим за ваш голос!</div>
  </div>
</template>
<script>
import { computed, defineComponent, inject, ref } from "vue";
import VotesDoneAnswer from "./VotesDoneAnswer.vue";
import { useAppAxios } from "@/composables/useAppAxios";
export default defineComponent({
  components: { VotesDoneAnswer },
  props: {
    votes: {
      type: Array,
      default: () => [],
    },
    activeAnswers: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { exec: _fetchStats, data: dataResult } = useAppAxios();
    const stats = ref({});
    const fetchStats = async () => {
      await _fetchStats({
        method: "GET",
        url: "/vote/stats",
      });
      stats.value = dataResult.value;
    };
    fetchStats();
    const socket = inject("socket");
    socket.on("voteStats", (newStats) => {
      stats.value = newStats;
    });
    const statistics = computed(() => stats.value.stats || []);
    return { stats, statistics };
  },
});
</script>
<style lang="postcss"></style>
