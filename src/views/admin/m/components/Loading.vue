<template>
<div class="load-body re-fill">
  <div class="load-container re-flex-row-center">
    <a-image fit="cover" :preview="false" :src="ImgBg" class="load-bg"></a-image>
    <a-image fit="cover" :preview="false" :src="ImgImg" class="load-img"></a-image>
    <a-image fit="cover" :preview="false" :src="ImgRef" class="load-ref"></a-image>
  </div>
</div>
</template>

<script setup>
import ImgBg from "@/assets/comp/load-bg.png";
import ImgImg from "@/assets/comp/load-img.png";
import ImgRef from "@/assets/comp/load-ref.png";
</script>

<style scoped lang="scss">
.load-body {
  background-color: #0C0D13;
  .load-container {
    width: 100%;
    position: relative;
    .load-img {
      position: absolute;
      top: auto;
      width: 90%;
    }
    .load-ref {
      width: 100px;
      position: absolute;
      bottom: 0;
      animation: rote 2s infinite linear;
    }
  }
}
@keyframes rote {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
