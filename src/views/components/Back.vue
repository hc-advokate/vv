<template>
  <div class="back re-w-full re-flex-row-center">
    <div class="back-l re-flex-row-center-ai">
      <icon-left @click="onBack" class="back-ico"/>
      <span @click="onBack">Back</span>
    </div>
    <div class="back-c">{{ props.title }}</div>
    <div class="back-r"></div>

  </div>
  <div class="back-space"></div>
</template>

<script lang="ts" setup name="">
import {useRouter} from "vue-router";

const props = defineProps({
  path: {
    required: false,
    type: String,
    default: "",
  },
  title: {
    required: false,
    type: String,
    default: "",
  },
});

const router = useRouter();
const onBack = () => {
  if (props.path) {
    router.push({path: props.path});
  } else {
    router.back();
  }
}
</script>

<style scoped lang="scss">
.back, .back-space {
  background-color: #0C0D13;

  font-family: Barlow-Regular, Barlow;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 1;
  text-align: left;
  font-style: normal;
  width: 100%;
  height: 50px;
  padding: 0 10px;
}
.back {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .back-ico {
    font-size: 20px;
    font-weight: normal;
  }
  .back-l {
    position: absolute;
    top: auto;
    left: 10px;
  }
  .back-r {
    position: absolute;
    top: auto;
    right: 10px;
  }
  .back-c {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
    font-style: normal;
  }
}
</style>
