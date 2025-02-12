<template>
	<el-row>
		<el-col :span="24">
			<vue3-seamless-scroll
				:list="swiperArr1"
				direction="right"
				:singleLine="true"
				class="scroll">
				<div
					class="item"
					v-for="(item, index) in swiperArr1"
					:key="index">
					<img
						class="ssi-img"
						:src="item"
						alt="" />
				</div>
			</vue3-seamless-scroll>
		</el-col>
	</el-row>
</template>

<script setup>
	import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
	import Constants from "@/plugins/constants/index.js";

	const swiperArr1 = [
		Constants.home.h11,
		Constants.home.h12,
		Constants.home.h13,
		Constants.home.h14,
		Constants.home.h15,
		Constants.home.h16,
		Constants.home.h11,
		Constants.home.h12,
		Constants.home.h13,
		Constants.home.h14,
		Constants.home.h15,
		Constants.home.h16,
	];
</script>

<style scoped lang="scss">
	.seam-scroll {
		width: 100%;
		height: 80px;
		overflow: hidden;
		.ss-item {
			width: auto;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.ssi-img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.scroll {
		height: 128px;
		width: 100%;
		overflow: hidden;
		.item {
			width: 222px;
			height: 128px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.ssi-img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
