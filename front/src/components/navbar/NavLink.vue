<script setup lang='ts'>
    const props =  defineProps<{
        title: string,
        routName: string,
    }>();  
</script>

<template>
    <div class=""> 
      <router-link :to="{ name:props.routName }" v-slot="{ isActive }">
        <div :class=" isActive ? 'active' : 'unactive' ">
            <!-- NAVBAR ITEM TITLE-->
            <div class="text-base capitalize">
                {{ title }}
            </div>
        </div>
      </router-link>
    </div>
</template>

<style scoped lang='scss'>
    .active {
        @apply text-white relative
    } 
    .active::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        animation: slide-in 0.2s ease-in-out forwards;
    }
    .unactive {
        @apply text-third
    }
    @keyframes slide-in {
    from {
      width: 0%;
    }

    to {
      width: 100%;
  }
}

</style>