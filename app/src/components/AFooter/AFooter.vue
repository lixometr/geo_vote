<template>
  <footer class="footer">
    <div class="container flex justify-between">
      <div class="flex-1">
        <div class="max-w-[275px] mb-5">
          <strong class="font-bold mb-1 text-base"> АО «Росгеология» </strong>
          <div>
            Адрес: 117246, Россия, г.Москва, Херсонская улица, д.43 корп. 3,
            бизнес-центр «Газойл Сити»
          </div>
        </div>
        <div class="mb-7">
          <div>
            Тел.: <a href="tel:+7 (495) 988-58-07">+7 (495) 988-58-07</a>,
            <a href="tel:+7 (495) 988-58-09">+7 (495) 988-58-09</a>
          </div>
          <div>
            Факс: <a href="tel:+7 (499) 271-97-60">+7 (499) 271-97-60</a>
          </div>
        </div>
        <div>
          Email: <a href="mailto:info@rusgeology.ru">info@rusgeology.ru</a>
        </div>
      </div>
      <div class="flex-1 text-center">
        <b class="block mb-4">Мы в социальных сетях</b>
        <div><a-footer-soc /></div>
      </div>
      <div class="flex-1 text-right flex flex-col items-end">
        <div class="mb-5">
          <b class="text-base block mb-1">Горячая линия </b>
          <div class="max-w-[300px]">
            по противодействию коррупции, мошенничеству, хищениям и другим
            злоупотреблениям
          </div>
        </div>
        <div class="mb-7">
          <div class="mb-1">
            Тел.: <a href="tel:8-800-777-19-19">8-800-777-19-19</a>
          </div>
          <div>
            Email:
            <a href="mailto:hotline@rusgeology.ru">hotline@rusgeology.ru</a>
          </div>
        </div>
        <div class="flex">
          <a href="#" class="flex-y-center mr-7">
            <svgDanger width="26" class="mr-2" />
            Информация о сайте
          </a>
          <a href="#" class="flex-y-center">
            <svgSitemap width="26" class="mr-2" />
            Карта сайта
          </a>
        </div>
      </div>
    </div>
    <a-footer-bottom />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AFooterBottom from "./AFooterBottom.vue";
import AFooterSoc from "./AFooterSoc.vue";
import svgDanger from "@/assets/icons/danger.svg";
import svgSitemap from "@/assets/icons/sitemap.svg";
export default defineComponent({
  components: { AFooterBottom, AFooterSoc, svgDanger, svgSitemap },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss">
.footer {
  @apply mt-10 border-t border-[#666666] pt-10 text-grey-400 text-sm;
  a {
    @apply hover:underline;
  }
}
</style>
