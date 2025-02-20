<template>
  <BasicBack :showTabs="true" :tabTypes="['Top', 'New', 'Crypto', 'Asia', 'Pop Culture']"></BasicBack>
  <section class="hl-temp-box">
    <div class="temp-box-in">
      <div class="info-box re-flex-row">
        <div class="type-box re-flex-row">
          <van-image class="b-coin" fit="cover" :src="Constants.ico.bCoin" />
          <p class="coin-num">$8,707,944 Vol.</p>
        </div>
        <div class="tool-box re-flex-row">
          <van-image class="collect-icon" fit="cover" :src="Constants.ico.collectBd" />
          <van-image class="mark-coin" fit="cover" :src="Constants.ico.mark" />
        </div>
      </div>
      <p class="title">What price will Bitcoin hit in December?</p>
      <div class="result-box re-flex-row">
        <p class="result-txt">OUTCOME</p>
        <div class="operate-box re-flex-row">
          <p class="result-txt">% CHANCE</p>
          <van-image class="refresh-coin" fit="cover" :src="Constants.ico.refreshLight" />
        </div>
      </div>
      <div class="product-list">
        <div class="item-product" v-for="(item, index) in productList" :key="index">
          <div class="top-box">
            <p class="hl-basic-txt txt-num">{{ item.num }}</p>
            <p class="hl-basic-txt txt-vol">{{ item.vol }}</p>
          </div>
          <p class="hl-basic-txt txt-percent">{{ item.percent }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import BasicBack from "@/views/components/BasicBack.vue";
  import Constants from "@/plugins/constants/index.js";

  const productList = ref([
    {
      num: '$130k',
      vol: '$1,564,695 Vol.',
      percent: '11.0%',
    },
    {
      num: '$120k',
      vol: '$1,529,622 Vol.',
      percent: '20.0%',
    },
    {
      num: '$110k',
      vol: '$1,793,281 Vol.',
      percent: '60.5%',
    },
    {
      num: '$105k',
      vol: '$2,514,716 Vol.',
      percent: '80.5%',
    },
  ]);
</script>

<style scoped lang="scss">
  .hl-temp-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .temp-box-in {
      width: 100%;
      height: auto;
      padding: 19px;
      background: #24252B;
      border-radius: 10px;
      .info-box {
        justify-content: space-between;
        .type-box {
          .b-coin {
            width: 38px;
            height: 38px;
          }
          .coin-num {
            font-family: Barlow-Regular;
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            line-height: 1;
            text-shadow: 0 0 3px rgba(0,0,0,0.5);
            font-style: normal;
            margin-left: 10px;
          }
        }

        .tool-box {
          .collect-icon {
            width: 16px;
            height: 16px;
          }
          .mark-coin {
            width: 14px;
            height: 14px;
            margin-left: 9px;
          }
        }
      }

      .title {
        font-family: Barlow-Bold;
        font-weight: bold;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 1;
        text-shadow: 0 0 3px rgba(0,0,0,0.5);
        font-style: normal;
        margin-top: 19px;
      }

      .result-box {
        width: 100%;
        border-top: 0.4px solid rgba(255, 255, 255, 0.5);
        border-bottom: 0.4px solid rgba(255, 255, 255, 0.5);
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 4px 0;
        .result-txt {
          font-family: Barlow-Regular;
          font-weight: 400;
          font-size: 12px;
          color: #FFFFFF;
          line-height: 1;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
          font-style: normal;
        }
        .operate-box {
          align-items: center;
          .refresh-coin {
            width: 20px;
            height: 20px;
          }
        }
      }

      .product-list {
        .item-product {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 19px 0;
          border-bottom: 0.4px solid rgba(255, 255, 255, 0.5);
          .top-box {
            .txt-num {
              font-family: Barlow-Bold;
              font-weight: bold;
              font-size: 14px;
            }
            .txt-vol {
              font-family: Barlow-Regular;
              font-weight: 400;
              font-size: 12px;
              margin-top: 10px;
            }
          }
          .txt-percent {
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 29px;
          }
        }
        .item-product:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>
