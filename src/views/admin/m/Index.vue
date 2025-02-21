<template>
  <Loading v-if="isLoading"></Loading>
  <a-row v-else>
    <a-col :span="24" class="lb-body">
      <swiper class="lb-list" loop :modules="[EffectFade, Autoplay]" autoplay effect="fade">
        <swiper-slide class="lb-item" v-for="(item, index) in lbListData" :key="index">
          <div class="re-flex-row-center" style="height: 100%">
            <video muted autoPlay loop playsInline class="lb-v" preload="auto" :id="`headerVideo${item.id}`">
              <source :src="item.v" type="video/mp4" />
            </video>
          </div>
          <div class="lb-text p-lr">
            <h6 class="title">{{item.title}}</h6>
            <div class="desc">{{item.desc}}</div>
            <a-button class="btn-game lb-btn" @click="toDetail(item.id, item.url)">PLAY NOW</a-button>
          </div>
        </swiper-slide>
      </swiper>
    </a-col>
    <a-col :span="24" class="g-body">
      <div class="g-title re-flex-row-center-ai p-lr">
        <span>New games</span>
        <a-image fit="cover" :preview="false" class="t-img" :src="ImgMore"></a-image>
      </div>
      <div class="gm-list re-flex-row re-mt-20">
        <div class="gm-item" v-for="(item, index) in gmNewList" :key="index" :class="index ? 're-ml-10' : ''">
          <div class="gm-img"><a-image fit="cover" :preview="false" :src="item.img" @click="toDetail(item.id, item.url)" class="re-flex-row-center gmi-img"></a-image></div>
          <div class="gm-title">{{item.title}}</div>
          <div class="gm-desc" v-if="false">{{item.desc}}</div>
          <div class="gm-desc">{{item.love}} loves</div>
        </div>
      </div>
      <div class="g-title re-flex-row-center-ai p-lr re-mt-40">
        <span>Upcoming</span>
        <a-image fit="cover" :preview="false" class="t-img" :src="ImgMore"></a-image>
      </div>
      <div class="gm-list re-flex-row re-mt-20">
        <div class="gm-item" v-for="(item, index) in gmUpList" :key="index" :class="index ? 're-ml-10' : ''">
          <div class="gm-img"><a-image fit="cover" :preview="false" :src="item.img" @click="toDetail(item.id, item.url)" class="re-flex-row-center gmi-img"></a-image></div>
          <div class="gm-title">{{item.title}}</div>
          <div class="gm-desc" v-if="false">{{item.desc}}</div>
          <div class="gm-desc" v-if="false">{{item.view}} views•{{item.love}} loves</div>
        </div>
      </div>
    </a-col>
    <Quick></Quick>
  </a-row>

  <video muted autoPlay loop playsInline object-fit="cover" preload="auto" :id="`headerVideo`" style="display: none">
    <source :src="Video1" type="video/mp4" />
  </video>
</template>

<script setup>
import {nextTick, onActivated, onMounted, reactive, ref} from "vue";
import ImgMore from "@/assets/games/more-btn.png";
import Video1 from "@/assets/games/running-trailer-v3.mp4";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {useRouter} from "vue-router";
import Quick from "@/views/components/Quick.vue";
import Loading from "@/views/admin/m/components/Loading.vue";
import api from "@/api/index.js";
import Constants from "@/plugins/constants/index.js";

const lbListData = reactive(Constants.gameHomeBan);

const gmNewList = reactive(Constants.gameHomeHot);

const gmUpList = reactive(Constants.gameHomeSon);

const router = useRouter();
const toDetail = (id, url) => {
  if (url) {
    router.push({path: "/detail", query: {id: id}});
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

let isLoading = ref(true);
onMounted(() => {
  nextTick(() => {
    document.getElementById("headerGameM").style.display = "none";
    if (document.getElementById("headerVideo")) {
      document.getElementById("headerVideo").addEventListener("canplaythrough", () => {
        setTimeout(() => {
          document.getElementById("headerGameM").style.display = "block";
          isLoading.value = false;
        }, 1000);
      });
    }
  });
  initData();
});
onActivated(() => {
  nextTick(async () => {
    if (document.getElementById("headerGameM")) {
      document.getElementById("headerGameM").style.display = "block";
    }
    for (let o of lbListData) {
      if (document.getElementById(`headerVideo${o.id}`)) {
        await document.getElementById(`headerVideo${o.id}`).play();
      }
    }
  });
  initData();
});
</script>

<style scoped lang="scss">
.p-lr {
  padding-left: 20px;
  padding-right: 20px;
}
.btn-game {
  background: #6A39FF;
  border-radius: 13px;
  padding: 6px 21px;
}
.lb-body {
  .lb-list {
    width: 100%;
    height: 470px;
    .lb-v {
      width: auto;
      height: 100%;
    }
    .lb-item {
      position: relative;
      .lb-text {
        position: absolute;
        bottom: 0;
        color: #FFFFFF;
        text-align: left;
        font-style: normal;
        padding: 20px;
        .title {
          font-family: Barlow-Bold, Barlow;
          font-weight: bold;
          font-size: 19px;
          line-height: 23px;
        }
        .desc {
          font-family: Barlow-Regular, Barlow;
          font-weight: 400;
          font-size: 13px;
          line-height: 20px;
          margin-top: 5px;
        }
      }
      .lb-btn {
        width: 104px;
        height: 24px;
        font-family: Barlow-Bold, Barlow;
        font-weight: bold;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 10px;
        text-align: left;
        font-style: normal;
        margin-top: 20px;
      }
    }
  }
}
.g-body {
  margin-top: 50px;
  padding-bottom: 100px;
  .g-title {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 13px;
    color: #FFFFFF;
    line-height: 13px;
    text-align: left;
    font-style: normal;
  }
  .t-img {
    width: 12px;
    height: 9px;
    margin-left: 5px;
    :deep(.arco-image-img) {
      margin-bottom: 4px;
    }
  }
  .gm-list {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    overflow: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      display: none;
      width: 0 !important;
    }
    .gm-item {
      display: inline-block;
    }
    .gm-img {
      width: 350px;
      .gmi-img {
        border-radius: 20px;
      }
    }
    .gm-title {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 1.5;
      text-align: left;
      font-style: normal;
      margin-top: 5px;
    }
    .gm-desc {
      font-family: Barlow-Regular, Barlow;
      font-weight: 400;
      font-size: 12px;
      color: #FFFFFF;
      line-height: 1;
      text-align: left;
      font-style: normal;
      margin-top: 5px;
    }
  }
}
</style>
