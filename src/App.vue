<script setup>
	import WOW from "wow.js";
	import FontFaceObserver from "fontfaceobserver";
	import { ref, reactive } from "vue";
	// 或者在非模块化环境中，手动包含到项目里
	// （这里省略具体HTML引用步骤）
	let isLoadFont = ref(false);
	const data = reactive({
		isLoadFont: [false, false],
	});
	const font1 = new FontFaceObserver("Inter-Black");
	const font2 = new FontFaceObserver("Dreamscape");
	const font3 = new FontFaceObserver("SFPro");
	onMounted(() => {
		font1
			.load()
			.then(() => {
				console.log("Inter-Black字体已成功加载！");
				isLoadFont.value = true;
				data.isLoadFont[0] = true;
			})
			.catch(() => {
				console.log("Inter-Black字体加载失败。");
				isLoadFont.value = true;
				data.isLoadFont[0] = true;
			});
		font2
			.load()
			.then(() => {
				console.log("Dreamscape字体已成功加载！");
				isLoadFont.value = true;
				data.isLoadFont[1] = true;
			})
			.catch(() => {
				console.log("Dreamscape字体加载失败。");
				isLoadFont.value = true;
				data.isLoadFont[1] = true;
			});
		font3
			.load()
			.then(() => {
				console.log("字体已成功加载！");
				isLoadFont.value = true;
			})
			.catch(() => {
				console.log("字体加载失败。");
				isLoadFont.value = true;
			});
	});

	const isLoadFontAll = computed(() => {
		return data.isLoadFont[0] && data.isLoadFont[1];
	});

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

<template>
	<router-view v-slot="{ Component }" :key="$route.fullPath" v-if="isLoadFontAll">
		<keep-alive>
			<component :is="Component" />
		</keep-alive>
	</router-view>
</template>

<style scoped lang="scss"></style>
