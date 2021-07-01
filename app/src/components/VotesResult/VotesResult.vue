<template>
  <div>
    {{ stats }}
  </div>
</template>
<script>
import { useAppAxios } from "@/composables/useAppAxios";
import { inject, ref } from "vue";

export default {
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
    return { stats };
  },
};
</script>
<style lang=""></style>
