<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { defineAsyncComponent } from 'vue';
  const Navbar = defineAsyncComponent( () => import('@/components/navbar/NavBar.vue'));
</script>

<template>
  <div class="w-full h-full border border-blue-700">
    <Navbar class="shadow-sm w-full h-[10%]"/>
    <div class="borderw-full h-[90%]">
      <RouterView class="bg-aux"/>
    </div>
  </div>
</template>
 
<style scoped>
</style>