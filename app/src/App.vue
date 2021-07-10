<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Rellax from "rellax";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    window.addEventListener("load", () => {
      new Rellax(".rellax");
    });
  },
});
</script>

<style lang="postcss">
/* @import "~@/assets/css/styles.css"; */
</style>
