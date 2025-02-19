<script setup lang="ts">
	import { reactive } from "vue";
	import Constants from "@/plugins/constants";
	import { useRouter } from "vue-router";

	const data = reactive({
		selType: 1,
	});

	const onChangeType = (type) => {
		data.selType = type;
	};

	let router = useRouter();
	const onToDetail = (item) => {
		router.push({ path: "/predict-buy", query: { id: item } });
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
	<div class="all-bpd all-mt">
		<div class="all-card_no game-list hide-scroll-horizontal">
			<div class="game-pd game-title re-flex-row-center-ai">
				<img class="game-img" src="@/assets/demo/predict.png" alt="" /> <span class="game-title_desc">What price will Bitcoin hit in November?</span>
			</div>
			<div class="game-pd game-item re-flex-row-between" v-for="item in 15" :key="item">
				<div class="item-num">$ 1{{ item }}0,000</div>
				<div class="re-flex-row-center-ai">
					<span class="item-percentage">{{ item }}%</span>
					<button class="item-btn item-btn_yes" @click="onToDetail(item)">Yes</button>
					<button class="item-btn item-btn_no" @click="onToDetail(item)">No</button>
				</div>
			</div>
			<div class="game-pd game-item_col re-flex-row-between">
				<div class="item-num">$ 28.2m Vol.</div>
				<div class="re-flex-row-center-ai">
					<img class="game-ico" :src="Constants.ico.search" alt="" />
					<div class="re-flex-row-center-ai item-num game-msg">
						<img class="game-ico" :src="Constants.ico.search" alt="" />
						<span class="game-rt">2,784</span>
					</div>
					<img class="game-ico game-col" :src="Constants.ico.collectBd" alt="" />
				</div>
			</div>
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
	.game-list {
		position: relative;
		padding-top: 14px;
		max-height: calc(100vh - 420px);
		.game-pd {
			padding-left: 20px;
			padding-right: 20px;
		}
		.game-title {
			.game-img {
				width: 38px;
				height: 38px;
			}
			.game-title_desc {
				font-family: Barlow, Barlow;
				font-weight: 400;
				font-size: 14px;
				color: #ffffff;
				line-height: 14px;
				text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
				text-align: left;
				font-style: normal;
				margin-left: 10px;
			}
		}
		.game-item {
			margin-top: 14px;
			.item-num {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 14px;
				color: #ffffff;
				line-height: 1;
				text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
				text-align: left;
				font-style: normal;
			}
			.item-percentage {
				font-family: Barlow-Bold, Barlow;
				font-weight: bold;
				font-size: 14px;
				color: #ffffff;
				line-height: 14px;
				text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
				text-align: right;
				font-style: normal;
			}
			.item-btn {
				padding: 5px 10px 6px;
				border-radius: 12px;
				margin-left: 7px;
				font-family: Barlow-Bold, Barlow;
				font-weight: bold;
				font-size: 12px;
				color: #ffffff;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
			.item-btn_yes {
				background: #70d33b;
			}
			.item-btn_no {
				background: #ff2f2f;
			}
		}
		.game-item_col {
			width: 100%;
			background: #3f2d7f;
			border-radius: 0 0 10px 10px;
			position: sticky;
			bottom: 0;
			padding-top: 10px;
			padding-bottom: 10px;
			.item-num {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 14px;
				color: #ffffff;
				line-height: 1;
				text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
				text-align: left;
				font-style: normal;
			}
			.game-ico {
				width: 14px;
				height: 14px;
			}
			.game-rt {
				margin-left: 3px;
			}
			.game-msg {
				margin-left: 15px;
			}
			.game-col {
				margin-left: 7px;
			}
		}
	}
</style>
