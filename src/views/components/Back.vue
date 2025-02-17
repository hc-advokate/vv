<script setup>
	import Constants from "@/plugins/constants/index.js";

	// 返回上一级
	const goBack = () => {
		window.history.go(-1);
	};
</script>

<template>
	<section class="back">
		<div class="b-space"></div>
		<div class="b-container main-width">
			<img class="b-ico re-t-cp" :src="Constants.ico.back" alt="" @click="goBack" />
			<div class="b-body">
				<slot></slot>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.back {
		width: 100%;
	}
	.b-space {
		width: 100%;
		height: 55px;
		background: transparent;
	}
	.b-container {
		background: rgba(36, 37, 43, 1);
		width: 100%;
		height: 55px;
		padding: 15px;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		.b-ico {
			width: 8px;
			height: 14px;
			cursor: pointer;
		}
		.b-body {
			width: 100%;
			padding-left: 9px;
		}
	}
</style>
