<template>
	<div class="text">Not Page, click this to <a @click="toHome">Home</a></div>
</template>

<script setup>
	import { useRouter } from "vue-router";

	let router = useRouter();
	const toHome = () => {
		router.push({ path: "/" });
	};
</script>

<style scoped lang="scss">
	.text {
		width: 100%;
		text-align: center;
	}
</style>
