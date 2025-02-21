<template>
  <div class="hl-wrap-box">
    <div id="seatBox" :style="{'height': '100px'}"></div>
    <a-row>
      <a-col :span="24" class="hl-flex-row-between hl-container-content">
        <a-col :span="24" :lg="18" :xl="18" :xxl="18" class="hl-game-box">
          <div class="hl-video-box" id="hl-video-box">
            <a-image fit="cover" :preview="false" v-if="lbListData[dataObj.index].img" class="modal-v" :src="lbListData[dataObj.index].img"></a-image>
            <video v-else muted autoPlay loop playsInline object-fit="cover" class="modal-v" id="ElVideo" preload="auto">
              <source v-if="lbListData[dataObj.index]" :src="lbListData[dataObj.index].v" type="video/mp4" />
            </video>
          </div>
          <a-col :span="24" class="re-flex-row-between hl-game-info-box">
            <a-col :span="24" :lg="12" :xl="12" :xxl="12">
              <p class="font-40-48 game-name">{{ lbListData[dataObj.index] && lbListData[dataObj.index].title }}</p>
            </a-col>
            <a-col :span="24" :lg="12" :xl="12" :xxl="12">
              <div class="game-tools-box">
                <a-button @click="submitFormLike" class="font-16 collection-btn" :class="{'collection-btn-active' : lbListData[dataObj.index].isLike}"><a-image fit="cover" :preview="false" :src="lbListData[dataObj.index].isLike ? CollectionBtnActive : CollectionBtn" class="collection-img"></a-image> {{ lbListData[dataObj.index] && lbListData[dataObj.index].love }}</a-button>
                <a-button class="font-16 share-btn btn-marginL" @click="visible = true"><a-image fit="cover" :preview="false" :src="shareBtn" class="share-img"></a-image> Share</a-button>
                <a-image fit="cover" :preview="false" :src="reportBtn" class="re-cursor-pointer report-img btn-marginL" v-if="false"></a-image>
              </div>
            </a-col>
          </a-col>
          <a-col :span="24" class="font-16 collection-count">{{ lbListData[dataObj.index] && lbListData[dataObj.index].titleSub }} • {{ lbListData[dataObj.index] && lbListData[dataObj.index].view }} views</a-col>
          <a-col :span="24" class="hl-flex-row-between hl-game-info-box">
            <a-col :span="24" :lg="12" :xl="12" :xxl="12">
              <p class="font-16-23 game-introduce">{{ lbListData[dataObj.index] && lbListData[dataObj.index].desc }}</p>
            </a-col>
            <a-col :span="24" :lg="12" :xl="12" :xxl="12">
              <div class="game-data-box">
                <div class="re-flex-row data-item">
                  <p class="font-16-30 date-name">Rating:</p>
                  <p class="font-16-30 data-info">87 (18,910 votes)</p>
                </div>
                <div class="re-flex-row data-item">
                  <p class="font-16-30 date-name">Developer:</p>
                  <p class="font-16-30 data-info data-info-modify">{{ lbListData[dataObj.index] && lbListData[dataObj.index].developer }}</p>
                </div>
                <div class="re-flex-row data-item">
                  <p class="font-16-30 date-name">Released:</p>
                  <p class="font-16-30 data-info">{{ lbListData[dataObj.index] && lbListData[dataObj.index].released }}</p>
                </div>
                <div class="re-flex-row data-item">
                  <p class="font-16-30 date-name">Technology:</p>
                  <p class="font-16-30 data-info">{{ lbListData[dataObj.index] && lbListData[dataObj.index].technology }}</p>
                </div>
                <div class="re-flex-row data-item">
                  <p class="font-16-30 date-name">Platform:</p>
                  <p class="font-16-30 data-info">{{ lbListData[dataObj.index] && lbListData[dataObj.index].platform }}</p>
                </div>
                <div class="re-flex-row data-item">
                  <p class="font-16-30 date-name">Tags:</p>
                  <p class="font-16-30 data-info" v-if="lbListData[dataObj.index]"><span v-for="(item, index) in lbListData[dataObj.index].tags" :key="index">{{item}}; </span></p>
                </div>
              </div>
            </a-col>
          </a-col>
        </a-col>
        <a-col :span="24" :lg="6" :xl="6" :xxl="6">
          <div class="hl-suggestions-box">
            <p class="font-24 suggestions-title">Suggestions</p>
            <a-grid class="hl-suggestions-list" :cols="{ lg: 1, xl: 1, xxl: 1 }" :colGap="0" :rowGap="20">
              <a-grid-item v-for="(item, index) in lbListData" :key="index" @click="toPage(item.id, item.url)">
                <div class="suggestions-item re-cursor-pointer" v-if="item.img && item.url">
                  <a-image fit="cover" :preview="false" class="suggestions-img" :src="item.img"></a-image>
                </div>
              </a-grid-item>
            </a-grid>
          </div>
        </a-col>
      </a-col>
    </a-row>
  </div>

  <!-- share弹窗 start -->
  <a-modal class="hl-share-modal" title=" " v-model:visible="visible" :footer="false" :mask-closable="false" @close="handleClose">
    <div class="login-box-in">
      <p class="font-30 share-title">Share this game</p>
      <div class="share-footer">
        <a-input class="font-16-24 hl-footer-input" placeholder="http://www.xxxxxxxxxxx.com/" disabled v-model="dataObj.shareUrl"/>
        <a-button class="font-20 hl-footer-btn" type="primary" @click="copyLink">COPY</a-button>
      </div>
    </div>
  </a-modal>
  <!-- share弹窗 end -->
</template>

<script setup>
import Video1 from "@/assets/games/running-trailer-v3.mp4";
import CollectionBtn from "@/assets/games/unCollection-btn.png";
import CollectionBtnActive from "@/assets/games/collection-btn.png";
import shareBtn from "@/assets/games/share-btn.png";
import reportBtn from "@/assets/games/report-btn.png";
import {getCurrentInstance, ref, nextTick, onMounted, reactive, onActivated, watch} from "vue";
import useClipboard from "vue-clipboard3";
import {useRoute, useRouter} from "vue-router";
import api from "@/api/index.js";
import Constants from "@/plugins/constants/index.js";

const dataObj = reactive({
  id: 0,
  index: 0,
  url: "",
  shareUrl: window.location.href,
  isClick: true,
})
const lbListData = reactive(Constants.gameDetail);

const handleClose = () => {
  visible.value = false;
};

const { toClipboard } = useClipboard();
const copyLink = async () => {
  try {
    await toClipboard(dataObj.shareUrl);
    proxy.$message.success("Copied Success");
  } catch (e) {
    proxy.$message.error("Copied Error");
  }
  handleClose();
}

const submitFormLike = (() => {
  if (dataObj.isClick) {
    dataObj.isClick = false;
    api.userApi.gameEdit({name: lbListData[dataObj.index].key}).then(() => {
      dataObj.isClick = true;
      initData();
    }).catch(() => {
      dataObj.isClick = true;
    });
  }
});

const visible = ref(false);

const router = useRouter();
const toPage = (id, url) => {
  if (!url) return false;
  id = String(id);
  dataObj.id = Number(id);
  let index = lbListData.findIndex(item => item.id.toString() === id);
  dataObj.index = index > -1 ? index : 0;
  if (id === "1") {
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

  if (url) {
    router.replace({path: "/detail", query: {id: id}});
  }
}

const route = useRoute();
const init = () => {
  let t = setInterval(() => {
    const ch = document.getElementById("ElVideo") && document.getElementById("ElVideo").clientHeight;
    if (ch > 0) {
      clearInterval(t);
    }
  }, 500);
}
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

const seatBoxHeight = ref('');
const headerBg = ref('rgba(12,13,19,0.6)');
const {proxy} = getCurrentInstance();
onMounted(() => {
  nextTick(() => {
    init();
    if (route.query) {
      initData();
    }

    // 改变header组件的背景色
    proxy.$mittBus.emit("bgChange", {
      background: headerBg.value
    });
  });

  // 接收header组件的高度
  proxy.$mittBus.on("sendHeight", (data) => {
    seatBoxHeight.value = data.height + 'px';
  });
});
onActivated(() => {
  if (route.query) {
    initData();
  }
});
</script>

<style scoped lang="scss">
.hl-flex-row-between{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.hl-wrap-box{
  width: 100%;
  height: auto;
}

.hl-container-content{
  width: calc(100% - 40px);
  padding: 0 0 0 40px;
  height: auto;
  .hl-game-box{
    width: 100%;
    height: auto;
    padding-bottom: 40px;
    .hl-video-box{
      width: 100%;
      .modal-v {
        object-fit: cover;
        width: 100% !important;
        max-height: 839px;
      }
    }

    .hl-game-info-box{
      width: 100%;
      height: auto;
      margin-top: 20px;
      .game-name{
        font-family: Barlow;
        font-weight: bold;
        color: #FFFFFF;
        font-style: normal;
      }
      .game-introduce{
        font-family: Barlow;
        font-weight: 400;
        color: #FFFFFF;
        font-style: normal;
      }

      .game-tools-box{
        width: 100%;
        height: auto;
        text-align: right;
        .collection-btn, .collection-btn-active, .share-btn{
          width: 108px;
          height: 40px;
          background: #000000;
          border: 1px solid #FFFFFF;
          border-radius: 23px;
          font-family: Barlow;
          font-weight: bold;
          color: #ffffff;
          font-style: normal;
          .collection-img{
            width: 20px;
            height: 18px;
            margin-right: 10px;
          }
          .share-img{
            width: 19px;
            height: 19px;
            margin-right: 10px;
          }
        }
        .collection-btn-active{
          background: #FFFFFF;
          border: none;
          color: #0C0D13;
        }
        .share-btn{
          width: 132px;
          border: 1px solid rgba(255,255,255,0.5);
        }
        .report-img{
          width: 42px;
          height: 42px;
        }
        .btn-marginL{
          margin-left: 20px;
        }
      }

      .game-data-box{
        height: auto;
        padding: 13px 20px;
        background: #24252B;
        border-radius: 20px;
        margin-left: 80px;
        .data-item{
          .date-name, .data-info, .data-info-modify{
            width: 180px;
            font-family: Barlow-Regular;
            font-weight: 400;
            color: rgba(255,255,255,0.6);
            font-style: normal;
          }
          .data-info{
            width: 100%;
            color: #FFFFFF;
          }
          .data-info-modify{
            width: 100%;
            font-family: Barlow-Bold;
            font-weight: bold;
            color: #6A39FF;
          }
        }
      }
    }

    .collection-count{
      font-family: Barlow;
      font-weight: 400;
      color: #FFFFFF;
      font-style: normal;
      margin-top: 10px;
    }
  }

  .hl-suggestions-box{
    margin-left: 40px;
    //height: 100vh;
    max-height: 160vh;
    padding: 20px 30px;
    background: #24252B;
    border-radius: 20px;
    overflow-y: scroll;
    .suggestions-title{
      font-family: Barlow;
      font-weight: bold;
      color: #FFFFFF;
      font-style: normal;
    }
    .hl-suggestions-list{
      width: 100%;
      margin-top: 20px;
      .suggestions-img{
        width: 100%;
      }
    }
  }
}

// 分享弹框
:global(.hl-share-modal .arco-modal){
  max-width: 610px;
  background: #24252B;
  border-radius: 20px;
  padding: 0;
}
:global(.hl-share-modal .arco-modal-header){
  border-bottom: none;
}
:global(.hl-share-modal .arco-icon){
  width: 20px;
  height: 20px;
  color: #6A39FF;
  text-align: right;
}
:global(.hl-share-modal .arco-modal-body){
  padding: 0;
  padding-bottom: 50px;
  text-align: center;
}
.login-box-in{
  width: 100%;
  .share-title{
    font-family: Barlow-Bold;
    font-weight: bold;
    color: #FFFFFF;
    font-style: normal;
  }

  .share-footer {
    margin-top: 40px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    .hl-footer-input {
      width: 380px !important;
      height: 40px !important;
      background: #24252B !important;
      border-color: #6A39FF !important;
      border-radius: 20px 0 0 20px !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
      color: #FFFFFF;
      font-family: Barlow-Regular;
      font-weight: 400;
      font-style: normal;
      :deep(.arco-input){
        font-size: 16px;
        line-height: 24px;
      }
      :deep(.arco-input::placeholder) {
        font-size: 16px;
        line-height: 24px;
        color: #A0A0A0;
      }
    }
    .hl-footer-btn {
      height: 40px !important;
      border-radius: 0 20px 20px 0 !important;
      background: #6243F6;
      font-family: Barlow-Bold;
      font-weight: bold;
      color: #FFFFFF !important;
      font-style: normal;
      padding-left: 25px;
      padding-right: 25px;
    }
  }
}
</style>
