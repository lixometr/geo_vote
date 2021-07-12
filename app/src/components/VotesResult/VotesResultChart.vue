<template>
  <div class="">
    <div class="space-y-3 font-medium font-third">
      <div v-for="(item, idx) in items" :key="idx" class="flex-y-center">
        <div class="w-[400px] mr-5 flex">
          <span class="mr-3">{{ idx + 1 }}</span
          >{{ item.name }}
        </div>
        <div class="flex-1">
          <div
            class="min-h-[60px] bg-yellow-light"
            :style="{ width: item.cnt * k + '%' }"
          ></div>
        </div>
        <div class="w-[40px] ml-5">
          <div class="text-[24px] font-medium">{{ item.cnt }}%</div>
        </div>
      </div>
    </div>
    <!-- <apexchart
      class="flex-1"
      type="bar"
      width="100%"
      height="100%"
      :options="chartOptions"
      :series="series"
    ></apexchart> -->
  </div>
</template>
<script>
import { computed, defineComponent, toRefs } from "@vue/runtime-core";
export default defineComponent({
  props: {
    stats: {
      type: Object,
      default: () => ({}),
    },
    answers: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { stats, answers } = toRefs(props);
    const chartOptions = computed(() => {
      const categories = answers.value?.map((answer) => answer.answer) || [];
      const opts = {
        chart: {
          type: "bar",
          offsetX: 0,
          width: "100%",
          offsetY: 0,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "100%",
            endingShape: "rounded",
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val + "%";
          },
          alight: "right",
          inside: false,
          style: {
            fontSize: "24px",
            colors: ["#333333"],
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        colors: ["#FFDB1C"],
        grid: {
          xaxis: {
            lines: {
              show: false, //or just here to disable only x axis grids
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          categories,

          labels: {
            show: false,
            rotate: 0,
            hideOverlappingLabels: false,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,

            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: 0,
            offsetY: 0,
            format: undefined,
            formatter: undefined,
            datetimeUTC: true,
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
        },
        yaxis: {
          // max: 100,

          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val;
            },
          },
        },

        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      };
      return opts;
    });
    const series = computed(() => {
      const total = stats.value.total || 0;
      const data = stats.value?.stats?.map((item) => {
        if (total < 1) return 0;
        return Math.round((item.cnt / total) * 100);
      });
      return [
        {
          name: "Выбрано",
          data: data || [],
        },
      ];
    });
    const items = computed(() => {
      const total = stats.value.total || 0;

      const data = stats.value?.stats?.map((item) => {
        const cnt = total < 1 ? 0 : Math.round((item.cnt / total) * 100);
        const answer = answers.value.find((a) => a.id === item.id);
        return {
          cnt,
          name: answer.answer,
        };
      });
      return data;
    });
    const k = computed(() => {
      return 100 / Math.max(...items.value.map((item) => item.cnt));
    });
    return { chartOptions, series, k, items };
  },
});
</script>
<style lang=""></style>
