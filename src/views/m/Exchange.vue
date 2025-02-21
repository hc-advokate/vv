<template>
  <div class="com-body re-fill ex-body">
    <Back title="StarChips Exchange"></Back>
    <div class="com-container ex-container">
      <div class="ex-card">
        <div class="re-flex-row-between ex-si">
          <a-image fit="cover" :preview="false" :src="coinList[data.id].img" class="re-flex-row-center ex-coin"></a-image>
          <div class="ex-bl re-flex-col-center">
            <div class="re-flex-row-center exb-num">1:1</div>
            <div class="re-flex-row-center exb-ico"><icon-swap /></div>
          </div>
          <a-image fit="cover" :preview="false" :src="CoinGreen" class="re-flex-row-center ex-coin"></a-image>
        </div>
        <div class="re-flex-row-center ex-iv">
          <a-input class="ex-in" v-model="data.value" max-length="8"></a-input>
          <a-image fit="cover" :preview="false" :src="coinList[data.id].img" class="re-flex-row-center ex-ico"></a-image>
          <span class="ex-v"> = {{ data.value }}</span>
          <a-image fit="cover" :preview="false" :src="CoinGreen" class="re-flex-row-center ex-ico"></a-image>
        </div>
      </div>
      <div class="re-flex-row-center">
        <a-button class="ci-btn re-flex-row-center" @click="checkForm">EXCHANGE</a-button>
      </div>
    </div>
  </div>

  <a-modal class="modal-ex com-plr" title="" v-model:visible="modalData.isVis" :hide-cancel="true" :footer="false" :closable="false" @close="onModalClose">
    <div class="modal-body com-plr">
      <h1 class="mex-title">Confirm</h1>
      <div class="re-flex-row-center mex-text">
        <span class="mex-desc">Exchange {{ data.value }}</span>
        <a-image fit="cover" :preview="false" :src="coinList[data.id].img" class="re-flex-row-center mex-ico"></a-image>
        <span class="mex-desc"> to {{ data.value }}</span>
        <a-image fit="cover" :preview="false" :src="CoinGreen" class="re-flex-row-center mex-ico"></a-image>
      </div>
      <div class="re-flex-row-center">
        <a-button class="ci-btn btn-ex-can re-flex-row-center" :loading="data.isLoading" @click="onModalClose">CANCEL</a-button>
        <a-button class="ci-btn btn-ex-con re-flex-row-center" :loading="data.isLoading" @click="submitForm">CONFIRM</a-button>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import CoinBig from "@/assets/icon/coin-g-big.png";
import CoinGreen from "@/assets/icon/coin-l-big.png";
import CoinHc from "@/assets/icon/coin-hexa.png";
import CoinSc from "@/assets/icon/coin-star.png";
import {getCurrentInstance, onActivated, onMounted, reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import api from "@/api/index.js";

const {proxy} = getCurrentInstance();
const coinList = [{
  name: "StarChips",
  key: "starchips",
  img: CoinSc,
  exv: 1,
}, {
  name: "Hexa Coin",
  key: "hex",
  img: CoinHc,
  exv: 1,
}, {
  name: "Gaia Coin",
  key: "gaia",
  img: CoinBig,
  exv: 1,
},];

let data = reactive({
  id: 0,
  value: 1,
  isLoading: false,
});
let modalData = reactive({
  isVis: false,
});

const onModalOpen = () => {
  modalData.isVis = true;
}
const onModalClose = () => {
  modalData.isVis = false;
}

const checkForm = () => {
  if (!data.value) {
    proxy.$message.error("Not Null");
    data.value = 1;
    return false;
  }
  if (!/^\d*$/.test(data.value.toString()) || Number(data.value) <= 0) {
    proxy.$message.error("Value must more zero");
    data.value = 1;
    return false;
  }
  onModalOpen();
}

let router = useRouter();
const submitForm = () => {
  data.isLoading = true;
  api.userApi.walletEx({key: coinList[data.id].key, value: data.value.toString()}).then((res) => {
    data.isLoading = false;
    onModalClose();
    if (!res.code) {
      router.push({path: "/wallet"});
    }
  }).catch(() => {
    data.isLoading = false;
    onModalClose();
  });
}

let route = useRoute();
onMounted(() => {
  if (route.query.id) {
    data.id = route.query.id;
  }
});
onActivated(() => {
  if (route.query.id) {
    data.id = route.query.id;
  }
});
</script>

<style scoped lang="scss">
@use "./index.scss";
.ex-card {
  background: #24252B;
  border-radius: 19px;
  .ex-si {
    padding: 30px 60px;
    .ex-coin {
      width: 60px;
    }
    .ex-bl {
      width: 60px;
      height: 60px;
      background: rgba(106,57,255,0.6);
      border-radius: 19px;
      padding: 5px 10px;
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 20px;
      text-align: center;
      font-style: normal;
    }
    .exb-ico {
      margin-top: 5px;
    }
  }

  .ex-iv {
    background: rgba(106, 57, 255, 0.7);
    border-radius: 0 0 19px 19px;
    padding-top: 20px;
    padding-bottom: 20px;
    .ex-in {
      background: #0C0D13;
      border-radius: 10px;
      border: 2px solid #6A39FF;
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 20px;
      text-align: center;
      font-style: normal;
      width: 70px;
      :deep(.arco-input) {
        font-size: 20px;
        text-align: center;
      }
    }
    .ex-ico {
      width: 30px;
      margin-left: 10px;
      margin-right: 10px;
    }
    .ex-v {
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 20px;
      text-align: center;
      font-style: normal;
    }
  }
}
.ci-btn {
  background-color: rgba(106, 57, 255, 1);
  font-family: Barlow-Bold, Barlow;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  line-height: 1;
  text-align: center;
  font-style: normal;
  border-radius: 38px;
  border: 2px solid #6A39FF;
  height: 40px;
  width: 140px;
  margin-top: 40px;
}
.modal-ex {
  .modal-body {
    background: #24252B;
    border-radius: 19px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  .mex-title {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
  }
  .mex-text {
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
    margin-top: 20px;
  }
  .mex-ico {
    width: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .btn-ex-can {
    background: #0C0D13;
    margin-left: 10px;
    margin-right: 10px;
  }
  .btn-ex-con {
    background: #6A39FF;
    margin-left: 10px;
    margin-right: 10px;
  }
}
:global(.modal-ex .arco-modal) {
  width: 100%;
  background-color: transparent;
}
:global(.modal-ex .arco-modal .modal-body) {
  background: #24252B;
}
</style>
