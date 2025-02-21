<template>
<div class="invite-body re-fill">
  <Back></Back>
  <div class="invite-container re-w-full com-ml">
    <h1 class="invite-title">Friend Requests</h1>
    <div class="invite-list">
      <div class="invite-item re-flex-row-between">
        <div class="re-flex-row-center-ai ii-info">
          <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="re-flex-row-center ii-ico"></a-image>
          <div class="ii-text re-flex-col-between">
            <div>User Name</div>
            <div class="iit-st">Unread</div>
          </div>
        </div>
        <div class="re-flex-row-center ii-time">12m ago</div>
      </div>
      <div class="invite-item re-flex-row-between">
        <div class="re-flex-row-center-ai ii-info">
          <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="re-flex-row-center ii-ico"></a-image>
          <div class="ii-text re-flex-col-between">
            <div>User Name</div>
            <div class="iit-st">Unread</div>
          </div>
        </div>
        <div class="re-flex-row-center ii-time">4h 26m ago</div>
      </div>
      <div class="invite-item re-flex-row-between">
        <div class="re-flex-row-center-ai ii-info">
          <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="re-flex-row-center ii-ico"></a-image>
          <div class="ii-text re-flex-col-between">
            <div>User Name</div>
            <div class="iit-st">Unread</div>
          </div>
        </div>
        <div class="re-flex-row-center ii-time">2024-06-20</div>
      </div>
      <div class="invite-item re-flex-row-between">
        <div class="re-flex-row-center-ai ii-info">
          <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="re-flex-row-center ii-ico"></a-image>
          <div class="ii-text re-flex-col-between">
            <div>User Name</div>
            <div class="iit-st">Added</div>
          </div>
        </div>
        <div class="re-flex-row-center ii-time">2024-06-17</div>
      </div>
      <div class="invite-item re-flex-row-between">
        <div class="re-flex-row-center-ai ii-info">
          <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="re-flex-row-center ii-ico"></a-image>
          <div class="ii-text re-flex-col-between">
            <div>User Name</div>
            <div class="iit-st">Added</div>
          </div>
        </div>
        <div class="re-flex-row-center ii-time">2024-06-12</div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import ImgDemoAva from "@/assets/demo/demo-ava.png";
</script>

<style scoped lang="scss">
.com-ml {
  padding: 0 10px;
}
.invite-body {
  background-color: #0C0D13;
}
.invite-container {
  margin-top: 10px;
}
.invite-title {
  font-family: Barlow-Bold, Barlow;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1;
  text-align: left;
  font-style: normal;
}
.invite-list {
  background: #24252B;
  border-radius: 10px;
  margin-top: 20px;
}
.invite-item {
  color: #FFFFFF;
  padding: 15px 10px;
  .ii-info {
    align-items: stretch;
  }
  .ii-ico {
    width: 43px;
    border-radius: 50%;
  }
  .ii-text {
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: left;
    font-style: normal;
    margin-left: 10px;
    .iit-st {
      color: #6A39FF;
    }
  }
  .ii-time {
    font-family: Barlow-Regular, Barlow;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: right;
    font-style: normal;
  }
}
</style>
