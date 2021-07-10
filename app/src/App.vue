<template>
  <div class="app">
    <router-view></router-view>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex-center"
      v-if="!isLoaded"
    >
      <Spinner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Rellax from "rellax";
import Spinner from "@/components/Spinner/Spinner.vue";
export default defineComponent({
  name: "App",
  components: { Spinner },
  setup() {
    const isLoaded = ref(false);
    window.addEventListener("load", () => {
      new Rellax(".rellax");
      isLoaded.value = true;
    });
    return { isLoaded };
  },
});
</script>

<style lang="postcss">
/* @import "~@/assets/css/styles.css"; */
</style>
