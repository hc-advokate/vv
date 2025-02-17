<script setup>
	import Constants from "@/plugins/constants";
	let router = useRouter();
	const onToHome = () => {
		router.push({ path: "/home" });
	};
</script>

<template>
	<section class="header">
		<div class="h-space"> </div>
		<div class="h-container main-width">
			<img class="h-logo" :src="Constants.logo" alt="" @click="onToHome" />
			<div class="h-btns">
				<button class="h-btn h-btn_ico">
					<img class="btn-ico" :src="Constants.ico.coin" alt="" />
					3689
				</button>
				<button class="h-btn">CONNECTED</button>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.header {
		width: 100%;
	}
	.h-space {
		width: 100%;
		height: 45px;
		background: transparent;
	}
	.h-container {
		background: #0c0d13;
		width: 100%;
		height: 45px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		.h-logo {
			width: 101px;
			height: 25px;
			cursor: pointer;
		}
		.h-btns {
			display: flex;
			align-items: center;
		}
		.h-btn {
			margin-left: 5px;
			height: 100%;
			background: #6a39ff;
			border-radius: 14px;
			padding: 5px 12px 6px;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
			position: relative;
		}
		.h-btn_ico {
			padding-left: 30px;
			.btn-ico {
				position: absolute;
				top: 0;
				left: 0;
				border-radius: 50%;
				width: 24px;
				height: 24px;
			}
		}
	}
</style>
