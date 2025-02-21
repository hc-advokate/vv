<template>
  <div class="quick">
    <div class="re-flex-row-between quick-list">
      <div class="quick-item re-flex-col-center" @click="onRouter(data.routeShop)" :class="route.path.includes(data.routeShop) && 'qi-active'">
        <a-image fit="cover" :preview="false" :src="ShopActive" class="re-flex-row-center qi-img"></a-image>
        <span class="qi-text" :class="route.path.includes(data.routeShop) && 'qi-text-active'">Shop</span>
      </div>
      <div class="quick-item re-flex-col-center i-mlr" @click="onRouter(data.routeEarn)" :class="route.path.includes(data.routeEarn) && 'qi-active'">
        <a-image fit="cover" :preview="false" :src="EarnActive" class="re-flex-row-center qi-img"></a-image>
        <span class="qi-text" :class="route.path.includes(data.routeEarn) && 'qi-text-active'">Earn</span>
      </div>
      <div class="quick-item re-flex-col-center i-mlr" @click="onRouter(data.routeHome)" :class="route.path.includes(data.routeHome) && ''">
        <div class="re-flex-row-center qii-box"></div>
        <div class="re-flex-row-center qii-body"></div>
        <a-image fit="cover" :preview="false" :src="HomeActive" class="re-flex-row-center qii-img"></a-image>
        <div class="qii-space"></div>
        <span class="qi-text qii-text" :class="route.path.includes(data.routeHome) && 'qi-text-active'">Home</span>
      </div>
      <div class="quick-item re-flex-col-center i-mlr" @click="onRouter(data.routeInvite)" :class="route.path.includes(data.routeInvite) && 'qi-active'">
        <a-image fit="cover" :preview="false" :src="InviteActive" class="re-flex-row-center qi-img"></a-image>
        <span class="qi-text" :class="route.path.includes(data.routeInvite) && 'qi-text-active'">Invite</span>
      </div>
      <div class="quick-item re-flex-col-center" @click="onRouter(data.routeWallet)" :class="route.path.includes(data.routeWallet) && 'qi-active'">
        <a-image fit="cover" :preview="false" :src="WalletActive" class="re-flex-row-center qi-img"></a-image>
        <span class="qi-text" :class="route.path.includes(data.routeWallet) && 'qi-text-active'">Wallet</span>
      </div>
    </div>
  </div>
  <div class="quick-space"></div>
</template>

<script setup>
import {reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import ShopActive from "@/assets/icon/shop-active.png";
import EarnActive from "@/assets/icon/earn-active.png";
import InviteActive from "@/assets/icon/invite-active.png";
import WalletActive from "@/assets/icon/wallet-active.png";
import HomeActive from "@/assets/icon/home-active.png";

let data = reactive({
  routeShop: "shop",
  routeEarn: "earn",
  routeInvite: "friends",
  routeWallet: "wallet",
  routeHome: "home",
});

let router = useRouter();
let route = useRoute();
const onRouter = (url) => {
  router.push({path: `/${url}`});
}

</script>

<style scoped lang="scss">
.quick-space {
  height: 100px;
}
.quick {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #0C0D13;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  .quick-list {
    background-color: #24252B;
    padding: 10px;
    border: 1px solid #6A39FF;
    border-radius: 20px;
  }
  .i-mlr {
    margin-left: 15px;
    margin-right: 15px;
  }
  .quick-item {
    background: transparent;
    width: 60px;
    height: 60px;
    .qii-box {
      position: absolute;
      z-index: -1;
      top: -15px;
      width: 70px;
      height: 70px;
      border: 1px solid #6A39FF;
      background-color: transparent;
      border-radius: 50%;
    }
    .qii-body {
      position: absolute;
      z-index: 998;
      top: -14px;
      width: 70px;
      height: 70px;
      background-color: #24252B;
      border-radius: 50%;
    }
    .qii-text {
      position: relative;
      z-index: 999;
    }
    .qii-img {
      position: absolute;
      top: -7px;
      z-index: 999;
      width: 60px;
    }
    .qii-space {
      width: 25px;
      height: 25px;
    }
    .qi-img {
      width: 25px;
      :deep(.arco-image-img) {
        height: 100%;
      }
    }
    .qi-text {
      font-family: Barlow-Regular, Barlow;
      font-weight: normal;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1;
      text-align: right;
      font-style: normal;
      margin-top: 5px;
    }
    .qi-text-active {
      font-family: Barlow-Bold, Barlow;
      color: rgba(255, 255, 255, 1);
    }
  }
  .qi-active {
    background: #6A39FF;
    border-radius: 10px;
  }
}
</style>
