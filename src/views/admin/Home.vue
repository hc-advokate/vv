<template>
  <template v-if="isMobile">
    <MIndex></MIndex>
  </template>
  <template v-else>
    <PCIndex></PCIndex>
  </template>
</template>

<script setup>
import {onMounted, ref} from "vue";
import MIndex from "@/views/admin/m/Index.vue";
import PCIndex from "@/views/admin/pc/Index.vue";

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth <= 1200 || window.outerWidth <= 1200;
  window.addEventListener("resize", (e) => {
    isMobile.value = e.target.innerWidth <= 1200 || e.target.outerWidth <= 1200;
  });
});
</script>

<style scoped lang="scss">

</style>
