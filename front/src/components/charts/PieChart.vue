<script setup lang="ts">
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  import { ref } from 'vue';
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);

  /* provide(THEME_KEY, 'dark'); */

  const option = ref({
    title: {
      text: 'Traffic Sources',
      left: 'left',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
      top:'30',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines', '54', 'Ad', 'Ads', 'Searssch'],
    },
    series: [
      {
        name: 'Traffic',
        type: 'pie',
        radius: '55%',
        center: ['50%', '75%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' },
          { value: 335, name: '54' },
          { value: 310, name: 'Ad' },
          { value: 234, name: 'Ads' },
          { value: 135, name: 'Searssch' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });
</script>

<template>
  <v-chart :option="option" autoresize />
</template>
 
<style scoped lang="scss">

</style>