<template>
  <a-row class="" id="headerGameM">
    <a-col :span="24" class="header-space"></a-col>
    <a-col :span="24" class="header-body">
      <a-col :span="24" class="header-container re-flex-row-between">
        <div class="re-flex-row-center">
          <icon-menu @click="onMenuVis"/>
          <img :src="LogoNew" fit="cover" alt="" class="re-flex-row-center logo-t" @click="toHome"/>
<!--          <a-image fit="cover" :preview="false" :src="LogoNew" class="re-flex-row-center logo-t" @click="toHome"></a-image>-->
        </div>
        <div class="re-flex-row-center">
          <icon-search />
          <div v-if="false" class="re-flex-row-center re-ml-10">
            <a-image fit="cover" :preview="false" :src="ImgCoinGai" class="u-ico"></a-image>
            <span class="u-amount">36</span>
            <a-image fit="cover" :preview="false" :src="ImgCoinGai" class="u-avatar"></a-image>
          </div>
          <a-button v-if="isLogin" class="btn-game btn-login" @click="onToPage">WALLET</a-button>
          <a-button v-else class="btn-game btn-login" @click="onVisLogin">CONNECT</a-button>
        </div>
      </a-col>
    </a-col>
  </a-row>
  <a-drawer class="d-body" :width="270" :visible="menuData.isShow" placement="left" :mask-closable="false" :closable="false" :header="false" :footer="false" unmountOnClose>
    <div>
      <div class="re-flex-row-center-ai">
        <a-image fit="cover" :preview="false" :src="IcoClose" class="" @click="onMenuVis"></a-image>
      </div>
      <CompMenu></CompMenu>
    </div>
  </a-drawer>

  <a-modal v-model:visible="modalData.loginVis" @cancel="onVisLogin" :hide-cancel="true" :footer="false" :closable="false" class="modal-login">
    <div>
      <div class="re-flex-row-between m-close">
        <div class="title">Connect Your Wallet</div>
        <a-image fit="cover" :preview="false" :src="IcoClose" @click="onVisLogin" class="close"></a-image>
      </div>
      <div class="tips c-t">By connecting your wallet, you acknowledge that you have read, understand and accept the terms in the Disclaimer</div>
      <div class="type-btn c-t">
        <div class="re-flex-row-between">
          <div class="tb-b re-flex-row-center-ai" @click="onVisLogin">
            <a-image fit="cover" :preview="false" :src="LoginMw" class="ico"></a-image>
            <span>MetaGaia Wallet</span>
          </div>
          <div class="tb-b re-flex-row-center-ai" @click="onVisLogin">
            <a-image fit="cover" :preview="false" :src="LoginPt" class="ico"></a-image>
            <span>Phantom</span>
          </div>
        </div>
        <div class="re-flex-row-between re-mt-9">
          <div class="tb-b re-flex-row-center-ai" @click="onVisLogin">
            <a-image fit="cover" :preview="false" :src="LoginSl" class="ico"></a-image>
            <span>Solflare</span>
          </div>
          <div class="tb-b re-flex-row-center-ai" @click="onVisLogin">
            <a-image fit="cover" :preview="false" :src="LoginSt" class="ico"></a-image>
            <span>Sollet</span>
          </div>
        </div>
        <div class="re-flex-row-between re-mt-9">
          <div class="tb-b re-flex-row-center-ai" @click="onWalletTon">
<!--            <a-image fit="cover" :preview="false" :src="LoginSt" class="ico"></a-image>-->
            <span>Ton</span>
          </div>
          <div id="ton-connect" style="display: none;"></div>
        </div>
      </div>
      <div class="re-flex-row-center yiwen c-t">
        <div>New here? </div>
        <div class="yiwen-act">Get started on GaiAI</div>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import CompMenu from "./Menu.vue";
import ImgCoinGai from "@/assets/games/coin-gai.png";
import IcoClose from "@/assets/games/close-menu-btn.png";
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import {onBeforeRouteLeave, useRouter} from "vue-router";
import LoginPt from "@/assets/games/login-icon-pt.png";
import LoginMw from "@/assets/games/login-icon-mw.png";
import LoginSl from "@/assets/games/login-icon-sl.png";
import LoginSt from "@/assets/games/login-icon-st.png";
import { useWebApp } from "vue-tg";
import api from "@/api/index.js";
import {TonConnectUI} from "@tonconnect/ui";
import LogoNew from "@/assets/logo-new.png";

const { initData, initDataUnsafe } = useWebApp();
const modalData = reactive({
  loginVis: false,
});
const onVisLogin = () => {
  modalData.loginVis = !modalData.loginVis;
}

const isLogin = ref(false);
const menuData = reactive({
  isShow: false,
});

const onMenuVis = () => {
  menuData.isShow = !menuData.isShow;
}

// ton
const connectTon = async () => {
  const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://test-www.gaiai.io/ton/tonconnect-manifest.json',
    buttonRootId: 'ton-connect',
    uiPreferences: {
      // theme: 'DARK'
    }
  });
  const connectedWallet = await tonConnectUI.connectWallet();
  // 如果需要，可以对connectedWallet做一些事情
  console.log(connectedWallet);
  const currentWallet = await tonConnectUI.wallet;
  console.log(currentWallet);
  const currentWalletInfo = await tonConnectUI.walletInfo;
  console.log(currentWalletInfo);
  const currentAccount = await tonConnectUI.account;
  console.log(currentAccount);
  const currentIsConnectedStatus = await tonConnectUI.connected;
  console.log(currentIsConnectedStatus);
  if (currentIsConnectedStatus && currentAccount) {
    api.userApi.walletTonToken({address: currentAccount.address}).then(async (rel) => {
      await tonConnectUI.disconnect();
      isLogin.value = true;
      window.localStorage.setItem("tonToken", rel.data.token);
    });
  }
}
const onWalletTon = () => {
  onVisLogin();
  connectTon().catch(error => {
    window.location.reload();
    console.error("Error connecting to wallet:", error);
  });
}

const router = useRouter();
const toHome = () => {
  router.push({path: "/home"});
}
const onToPage = () => {
  router.push({path: "/wallet"});
}

const {proxy} = getCurrentInstance();

onMounted(() => {
  console.log("vue tg", initData);
  console.log("js tg", window.Telegram.WebApp);
  // window.localStorage.setItem("tgToken", "");
  // window.localStorage.setItem("tgUserId", "");
  if (initData) {
    window.localStorage.setItem("tgUserId", String(window.Telegram.WebApp.initDataUnsafe.user.id || initDataUnsafe.user.id));

    api.userApi.loginTel({initData: initData}).then((res) => {
      window.localStorage.setItem("tgToken", res.data.token.token);
      proxy.$mittBus.emit("tokenTg", {
        token: res.data.token
      });
    }).catch((e) => {
    });
  }
  if (window.localStorage.getItem("tonToken")) {
    isLogin.value = true;
  }
  proxy.$mittBus.on("clickMenu", (data) => {
    onMenuVis();
  });
});

onBeforeRouteLeave(() => {
  menuData.isShow = false;
});
</script>

<style scoped lang="scss">
.btn-game {
  background: #6A39FF;
  border-radius: 13px;
  padding: 6px 21px;
}
.header-body {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.header-space {
  width: 100%;
  height: 45px;
}
.header-container {
  padding: 10px 20px;
  background-color: rgba(12, 13, 19, 0.60);
  font-family: Barlow-Bold, Barlow;
  font-weight: bold;
  color: #FFFFFF;
  font-size: 19px;
  text-align: left;
  font-style: normal;
  .logo-t {
    height: 1em;
    font-size: 19px;
    line-height: 23px;
    margin-left: 10px;
    :deep(.arco-image-img) {
      height: 100%;
    }
  }
  .btn-login {
    width: 96px;
    height: 24px;
    font-size: 13px;
    line-height: 13px;
    color: #FFFFFF;
    margin-left: 21px;
  }
  .u-ico {
    width: 14px;
    position: relative;
    :deep(.arco-image-img) {
      width: 100%;
      position: absolute;
      top: -7px;
    }
  }
  .u-avatar {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    :deep(.arco-image-img) {
      width: 100%;
      height: 100%;
    }
  }
  .u-amount {
    font-size: 13px;
    line-height: 13px;
    margin-left: 5px;
  }
}
:global(.d-body .arco-drawer-body) {
  background: #24252B;
  padding: 30px 40px;
}

.modal-login {
  .m-close {
    width: 100%;
    .close {
      width: 17px;
    }
  }
  .title {
    font-family: Barlow-Medium, Barlow;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 1;
    text-align: left;
    font-style: normal;
  }
  .c-t {
    margin-top: 28px;
  }
  .tips {
    background-color: #0C0D13;
    border-radius: 20px;
    border: 1px solid #6A39FF;
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    font-size: 14px;
    color: #A0A0A0;
    line-height: 1.5;
    text-align: left;
    font-style: normal;
    padding: 12px 20px 15px;
  }
  .type-btn {
    font-family: Barlow-Medium, Barlow;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 1;
    text-align: left;
    font-style: normal;
    .tb-b {
      width: 48%;
      height: 42px;
      border: 1px solid #6A39FF;
      border-radius: 28px;
      padding: 5px 10px;
      overflow: hidden;
      .ico {
        width: 20px;
      }
      span {
        margin-left: 5px;
      }
    }
    .tb-b-o {
      width: 48%;
      height: 42px;
      * {
        width: 100%;
        height: 100%;
      }
    }
  }
  .yiwen {
    font-family: Barlow-Medium, Barlow;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: right;
    font-style: normal;
    .yiwen-act {
      color: #6A39FF;
      margin-left: 5px;
    }
  }
}
:global(.modal-login .arco-modal) {
  width: 90%;
  background: transparent;
}
:global(.modal-login .arco-modal-body) {
  background: #24252B;
  border-radius: 10px;
  padding: 30px;
}
</style>
