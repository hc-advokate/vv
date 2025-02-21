<template>
<div class="wallet-body re-fill">
  <Back path="/home"></Back>
  <div class="wallet-container re-w-full">
    <div class="wallet-card">
      <div class="re-flex-row-center wallet-title re-w-full">
        <div class="title-text">Wallet</div>
      </div>

      <div class="com-item w-item-w">
        <div class="ci-l">
          <a-image fit="cover" :preview="false" :src="CoinGreen" class="re-flex-row-center cil-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Gai Coin</div>
            <div class="text-num">{{ formatThousand(data.gai) }}</div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-button class="ci-btn re-flex-row-center">WITHDRAW</a-button>
        </div>
      </div>

      <div class="w-line"></div>

      <div class="com-list w-list">
        <div class="com-item w-item-c">
          <div class="ci-l">
            <a-image fit="cover" :preview="false" :src="CoinSc" class="re-flex-row-center cil-img"></a-image>
            <div class="cil-text">
              <div class="text-name">StarChips</div>
              <div class="text-num">{{ formatThousand(data.starchips) }}</div>
            </div>
          </div>
          <div class="ci-r re-flex-row-center">
            <a-button class="ci-btn re-flex-row-center" @click="onToPage(0)">EXCHANGE</a-button>
          </div>
        </div>
        <div class="com-item w-item-c">
          <div class="ci-l">
            <a-image fit="cover" :preview="false" :src="CoinHc" class="re-flex-row-center cil-img"></a-image>
            <div class="cil-text">
              <div class="text-name">Hexa Coin</div>
              <div class="text-num">{{ formatThousand(data.hex) }}</div>
            </div>
          </div>
          <div class="ci-r re-flex-row-center">
            <a-button class="ci-btn re-flex-row-center" @click="onToPage(1)">EXCHANGE</a-button>
          </div>
        </div>
        <div class="com-item w-item-c">
          <div class="ci-l">
            <a-image fit="cover" :preview="false" :src="CoinBig" class="re-flex-row-center cil-img"></a-image>
            <div class="cil-text">
              <div class="text-name">Gaia Coin</div>
              <div class="text-num">{{ formatThousand(data.gaia) }}</div>
            </div>
          </div>
          <div class="ci-r re-flex-row-center">
            <a-button class="ci-btn re-flex-row-center" @click="onToPage(2)">EXCHANGE</a-button>
          </div>
        </div>
      </div>

      <div class="re-w-full wallet-bg">
        <a-image fit="cover" :preview="false" :src="ImgBg" class="re-flex-row-center re-w-full"></a-image>
      </div>
    </div>
  </div>
  <Quick></Quick>
</div>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import Quick from "@/views/components/Quick.vue";
import ImgBg from "@/assets/user/wallet-bg.png";
import CoinBig from "@/assets/icon/coin-g-big.png";
import CoinGreen from "@/assets/icon/coin-l-big.png";
import CoinHc from "@/assets/icon/coin-hexa.png";
import CoinSc from "@/assets/icon/coin-star.png";
import {useRouter} from "vue-router";
import {onActivated, onMounted, reactive} from "vue";
import api from "@/api/index.js";

let router = useRouter();
const onToPage = (type) => {
  router.push({ path: "/exchange", query: {id: type}});
}

const formatThousand = (value) => {
  if (!value) return 0;
  value = Number(value);
  return (+value || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

const data = reactive({
  gaia: 0,
  hex: 0,
  starchips: 0,
  gai: 0,
});

const initData = () => {
  api.userApi.walletList({}).then((res) => {
    if (!res.code) {
      for (let o of res.data.scores) {
        switch (o.key) {
          case "gaia": data.gaia = o.count; break;
          case "hex": data.hex = o.count; break;
          case "starchips": data.starchips = o.count; break;
          case "gai": data.gai = o.count; break;
          default: break;
        }
      }
    }
  }).catch(() => {
  });
}
onMounted(() => {
  initData();
});
onActivated(() => {
  initData();
});
</script>

<style scoped lang="scss">
.com-ml {
  padding: 0 10px;
}
.wallet-body {
  background-color: #0C0D13;
}
.wallet-container {
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
}
.wallet-card {
  background: #24252B;
  border-radius: 19px;
  border: 1px solid #6A39FF;
  padding: 40px 20px;
  position: relative;
  .wallet-title {
    position: absolute;
    top: -25px;
    .title-text {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      padding: 10px 50px;
      background-image: url("@/assets/user/wallet-title.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .wallet-bg {
    position: absolute;
    bottom: -50px;
    left: 0;
  }
  .w-line {
    background-color: rgba(106, 57, 255, 1);
    height: 1px;
    width: 100%;
    margin-top: 20px;
  }
  .w-item-w {
    border-radius: 19px;
    background-color: rgba(106, 57, 255, 0.7);
    border: 1px solid rgba(106, 57, 255, 0.7);
    .ci-btn {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      background: #24252B;
      border-radius: 38px;
      border: 2px solid #6A39FF;
      height: 40px;
      width: 140px;
    }
  }
  .w-item-c {
    border-radius: 19px;
    background-color: transparent;
    border: 1px solid rgba(106, 57, 255, 0.7);
    .ci-btn {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      background: #6A39FF;
      border-radius: 38px;
      border: 2px solid #6A39FF;
      height: 40px;
      width: 140px;
    }
  }
  .w-list {
    margin-top: 20px;
  }
  .com-item {
    display: flex;
    display: -webkit-flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 15px 10px;
    margin-bottom: 10px;
    .ci-l {
      display: flex;
      display: -webkit-flex;
    }
    .ci-r {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
    }
    .cil-img {
      width: 50px;
    }
    .cil-text {
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      .text-name {
        font-family: Barlow-Regular, Barlow;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 1;
        text-align: left;
        font-style: normal;
      }
      .text-num {
        font-family: Barlow-Bold, Barlow;
        font-weight: bold;
        font-size: 20px;
        color: #7DF5FA;
        line-height: 1;
        text-align: left;
        font-style: normal;
      }
    }
  }
}
</style>
