<script setup lang="ts">
	import Constants from "@/plugins/constants";
	import { ref, reactive } from "vue";
	import { useRouter } from "vue-router";

	let swiperRef = ref();
	const data = reactive({
		selType: 1,
	});

	const onNext = () => {
		swiperRef.value.next();
	};
	const onPrev = () => {
		swiperRef.value.prev();
	};

	const onChangeType = (type) => {
		data.selType = type;
	};

	let router = useRouter();
	const onToDetail = (id) => {
		router.push({ path: "/sport-detail", query: { id: id } });
	};
</script>

<template>
	<div class="all-bpd">
		<div class="all-card">
			<van-swipe class="swiper-list" ref="swiperRef">
				<van-swipe-item class="swiper-item re-flex-row-between" v-for="(item, index) in 4" :key="index">
					<div class="re-flex-row-center-ai">
						<img class="swiper-ico" :src="Constants.ico.football" alt="" />
						<span class="swiper-title">Football Betting</span>
					</div>
					<div class="re-flex-row-center-ai">
						<span class="swiper-live">LIVE</span>
						<span class="swiper-live_num">{{ item }}</span>
					</div>
				</van-swipe-item>
				<template #indicator="{}">
					<van-icon name="arrow-left" class="swiper-ctl swiper-left re-flex-row-center-ai" @click="onPrev" />
					<van-icon name="arrow" class="swiper-ctl swiper-right re-flex-row-center-ai" @click="onNext" />
				</template>
			</van-swipe>
		</div>
	</div>
	<div class="all-bpd all-mt">
		<div class="all-card re-flex-row-center-ai tab-list hidden-scrollbar">
			<span class="tab-item re-t-cp" @click="onChangeType(1)" :class="{ 'tab-item_active': data.selType === 1 }">Featured</span>
			<span class="tab-item re-t-cp" @click="onChangeType(2)" :class="{ 'tab-item_active': data.selType === 2 }">Competitions</span>
			<span class="tab-item re-t-cp" @click="onChangeType(3)" :class="{ 'tab-item_active': data.selType === 3 }">Coupons</span>
			<span class="tab-item re-t-cp" @click="onChangeType(4)" :class="{ 'tab-item_active': data.selType === 4 }">Calendar</span>
		</div>
	</div>
	<div class="all-bpd all-mt sport-list hidden-scrollbar">
		<div class="all-card sport-item" v-for="(item, index) in 4" :key="index" @click="onToDetail(item)">
			<div class="re-flex-row-between sport-time">
				<div class="rel-flex-row">
					<img class="sport-ico" :src="Constants.ico.football" alt="" />
					<span>Super Lig</span>
				</div>
				<div>Tomorrow / {{ item }}:00 AM</div>
			</div>
			<div class="re-flex-row-center sport-team">
				<div class="re-flex-row-center-ai">
					<span>Gaziantep</span>
					<img class="sport-img" src="@/assets/demo/sp1.png" alt="" />
				</div>
				<div class="sport-separation">-</div>
				<div class="re-flex-row-center-ai">
					<img class="sport-img" src="@/assets/demo/sp2.png" alt="" />
					<span>Goztepe</span>
				</div>
			</div>
			<div class="sport-title">Match Result</div>
			<div class="re-flex-row-between sport-bet">
				<div class="sport-bet-info re-flex-row-between sport-bet-info_active">
					<span class="sport-bet_type">1</span>
					<span class="sport-bet_num">2.37</span>
				</div>
				<div class="sport-bet-info re-flex-row-between">
					<span class="sport-bet_type">x</span>
					<span class="sport-bet_num">2.37</span>
				</div>
				<div class="sport-bet-info re-flex-row-between">
					<span class="sport-bet_type">3</span>
					<span class="sport-bet_num">2.37</span>
				</div>
			</div>
		</div>
	</div>
	<div class="all-bpd all-mt">
		<div class="all-card top-list">
			<div class="top-title">Top Competitions</div>
			<div class="top-item re-flex-row-between" v-for="(item, index) in 10" :key="index">
				<div class="top-info re-flex-row">
					<img class="top-ico" :src="Constants.ico.collect" alt="" />
					<div class="top-text">
						<div class="top-title-sub">Premier League</div>
						<div class="top-desc">England</div>
					</div>
					<div class="top-up">
						<img class="top-up_ico" :src="Constants.ico.up" alt="" />
						<span class="top-up_num">{{ item }}</span>
					</div>
				</div>
				<div class="top-num">2{{ item }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.swiper-list {
		height: 42px;
		position: relative;
		.swiper-ctl {
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto 0;
			color: #ffffff;
			font-size: 16px;
		}
		.swiper-left {
			left: 0;
		}
		.swiper-right {
			right: 0;
		}
		.swiper-item {
			height: 100%;
			padding-left: 15px;
			padding-right: 15px;
			align-items: center;
			.swiper-ico {
				width: 16px;
				height: 16px;
			}
			.swiper-title {
				font-family: UniversLT-Bold, UniversLT;
				font-weight: normal;
				font-size: 15px;
				color: #ffffff;
				line-height: 1;
				text-align: left;
				font-style: normal;
				margin-left: 7px;
			}
			.swiper-live {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 12px;
				color: #ffffff;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
			.swiper-live_num {
				font-family: Arial-Bold, Arial;
				font-weight: bold;
				font-size: 12px;
				color: #6a39ff;
				line-height: 1;
				text-align: center;
				font-style: normal;
				background: #7df5fa;
				border-radius: 7px;
				padding: 1px 4px 1px 3px;
				margin-left: 4px;
			}
		}
	}

	.tab-list {
		.tab-item {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 15px;
			color: #808080;
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
			.sport-time {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 12px;
				color: #888888;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
			.sport-ico {
				width: 13px;
				height: 13px;
				margin-right: 5px;
			}
			.sport-team {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 14px;
				color: #ffffff;
				line-height: 1;
				text-align: center;
				font-style: normal;
				margin-top: 14px;
			}
			.sport-img {
				width: 30px;
				height: 29px;
				margin-left: 7px;
				margin-right: 7px;
			}
			.sport-separation {
				margin-left: 12px;
				margin-right: 12px;
			}
			.sport-title {
				font-family: UniversLT, UniversLT;
				font-weight: normal;
				font-size: 12px;
				color: #888888;
				line-height: 1;
				text-align: center;
				font-style: normal;
				margin-top: 13px;
			}
			.sport-bet {
				margin-top: 5px;
				.sport-bet-info {
					width: 80px;
					height: 29px;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 2px;
					border: none;
					font-family: Barlow-Regular, Barlow;
					font-weight: 400;
					line-height: 1;
					font-style: normal;
					padding: 8px 5px;
					&.sport-bet-info_active {
						background: rgba(106, 57, 255, 0.3);
						border: 0.1px solid #6a39ff;
					}
					.sport-bet_type {
						font-size: 12px;
						color: #888888;
						text-align: left;
					}
					.sport-bet_num {
						font-size: 15px;
						color: #ffffff;
						text-align: right;
					}
				}
			}
		}
	}

	.top-list {
		.top-item {
			margin-top: 10px;
		}
		.top-title {
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 13px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
		.top-info {
			.top-ico {
				width: 12px;
				height: 11px;
			}
			.top-text {
				margin-left: 5px;
			}
			.top-title-sub {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 13px;
				color: #ffffff;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
			.top-desc {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 12px;
				color: #888888;
				line-height: 1;
				text-align: left;
				font-style: normal;
				margin-top: 4px;
			}
			.top-up {
				height: 100%;
				padding: 2px 4px;
				background: #6a39ff;
				border-radius: 6px;
				font-family: ArialMT;
				font-size: 10px;
				color: #ffffff;
				line-height: 1;
				text-align: left;
				font-style: normal;
				margin-left: 8px;
			}
			.top-up_ico {
				width: 6px;
				height: 7px;
			}
			.top-up_num {
				margin-left: 2px;
			}
		}
		.top-num {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: #70d33b;
			line-height: 1;
			text-align: center;
			font-style: normal;
		}
	}
</style>
