<template>
  <a-row class="detail-body">
    <a-col :span="24" class="h-body">
<!--      <iframe v-if="showPlay" :src="dataObj.url" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;" class="h-v"></iframe>-->
      <template v-if="!showPlay">
        <div class="re-flex-row-center re-full">
          <a-image fit="cover" :preview="false" v-if="lbListData[dataObj.index].img" class="h-v" :src="lbListData[dataObj.index].img"></a-image>
          <video v-else muted autoPlay loop playsInline object-fit="cover" class="h-v" preload="auto" id="videoDetail">
            <source v-if="lbListData[dataObj.index]" :src="lbListData[dataObj.index].v" type="video/mp4" />
          </video>
        </div>
        <div class="h-info re-flex-row-center">
          <a-button class="btn-game h-btn" @click="onChangePlay">PLAY NOW</a-button>
        </div>
        <div class="h-lsm re-flex-row-center" v-if="lbListData[dataObj.index]">
          <a-button class="re-flex-row-center lsm-btn" :class="{'lsm-btn-ac' : lbListData[dataObj.index].isLike}" @click="submitFormLike">
            <a-image fit="cover" :preview="false" :src="lbListData[dataObj.index].isLike ? CollectionBtnActive : CollectionBtn" class="re-cursor-pointer btn-img"></a-image>
            <span>{{ lbListData[dataObj.index] && lbListData[dataObj.index].love }}</span>
          </a-button>
          <a-button class="re-flex-row-center lsm-btn" @click="onVisShare">
            <a-image fit="cover" :preview="false" :src="shareBtn" class="re-cursor-pointer btn-img"></a-image>
            <span>Share</span>
          </a-button>
          <a-image fit="cover" :preview="false" :src="reportBtn" class="re-cursor-pointer lsm-m" v-if="false"></a-image>
        </div>
      </template>
    </a-col>

    <a-col :span="24" class="p-lr info-body">
      <div class="i-title">{{ lbListData[dataObj.index] && lbListData[dataObj.index].title }}</div>
      <div class="i-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].titleSub }} • {{ lbListData[dataObj.index] && lbListData[dataObj.index].view }} views</div>
      <div class="i-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].desc }}</div>
      <div class="i-card">
        <div class="card-item re-flex-row">
          <span class="card-title">Rating:</span>
          <span class="card-txt">87 (18,910 votes)</span>
        </div>
        <div class="card-item re-flex-row">
          <span class="card-title">Developer:</span>
          <span class="card-txt txt-active">{{ lbListData[dataObj.index] && lbListData[dataObj.index].developer }}</span>
        </div>
        <div class="card-item re-flex-row">
          <span class="card-title">Released:</span>
          <span class="card-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].released }}</span>
        </div>
        <div class="card-item re-flex-row">
          <span class="card-title">Technology:</span>
          <span class="card-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].technology }}</span>
        </div>
        <div class="card-item re-flex-row">
          <span class="card-title">Platform:</span>
          <span class="card-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].platform }}</span>
        </div>
        <div class="card-item re-flex-row" v-if="false">
          <span class="card-title">Classification:</span>
          <span class="card-txt txt-active">Games»Driving»Car</span>
        </div>
        <div class="card-item re-flex-row">
          <span class="card-title">Tags:</span>
          <span class="card-txt" v-if="lbListData[dataObj.index]">
            <span v-for="(item, index) in lbListData[dataObj.index].tags" :key="index">{{item}}; </span>
          </span>
        </div>
      </div>
    </a-col>
    <Quick v-if="!showPlay"></Quick>
  </a-row>

  <a-modal v-model:visible="modalData.shareVis" @cancel="onVisShare" :hide-cancel="true" :footer="false" :closable="false" class="modal-share">
    <div>
      <div class="re-flex-row-end m-close">
        <a-image fit="cover" :preview="false" :src="IcoClose" @click="onVisShare" class="close"></a-image>
      </div>
      <div class="re-flex-row-center title">Share this game</div>
      <div class="re-flex-row-center share">
        <div class="share-info re-flex-row-between">
          <div class="text">{{ dataObj.shareUrl }}</div>
          <div class="re-flex-row-center copy re-cursor-pointer" @click="copyDataText">COPY</div>
        </div>
      </div>
    </div>
  </a-modal>

  <a-drawer :visible="showPlay" placement="top" class="gm-draw" :closable="false" :header="false" :footer="false" unmountOnClose>
    <div class="gm-body" id="GmBody">
      <div class="gm-close re-flex-row-center" @click="onChangePlayClose"><icon-close /></div>
      <iframe v-if="showPlay" :src="dataObj.url" frameborder="0" allow="gamepad *;" class="gm-frm" id="gameIf"></iframe>
    </div>
  </a-drawer>
</template>

<script setup>
import {getCurrentInstance, nextTick, onActivated, onMounted, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";
import CollectionBtn from "@/assets/games/unCollection-btn.png";
import CollectionBtnActive from "@/assets/games/collection-btn.png";
import shareBtn from "@/assets/games/share-btn.png";
import reportBtn from "@/assets/games/report-btn.png";
import IcoClose from "@/assets/games/close-menu-btn.png";
import useClipboard from "vue-clipboard3";
import Quick from "@/views/components/Quick.vue";
import api from "@/api/index.js";
import Constants from "@/plugins/constants/index.js";

const { toClipboard } = useClipboard();
const modalData = reactive({
  shareVis: false,
});
const onVisShare = () => {
  modalData.shareVis = !modalData.shareVis;
}

const dataObj = reactive({
  id: 0,
  index: 0,
  url: "",
  shareUrl: window.location.href,
  isClick: true,
})
const lbListData = reactive(Constants.gameDetail);

const showPlay = ref(false);
const onChangePlay = () => {
  showPlay.value = true;
}
const onChangePlayClose = () => {
  showPlay.value = false;
}

const {proxy} = getCurrentInstance();
const copyDataText = async () => {
  try {
    await toClipboard(dataObj.shareUrl);
    proxy.$message.success("Link Copied");
  } catch (e) {
    proxy.$message.error("Copied Error");
  }
}

const submitFormLike = () => {
  if (dataObj.isClick) {
    dataObj.isClick = false;
    api.userApi.gameEdit({name: lbListData[dataObj.index].key}).then(() => {
      dataObj.isClick = true;
      initData();
    }).catch(() => {
      dataObj.isClick = true;
    });
  }
}

const route = useRoute();
const initData = () => {
  dataObj.id = Number(route.query.id);
  let index = lbListData.findIndex(item => item.id.toString() === route.query.id);
  dataObj.index = index > -1 ? index : 0;
  if (route.query.id === "1") {
    dataObj.url = `${lbListData[dataObj.index].url}?t=${Math.random()}&token=${Constants.gameToken1}end`;
  } else {
    dataObj.url = `${lbListData[dataObj.index].url}?t=${Math.random()}&token=${window.localStorage.getItem("tgToken")}`;
  }

  api.userApi.gameList({name: lbListData[dataObj.index].key}).then(res => {
    if (res.data.rows.length && !res.code) {
      lbListData[dataObj.index].love = res.data.rows[0].like;
      lbListData[dataObj.index].isLike = res.data.rows[0].isLike;
    }
  });
}

// const {proxy} = getCurrentInstance();
onMounted(() => {
  if (route.query) {
    initData();
  }
})
onActivated(() => {
  if (route.query) {
    initData();
  }
  onChangePlayClose();
  nextTick(() => {
    if (document.getElementById(`videoDetail`)) document.getElementById(`videoDetail`).play();
  });
})
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
.detail-body {
  padding-bottom: 80px;
}
.h-body {
  width: 100%;
  height: 470px;
  position: relative;
  z-index: 9;
  top: 0;
  left: 0;
  .h-v {
    width: 100%;
    height: auto;
  }
  .h-info {
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    .h-btn {
      width: 154px;
      height: 38px;
      border-radius: 10px;
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 1;
      text-align: left;
      font-style: normal;
    }
  }
  .h-lsm {
    position: absolute;
    z-index: 9999;
    bottom: 0;
    right: 0;
    .lsm-btn {
      background-color: #000;
      border-radius: 23px;
      border: 1px solid #FFFFFF;
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 1;
      text-align: left;
      font-style: normal;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 10px;
      margin-right: 10px;
      &.lsm-btn-ac {
        background-color: #fff;
        color: #000;
      }
      .btn-img {
        width: 15px;
        height: auto;
        margin-right: 10px;
      }
    }
    .lsm-m {
      width: 40px;
      height: 40px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
.info-body {
  margin-top: 20px;
  .i-title {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 19px;
    color: #FFFFFF;
    line-height: 23px;
    text-align: left;
    font-style: normal;
  }
  .i-txt {
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    font-size: 13px;
    color: #FFFFFF;
    line-height: 19px;
    text-align: left;
    font-style: normal;
    margin-top: 10px;
  }
  .i-card {
    width: 100%;
    background: #24252B;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
    .card-item {
      margin-top: 5px;
    }
    .card-title {
      font-family: Barlow-Regular, Barlow;
      font-weight: 400;
      font-size: 13px;
      color: #FFFFFF;
      line-height: 19px;
      text-align: left;
      font-style: normal;
      width: 90px;
      display: inline-block;
    }
    .card-txt {
      font-family: Barlow-Regular, Barlow;
      font-weight: 400;
      font-size: 13px;
      color: #FFFFFF;
      line-height: 19px;
      text-align: left;
      font-style: normal;
      display: inline-block;
      width: calc(100% - 90px);
      &.txt-active {
        font-family: Barlow-Bold, Barlow;
        color: rgba(106, 57, 255, 1);
      }
    }
  }
}
.modal-share {
  .m-close {
    width: 100%;
    .close {
      width: 10px;
    }
  }
  .title {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 19px;
    color: #FFFFFF;
    line-height: 14px;
    text-align: left;
    font-style: normal;
  }
  .share {
    margin-top: 27px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 40px;
    .share-info {
      width: 100%;
      height: 50px;
      background-color: #0C0D13;
      border-radius: 30px;
      border: 1px solid #6A39FF;
      .text {
        padding: 5px 15px 8px;
        font-family: Barlow-Regular, Barlow;
        font-weight: 400;
        font-size: 16px;
        color: #A0A0A0;
        line-height: 1;
        text-align: left;
        font-style: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .copy {
        padding: 5px 13px;
        height: 100%;
        background-color: #6243F6;
        font-family: Barlow-Bold, Barlow;
        font-weight: bold;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 1;
        text-align: left;
        font-style: normal;
        border-radius: 0 30px 30px 0;
      }
    }
  }
}
:global(.modal-share .arco-modal) {
  width: 90%;
  background: transparent;
}
:global(.modal-share .arco-modal-body) {
  background: #24252B;
  border-radius: 10px;
  padding: 10px;
}
.gm-draw {
  .gm-body {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .gm-close {
    width: 30px;
    height: 30px;
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
    background-color: #6A39FF;
    border-radius: 50%;
    position: absolute;
    z-index: 99999;
    top: 10px;
    left: 10px;
    opacity: 0.6;
  }
  .gm-frm {
    width: 100vw;
    height: 100vh;
  }
}
:global(.gm-draw) {
  width: 100%;
  height: 100%;
}
:global(.gm-draw .arco-drawer) {
  width: 100vw !important;
  height: 100vh !important;
  clear: both;
  line-height: 0;
  padding: 0 !important;
}
:global(.gm-draw .arco-drawer-body) {
  width: 100vw !important;
  height: 100vh !important;
  clear: both;
  line-height: 0;
  padding: 0 !important;
}
</style>
