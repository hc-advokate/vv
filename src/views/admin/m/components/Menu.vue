<template>
  <a-menu
    class="menu-body"
    :selected-keys="menuData.menuSelect"
    :default-selected-keys="menuData.defaultSelect"
    :open-keys="menuData.menuOpen"
    :accordion="true"
    :auto-open-selected="true"
    @menu-item-click="toPage">
    <a-menu-item v-for="(item, index) in menuList" :key="item.router">
      <div v-if="item.name" class="re-flex-row-center-ai">
        <a-image fit="cover" :preview="false" class="menu-icon" :src="item.icon"></a-image>
        <div class="font-20-50 menu-text">{{ item.name }}</div>
      </div>
      <div v-else class="menu-line"></div>
    </a-menu-item>
    <a-menu-item key="/test" style="height: 20px"></a-menu-item>
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

const menuList = [{
  icon: MenuHome,
  name: "Home",
  router: "/home",
}, {
  icon: MenuPLayed,
  name: "Recently played",
  router: "/home",
}, {
  icon: MenuNew,
  name: "New",
  router: "/home",
}, {
  icon: MenuNow,
  name: "Trending now",
  router: "/home",
}, {
  icon: null,
  name: "",
  router: "#",
}, {
  icon: MenuAction,
  name: "Action",
  router: "/home",
}, {
  icon: MenuCard,
  name: "Card",
  router: "/home",
}, {
  icon: MenuEscape,
  name: "Escape",
  router: "/home",
}, {
  icon: MenuPlatform,
  name: "Platform",
  router: "/home",
}, {
  icon: MenuPuzzle,
  name: "Puzzle",
  router: "/home",
}, {
  icon: MenuRacing,
  name: "Racing",
  router: "/home",
}, {
  icon: MenuShooting,
  name: "Shooting",
  router: "/home",
}, {
  icon: MenuStrategy,
  name: "Strategy",
  router: "/home",
},];

let menuData = reactive({
  menuSelect: ["/home"],
  defaultSelect: ["/home"],
  menuOpen: [""],
});

const {proxy} = getCurrentInstance();
let router = useRouter();

const toPage = (e) => {
  menuData.menuSelect[0] = e;
  if (!e.toString().includes("/home")) {
    menuData.menuOpen[0] = "";
  }
  proxy.$mittBus.emit("clickMenu", {
    click: true,
  });
  router.push({path: e});
}
</script>

<style scoped lang="scss">
.menu-body {
  .menu-icon {
    width: 27px;
  }
  .menu-text {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 1;
    text-align: left;
    font-style: normal;
    margin-left: 7px;
  }
  .menu-line {
    width: 100%;
    height: 1px;
    background-color: #979797;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

:global(.menu-body) {
  background-color: transparent;
}
:global(.menu-body .arco-menu-inner) {
  padding: 0 !important;
}
:global(.menu-body .arco-menu-inner .arco-menu-item) {
  padding: 0 !important;
}
:global(.menu-body *) {
  background-color: transparent;
}
:global(.arco-menu-light .arco-menu-item) {
  background-color: transparent;
}
:global(.arco-menu-light .arco-menu-item.arco-menu-selected) {
  background-color: transparent;
}
</style>
