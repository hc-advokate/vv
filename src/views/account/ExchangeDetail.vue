<template>
  <BasicBack :title="dataObj.title + ' Exchange'"></BasicBack>
  <section class="hl-exchange-detail-box">
    <div class="detail-box-in">
      <div class="exchange-box">
        <van-image class="coin-icon" fit="cover" :src="dataObj.icon" />
        <div class="ratio-box">
          <p class="ratio-txt">1:1</p>
          <van-image class="convert-icon" fit="cover" :src="Constants.ico.convert" />
        </div>
        <van-image class="coin-icon" fit="cover" :src="Constants.ico.coin" />
      </div>
      <div class="fill-box">
        <van-cell-group inset class="hl-cell-group">
          <van-field class="hl-field" v-model="coinNum" type="digit" />
        </van-cell-group>
        <van-image class="coin-icon-sm" fit="cover" :src="dataObj.icon" />
        <p class="convert-txt"><span>=</span>{{ coinNum || 0 }}</p>
        <van-image class="coin-icon-sm" fit="cover" :src="Constants.ico.coin" />
      </div>
    </div>
    <van-button class="exchange-btn" type="primary">Exchange</van-button>
  </section>
</template>

<script setup>
  import {ref, onMounted} from "vue";
  import { useRoute } from "vue-router";
  import BasicBack from "@/views/components/BasicBack.vue";
  import Constants from "@/plugins/constants/index.js";

  const dataObj = ref({});

  const coinNum = ref(0);

  const initData = () => {
    dataObj.value = {...dataObj, ...useRoute().query};
  };

  const route = useRoute();
  onMounted(() => {
    if (route.query) {
      initData();
    }
  });
</script>

<style lang="scss" scoped>
  .hl-exchange-detail-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .detail-box-in {
      width: 100%;
      height: auto;
      background: #24252B;
      border-radius: 10px;
      .exchange-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 29px 0 15px 0;
        .coin-icon {
          width: 58px;
          height: 58px;
        }

        .ratio-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(106,57,255,0.6);
          border-radius: 10px;
          padding: 4px 12px;
          margin: 0 48px;
          .ratio-txt {
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 24px;
            color: #FFFFFF;
            line-height: 1;
            font-style: normal;
          }

          .convert-icon {
            width: 14px;
            height: 13px;
            margin-top: 6px;
          }
        }
      }

      .fill-box {
        width: 100%;
        padding: 18px 0 24px 0;
        background: rgba(106, 57, 255, 0.7);
        border-radius: 0 0 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .hl-cell-group {
          background: none;
          margin: 0;
          .hl-field {
            width: 63px;
            background: #0C0D13;
            border-radius: 5px;
            border: 2px solid #6A39FF;
            padding: 0;
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 24px;
            line-height: 1;
            font-style: normal;
            margin-right: 8px;
            :deep(.van-field__control) {
              color: #FFFFFF;
              text-align: center;
              padding: 0;
            }
          }
        }

        .coin-icon-sm {
          width: 29px;
          height: 29px;
        }

        .convert-txt {
          font-family: Barlow-Bold;
          font-weight: bold;
          font-size: 24px;
          color: #FFFFFF;
          line-height: 1;
          font-style: normal;
          margin: 0 11px;
          span {
            margin-right: 11px;
          }
        }
      }
    }

    .exchange-btn {
      height: auto;
      font-family: Barlow-Bold;
      font-weight: bold;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
      padding: 8px 14px;
      background: #6A39FF;
      border-radius: 19px;
      border: 2px solid #6A39FF;
      display: block;
      margin: 0 auto;
      margin-top: 19px;
    }
  }
</style>
