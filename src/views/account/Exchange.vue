<template>
  <BasicBack :title="'Exchange'"></BasicBack>
  <section class="hl-exchange-box">
    <div class="exchange-box-in">
      <div class="coin-box" v-for="(item, index) in coinList" :key="index">
        <div class="coin-info">
          <van-image class="coin-icon" fit="cover" :src="item.icon" />
          <div>
            <p class="coin-txt">{{ item.name }}</p>
            <p class="coin-txt txt-amount">{{ formatThousandDef(item.amount) }}</p>
          </div>
        </div>
        <van-button class="basic-purple-btn exchange-btn" type="primary" @click="goExchange(item)">Exchange</van-button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import BasicBack from "@/views/components/BasicBack.vue";
  import Constants from "@/plugins/constants/index.js";
  import { formatThousandDef } from "@/plugins/utils/format.js";

  // mock coin list
  const coinList = ref([
    {
      id: 1,
      icon: Constants.ico.gaiaGreenCoin,
      name: 'Gaia Coin',
      title: "Gaia",
      amount: '67865',
    },
    {
      id: 2,
      icon: Constants.ico.starChipsCoin,
      name: 'StarChips',
      title: "StarChips",
      amount: '67865',
    },
    {
      id: 3,
      icon: Constants.ico.hexaCoin,
      name: 'Hexa Coin',
      title: "Hexa",
      amount: '67865',
    },
    {
      id: 4,
      icon: Constants.ico.gaiaPurpleCoin,
      name: 'Gaia Coin',
      title: "Gaia",
      amount: '67865',
    },
  ]);

  const router = useRouter();
  const goExchange = (item) => {
    router.push({ path: "/exchange-detail", query: item });
  };
</script>

<style lang="scss" scoped>
  .hl-exchange-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .exchange-box-in {
      width: 100%;
      height: auto;
      padding: 10px 19px;
      background: #262629;
      border-radius: 10px;
      .coin-box {
        width: 100%;
        padding: 9px 0;
        border-bottom: 0.4px solid rgba(255,255,255,0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .coin-info {
          display: flex;
          align-items: center;
          .coin-icon {
            width: 38px;
            height: 38px;
            margin-right: 5px;
          }
        }
        .coin-txt {
          font-family: Barlow-Regular;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 1;
          font-style: normal;
        }
        .txt-amount {
          font-family: Barlow-Bold;
          font-weight: bold;
          font-size: 19px;
          margin-top: 4px;
          color: #7DF5FA;
        }

        .exchange-btn {
          border-radius: 19px;
          padding: 7px 23px;
        }
      }
      .coin-box:last-child {
        border-bottom: none;
      }
    }
  }
</style>
