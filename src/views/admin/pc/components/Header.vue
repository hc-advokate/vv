<template>
  <a-row class="hl-header-body" id="header" :style="{'background' : headerBg}">
    <a-col :span="24" class="hl-header-content re-flex-row-between">
      <a-col :span="24" :lg="8" :xl="8" :xxl="4" class="hl-flex-row">
        <a-image fit="cover" :preview="false" :src="Menu" class="re-cursor-pointer menu-ico re-flex-row-center hl-menu-logo" @click="openMenu"></a-image>
        <img fit="cover" :src="LogoNew" class="re-flex-row-center hl-header-logo" @click="toPageHome" />
<!--        <a-image fit="cover" :preview="false" :src="LogoNew" class="re-flex-row-center hl-header-logo" @click="toPageHome"></a-image>-->
      </a-col>
      <a-col :span="24" :lg="8" :xl="8" :xxl="4" class="hl-flex-row-end">
        <a-button class="re-flex-row hl-btn-search">
          <a-image fit="cover" :preview="false" :src="Search" class="search-ico"></a-image>
        </a-button>
        <a-button class="re-flex-row hl-btn-connect font-23-28" @click="visible = true" v-if="isLogin">WALLET</a-button>
        <a-button class="re-flex-row hl-btn-connect font-23-28" @click="visible = true" v-else>CONNECT</a-button>
        <div v-if="false" class="re-flex-row-center">
          <a-image fit="cover" :preview="false" :src="ImgCoinGai" class="hl-game-icon"></a-image>
          <span class="font-16 hl-game-amount">36</span>
          <a-image fit="cover" :preview="false" :src="ImgDefaultAvatar" class="hl-game-avatar"></a-image>
        </div>
      </a-col>
    </a-col>

    <!--  侧边栏菜单 start  -->
    <a-drawer :width="260" class="hl-drawer-body" :visible="menuObj.isShowDrawer" @cancel="closeMenu" placement="left" :closable="false" :header="false" :footer="false" unmountOnClose>
      <div class="hl-drawer-content">
        <a-image fit="cover" :preview="false" class="re-cursor-pointer menu-close" :src="CloseMenuBtn" @click="closeMenu"></a-image>
        <MenuComp></MenuComp>
      </div>
    </a-drawer>
    <!--  侧边栏菜单 end  -->

    <!--  登录弹框 start  -->
    <a-modal class="hl-login-modal" title="Connect Your Wallet" v-model:visible="visible" titleAlign="start" :footer="false" :mask-closable="false" v-if="!isLogin">
      <div class="login-box-in">
        <a-textarea class="textarea-bg connect-input font-16-24" placeholder="By connecting your wallet, you acknowledge that you have read, understand and accept the terms in the Disclaimer" v-model="connectValue"/>
        <a-grid class="hl-btn-list" :cols="{ lg: 2, xl: 2, xxl: 2 }" :colGap="20" :rowGap="20">
          <a-grid-item v-for="(item, index) in btnList" :key="index">
            <a-button class="font-16-19 login-btn" @click="toLogin">
              <a-image fit="cover" :preview="false" :src="item.icon" class="login-btn-img"></a-image>
              {{item.name}}
            </a-button>
          </a-grid-item>
        </a-grid>
        <p class="font-26 hl-login-tip">New here?  <span>Get started on GaiAI</span></p>
      </div>
    </a-modal>
    <!--  登录弹框 end  -->
  </a-row>
</template>

<script setup>
import LogoNew from "@/assets/logo-new.png";
import MenuComp from "@/views/admin/pc/components/Menu.vue";
import Menu from "@/assets/games/games-menu.png";
import Search from "@/assets/games/search-btn.png";
import CloseMenuBtn from "@/assets/games/close-menu-btn.png";
import IconMW from "@/assets/games/login-icon-mw.png";
import IconPT from "@/assets/games/login-icon-pt.png";
import IconSL from "@/assets/games/login-icon-sl.png";
import IconST from "@/assets/games/login-icon-st.png";
import ImgCoinGai from "@/assets/games/coin-gai.png";
import ImgDefaultAvatar from "@/assets/games/default-avatar.png";
import {getCurrentInstance, ref, nextTick, onMounted, reactive} from "vue";
import {useRouter} from "vue-router";

const btnList = reactive([
  {name: 'MetaGaia Wallet', icon: IconMW},
  {name: 'Phantom', icon: IconPT},
  {name: 'Solflare', icon: IconSL},
  {name: 'Sollet', icon: IconST}
]);

const menuObj = reactive({
  isShowDrawer: false,
})
const openMenu = () => {
  menuObj.isShowDrawer = true;
}
const closeMenu = () => {
  menuObj.isShowDrawer = false;
}

const isLogin = ref(false);
const visible = ref(false);
const connectValue = ref('');

const toLogin = () => {
  visible.value = false;
  isLogin.value = true;
}

let router = useRouter();
const toPageHome = () => {
  router.push({path: "/home"});
}

const headerHeight = ref(0);
const headerBg = ref('');
const isChangeBg = ref(false);
const {proxy} = getCurrentInstance();

onMounted(() => {
  nextTick(() => {
    headerHeight.value = document.getElementById("header") && document.getElementById("header").clientHeight;
    // 传递header组件的高度
    proxy.$mittBus.emit("sendHeight", {
      height: headerHeight.value
    });
  });

  // 接收header组件的背景色
  proxy.$mittBus.on("bgChange", (data) => {
    isChangeBg.value = true;
    headerBg.value = data.background;
  });

  // 关闭菜单
  proxy.$mittBus.on("clickMenu", (data) => {
    closeMenu();
  });
})
</script>

<style scoped lang="scss">
  .hl-header-body, .header-changed-bg{
    width: 100%;
    height: auto;
    background: linear-gradient( 0deg, rgba(12,13,19,0) 0%, #0C0D13 100%);
    transition: background-color 0.3s; /* 平滑过渡效果 */
    position: fixed;
    top: 0;
    z-index: 3;
  }

  .hl-header-content{
    width: calc(100% - 80px);
    padding: 25px 40px;
    height: auto;
  }

  .hl-flex-row, .hl-flex-row-end{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hl-flex-row-end{
    justify-content: flex-end;
  }

  .menu-ico {
    width: 50px;
    height: 35px;
    background: transparent;
    padding: 0;
    &:hover{
      background: transparent;
    }
  }

  .hl-header-logo{
    font-family: Barlow;
    font-weight: bold;
    color: #FFFFFF;
    font-style: normal;
    cursor: pointer;
    height: 50px;
    margin-left: 10px;
    :deep(.arco-image-img) {
      height: 100%;
    }
  }
  .hl-menu-logo {
    :deep(.arco-image-img) {
      width: auto;
      height: 100%;
    }
  }

  .hl-btn-search{
    width: 28px;
    height: 33px;
    background: transparent;
    padding: 0;
    &:hover{
      background: transparent;
    }
  }

  .hl-btn-connect{
    width: 200px;
    height: 50px;
    background: #6A39FF;
    border-radius: 28px;
    font-family: Barlow;
    font-weight: bold;
    color: #FFFFFF;
    font-style: normal;
    margin-left: 39px;
    &:hover{
      background: #6A39FF;
      color: #ffffff;
    }
  }

  .hl-game-icon {
    width: 31px;
    margin-left: 20px;
  }
  .hl-game-avatar {
    width: 45px;
    margin-left: 17px;
  }
  .hl-game-amount {
    font-family: Barlow-Bold;
    font-weight: bold;
    color: #FFFFFF;
    font-style: normal;
    margin-left: 10px;
  }

  // 侧边栏
  :global(.hl-drawer-body .arco-drawer-body) {
    background-color: #24252B;
    padding: 20px;
  }
  .menu-close{
    width: 20px;
    height: 20px;
  }

  // 登录弹框
  :global(.hl-login-modal .arco-modal){
    max-width: 640px;
    background: #0C0D13;
    border-radius: 20px;
    padding: 10px;
  }
  :global(.hl-login-modal .arco-modal-header){
    border-bottom: none;
  }
  :global(.hl-login-modal .arco-modal-title){
    font-family: Barlow;
    font-weight: 500;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
    font-style: normal;
  }
  :global(.hl-login-modal .arco-icon){
    width: 20px;
    height: 20px;
    color: #6A39FF;
  }
  .login-box-in{
    width: 100%;
    .textarea-bg{
      border: 1px solid #6A39FF;
      background: #0C0D13;
    }
    .connect-input{
      border-radius: 20px;
      padding: 10px;
      font-family: Barlow;
      font-weight: 400;
      font-style: normal;
      color: #FFFFFF;
      :deep(.arco-textarea){
        min-height: 128px;
      }
      :deep(.arco-textarea::placeholder) {
        color: #A0A0A0;
      }
    }

    .hl-btn-list{
      width: 100%;
      margin-top: 30px;
      .login-btn{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-radius: 31px;
        border: 1px solid #6A39FF;
        background: #0C0D13;
        padding: 0;
        padding-left: 20px;
        font-family: Barlow-Medium;
        font-weight: 500;
        color: #FFFFFF;
        font-style: normal;
        .login-btn-img{
          width: 38px;
          margin-right: 10px;
        }
      }
    }

    .hl-login-tip{
      font-family: Barlow-Medium;
      font-weight: 500;
      color: #FFFFFF;
      text-align: center;
      font-style: normal;
      margin-top: 30px;
      span{
        color: #6A39FF;
        margin-left: 2px;
      }
    }
  }
</style>
