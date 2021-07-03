<template>
  <div>
    <votes-block />
    <div class="text-center">
      <router-link
        to="/result"
        class="
        
          inline-block
          mt-8
          py-1.5
          px-4
          rounded-sm
          border border-purple-600
          hover:bg-purple-600 hover:text-white
        "
        >Показать результаты</router-link
      >
    </div>
  </div>
</template>
<script>
import VotesBlock from "@/components/VotesBlock/VotesBlock.vue";
export default {
  components: { VotesBlock },
};
</script>
