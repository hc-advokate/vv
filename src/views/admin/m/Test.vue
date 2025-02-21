<script setup>
import {onMounted, reactive} from "vue";

const data = reactive({
  token: "",
  user: "",
  tokenTg: "",
  infoTg: window.Telegram.WebApp,
});

onMounted(() => {
  data.token = widnow.localStorage.getItem("tonToken");
  data.user = widnow.localStorage.getItem("tgUserId");
  data.tokenTg = widnow.localStorage.getItem("tgToken");
});
</script>

<template>
<div>infoTg = {{data.infoTg}}</div>
<div>tgToken = {{data.tokenTg}}</div>
<div>tgUserId = {{data.user}}</div>
<div>tonToken = {{data.token}}</div>
</template>

<style scoped lang="scss">

</style>
