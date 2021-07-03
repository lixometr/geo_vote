<template>
  <div>
    <votes-result-chart :stats="stats" :answers="answers" />
  </div>
</template>
<script>
import { useAppAxios } from "@/composables/useAppAxios";
import { computed, inject, ref } from "vue";
import VotesResultChart from "./VotesResultChart.vue";

export default {
  components: { VotesResultChart },
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
    const { exec: _fetchAnswers, data: answers } = useAppAxios();
    const fetchAnswers = async () => {
      await _fetchAnswers({
        method: "GET",
        url: "/vote/answers",
      });
    };
    fetchAnswers();
    const socket = inject("socket");
    socket.on("voteStats", (newStats) => {
      stats.value = newStats;
    });
    const statistics = computed(() => stats.value.stats || []);
    return { stats, answers, statistics };
  },
};
</script>
<style lang=""></style>
