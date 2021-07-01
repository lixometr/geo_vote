<template>
  <div>
    <votes-block />
    <router-link
      to="/result"
      class="inline-block mt-8 py-1.5 px-4 rounded-sm border border-purple-600 hover:bg-purple-600 hover:text-white"
      >Покзаать результаты</router-link
    >
  </div>
</template>
<script>
import VotesBlock from '@/components/VotesBlock/VotesBlock.vue';
export default {
  components: { VotesBlock },
};
</script>
