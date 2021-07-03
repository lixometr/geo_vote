<template>
  <div>
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
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
      const categories = answers.value?.map((answer) => answer.answer);
      const opts = {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories,
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
      const data = stats.value?.stats?.map(item => item.cnt);
      return [
        {
          data,
        },
      ];
    });
    return { chartOptions, series };
  },
});
</script>
<style lang=""></style>
