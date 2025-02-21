<template>
  <template v-if="isMobile">
    <MDetail></MDetail>
  </template>
  <template v-else>
    <PCDetail></PCDetail>
  </template>
</template>

<script setup>
import {onMounted, ref} from "vue";
import MDetail from "@/views/admin/m/Detail.vue";
import PCDetail from "@/views/admin/pc/Detail.vue";

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
