<template>
  <div class="footer-bottom">
    <div class="container flex justify-between">
      <div>
        <div>© 2017-2020 АО «Росгеология»</div>
        <div>Все права защищены</div>
      </div>
      <div class="text-right flex-y-center">
        <div class="max-w-[160px] mr-3.5">Создание сайтов – интернет-агентство «Артус»</div>
        <div>
          <img src="@/assets/img/artus_logo.png" alt="artus_logo" width="50"/> 
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="postcss">
.footer-bottom {
  @apply bg-[#F7F7F7] py-6 mt-9 text-xs leading-tight;
}
</style>
