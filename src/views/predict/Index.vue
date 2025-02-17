<script setup lang="ts">
	import { reactive } from "vue";
	import Constants from "@/plugins/constants";

	const data = reactive({
		selType: 1,
	});

	const onChangeType = (type) => {
		data.selType = type;
	};
</script>

<template>
	<div class="all-bpd all-mt">
		<div class="all-card re-flex-row-center-ai tab-list hidden-scrollbar">
			<span class="tab-item_red re-t-cp">Live <span class="item-dot"></span></span>
			<span class="tab-item re-t-cp" @click="onChangeType(1)" :class="{ 'tab-item_active': data.selType === 1 }">All</span>
			<span class="tab-item re-t-cp" @click="onChangeType(2)" :class="{ 'tab-item_active': data.selType === 2 }">New</span>
			<span class="tab-item re-t-cp" @click="onChangeType(3)" :class="{ 'tab-item_active': data.selType === 3 }">Creators</span>
			<span class="tab-item re-t-cp" @click="onChangeType(4)" :class="{ 'tab-item_active': data.selType === 4 }">Sports</span>
			<span class="tab-item re-t-cp" @click="onChangeType(5)" :class="{ 'tab-item_active': data.selType === 5 }">Global</span>
		</div>
	</div>
	<div class="all-bpd all-mt sport-list hidden-scrollbar">
		<div class="sport-item" v-for="(item, index) in 4" :key="index + item">
			<img class="sport-img" src="@/assets/demo/predict.png" alt="" />
		</div>
	</div>
	<div class="all-bpd all-mt">
		<div class="all-card re-flex-row-center-ai search-form">
			<img class="search-ico" :src="Constants.ico.search" alt="" />
			<input class="search-input" type="text" placeholder="Search by market" />
		</div>
	</div>
	<div class="all-mt">
		<div class="all-bpd re-flex-row-center-ai type-list hidden-scrollbar">
			<span class="type-item re-t-cp" @click="onChangeType(1)" :class="{ 'type-item_active': data.selType === 1 }">Top</span>
			<span class="type-item re-t-cp" @click="onChangeType(2)" :class="{ 'type-item_active': data.selType === 2 }">New</span>
			<span class="type-item re-t-cp" @click="onChangeType(3)" :class="{ 'type-item_active': data.selType === 3 }">Crypto</span>
			<span class="type-item re-t-cp" @click="onChangeType(4)" :class="{ 'type-item_active': data.selType === 4 }">Asia</span>
			<span class="type-item re-t-cp" @click="onChangeType(5)" :class="{ 'type-item_active': data.selType === 5 }">Pop Culture</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.tab-list {
		.tab-item_red {
			display: flex;
			align-items: center;
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 14px;
			line-height: 1;
			text-align: center;
			font-style: normal;
			color: #ff0000;
			.item-dot {
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background: #ff0000;
				margin-left: 5px;
			}
		}
		.tab-item {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 15px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
			margin-left: 24px;
			&:first-child {
				margin-left: 0;
			}
			&.tab-item_active {
				font-family: Barlow-Bold, Barlow;
				font-weight: bold;
				color: #ffffff;
			}
		}
	}

	.sport-list {
		white-space: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		.sport-item {
			display: inline-block;
			width: 268px;
			margin-left: 5px;
			&:first-child {
				margin-left: 0;
			}
			.sport-img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.search-form {
		.search-ico {
			width: 13px;
			height: 13px;
		}
		.search-input {
			width: 100%;
			background: transparent;
			border: none;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 14px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
			padding-left: 9px;
			&::placeholder {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 14px;
				color: #999999;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
		}
	}
	.type-list {
		.type-item {
			white-space: nowrap;
			background: #24252b;
			border-radius: 14px;
			padding: 9px 16px;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: rgba(255, 255, 255, 0.6);
			line-height: 1;
			text-align: center;
			font-style: normal;
			margin-left: 10px;
			&:first-child {
				margin-left: 0;
			}
			&.type-item_active {
				font-family: Barlow-Bold, Barlow;
				font-weight: bold;
				color: #ffffff;
			}
		}
	}
</style>
