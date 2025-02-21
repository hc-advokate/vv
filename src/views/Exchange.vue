<template>
  <template v-if="isMobile">
    <MExchange></MExchange>
  </template>
  <template v-else>
    <PCEarn></PCEarn>
  </template>
</template>

<script setup>
import {onMounted, ref} from "vue";
import MExchange from "@/views/m/Exchange.vue";
import PCEarn from "@/views/pc/Earn.vue";

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
