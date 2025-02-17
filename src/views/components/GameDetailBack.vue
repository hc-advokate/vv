<template>
  <section class="hl-back-box_game">
    <div class="hl-game-back main-width">
      <van-image class="btn-back" fit="cover" :src="Constants.ico.back" @click="goBack" />
      <p class="back-title">{{ props.title }}</p>
    </div>
  </section>
</template>

<script setup>
  import Constants from "@/plugins/constants/index.js";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  // 返回上一级
  const goBack = () => {
    window.history.go(-1);
  };
</script>

<style lang="scss" scoped>
.hl-back-box_game {
  width: 100%;
  height: 56px;
  .hl-game-back {
    width: 100%;
    height: 56px;
    background: #24252B;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    .btn-back {
      width: 8px;
      height: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 18px;
    }

    .back-title {
      font-family: Barlow-Bold;
      font-weight: bold;
      font-size: 19px;
      color: #FFFFFF;
      line-height: 56px;
      font-style: normal;
    }
  }
}
</style>
