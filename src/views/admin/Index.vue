<template>
  <template v-if="isMobile">
    <a-row class="re-full">
      <a-col :span="24" class="m-home-body">
        <MbHeader></MbHeader>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </router-view>
      </a-col>
    </a-row>
  </template>
  <template v-else>
    <a-row class="layout-body" @scroll="handleScroll">
      <a-col :span="24">
        <Header class="header" :class="{'header-changed-bg' : scrolled}"></Header>
      </a-col>
      <a-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="24">
        <a-layout-content class="container-body">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </router-view>
        </a-layout-content>
      </a-col>
      <a-col :span="4" :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :xxl="4">
        <a-layout-sider class="menu-body">
          <MenuComp></MenuComp>
        </a-layout-sider>
      </a-col>
    </a-row>
  </template>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import MenuComp from "@/views/admin/pc/components/Menu.vue";
import Header from "@/views/admin/pc/components/Header.vue";
import MbHeader from "./m/components/Header.vue";

const isMobile = ref(false);

const scrolled = ref(false);
const headerHeight = ref(0);
const handleScroll = (event) => {
  const scrollTop = event.target.scrollTop;
  if (scrollTop > headerHeight.value) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};

onMounted(() => {
  isMobile.value = window.innerWidth <= 1200 || window.outerWidth <= 1200;
  window.addEventListener("resize", (e) => {
    isMobile.value = e.target.innerWidth <= 1200 || e.target.outerWidth <= 1200;
  });
  // 获取header的高度
  headerHeight.value = document.querySelector('.header').offsetHeight;
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.m-home-body {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: rgba(12, 13, 19, 1);
  padding-bottom: 50px;
}

.layout-body{
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: #0C0D13;
}
.header-changed-bg{
  background: rgba(12,13,19,0.6) !important;
}
.menu-body {
  width: 100% !important;
  height: calc(100vh - 100px);
  background: linear-gradient( 180deg, rgba(12,13,19,0) 0%, #0C0D13 100%);
  box-shadow: none;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.container-body {
  width: auto;
  height: 100%;
}
</style>
