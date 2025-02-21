<template>
  <a-menu class="hl-menu-container"
    :selected-keys="menu.menuSelect"
    :default-selected-keys="menu.defaultSelect"
    :open-keys="menu.menuOpen"
    :accordion="true"
    :auto-open-selected="true"
    @menu-item-click="toPage">
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuHome"></a-image>
          <span class="font-20-50 menu-text">Home</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuPLayed"></a-image>
          <span class="font-20-50 menu-text">Recently played</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuNew"></a-image>
          <span class="font-20-50 menu-text">New</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuNow"></a-image>
          <span class="font-20-50 menu-text">Trending now</span>
        </div>
      </a-menu-item>
      <div class="hl-menu-line"></div>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuAction"></a-image>
          <span class="font-20-50 menu-text">Action</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuCard"></a-image>
          <span class="font-20-50 menu-text">Card</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuEscape"></a-image>
          <span class="font-20-50 menu-text">Escape</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuPlatform"></a-image>
          <span class="font-20-50 menu-text">Platform</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuPuzzle"></a-image>
          <span class="font-20-50 menu-text">Puzzle</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuRacing"></a-image>
          <span class="font-20-50 menu-text">Racing</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuShooting"></a-image>
          <span class="font-20-50 menu-text">Shooting</span>
        </div>
      </a-menu-item>
      <a-menu-item key="/home">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" class="menu-icon" :src="MenuStrategy"></a-image>
          <span class="font-20-50 menu-text">Strategy</span>
        </div>
      </a-menu-item>
  </a-menu>
</template>

<script setup>
import MenuHome from "@/assets/games/icon-home.png";
import MenuPLayed from "@/assets/games/icon-recently-played.png";
import MenuNew from "@/assets/games/icon-new.png";
import MenuNow from "@/assets/games/icon-trending-now.png";
import MenuAction from "@/assets/games/icon-action.png";
import MenuCard from "@/assets/games/icon-card.png";
import MenuEscape from "@/assets/games/icon-escape.png";
import MenuPlatform from "@/assets/games/icon-platform.png";
import MenuPuzzle from "@/assets/games/icon-puzzle.png";
import MenuRacing from "@/assets/games/icon-racing.png";
import MenuShooting from "@/assets/games/icon-shooting.png";
import MenuStrategy from "@/assets/games/icon-strategy.png";

import {getCurrentInstance, reactive} from "vue";
import {useRouter} from "vue-router";

let menu = reactive({
  menuSelect: ["/home"],
  defaultSelect: ["/home"],
  menuOpen: [""],
});

const {proxy} = getCurrentInstance();
let router = useRouter();
const toPage = (e) => {
  menu.menuSelect[0] = e;
  if (!e.toString().includes("/home")) {
    menu.menuOpen[0] = "";
  }
  proxy.$mittBus.emit("clickMenu", {
    click: true,
  });
  router.push({path: e});
}
</script>

<style scoped lang="scss">
.hl-menu-container{
  background: transparent;
  :deep(.arco-menu-inner) {
    background: transparent;
    padding: 0 !important;
  }

  .arco-menu-item {
    background-color: transparent;
    font-family: Barlow-Bold;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1;
    font-style: normal;
    width: 100%;
    padding: 0;
    margin-bottom: 0;
  }

  .arco-menu-item:first-child{
    padding-top: 10px;
  }

  .hl-menu-line{
    width: 100%;
    height: 1px;
    background: #979797;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .menu-text {
    margin-left: 8px;
  }
}
</style>
