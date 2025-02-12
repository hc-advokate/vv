<script setup>
	import Constants from "@/plugins/constants";

	const props = defineProps({
		title: {
			type: String,
			default: "",
		},
		url: {
			type: String,
			default: "",
		},
	});

	const router = useRouter();
	const onToBack = () => {
		if (props.url) {
			router.push({ path: props.url });
		} else {
			window.history.back();
		}
	};
</script>

<template>
	<div class="re-w-full main-header">
		<div
			class="main-back re-flex-row-center-ai"
			@click="onToBack">
			<img
				:src="Constants.ico.left"
				alt=""
				class="ico-back" />
			BACK
		</div>
		<div class="re-w-full re-h-full re-flex-row-center cc-title">
			{{ props.title }}
		</div>
	</div>
</template>

<style scoped lang="scss">
	.main-header {
		width: 100%;
		height: 50px;
		position: relative;
		.ico-back {
			width: 9px;
			height: 18px;
			margin-right: 7px;
		}
		.main-back {
			background-color: transparent;
			position: absolute;
			left: 0;
			top: 0;
			width: auto;
			height: 100%;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 17px;
			color: #000000;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
	}
	@media screen and (max-width: 768px) {
	}
</style>
