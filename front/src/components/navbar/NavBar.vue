<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue';
  const NavbarItem = defineAsyncComponent( () => import('@/components/navbar/NavLink.vue')); 
  const LogoutIcon = defineAsyncComponent( () => import ('@/components/icons/IconLogout.vue'));
  const UserIcon = defineAsyncComponent( () => import ('@/components/icons/UserIcon.vue'));
  const routs = [
    { title:"inicio", routName:"dashboard" },
    { title:"registro", routName:"signin" },
    { title:"estadisticas", routName:"otro" },
  ]
  const showModal = ref(false);
  const toggleModal = () => showModal.value =!showModal.value;
</script>

<template>
  <nav class="flex items-center justify-end h-12 bg-primary font-semibold">
    <ul class="flex gap-x-6">
      <li class="" v-for="rout in routs" :key="rout.title">
        <NavbarItem :title="rout.title" :rout-name="rout.routName"/>
      </li>
    </ul>
    <div class="flex items-center justify-center ml-32 mr-10 cursor-pointer relative" @click.stop="toggleModal" v-click-outside="() => showModal = false">
      <!-- user name -->
      <p class="mr-3 capitalize text-sm text-third">
        admin
      </p>
      <!-- user icon -->
      <div class="flex items-center justify-center rounded-full bg-white w-8 h-8 ">
        <UserIcon class="text-primary-light"/>
      </div>
      <!-- menu desplegable -->
      <div class="absolute bg-white shadow-md rounded-md py-2 mt-2 right-0 top-10 z-10 w-[120px]" v-if="showModal">
        <a href="#" class="flex items-center justify-center px-4 py-2 hover:bg-gray-100 capitalize opacity-65 text-sm"> salir <LogoutIcon class="ml-2 text-base"/></a>
      </div>
    </div>
 </nav>
</template>
 
<style scoped lang="scss">

</style>