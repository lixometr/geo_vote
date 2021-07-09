<template>
  <div class="home-speakers-slider">
    <div class="home-speakers-slider__arrows">
      <svgArrowLeft
        class="home-speakers-slider__arrow-left home-speakers-slider__arrow"
      />
      <svgArrowRight
        class="home-speakers-slider__arrow-right home-speakers-slider__arrow"
      />
    </div>
    <Swiper v-bind="sliderOpts" class="home-speakers-slider__slider">
      <SwiperSlide v-for="(item, idx) in items" :key="idx">
        <speaker-card v-bind="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SpeakerCard from "@/components/SpeakerCard.vue";
import "swiper/swiper-bundle.min.css";
import { SwiperOptions } from "swiper";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import svgArrowLeft from "@/assets/icons/arrow_left.svg";
import svgArrowRight from "@/assets/icons/arrow_right.svg";
import speakersData from "./speakers-data";
export default defineComponent({
  components: { Swiper, SwiperSlide, SpeakerCard, svgArrowLeft, svgArrowRight },
  setup() {
    const items = computed(() => {
      return speakersData;
    });
    const sliderOpts: SwiperOptions = {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        prevEl: ".home-speakers-slider__arrow-left",
        nextEl: ".home-speakers-slider__arrow-right",
      },
    };
    return { items, sliderOpts };
  },
});
</script>

<style lang="postcss">
.home-speakers-slider {
  &__arrows {
    @apply flex-y-center justify-end mb-8;
  }
  &__arrow {
    @apply text-[#666666] w-[12px] cursor-pointer hover:text-yellow transition-all select-none;
  }
  &__arrow-left {
  }
  &__arrow-right {
    @apply ml-8;
  }
  &__slider {
    @apply pb-24 !important;
  }
}
</style>
