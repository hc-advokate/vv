<script setup lang="ts">
	import Constants from "@/plugins/constants";

	const data = reactive({
		current: "home",
	});
	let router = useRouter();
	const onToPage = (url: any) => {
		data.current = url;
		router.push({ path: `/${url}` || "/" });
	};

	let route = useRoute();
	onMounted(() => {
		data.current = route.path.toString().replace("/", "");
	});
</script>

<template>
	<section class="bar">
		<div class="b-space"></div>
		<div class="b-container main-width">
			<div class="b-list">
				<div class="b-item" @click="onToPage('home')" :class="{ 'b-item_active': data.current === 'home' }">
					<div class="re-flex-row-center">
						<img class="bi-ico" :src="Constants.bar.casino" alt="" />
					</div>
					<p class="bi-text">Casino</p>
				</div>
				<div class="b-item" @click="onToPage('sports')" :class="{ 'b-item_active': data.current === 'sports' }">
					<div class="re-flex-row-center">
						<img class="bi-ico" :src="Constants.bar.sports" alt="" />
					</div>
					<p class="bi-text">Sports</p>
				</div>
				<div class="b-item" :class="{ 'b-item_active': data.current === 'other' }">
					<div class="re-flex-row-center">
						<img class="bi-ico" :src="Constants.bar.esports" alt="" />
					</div>
					<p class="bi-text">E-Sports</p>
				</div>
				<div class="b-item" @click="onToPage('games')" :class="{ 'b-item_active': data.current === 'games' }">
					<div class="re-flex-row-center">
						<img class="bi-ico" :src="Constants.bar.games" alt="" />
					</div>
					<p class="bi-text">Games</p>
				</div>
				<div class="b-item" @click="onToPage('predict')" :class="{ 'b-item_active': data.current === 'predict' }">
					<div class="re-flex-row-center">
						<img class="bi-ico" :src="Constants.bar.predict" alt="" />
					</div>
					<p class="bi-text">Predict</p>
				</div>
				<div class="b-item" @click="onToPage('account')" :class="{ 'b-item_active': data.current === 'account' }">
					<div class="re-flex-row-center">
						<img class="bi-ico" :src="Constants.bar.account" alt="" />
					</div>
					<p class="bi-text">Account</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.bar {
		width: 100%;
	}
	.b-space {
		width: 100%;
		height: 70px;
		background: transparent;
	}
	.b-container {
		width: auto;
		padding: 9px 14px;
		position: fixed;
		z-index: 99;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		.b-list {
			background: #24252b;
			border-radius: 10px;
			border: 0.1px solid #6a39ff;
			display: flex;
			justify-content: space-between;
			padding: 7px 14px;
		}
		.b-item {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 11px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
			padding: 3px;
			cursor: pointer;
			.bi-ico {
				width: 22px;
				height: 22px;
				object-fit: contain;
			}
			.bi-text {
				margin-top: 5px;
			}
			&.b-item_active {
				background: rgba(106, 57, 255, 0.4);
				border-radius: 5px;
				font-family: Barlow-Bold, Barlow;
				font-weight: bold;
			}
		}
	}
</style>
