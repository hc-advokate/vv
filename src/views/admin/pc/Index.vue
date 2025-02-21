<template>
  <div class="hl-wrap-box">
    <a-row>
      <a-col :span="24" class="hl-container-content">
        <div class="study-card">
          <a-carousel id="dynamicAutoBox" class="dynamicAutoBox" :style="{width: '100%'}" :auto-play="{ interval: 3000 }" :move-speed="1000" indicator-type="dot" show-arrow="never">
            <a-carousel-item v-for="item in lbListData" :key="item.id">
              <video muted autoPlay loop playsInline object-fit="cover" class="modal-v" id="ElVideo" preload="auto">
                <source :src="item.v" type="video/mp4" />
              </video>
            </a-carousel-item>
          </a-carousel>
          <div class="hl-swiper-info-box" v-for="item in lbListData" :key="item.id">
            <p class="font-40-48 hl-swiper-title">{{item.title}}</p>
            <p class="font-16-19 hl-swiper-info">{{item.desc}}</p>
            <a-button class="font-20 hl-btn-play" @click="toPage(item.id, item.url)">PLAY NOW</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24" class="padding-40 hl-new-games-box">
        <p class="font-24 new-game-title">New games<a-image fit="cover" :preview="false" class="more-btn" :src="MoreBtn"></a-image></p>
        <a-grid class="hl-game-list" :cols="{ lg: 5, xl: 5, xxl: 5 }" :colGap="22" :rowGap="20">
          <a-grid-item v-for="(item, index) in gmNewList" :key="index" @click="toPage(item.id, item.url)">
            <div class="game-item re-cursor-pointer">
              <a-image fit="cover" :preview="false" class="game-img" :src="item.img"></a-image>
              <div class="new-games-info-box">
                <p class="font-20-24 game-name">{{item.title}}</p>
                <p class="font-16 game-introduce" v-if="false">{{item.introduce}}</p>
                <p class="font-16 game-introduce">{{item.love}}loves</p>
              </div>
            </div>
          </a-grid-item>
        </a-grid>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24" class="padding-40 hl-new-games-box margin-small">
        <p class="font-24 new-game-title">Upcoming<a-image fit="cover" :preview="false" class="more-btn" :src="MoreBtn"></a-image></p>
        <a-grid class="hl-game-list" :cols="{ lg: 5, xl: 5, xxl: 5 }" :colGap="22" :rowGap="20">
          <a-grid-item v-for="(item, index) in gmUpList" :key="index" @click="toPage(item.id, item.url)">
            <div class="game-item re-cursor-pointer">
              <a-image fit="cover" :preview="false" class="game-img" :src="item.img"></a-image>
              <div class="new-games-info-box">
                <p class="font-20-24 game-name">{{item.title}}</p>
                <p class="font-16 game-introduce" v-if="false">{{item.introduce}}</p>
              </div>
            </div>
          </a-grid-item>
        </a-grid>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import MoreBtn from "@/assets/games/more-btn.png";
import {getCurrentInstance, ref, nextTick, onMounted, reactive} from "vue";
import {useRouter} from "vue-router";
import api from "@/api/index.js";
import Constants from "@/plugins/constants/index.js";

const lbListData = reactive(Constants.gameHomeBan);

const gmNewList = reactive(Constants.gameHomeHot);

const gmUpList = reactive(Constants.gameHomeSon);

const router = useRouter();
const toPage = (id, url) => {
  if (url) {
    router.push({path: "/detail", query: {id: id}});
  }
}

const getDynamicHeight = () => {
  let height = 0;
  if (document.getElementById("ElVideo")) {
    height = document.getElementById("ElVideo").clientHeight;
  }
  if (document.getElementById("dynamicAutoBox")) {
    document.getElementById("dynamicAutoBox").style.height = height + "px";
  }
}


const initData = () => {
  api.userApi.gameList({}).then(res => {
    if (res.data.rows.length && !res.code) {
      for (let po of res.data.rows) {
        for (let o of lbListData) {
          if (po.name === o.key) {
            o.love = po.like;
          }
        }
        for (let o of gmNewList) {
          if (po.name === o.key) {
            o.love = po.like;
          }
        }
        for (let o of gmUpList) {
          if (po.name === o.key) {
            o.love = po.like;
          }
        }
      }
    }
  });
}


const init = () => {
  let t = setInterval(() => {
    if (document.getElementById("ElVideo") && document.getElementById("ElVideo").clientHeight > 0) {
      getDynamicHeight();
      clearInterval(t);
    }
  }, 500);
  initData();
}

const headerBg = ref('linear-gradient( 0deg, rgba(12,13,19,0) 0%, #0C0D13 100%)');
const {proxy} = getCurrentInstance();
onMounted(() => {
  nextTick(() => {
    init();
    getDynamicHeight();
    // 改变header组件的背景色
    proxy.$mittBus.emit("bgChange", {
      background: headerBg.value
    });
  });
  window.addEventListener("resize", getDynamicHeight);
});
</script>

<style scoped lang="scss">
  .hl-wrap-box{
    width: 100%;
    //height: 100vh;
    //background: #0C0D13;
    //overflow-y: scroll;
  }

  .header-changed-bg{
    background: rgba(12,13,19,0.6);
  }

  .hl-container-content{
    width: 100%;
    height: auto;
    .study-card{
      width: 100%;
      height: auto;
      position: relative;
      .modal-v {
        object-fit: cover;
        width: 100% !important;
        max-height: 839px;
      }
      .hl-swiper-info-box{
        position: absolute;
        max-width: 648px;
        height: auto;
        left: 40px;
        bottom: 100px;
        z-index: 2;
        .hl-swiper-title{
          font-family: Barlow;
          font-weight: bold;
          color: #FFFFFF;
          font-style: normal;
        }
        .hl-swiper-info{
          width: 100%;
          font-family: Barlow;
          font-weight: 400;
          color: #FFFFFF;
          font-style: normal;
          margin-top: 20px;
        }
        .hl-btn-play{
          width: 200px;
          height: 50px;
          background: #6A39FF;
          border-radius: 28px;
          font-family: Barlow;
          font-weight: bold;
          color: #FFFFFF;
          font-style: normal;
          margin-top: 40px;
          &:hover{
            background: #6A39FF;
          }
        }
      }
    }
  }

  .padding-40{
    width: calc(100% - 80px);
    padding: 0 40px;
  }
  .hl-new-games-box{
    margin-top: 68px;
    .new-game-title{
      font-family: Barlow;
      font-weight: bold;
      color: #FFFFFF;
      font-style: normal;
      .more-btn{
        width: 20px;
        margin-left: 10px;
      }
    }
    .hl-game-list{
      width: 100%;
      margin-top: 30px;
      .game-img{
        width: 100%;
      }
      .new-games-info-box{
        width: 100%;
        height: auto;
        .game-name, .game-introduce{
          font-family: Barlow;
          font-weight: bold;
          color: #FFFFFF;
          font-style: normal;
          margin-top: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .game-introduce{
          font-weight: 400;
          margin-top: 10px;
        }
      }
    }
  }
  .margin-small{
    margin-top: 47px;
    padding-bottom: 90px;
  }

  :deep(.dynamicAutoBox .arco-carousel-indicator-wrapper-bottom){
    background: transparent;
    bottom: 40px;
  }
  :deep(.dynamicAutoBox .arco-carousel-indicator-item){
    width: 10px;
    height: 10px;
    background: transparent;
    border: 2px solid #FFFFFF;
  }
  :deep(.dynamicAutoBox .arco-carousel-indicator-item-active){
    width: 110px;
    height: 10px;
    border-radius: 8px;
    background: #ffffff;
  }
</style>
