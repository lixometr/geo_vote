<template>
  <div class="text-center pt-20">
    <h2>Всего голосов:</h2>
    <div class="text-5xl mt-2 text-yellow">{{ total }}</div>
  </div>
</template>

<script lang="ts">
import { useAppAxios } from "@/composables/useAppAxios";
import { computed, inject, ref } from "vue";
export default {
  setup() {
    const { exec: _fetchStats, data: dataResult } = useAppAxios();
    const stats = ref({} as any);
    const fetchStats = async () => {
      await _fetchStats({
        method: "GET",
        url: "/vote/stats",
      });
      stats.value = dataResult.value;
    };
    fetchStats();

    const socket = inject<any>("socket");
    socket.on("voteStats", (newStats) => {
      stats.value = newStats;
    });
    const statistics = computed(() => stats.value.stats || []);
    const total = computed(() => stats.value.total);
    return { total };
  },
};
</script>

<style lang="scss"></style>
