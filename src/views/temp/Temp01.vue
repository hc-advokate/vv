<template>
  <BasicBack :showTabs="true" :tabTypes="['Top', 'New', 'Crypto', 'Asia', 'Pop Culture']"></BasicBack>
  <section class="hl-temp-box">
    <div class="temp-box-in">
      <p class="title">Balance</p>
      <div class="re-flex-row-between balance-box">
        <div class="fill-box re-flex-row-center">
          <span>$</span>
          <van-cell-group inset class="hl-cell-group">
            <van-field class="hl-field" v-model="balance" type="number" />
          </van-cell-group>
        </div>
        <van-image class="tool-icon" fit="cover" :src="Constants.ico.refresh" />
        <van-image class="tool-icon hl-ml09" fit="cover" :src="Constants.ico.more" />
      </div>
      <p class="title hl-mt18">Claim</p>
    </div>

    <div class="temp-box-in hl-mt10">
      <p class="txt-label">EASIEST METHOD</p>
      <div class="re-flex-row dgx-box">
        <span>Deposit tkn-t</span>
        <van-image class="dgx-icon" fit="cover" :src="Constants.ico.dgx" />
      </div>
      <div class="list-box hl-mt20">
        <p class="list-num">1</p>
        <p class="list-txt"><span class="bold-txt">Buy DGX </span>on Coinbase, Binance or another <span class="line-txt">exchange</span>.</p>
        <div class="icon-box re-flex-row">
          <van-image style="z-index: 2;" class="deposit-icon" fit="cover" :src="Constants.ico.deposit01" />
          <van-image class="deposit-icon hl-ml04" fit="cover" :src="Constants.ico.deposit02" />
        </div>
      </div>
      <div class="list-box hl-mt05">
        <p class="list-num">2</p>
        <p class="list-txt long-width"><span class="bold-txt">Send/withdraw </span>DGX to the address below.</p>
      </div>
      <div class="code-box">
        <p class="ellipsis-one code-txt">{{ codeTxt }}</p>
        <van-image class="code-icon" fit="cover" :src="Constants.ico.code" />
      </div>
      <van-button class="basic-purple-btn code-btn" type="primary" @click="copyCode(codeTxt)">Copy</van-button>
    </div>

    <div class="temp-box-in hl-mt10">
      <p class="title">Other Methods</p>
      <div class="buy-box">
        <van-grid :border="false" direction="horizontal" :column-num="5">
          <van-grid-item class="item-box" v-for="(item, index) in iconList" :key="index">
            <van-image class="buy-icon" :src="item.icon" />
          </van-grid-item>
        </van-grid>
        <van-button class="basic-purple-btn buy-btn" type="primary">Buy DGX</van-button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import BasicBack from "@/views/components/BasicBack.vue";
  import Constants from "@/plugins/constants/index.js";
  import useClipboard from "vue-clipboard3";
  import { showNotify } from 'vant';

  const balance = ref('0.00');

  const iconList = ref([
    { icon: Constants.ico.visa },
    { icon: Constants.ico.redYellow },
    { icon: Constants.ico.pp },
    { icon: Constants.ico.applePay },
    { icon: Constants.ico.gPay },
  ]);

  const codeTxt = ref('0xs43783hdkEShdf234HSw322034JKLw3229');
  const { toClipboard } = useClipboard();
  const copyCode = async (codeTxt) => {
    try {
      await toClipboard(codeTxt);
      showNotify({ type: 'success', message: 'Copied' });
    } catch (e) {
      showNotify({ type: 'danger', message: 'Copied Error' });
    }
  }
</script>

<style scoped lang="scss">
  .hl-temp-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .temp-box-in {
      width: 100%;
      height: auto;
      padding: 19px;
      background: #24252B;
      border-radius: 10px;
      .title {
        font-family: Barlow-Regular;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 1;
        text-shadow: 0 0 3px rgba(0,0,0,0.5);
        font-style: normal;
      }

      .balance-box {
        margin-top: 5px;
        .fill-box {
          width: calc(100% - 70px);
          span {
            font-family: Barlow-Bold;
            font-weight: bold;
            font-size: 24px;
            line-height: 1;
            font-style: normal;
            color: #FFFFFF;
          }
          .hl-cell-group {
            .hl-field {
              width: 90%;
              background: transparent;
              :deep(.van-field__control) {
                color: #FFFFFF;
                padding: 0;
              }
            }
          }
        }

        .tool-icon {
          width: 30px;
          height: 30px;
        }
      }

      .txt-label {
        display: table;
        padding: 3px 6px;
        font-family: Barlow-Regular;
        font-weight: 400;
        font-size: 10px;
        color: #FFFFFF;
        line-height: 1;
        text-shadow: 0 0 3px rgba(0,0,0,0.5);
        font-style: normal;
        background: #6A39FF;
        border-radius: 8px;
      }

      .dgx-box {
        align-items: center;
        margin-top: 7px;
        span {
          font-family: Barlow-Bold;
          font-weight: bold;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 1;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
          font-style: normal;
        }
        .dgx-icon {
          width: 19px;
          height: 19px;
          margin-left: 3px;
        }
      }

      .list-box {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .list-num {
          width: 19px;
          height: 19px;
          background: #6A39FF;
          border-radius: 50%;
          font-family: UniversLT-Bold;
          font-weight: normal;
          font-size: 13px;
          color: #FFFFFF;
          line-height: 19px;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
          font-style: normal;
          text-align: center;
        }

        .list-txt {
          width: calc(100% - 64px);
          font-family: Barlow-Regular;
          font-weight: 400;
          font-size: 13px;
          color: #FFFFFF;
          line-height: 1.3;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
          font-style: normal;
          margin-left: 5px;
        }
        .long-width {
          width: 100%;
        }
        .bold-txt {
          font-family: Barlow-Bold;
          font-weight: bold;
        }
        .line-txt {
          text-decoration: underline;
        }

        .icon-box {
          .deposit-icon {
            width: 24px;
            height: 23px;
          }
        }
      }

      .code-box {
        width: 100%;
        padding: 12px 10px;
        background: rgba(255,255,255,0.1);
        border-radius: 5px;
        margin-top: 22px;
        text-align: center;
        position: relative;
        .code-txt {
          padding-right: 35px;
          font-family: Barlow-Regular;
          font-weight: 400;
          font-size: 13px;
          color: #FFFFFF;
          line-height: 1;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
          font-style: normal;
          display: block;
        }
        .code-icon {
          width: 19px;
          height: 19px;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .code-btn, .buy-btn {
        width: 100%;
        height: 29px;
        border-radius: 14px;
        display: block;
        margin-top: 10px;
      }
      .buy-btn {
        margin-top: 23px;
      }

      .buy-box {
        width: 100%;
        padding: 19px;
        background: rgba(255,255,255,0.1);
        border-radius: 5px;
        margin-top: 10px;
        .item-box {
          padding: 0 10px;
          :deep(.van-grid-item__content) {
            aspect-ratio: auto;
            background: transparent;
            padding: 0;
          }
          .buy-icon {
            width: 100%;
            height: 15px;
            display: block;
            object-fit: cover;
          }
        }
        .item-box:first-child {
          padding: 0 10px 0 0;
        }
        .item-box:last-child {
          padding: 0 0 0 10px;
        }
      }
    }
  }

  .hl-ml09 {
    margin-left: 9px;
  }
  .hl-mt18 {
    margin-top: 18px;
  }
  .hl-mt10 {
    margin-top: 10px;
  }
  .hl-ml04 {
    margin-left: -8px;
  }
  .hl-mt20 {
    margin-top: 20px;
  }
  .hl-mt05 {
    margin-top: 5px;
  }
</style>
