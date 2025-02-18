<template>
  <BasicBack :title="'Friends'" :showIcon="true">
    <template #icon>
      <van-image fit="cover" :src="Constants.ico.invite" />
    </template>
  </BasicBack>
  <section class="hl-friends-box">
    <div class="friends-box-in">
      <div class="info-box" v-for="(item, index) in friendsList" :key="index">
        <van-image class="friends-img" fit="cover" :src="item.img" />
        <div class="friends-info">
          <p class="friends-name">{{ item.name }}</p>
          <van-image class="position-icon" fit="cover" :src="item.isOpenPosition ?  Constants.ico.potionOpen : Constants.ico.potionClose" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import BasicBack from "@/views/components/BasicBack.vue";
  import Constants from "@/plugins/constants/index.js";

  // mock friends list
  const friendsList = ref([
    {
      img: Constants.friends.friendsImg01,
      name: 'PuffMaster',
      isOpenPosition: true,
    },
    {
      img: Constants.friends.friendsImg02,
      name: 'NebulaWiz',
      isOpenPosition: true,
    },
    {
      img: Constants.friends.friendsImg03,
      name: 'CloudChaserX',
      isOpenPosition: true,
    },
    {
      img: Constants.friends.friendsImg04,
      name: 'MysticMist',
      isOpenPosition: false,
    },
    {
      img: Constants.friends.friendsImg05,
      name: 'SmokySage',
      isOpenPosition: true,
    },
    {
      img: Constants.friends.friendsImg06,
      name: 'JuiceJunkie',
      isOpenPosition: false,
    },
    {
      img: Constants.friends.friendsImg07,
      name: 'VaporDreamer',
      isOpenPosition: false,
    },
    {
      img: Constants.friends.friendsImg08,
      name: 'CloudWanderer',
      isOpenPosition: false,
    },
    {
      img: Constants.friends.friendsImg09,
      name: 'VortexVape',
      isOpenPosition: true,
    },
    {
      img: Constants.friends.friendsImg10,
      name: 'MistyPuff',
      isOpenPosition: true,
    },
  ]);
</script>

<style lang="scss" scoped>
  .hl-friends-box {
    width: 100%;
    height: auto;
    padding: 10px;
    .friends-box-in {
      width: 100%;
      height: auto;
      padding: 9px 19px;
      background: #262629;
      border-radius: 10px;
      .info-box {
        width: 100%;
        display: flex;
        align-items: center;
        .friends-img {
          width: 38px;
          height: 38px;
        }
        .friends-info {
          width: calc(100% - 38px);
          height: auto;
          padding: 19px 0 19px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 0.4px solid rgba(255, 255, 255, 0.7);
          .friends-name {
            font-family: Barlow-Regular;
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            line-height: 1;
            font-style: normal;
          }
          .position-icon {
            width: 20px;
            height: 21px;
          }
        }
      }
      .info-box:last-child .friends-info {
        border-bottom: none;
      }
    }
  }
</style>
