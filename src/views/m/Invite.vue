<template>
<div class="com-body invite-body re-fill">
  <Back path="/home"></Back>
  <div class="com-container invite-container re-w-full">
    <div class="invite-list">
      <div class="invite-item re-flex-row-between" @click="onToPage(route.f)">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" :src="ImgIv" class="re-flex-row-center ii-ico"></a-image>
          <span class="ii-text com-font-text">Invite friends</span>
        </div>
        <div class="re-flex-row-center iit-ico com-font-title"><icon-right /></div>
      </div>
      <div class="invite-line"></div>
      <div class="invite-item re-flex-row-between" @click="onToPage(route.fq)">
        <div class="re-flex-row-center-ai">
          <a-image fit="cover" :preview="false" :src="ImgF" class="re-flex-row-center ii-ico"></a-image>
          <span class="ii-text com-font-text">Friend Requests</span>
        </div>
        <div class="re-flex-row-center iit-ico com-font-title"><icon-right /></div>
      </div>
    </div>
  </div>
  <Quick></Quick>
</div>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import Quick from "@/views/components/Quick.vue";
import ImgF from "@/assets/user/ico-f.png";
import ImgIv from "@/assets/user/ico-iv.png";
import {useRouter} from "vue-router";

const route = {
  f: "/friends",
  fq: "/requests",
}

const router = useRouter();
const onToPage = (url) => {
  router.push({path: url});
}
</script>

<style scoped lang="scss">
@use "./index.scss";
.invite-list {
  background: #24252B;
  border-radius: 10px;
}
.invite-item {
  color: #FFFFFF;
  padding: 15px 10px 15px 20px;
  .ii-text {
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    color: #FFFFFF;
    text-align: left;
    font-style: normal;
    margin-left: 5px;
  }
  .ii-ico {
    width: 23px;
  }
  .iit-ico {
    font-weight: initial;
  }
}
.invite-line {
  width: 100%;
  height: 1px;
  background-color: #6A39FF;
}
</style>
