<template>
  <div >
    <home-header />
    <home-speakers />
    <home-broadcast  />
    <votes-block />
    <a-footer />
  </div>
</template>
<script>
import VotesBlock from "@/components/VotesBlock/VotesBlock.vue";
import HomeHeader from "@/components/Home/HomeHeader/HomeHeader.vue";
import HomeSpeakers from "@/components/Home/HomeSpeakers/HomeSpeakers.vue";
import HomeBroadcast from '@/components/Home/HomeBroadcast/HomeBroadcast.vue';
import AFooter from '@/components/AFooter/AFooter.vue';
export default {
  components: {
     VotesBlock,
    HomeHeader,
    HomeSpeakers,
    HomeBroadcast,
    AFooter,
  },
};
</script>
