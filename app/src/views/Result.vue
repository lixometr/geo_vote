<template>
  <div class="results">
    <div class="container">
      <!-- <router-link to="/"
        ><img
          src="@/assets/img/results_logo.jpg"
          class="results__logo"
          alt="logo"
        />
      </router-link> -->
      <h2 class="mb-14 max-w-[920px] mx-auto">
        Какие из затронутых тем будут <br />
        <span>лидирующими</span> в геологии на ваш взгляд?
      </h2>
      <div class="text-[24px] text-center font-medium mb-10 text-[#666666]">
        Результаты опроса
      </div>
      <votes-result />
    </div>
    <a-footer />
  </div>
</template>
<script>
import VotesResult from "@/components/VotesResult/VotesResult.vue";
import AFooter from "@/components/AFooter/AFooter.vue";
export default {
  components: { VotesResult, AFooter },
};
</script>
<style lang="postcss">
.results {
  @apply pt-[50px];
  &__logo {
    @apply mx-auto mb-16;
  }
}
</style>
