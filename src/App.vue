<template>
	<router-view v-slot="{ Component }" :key="$route.fullPath">
		<keep-alive>
			<component :is="Component" />
		</keep-alive>
	</router-view>
</template>

<script setup>
import WOW from "wow.js";

onMounted(() => {
  nextTick(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true,
    }); // disables sync requirement
    wow.init();
  });
});
</script>

<style scoped lang="scss">
	@use "@/assets/styles/index.scss";
</style>
