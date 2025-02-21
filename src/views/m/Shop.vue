<template>
<div class="com-body shop-body re-fill">
  <Back path="/home"></Back>
  <div class="com-container shop-container re-w-full">
    <div class="shop-card re-flex-col-center">
      <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="sc-img"></a-image>
      <div class="sc-num com-font-title com-mt-10">+1</div>
      <div class="sc-btn com-font-btn com-mt-20">BUY</div>
    </div>
  </div>
  <Quick></Quick>
</div>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import Quick from "@/views/components/Quick.vue";
import ImgCoinGB from "@/assets/icon/coin-l-big.png";
</script>

<style scoped lang="scss">
@use "./index.scss";
.shop-card {
  background: #24252B;
  border-radius: 20px;
  padding: 30px;
  .sc-img {
    width: 60px;
  }
  .sc-num {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    color: #7DF5FA;
    text-align: center;
    font-style: normal;
  }
  .sc-btn {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    width: 100%;
    background: #6A39FF;
    border-radius: 22px;
    padding: 12px 0;
  }
}
</style>
