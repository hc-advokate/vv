<template>
<div class="com-body invite-body re-fill">
  <Back path="/home"></Back>
  <div class="com-container invite-container re-w-full">
    <div class="invite-title">Invite friends!</div>
    <div class="invite-desc">You and your friend will receive bonuses</div>
    <div class="i-list-f">
      <div class="ilf-item re-flex-row">
        <a-image fit="cover" :preview="false" :src="ImgGift" class="re-flex-row-center lfi-img"></a-image>
        <div class="re-flex-col-between lfi-info">
          <div class="lfi-title">Invite a friend</div>
          <div class="lfi-desc re-flex-row-center-ai">
            <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center lfi-ico"></a-image>
            <span class="text-active text-left">+50</span>
            <span class="text-desc">for you and your friend</span>
          </div>
        </div>
      </div>
    </div>
    <div class="invite-title-sub">List of your friends</div>
    <div class="i-list-a" v-if="data.friendList.length">
      <div class="ila-item re-flex-row-between" v-for="item in data.friendList" :key="item">
        <div class="re-flex-row-center-ai">
<!--          <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="re-flex-row-center lai-img"></a-image>-->
          <div class="re-flex-row-center lai-img">{{ item.name.slice(0,2) }}</div>
          <span class="lai-name">{{ item.name }}</span>
        </div>
        <div class="re-flex-row-center-ai">
          <span class="lai-amount text-active">+5</span>
          <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center lai-ico"></a-image>
        </div>
      </div>
    </div>
    <div class="i-list-null re-p-10 re-flex-row-center" v-else>
      <div>
        <div class="">Start to invite your friends.</div>
        <div>by sharing our channel!</div>
      </div>
    </div>
  </div>
  <div class="copy-if re-flex-row-between com-plr">
    <div class="copy-tips" v-show="copyData.tipsSuccess">Link Copied</div>
    <div class="copy-tips" v-show="copyData.tipsFail">Please Try Again</div>
    <div class="re-flex-row-center btn-invite" @click="toPage(data.shareUrl)">
      <a-image fit="cover" :preview="false" :src="ImgInvite" class="re-flex-row-center ico"></a-image>
      <span class="btn-text">INVITE A FRIEND</span>
    </div>
    <div class="re-flex-row-center btn-copy" @click="copyText">
      <a-image fit="cover" :preview="false" :src="ImgCopy" class="re-flex-row-center ico"></a-image>
    </div>
  </div>
  <div class="copy-if-space"></div>
  <Quick></Quick>
</div>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import ImgGift from "@/assets/user/gift.png";
import ImgCoinGB from "@/assets/icon/coin-g-big.png";
import ImgCopy from "@/assets/icon/copy_s.png";
import ImgInvite from "@/assets/icon/invite_add.png";
import ImgDemoAva from "@/assets/demo/demo-ava.png";
import useClipboard from "vue-clipboard3";
import {onMounted, reactive} from "vue";
import Quick from "@/views/components/Quick.vue";
import api from "@/api/index.js";

let copyData = reactive({
  time: 5000,
  tipsSuccess: false,
  tipsFail: false,
});
const { toClipboard } = useClipboard();
const copyText = async () => {
  try {
    await toClipboard(`https://t.me/TOKENATION_FI_bot/TOKENATION?startapp=${window.localStorage.getItem("tgUserId")}`);
    copyData.tipsSuccess = true;
  } catch (e) {
    copyData.tipsFail = true;
  }
  setTimeout(() => {
    copyData.tipsSuccess = false;
    copyData.tipsFail = false;
  }, copyData.time);
}

let data = reactive({
  friendList: [],
  shareUrl: "",
});
const toPage = (url) => {
  window.location.href = url;
}

const initData = () => {
  api.userApi.friendsList({}).then((res) => {
    if (!res.code) {
      data.friendList = res.data.rows;
    }
  });
}

onMounted(() => {
  if (window.localStorage.getItem("tgUserId")) {
    data.shareUrl = `https://t.me/share/url?url=https://t.me/TOKENATION_FI_bot/TOKENATION?startapp=${window.localStorage.getItem("tgUserId")}&text=🎁 Play, Earn - Where Every Game Leads to an Airdrop Adventure! GAME ON!`;
  }
  initData();
})
</script>

<style scoped lang="scss">
@use "./index.scss";
.text-active {
  font-family: Barlow-Bold, Barlow;
  color: #7DF5FA;
}
.invite-title {
  font-family: Barlow, Barlow;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  line-height: 1.3;
  text-align: center;
  font-style: normal;
}
.invite-container {
  height: auto;
  background-color: #0C0D13;
}
.invite-title-sub {
  font-family: Barlow, Barlow;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1.3;
  text-align: center;
  font-style: normal;
  margin-top: 20px;
}
.invite-desc {
  font-family: Barlow-Regular, Barlow;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1;
  text-align: center;
  font-style: normal;
  margin-top: 20px;
}
.i-list-f {
  margin-top: 20px;
  .ilf-item {
    padding: 15px;
    background: #24252B;
    border-radius: 10px;
    .lfi-img {
      width: 70px;
    }
    .lfi-info {
      margin-left: 10px;
      align-items: flex-start;
    }
    .lfi-title {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 1.3;
      text-align: left;
      font-style: normal;
    }
    .lfi-desc {
      font-family: Barlow-Regular, Barlow;
      font-weight: bold;
      font-size: 16px;
      color: #FFF;
      line-height: 1.3;
      text-align: left;
      font-style: normal;
    }
    .lfi-ico {
      width: 20px;
    }
    .text-left {
      margin-left: 10px;
    }
    .text-desc {
      margin-left: 5px;
    }
  }
}
.i-list-null {
  height: 22vh;
  background: #24252B;
  border-radius: 10px;
  margin-top: 20px;
  font-family: Barlow-Regular, Barlow;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1.2;
  text-align: center;
  font-style: normal;
}
.i-list-a {
  margin-top: 20px;
  background: #24252B;
  border-radius: 10px;
  .ila-item {
    padding: 15px;
    .lai-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #0c0d13;
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      text-transform: uppercase;
    }
    .lai-name {
      font-family: Barlow-Regular, Barlow;
      font-weight: 400;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 1;
      text-align: left;
      font-style: normal;
      margin-left: 10px;
    }
    .lai-ico {
      width: 20px;
      margin-left: 10px;
    }
    .lai-amount {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 16px;
      color: #7DF5FA;
      line-height: 1;
      text-align: left;
      font-style: normal;
    }
  }
}

.copy-if-space {
  height: 100px;
  background-color: #0C0D13;
}
.copy-if {
  width: 100%;
  position: fixed;
  bottom: 100px;
  left: 0;
  background-color: #0C0D13;
  z-index: 991;
  padding-top: 20px;
  padding-bottom: 20px;
  .copy-tips {
    position: absolute;
    z-index: 99999;
    top: -60px;
    right: 0;
    padding: 14px 21px;
    background: rgba(106,57,255,0.6);
    border-radius: 10px;
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
  }
  .btn-copy {
    width: 50px;
    height: 50px;
    background: #6A39FF;
    border-radius: 50%;
    .ico {
      width: 30px;
      height: 30px;
    }
  }
  .btn-invite {
    width: calc(100% - 70px);
    height: 50px;
    background: #6A39FF;
    border-radius: 38px;
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
    .ico {
      width: 30px;
      height: 30px;
    }
    .btn-text {
      margin-left: 10px;
    }
  }
}
</style>
