<template>
  <BasicBack :title="dataObj.title + ' Exchange'"></BasicBack>
  <section class="hl-exchange-detail-box">
    <div class="detail-box-in">
      <div class="exchange-box">
        <van-image class="coin-icon" fit="cover" :src="dataObj.icon" />
        <div class="ratio-box">
          <p class="ratio-txt">1:1</p>
          <van-image class="convert-icon" fit="cover" :src="Constants.ico.convert" />
        </div>
        <van-image class="coin-icon" fit="cover" :src="Constants.ico.coin" />
      </div>
      <div class="fill-box">
        <van-cell-group inset class="hl-cell-group">
          <van-field class="hl-field" v-model="coinNum" type="digit" />
        </van-cell-group>
        <van-image class="coin-icon-sm" fit="cover" :src="dataObj.icon" />
        <p class="convert-txt"><span>=</span>{{ coinNum || 0 }}</p>
        <van-image class="coin-icon-sm" fit="cover" :src="Constants.ico.coin" />
      </div>
    </div>
    <van-button class="basic-purple-btn exchange-btn" type="primary" @click="dialogVisible = true">Exchange</van-button>
  </section>

  <div class="hl-dialog">
    <van-dialog v-model:show="dialogVisible" @confirm="onConfirm" @cancel="onCancel">
      <template #title>
        <h2 class="dialog-title">Confirm</h2>
      </template>
      <template #default>
        <p class="dialog-info">
          Exchange {{ coinNum }}
          <van-image class="dialog-coin" fit="cover" :src="dataObj.icon" />
          <span>to {{ coinNum }}</span>
          <van-image class="dialog-coin" fit="cover" :src="Constants.ico.coin" />
        </p>
      </template>
      <template #footer>
        <div class="dialog-footer">
          <van-button class="txt-btn cancel-btn" type="primary" @click="onCancel">Cancel</van-button>
          <van-button class="txt-btn confirm-btn" type="primary" @click="onConfirm">Confirm</van-button>
        </div>
      </template>
    </van-dialog>
  </div>
</template>

<script setup>
  import {ref, onMounted} from "vue";
  import { useRoute } from "vue-router";
  import BasicBack from "@/views/components/BasicBack.vue";
  import Constants from "@/plugins/constants/index.js";


  const dataObj = ref({});

  const coinNum = ref(0);

  const dialogVisible = ref(false);

  const initData = () => {
    dataObj.value = {...dataObj, ...useRoute().query};
  };

  const onCancel = () => {
    dialogVisible.value = false;
  };

  const onConfirm = () => {
    dialogVisible.value = false;
  };

  const route = useRoute();
  onMounted(() => {
    if (route.query) {
      initData();
    }
  });
</script>

<style lang="scss" scoped>
  .hl-exchange-detail-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .detail-box-in {
      width: 100%;
      height: auto;
      background: #24252B;
      border-radius: 10px;
      .exchange-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 29px 0 15px 0;
        .coin-icon {
          width: 58px;
          height: 58px;
        }

        .ratio-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(106,57,255,0.6);
          border-radius: 10px;
          padding: 4px 12px;
          margin: 0 48px;
          .ratio-txt {
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 24px;
            color: #FFFFFF;
            line-height: 1;
            font-style: normal;
          }

          .convert-icon {
            width: 14px;
            height: 13px;
            margin-top: 6px;
          }
        }
      }

      .fill-box {
        width: 100%;
        padding: 18px 0 24px 0;
        background: rgba(106, 57, 255, 0.7);
        border-radius: 0 0 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .hl-field {
          width: 63px;
          background: #0C0D13;
          border-radius: 5px;
          border: 2px solid #6A39FF;
          margin-right: 8px;
          :deep(.van-field__control) {
            color: #FFFFFF;
            text-align: center;
            padding: 0;
          }
        }

        .coin-icon-sm {
          width: 29px;
          height: 29px;
        }

        .convert-txt {
          font-family: Barlow-Bold;
          font-weight: bold;
          font-size: 24px;
          color: #FFFFFF;
          line-height: 1;
          font-style: normal;
          margin: 0 11px;
          span {
            margin-right: 11px;
          }
        }
      }
    }

    .exchange-btn {
      height: 29px;
      border-radius: 19px;
      border: 2px solid #6A39FF;
      display: block;
      margin: 0 auto;
      margin-top: 19px;
    }
  }

  .hl-dialog {
    :deep(.van-dialog) {
      background: #24252B !important;
      border-radius: 10px;
      padding: 26px 10px 19px 10px;
    }
    :deep(.van-dialog__header) {
      padding-top: 0;
    }

    .dialog-title {
      font-family: Barlow-Bold;
      font-weight: bold;
      font-size: 19px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
    }

    .dialog-info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Barlow-Regular;
      font-weight: 400;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
      margin-top: 22px;
      span {
        margin-left: 4px;
      }
      .dialog-coin {
        width: 25px;
        height: 25px;
        margin-left: 4px;
      }
    }

    .dialog-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      .txt-btn {
        font-family: Barlow-Bold;
        font-weight: bold;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 1;
        font-style: normal;
        height: 29px;
        padding: 0 31px;
        border-radius: 19px;
      }
      .cancel-btn {
        background: #0C0D13;
      }
      .confirm-btn {
        background: #6A39FF;
        margin-left: 19px;
      }
    }
  }
</style>
