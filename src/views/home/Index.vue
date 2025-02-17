<template>
  <div class="hl-top-box" v-for="(item, index) in topImageList" :key="index">
    <van-image class="top-img" width="100%" height="100%" fit="cover" :src="item.img" />
    <div class="hl-top-info">
      <span class="top-title">{{ item.title }}</span>
      <van-button class="play-btn" type="primary" color="#6A39FF" @click="goDetail(item.id)">PLAY NOW</van-button>
    </div>
  </div>

  <div class="hl-game-box">
    <p class="game-title">New games</p>
    <van-row :gutter="[10, 20]">
      <van-col span="12" v-for="(item, index) in gameHotList" :key="index" @click="goDetail(item.id)">
        <van-image class="item-img" width="100%" height="114px" fit="cover" :src="item.img" />
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{ item.desc }}</p>
        <p class="item-desc">{{ item.view }} views • {{ item.love }} loves</p>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import Constants from "@/plugins/constants/index.js";

  const topImageList = ref(Constants.casinoTop);
  const gameHotList = ref(Constants.casinoHot);

  const router = useRouter();
  const goDetail = (id) => {
    router.push({ path: "/game-detail", query: {id: id} });
  };
</script>

<style scoped lang="scss">
	.hl-top-box {
    width: 100%;
    height: auto;
    padding: 0 10px;
    position: relative;
    .top-img {
      display: block;
      :deep(.van-image__img) {
        border-radius: 10px !important;
      }
    }

    .hl-top-info {
      position: absolute;
      width: auto;
      height: auto;
      left: 29px;
      bottom: 20px;
      display: flex;
      flex-direction: column;
      .top-title {
        font-family: Barlow-Bold;
        font-weight: bold;
        font-size: 19px;
        color: #FFFFFF;
        line-height: 1;
        font-style: normal;
      }

      .play-btn {
        width: 108px;
        height: 24px;
        border-radius: 13px;
        font-family: Barlow-Bold;
        font-weight: bold;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 1 !important;
        font-style: normal;
        margin-top: 10px;
      }
    }
  }

  .hl-game-box {
    width: 100%;
    height: auto;
    padding: 19px 10px;
    .game-title {
      font-family: Barlow-Bold;
      font-weight: bold;
      font-size: 13px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
      padding-bottom: 14px;
    }

    .item-img {
      display: block;
      :deep(.van-image__img) {
        border-radius: 10px !important;
      }
    }
    .item-title {
      font-family: Barlow-Bold;
      font-weight: bold;
      font-size: 13px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
      margin-top: 4px;
      padding-bottom: 5px;
    }
    .item-desc {
      font-family: Barlow-Regular;
      font-weight: 400;
      font-size: 13px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
      margin-top: 5px;
    }
  }
</style>
