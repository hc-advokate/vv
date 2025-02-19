<template>
  <section class="hl-back-box_game">
    <div class="hl-game-back main-width">
      <van-image class="btn-back" fit="cover" :src="Constants.ico.back" @click="goBack" />
      <p class="back-title" v-if="props.title">{{ props.title }}</p>
      <div v-if="showTabs" class="hl-plr tab-bar hidden-scrollbar">
        <span
            v-for="tab in tabTypes"
            :key="tab"
            class="tab"
            :class="{ active: activeTab === tab }"
            @click="setActiveTab(tab)">
          {{ tab }}
        </span>
      </div>
      <div v-if="showIcon" class="icon-btn">
        <slot name="icon"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, defineProps } from 'vue';
  import Constants from "@/plugins/constants/index.js";

  const props = defineProps({
    title: {
      type: String,
      required: false,
    },
    showTabs: {
      type: Boolean,
      default: false
    },
    tabTypes: {
      type: Array,
      default: () => []
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  });

  const activeTab = ref(props.tabTypes[0] || null);

  const setActiveTab = (tab) => {
    activeTab.value = tab;
  };

  // 返回上一级
  const goBack = () => {
    window.history.go(-1);
  };
</script>

<style lang="scss" scoped>
.hl-back-box_game {
  width: 100%;
  height: 56px;
  .hl-game-back {
    width: 100%;
    height: 56px;
    background: #24252B;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-back {
      width: 8px;
      height: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 18px;
    }

    // title
    .back-title {
      font-family: Barlow-Bold;
      font-weight: bold;
      font-size: 19px;
      color: #FFFFFF;
      line-height: 1;
      font-style: normal;
    }

    // tab-bar
    .tab-bar {
      margin-left: 50px;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      align-items: center;
      .tab {
        font-family: Barlow-Regular;
        font-weight: 400;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1;
        font-style: normal;
        padding: 0 30px;
        &.active {
          font-family: Barlow-Bold;
          font-weight: bold;
          color: #FFFFFF;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
      }
    }
    .hl-plr {
      padding-right: 10px;
    }

    // 右上角图标
    .icon-btn {
      width: 29px;
      height: 29px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 13px;
    }
  }
}
</style>
