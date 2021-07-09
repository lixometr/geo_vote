<template>
  <div class="flex-y-center justify-between max-w-[220px] mx-auto">
    <a
      :href="item.link"
      target="_blank"
      v-for="(item, idx) in items"
      :key="idx"
      class="footer-soc-link"
    >
      <component :is="item.icon" :width="item.width" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import svgFacebook from "@/assets/icons/facebook.svg";
import svgVk from "@/assets/icons/vk.svg";
import svgInstagram from "@/assets/icons/instagram.svg";
import svgYoutube from "@/assets/icons/youtube.svg";
import svgRss from "@/assets/icons/rss.svg";
export default defineComponent({
  setup() {
    const items = [
      {
        link: "https://www.facebook.com/rusgeology",
        icon: svgFacebook,
        width: 8,
      },
      {
        link: "https://vk.com/rusgeology",
        icon: svgVk,
        width: 14,
      },
      {
        link: "https://www.instagram.com/rusgeology/",
        icon: svgInstagram,
        width: 14,
      },
      {
        link: "https://www.youtube.com/c/rusgeology",
        icon: svgYoutube,
        width: 16,
      },
      // {
      //   link: "#",
      //   icon: svgRss,
      //   width: 14,
      // },
    ];
    return { items };
  },
});
</script>

<style lang="postcss">
.footer-soc-link {
  @apply text-[#666666] transition-all hover:text-yellow;
}
</style>
