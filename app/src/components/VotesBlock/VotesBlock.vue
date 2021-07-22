<template>
  <div class="sm:mt-[150px]">
    <div class="container">
      <h2 class="max-w-[800px] mx-auto mb-4">
        Какие из затронутых тем будут <span>лидирующими</span> в геологии на ваш
        взгляд?
      </h2>
      <div class="max-w-[640px] mx-auto">
        <votes-done
          v-if="hasAnswer"
          :activeAnswers="chosenAnswers"
          :votes="votes"
        />
        <votes v-else @send="onSend" :votes="votes" />
      </div>
    </div>
  </div>
</template>
<script>
import Votes from "@/components/Votes/Votes.vue";
import { inject, ref, computed, nextTick } from "vue";
import { useAppAxios } from "@/composables/useAppAxios";
import VotesDone from "../Votes/VotesDone.vue";
import { useCookie } from "@vue-composable/cookie";
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
    const { cookie, setCookie } = useCookie("vote_answers");

    const fetchUserResults = async () => {
      await _fetchUserResults({
        method: "GET",
        url: "/vote/current",
      });
    };
    fetchUserResults();
    const onSend = (answers) => {
      setCookie(answers.join(","), {
        expires: 100,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      })
      cookie.value = answers.join(",");
      fetchUserResults();
    };
    const chosenAnswers = computed(() => {
      return (
        cookie.value?.split(",") ||
        []
      );
    });
    const hasAnswer = computed(() => {
      return !!chosenAnswers.value.length;
    });

    return {
      onSend,
      totalVotes,
      totalData,
      hasAnswer,
      chosenAnswers,
      fetchUserResults,
      votes,
    };
  },
};
</script>
<style lang=""></style>
