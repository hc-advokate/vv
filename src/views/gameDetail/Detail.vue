<template>
  <BasicBack :title="lbListData[dataObj.index] && lbListData[dataObj.index].title"></BasicBack>
  <section class="hl-detail-box">
    <div class="hl-info-box">
      <div class="top-box">
        <van-image class="top-img" width="100%" height="100%" fit="cover" :src="lbListData[dataObj.index].img" />
        <van-button class="basic-purple-btn play-btn" type="primary" color="#6A39FF" @click="playGame">PLAY NOW</van-button>
        <div class="re-flex-row-center tool-box">
          <div class="re-flex-row-center ls-btn" :class="{'ls-btn-ac' : lbListData[dataObj.index].isLike}" @click="submitLike">
            <van-image class="like-img" fit="cover" :src="lbListData[dataObj.index].isLike ? Constants.ico.like : Constants.ico.unLike" />
            <span>{{ lbListData[dataObj.index] && lbListData[dataObj.index].love }}</span>
          </div>
          <div class="re-flex-row-center ls-btn">
            <van-image class="share-img" fit="cover" :src="Constants.ico.share" />
            <span>Share</span>
          </div>
          <van-image class="report-img" fit="cover" :src="Constants.ico.report" />
        </div>
      </div>

      <div class="detail-box">
        <div class="d-box-in">
          <p class="d-title">{{ lbListData[dataObj.index] && lbListData[dataObj.index].title }}</p>
          <div class="d-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].titleSub }} • {{ lbListData[dataObj.index] && lbListData[dataObj.index].view }} views</div>
          <div class="d-txt-line">{{ lbListData[dataObj.index] && lbListData[dataObj.index].desc }}</div>
        </div>
        <div class="d-card">
          <div class="card-item re-flex-row">
            <span class="card-title">Rating:</span>
            <span class="card-txt">{{ lbListData[dataObj.index] && lbListData[dataObj.index].rating }}</span>
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
          <div class="card-item re-flex-row">
            <span class="card-title">Classification:</span>
            <span class="card-txt txt-active">{{ lbListData[dataObj.index] && lbListData[dataObj.index].classification }}</span>
          </div>
          <div class="card-item re-flex-row">
            <span class="card-title">Tags:</span>
            <span class="card-txt" v-if="lbListData[dataObj.index]">
              <span v-for="(item, index) in lbListData[dataObj.index].tags" :key="index">{{item}};
            </span>
          </span>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model:show="isShowGame" :closeable="false" position="top" :style="{ height: '100%' }">
      <div class="gm-body" id="GmBody">
        <div class="gm-close re-flex-row-center" @click="finishGame"><van-icon name="close" size="30px" /></div>
        <iframe v-if="isShowGame" :src="dataObj.url" frameborder="0" allow="gamepad *;" class="gm-frm" id="gameIf"></iframe>
      </div>
    </van-popup>
  </section>
</template>

<script setup>
  import BasicBack from "@/views/components/BasicBack.vue";
  import { ref, reactive, onMounted } from "vue";
  import {useRoute} from "vue-router";
  import Constants from "@/plugins/constants/index.js";

  const isShowGame = ref(false);
  const playGame = () => {
    isShowGame.value = true;
  }
  const finishGame = () => {
    isShowGame.value = false;
  }

  const dataObj = reactive({
    id: 0,
    index: 0,
    url: "",
    shareUrl: window.location.href,
    isClick: true,
  });
  const lbListData = reactive(Constants.gameDetail);

  // toggle like
  const submitLike = () => {
    lbListData[dataObj.index].isLike = !lbListData[dataObj.index].isLike;
  };

  const initData = () => {
    dataObj.id = Number(route.query.id);
    let index = lbListData.findIndex(item => item.id.toString() === route.query.id);
    dataObj.index = index > -1 ? index : 0;
    if (route.query.id === "1") {
      dataObj.url = `${lbListData[dataObj.index].url}?t=${Math.random()}&token=${Constants.gameToken1}end`;
    } else {
      dataObj.url = `${lbListData[dataObj.index].url}?t=${Math.random()}&token=${window.localStorage.getItem("tgToken")}`;
    }
  };

  const route = useRoute();
  onMounted(() => {
    if (route.query) {
      initData();
    }
  });
</script>

<style lang="scss" scoped>
  .hl-detail-box {
    width: 100%;
    margin-top: 10px;
    .hl-info-box {
      width: 100%;
      height: auto;
      padding: 0 10px;
      .top-box {
        width: 100%;
        height: auto;
        position: relative;
        .top-img {
          display: block;
          :deep(.van-image__img) {
            border-radius: 10px !important;
          }
        }

        .play-btn {
          width: 108px;
          height: 24px;
          border-radius: 13px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .tool-box {
          width: auto;
          height: auto;
          position: absolute;
          right: 9px;
          bottom: 10px;
          .ls-btn {
            height: 20px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            background: transparent;
            border-radius: 11px;
            color: #FFFFFF;
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 12px;
            line-height: 1;
            font-style: normal;
            padding: 0 13px;
            margin: 0 10px;
            &.ls-btn-ac {
              background: #FFFFFF;
              color: #0C0D13;
            }

            .like-img {
              width: 10px;
              height: 9px;
              margin-right: 3px;
            }

            .share-img {
              width: 9px;
              height: 9px;
              margin-right: 5px;
            }
          }

          .ls-btn:first-child {
            margin: 0;
          }

          .report-img {
            width: 20px;
            height: 20px;
          }
        }
      }

      .detail-box {
        width: 100%;
        height: auto;
        background: #24252B;
        border-radius: 10px;
        margin-top: 10px;
        padding: 19px 10px 10px 10px;
        .d-box-in {
          padding: 0 9px;
          .d-title {
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 19px;
            color: #FFFFFF;
            line-height: 1;
            font-style: normal;
          }

          .d-txt, .d-txt-line {
            font-family: Barlow-Regular;
            font-weight: 400;
            font-size: 13px;
            color: #FFFFFF;
            line-height: 1;
            font-style: normal;
            margin-top: 10px;
          }

          .d-txt-line {
            line-height: 1.4;
          }
        }

        .d-card {
          width: 100%;
          padding: 10px 9px;
          height: auto;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          margin-top: 14px;
          .card-item {
            margin-top: 8px;
            .card-title {
              font-family: Barlow-Regular;
              font-weight: 400;
              font-size: 13px;
              color: #FFFFFF;
              line-height: 1;
              font-style: normal;
              width: 90px;
              display: inline-block;
            }
            .card-txt {
              font-family: Barlow-Regular;
              font-weight: 400;
              font-size: 13px;
              color: #FFFFFF;
              line-height: 1;
              font-style: normal;
              &.txt-active {
                font-family: Barlow-Bold;
                font-weight: bold;
                color: rgba(83, 204, 56, 1);
              }
            }
          }
          .card-item:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }

  // 游戏页面
  .gm-body {
    position: relative;
    width: 100%;
    height: 100%;
    .gm-close {
      position: absolute;
      top: 10px;
      left: 10px;
      opacity: 0.5;
    }
    .gm-frm {
      width: 100vw;
      height: 100vh;
    }
  }
</style>
