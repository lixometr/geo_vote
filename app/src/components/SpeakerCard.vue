<template>
  <div class="speaker-card">
    <div class="speaker-card__image-wrapper">
      <div class="speaker-card__image">
        <img :src="image" alt="" class="" />
        <svgCircle class="speaker-card__image-circle" />
      </div>
      <div class="speaker-card__micro">
        <svgMicrophone class="max-h-full max-w-full w-auto" />
      </div>
    </div>
    <div class="speaker-card__name">
      {{ name }}
    </div>
    <div class="speaker-card__position" v-html="position"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import svgMicrophone from "@/assets/icons/microphone.svg";
import svgCircle from "@/assets/icons/test_circle.svg";
export default defineComponent({
  components: { svgMicrophone, svgCircle },
  props: {
    image: String,
    name: String,
    position: String,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss">
.speaker-card {
  @apply px-7 pb-[60px] flex-y-center flex-col text-center w-full max-w-[355px] sm:max-w-none relative;
  &::before {
    content: "";
    @apply block absolute top-[100px] bottom-0 left-0 right-0 
      bg-white z-[-1] transition-all duration-500
        border-b-2 border-[#EFEFEF];
    box-shadow: 0px 60px 68px rgba(0, 0, 0, 0.04);
  }
  &__image-wrapper {
    @apply relative;
  }
  &__image {
    @apply w-[220px] h-[220px] flex-center;
    &-circle {
      @apply absolute w-full h-full transform rotate-[50deg] transition-all duration-500;
      stroke-dasharray: 800;
      stroke-dashoffset: 250;
    }
    img {
      @apply object-cover rounded-full 
          w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all;
    }
  }
  &__micro {
    @apply w-10 h-10 rounded-full bg-yellow flex-center text-white
        absolute right-4 bottom-4 p-2 transition-all;
  }
  &__name {
    @apply mt-9 font-second text-[34px] font-medium leading-tight;
  }
  &__position {
    @apply mt-3 italic text-base;
  }
  &:hover & {
    &__image {
      img {
        /* @apply scale-[1.05]; */
      }
      &-circle {
        stroke-dashoffset: 230;
        stroke-dasharray: 200;
      }
    }
    &__micro {
      @apply transform scale-105;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
    }
  }
  &:hover::before {
    box-shadow: 0px 60px 68px rgba(0, 0, 0, 0.1);
  }
}
</style>
