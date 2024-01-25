<script setup lang="ts">
  const props = defineProps<{
    title:string,
    date:string,
    quantity:number,
    percent:string,
  }>();
</script>

<template>
  <div class="h-full w-full grid grid-cols-1 grid-rows-4">
    <div class="flex items-center text-sm capitalize row-span-1">
      <p class="font-semibold text-slate-600"> {{ props.title }} </p>
      <p class="text-xs ml-auto text-slate-600"> {{ props.date }} </p>
    </div>
    <div class="text-xl flex flex-col row-span-2 justify-center">
      <h5 class="font-semibold text-slate-900"> {{ props.quantity }} </h5>
    </div>
    <div class="text-sm row-span-1">
      <p class="text-slate-600">
        <span class="text-green-700 font-semibold"> {{ props.percent }} </span> 
        desde el ultimo mes.
      </p>
    </div>
  </div>
</template>
 
<style scoped lang="scss">

</style>