<template>
  <div>
    <apexchart
      type="bar"
      height="450"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="flex justify-around px-5 text-sm  md:text-sm md:break-all ">
      <div class="px-1.5 flex-1" v-for="(item, idx) in answers" :key="idx">
        {{ item.answer }}
      </div>
    </div>
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
          height: 450,
          background: "#F7F7F7",
          offsetX: 0,
          offsetY: 0,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "100%",
            endingShape: "rounded",
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -40,
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
              return val + "%";
            },
          },
        },

        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      };
      return opts;
    });
    const series = computed(() => {
      const total = stats.value.total || 0;
      const data = stats.value?.stats?.map((item) => {
        if(total < 1) return 0
        return Math.round((item.cnt / total) * 100);
      });
      return [
        {
          name: "Результаты",
          data: data || [],
        },
      ];
    });
    return { chartOptions, series };
  },
});
</script>
<style lang=""></style>
