<template>
  <div>
    <votes-done v-if="hasAnswer"  :answers="chosenAnswers" :votes="votes" />
    <votes v-else @send="fetchUserResults" :votes="votes" />
    <div>Всего ответов: {{ totalVotes }}</div>
  </div>
</template>
<script>
import Votes from "@/components/Votes/Votes.vue";
import { inject, ref, computed, nextTick } from "vue";
import { useAppAxios } from "@/composables/useAppAxios";
import VotesDone from '../Votes/VotesDone.vue';

export default {
  components: { Votes, VotesDone },
  setup() {
    const socket = inject("socket");
    const totalVotes = ref(0);
    const { exec: _fetchVotes, data: votesData } = useAppAxios();

    const fetchVotes = async () => {
      await _fetchVotes({
        url: "/vote/answers",
        method: "GET",
      });
    };
    fetchVotes();
    const votes = computed(() => votesData.value);
    const { exec: _fetchTotalVotes, data: totalData } = useAppAxios();
    const fetchTotalVotes = async () => {
      await _fetchTotalVotes({
        method: "GET",
        url: "/vote/total",
      });
      totalVotes.value = totalData.value.total;
    };
    fetchTotalVotes();
    socket.on("totalVotes", (newTotalVotes) => {
      totalVotes.value = newTotalVotes;
    });
    const { exec: _fetchUserResults, data: userResultsData } = useAppAxios();
    const fetchUserResults = async () => {
      await _fetchUserResults({
        method: "GET",
        url: "/vote/current",
      });
    };
    fetchUserResults();
    const chosenAnswers = computed(() => {
      return userResultsData.value?.answers || [];
    });
    const hasAnswer = computed(() => {
      return !!chosenAnswers.value.length;
    });

    return { totalVotes, totalData, hasAnswer, chosenAnswers, fetchUserResults, votes};
  },
};
</script>
<style lang=""></style>
