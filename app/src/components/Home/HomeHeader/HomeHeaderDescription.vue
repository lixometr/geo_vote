<template>
  <div class="home-header-description">
    <div>
      <div>
        15 июля АО «Росгеология» отмечает свой десятилетний юбилей. Это
        десятилетие было во многом переломным, но очень важным в истории
        Компании и геологоразведки в целом. Предпринятые нами шаги по реализации
        новой стратегии, трансформации бизнес-процессов, развитию производства,
        позволили Холдингу не только дать достойный ответ вызовам мирового
        кризиса, но и сделать существенный шаг вперед по пути укрепления
        бизнеса, внедрения новых технологий и современных решений.
      </div>
      <div v-if="isOpen">
        Сегодня Росгео вступает в новое десятилетие, новую эру геологоразведки,
        где дальнейшее развитие немыслимо в отрыве от современных
        высокотехнологичных трендов - использования космических технологий,
        искусственного интеллекта, робототехники, квантовых вычислений, блокчейн
        и многогих других достижений современной науки. 15 июля в 10:00 в ходе
        онлайн-конференции «Геология будущего», организованной к юбилею
        Компании, наши гости раскроют свой взгляд на геологию будущего,
        расскажут об основных тенденциях грядущего десятилетия и перспективах
        практического применения новых высокотехнологичных трендов в
        геологоразведке.
      </div>
    </div>
    <div class="mt-7">
      <div
        class="home-header-description__plus"
        :class="{ open: isOpen }"
        @click="toggle"
      >
        <svgPlus width="16" />
      </div>
      <div class="home-header-description__read-full" @click="toggle">
        Читать полнотсью
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import svgPlus from "@/assets/icons/plus.svg";
export default defineComponent({
  components: { svgPlus },
  setup() {
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, toggle };
  },
});
</script>

<style lang="postcss">
.home-header-description {
  @apply text-grey-light text-lg max-w-[625px] mx-auto mt-6;
  &__plus {
    @apply w-[38px] h-[38px] mx-auto flex-center 
    bg-yellow text-white transform transition-all duration-300 rounded-full
    hover:bg-yellow-dark cursor-pointer;
    &.open {
      @apply rotate-45;
    }
  }
  &__read-full {
    @apply  mt-3 relative text-grey-light text-lg inline-block cursor-pointer hover:text-yellow transition-all;
    &::before {
      content: "";
      @apply w-full h-[1px] bg-yellow block absolute bottom-0 left-0 right-9;
    }
  }
}
</style>
