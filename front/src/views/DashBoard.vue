<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';
  const CardInfo = defineAsyncComponent( () => import('@/components/CardInfo.vue')); 
  const ChartBar = defineAsyncComponent (() => import('@/components/charts/BarChart.vue'));
  const PieBar = defineAsyncComponent (() => import('@/components/charts/PieChart.vue'));
</script>

<template>
  <div class="h-full p-5">

    <div class="h-[26%] grid grid-cols-4 grid-rows-1 items-center gap-5 px-5">
      <div class="card-box">
        <CardInfo title="Visitantes Hoy" date="6 August - 9 August" percent="+45%" :quantity="45" />
      </div>
      <div class="card-box">
        <CardInfo title="Visitantes ayer" date="6 August - 9 August" percent="+95%" :quantity="30" />
      </div>
      <div class="card-box">
        <CardInfo title="Visitantes semana" date="6 August - 9 August" percent="+25%" :quantity="15" />
      </div>
      <div class="card-box">
        <CardInfo title="Visitantes del mes" date="6 August - 9 August" percent="+30%" :quantity="21" />
      </div>
    </div>
    
    <div class="h-[74%] grid grid-cols-4 grid-rows-1 gap-5 p-5">
      <div class="col-span-1 w-full h-full bg-white rounded-md shadow-md p-5">
        <div class="w-full h-full">
          <PieBar/>
        </div>
      </div>
      <div class="col-span-3 w-full h-full bg-white rounded-md shadow-md p-5">
        <div class="w-full h-full">
          <ChartBar/>
        </div>
      </div>
    </div>

  </div>
</template>
 
<style scoped lang="scss">
  .card-box{
    @apply w-full h-4/5 shadow-md rounded-lg bg-white p-4 opacity-80
  }
</style>