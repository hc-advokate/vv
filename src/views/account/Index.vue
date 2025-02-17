<template>
  <section class="hl-account-box">
    <div class="account-box-in">
      <div class="top-box">
        <span class="title">Portfolio Balance USDT</span>
        <van-image class="friend-btn" fit="cover" :src="Constants.ico.friend" />
      </div>
      <div class="info-box">
        <p class="amount ellipsis-one" :class="{'amount-hide' : !dataObj.isShowAmount}">{{ dataObj.isShowAmount ?  `${'$' + formatThousandDef(12791.29008990)}` : '******' }}</p>
        <van-image class="check-btn" fit="cover" :src="!dataObj.isShowAmount ? Constants.ico.eyeOpen : Constants.ico.eyeClose" @click="toggleAmount" />
      </div>
      <div class="info-box hl-mt18">
        <span class="address">Address: </span>
        <span class="address address-info ellipsis-one">{{ address }}</span>
        <van-image class="copy-btn" fit="cover" :src="Constants.ico.copy" @click="copyDataText(address)" />
      </div>
      <div class="btn-box">
        <van-button class="txt-btn" :class="{  'txt-btn-active' : dataObj.type === 1}" type="primary" @click="changeType(1)">Tokens</van-button>
        <van-button class="txt-btn" :class="{  'txt-btn-active' : dataObj.type === 2}" type="primary">Bets</van-button>
        <van-button class="round-btn" type="primary">
          <van-image class="tool-btn" fit="cover" :src="Constants.ico.refresh" />
        </van-button>
        <van-button class="round-btn" type="primary">
          <van-image class="tool-btn" fit="cover" :src="Constants.ico.tran" />
        </van-button>
      </div>
<!--      <div class="content-box"></div>-->
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Constants from "@/plugins/constants/index.js";
  import { formatThousandDef } from "@/plugins/utils/format.js";
  import useClipboard from "vue-clipboard3";
  import { showNotify } from 'vant';

  const dataObj = reactive({
    type: 1,
    isShowAmount: true,
  });

  const toggleAmount = () => {
    dataObj.isShowAmount = !dataObj.isShowAmount;
  };

  const address = ref("bvnv23sddsdffs");
  const { toClipboard } = useClipboard();
  const copyDataText = async (address) => {
    try {
      await toClipboard(address);
      showNotify({ type: 'success', message: 'Copied' });
    } catch (e) {
      showNotify({ type: 'danger', message: 'Copied Error' });
    }
  }

  // 切换 tab
  const changeType = (type) => {
    dataObj.type = type;
  };

  onMounted(() => {
    changeType(Number(dataObj.type));
  });
</script>

<style scoped lang="scss">
  .hl-account-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .account-box-in {
      width: 100%;
      height: auto;
      padding: 19px;
      background: #24252B;
      box-shadow: 0.5px 0 14px 5px #6A39FF;
      border-radius: 24px;
      .top-box {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .title {
          font-family: Barlow-Medium;
          font-weight: 500;
          font-size: 17px;
          color: #FFFFFF;
          line-height: 1;
          font-style: normal;
        }

        .friend-btn {
          width: 29px;
          height: 29px;
        }
      }

      .info-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 7px;
        .amount {
          max-width: calc(100% - 43px);
          font-family: Barlow-ExtraBold;
          font-weight: 800;
          font-size: 29px;
          color: #FFFFFF;
          line-height: 1;
          font-style: normal;
          display: inline-block;
          &.amount-hide {
            padding-top: 5px;
          }
        }

        .check-btn {
          width: 20px;
          height: 13px;
          margin-left: 23px;
        }

        .address {
          font-family: Barlow-Medium;
          font-weight: 500;
          font-size: 13px;
          color: #FFFFFF;
          line-height: 1;
          font-style: normal;
        }

        .address-info {
          max-width: calc(100% - 76px);
          display: inline-block;
          margin-left: 4px;
        }

        .copy-btn {
          width: 15px;
          height: 15px;
          margin-left: 4px;
        }
      }

      .btn-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        .txt-btn {
          width: 111px;
          height: 29px;
          background: #7DF5FA;
          border-radius: 14px;
          font-family: Barlow-Bold;
          font-weight: bold;
          font-size: 13px;
          color: #6A39FF;
          line-height: 1;
          font-style: normal;
          border: none;
          &.txt-btn-active {
            background: #6A39FF;
            color: #7DF5FA;
          }
        }

        .round-btn {
          width: 29px;
          height: 29px;
          background: transparent;
          border: none;
          .tool-btn {
            width: 29px;
            height: 29px;
          }
        }
      }

      .content-box {
        width: 100%;
        background: rgba(125, 245, 250, 0.1);
        border-radius: 24px;
        margin-top: 19px;
        padding: 6px 20px;

      }
    }
  }

  .hl-mt18 {
    margin-top: 18px !important;
  }
</style>
