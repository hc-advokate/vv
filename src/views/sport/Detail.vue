<script setup lang="ts">
	import { reactive } from "vue";
	import Back from "@/views/components/Back.vue";
	import Constants from "@/plugins/constants";

	const data = reactive({
		tabIndex: 1,
		isSelect: false,
	});

	const onChangeTab = (index: number) => {
		data.tabIndex = index;
	};
</script>

<template>
	<Back>
		<div class="h-search re-flex-row-between">
			<van-popover v-model:show="data.isSelect" class="select-container">
				<div class="select-list">
					<div class="select-item" @click="data.isSelect = false">Super Lig</div>
				</div>
				<template #reference>
					<div class="re-flex-row-between select-box">
						<span>Super Lig</span>
						<van-icon name="arrow-down" class="select-ico" />
					</div>
				</template>
			</van-popover>
			<div class="re-flex-row-between hs-rel">
				<span>0:0</span>
				<img class="hs-rel_ico" :src="Constants.ico.chart" alt="" />
			</div>
		</div>
	</Back>
	<section class="all-bpd">
		<div class="all-mt sd-info">
			<img class="sd-bg" src="@/assets/demo/sp-bg.png" alt="" />
			<div class="sd-pk">
				<img class="sd-ico_chart" :src="Constants.ico.chart" alt="" />

				<div class="re-flex-row-between sd-team">
					<div class="">
						<div class="re-flex-row-center">
							<img class="sd-img" src="@/assets/demo/sp1.png" alt="" />
						</div>
						<div class="re-flex-row-center sd-mt">
							<img class="sd-ico" :src="Constants.ico.collectBd" alt="" />
							<span class="sd-pk-name">Kasimpasa Istanbul</span>
						</div>
					</div>
					<div>
						<div class="re-flex-row-center sd-pk-time">Tomorrow</div>
						<div class="re-flex-row-center sd-pk-time">1:00 AM</div>
					</div>
					<div class="">
						<div class="re-flex-row-center">
							<img class="sd-img" src="@/assets/demo/sp2.png" alt="" />
						</div>
						<div class="re-flex-row-center sd-mt">
							<span class="sd-pk-name">Kasimpasa Istanbul</span>
							<img class="sd-ico" :src="Constants.ico.collectBd" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="all-card_no all-mt team-detail">
			<div class="tab-list hidden-scrollbar">
				<div class="tab-item" @click="onChangeTab(1)" :class="{ 'tab-item_active': data.tabIndex === 1 }">All</div>
				<div class="tab-item" @click="onChangeTab(2)" :class="{ 'tab-item_active': data.tabIndex === 2 }">Main</div>
				<div class="tab-item" @click="onChangeTab(3)" :class="{ 'tab-item_active': data.tabIndex === 3 }">BUILD A BET</div>
				<div class="tab-item" @click="onChangeTab(4)" :class="{ 'tab-item_active': data.tabIndex === 4 }">Goals</div>
			</div>
			<div class="all-mt all-bpd">
				<div class="all-card_bd td-card">
					<div class="re-flex-row-center-ai card-title-half">
						<img class="td-ico" :src="Constants.ico.football" alt="" />
						<span class="half-text">Price Boost</span>
					</div>
					<p class="card-tb card-tmt all-bpd">Yes - Both Teams To Score 1st Half</p>
					<p class="card-tn card-tmt all-bpd">Kasimpasa Istanbul - Eyupspor</p>
					<div class="card-foot">
						<p class="card-tn_small cf-box">Was</p>
						<p class="card-tb_small cf-box cf-box_tlt">4.33</p>
						<p class="card-tb_small cf-box cf-box_bg">4.80</p>
					</div>
				</div>

				<div class="all-card_bd td-card all-mt">
					<h6 class="card-title">Match Result</h6>
					<div class="card-tab-list">
						<div class="card-tab-item" @click="onChangeTab(1)" :class="{ 'card-tab-item_active': data.tabIndex === 1 }">Regular Time</div>
						<div class="card-tab-item" @click="onChangeTab(2)" :class="{ 'card-tab-item_active': data.tabIndex === 2 }">1st Half</div>
						<div class="card-tab-item" @click="onChangeTab(3)" :class="{ 'card-tab-item_active': data.tabIndex === 3 }">2nd Half</div>
					</div>
					<div class="re-flex-row-between card-info-item">
						<span class="info-item-key">Kasimpasa Istanbul</span>
						<span class="info-item-value">2.20</span>
					</div>
					<div class="re-flex-row-between card-info-item">
						<span class="info-item-key">X</span>
						<span class="info-item-value">2.20</span>
					</div>
					<div class="re-flex-row-between card-info-item">
						<span class="info-item-key">Eyupspor</span>
						<span class="info-item-value">2.20</span>
					</div>
				</div>

				<div class="all-card_bd td-card all-mt">
					<h6 class="card-title">2up - Instant Win</h6>
					<div class="re-flex-row-between card-info-item">
						<span class="info-item-key">Kasimpasa Istanbul</span>
						<span class="info-item-value">2.20</span>
					</div>
					<div class="re-flex-row-between card-info-item">
						<span class="info-item-key">X</span>
						<span class="info-item-value">2.20</span>
					</div>
					<div class="re-flex-row-between card-info-item">
						<span class="info-item-key">Eyupspor</span>
						<span class="info-item-value">2.20</span>
					</div>
				</div>
			</div>
		</div>
		<!--		<van-popover v-model:show="data.isSelect" class="select-container select-container_btm">-->
		<!--			<div class="select-list">-->
		<!--				<div class="select-item">Buy</div>-->
		<!--				<div class="select-item">Sell</div>-->
		<!--				<van-popover v-model:show="data.isSelect" class="select-container select-container_left" placement="right">-->
		<!--					<div class="select-list">-->
		<!--						<div class="select-item">Merge</div>-->
		<!--						<div class="select-item">Split</div>-->
		<!--					</div>-->
		<!--					<template #reference>-->
		<!--						<div class="re-flex-row-between select-box select-mt">-->
		<!--							<span>More</span>-->
		<!--							<van-icon name="arrow" class="select-ico" />-->
		<!--						</div>-->
		<!--					</template>-->
		<!--				</van-popover>-->
		<!--			</div>-->
		<!--			<template #reference>-->
		<!--				<div class="re-flex-row-between select-box">-->
		<!--					<span>Super Lig</span>-->
		<!--					<van-icon name="arrow-down" class="select-ico" />-->
		<!--				</div>-->
		<!--			</template>-->
		<!--		</van-popover>-->
	</section>
</template>

<style scoped lang="scss">
	.h-search {
		width: 100%;
		.hs-rel {
			width: 79px;
			padding: 6px 11px;
			border-radius: 5px;
			border: 0.1px solid rgba(255, 255, 255, 0.3);
			font-family: Arial-Bold, Arial;
			font-weight: bold;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
			.hs-rel_ico {
				width: 14px;
				height: 13px;
			}
		}
	}

	.sd-info {
		height: 106px;
		position: relative;
		z-index: 9;
		.sd-mt {
			margin-top: 8px;
		}
		.sd-bg {
			width: 100%;
			position: absolute;
			z-index: 10;
			top: 0;
			left: 0;
		}
		.sd-pk {
			padding: 10px;
			width: 100%;
			position: relative;
			z-index: 11;
		}
		.sd-team {
			padding-top: 21px;
			align-items: normal;
		}
		.sd-ico_chart {
			width: 14px;
			height: 13px;
			float: right;
		}
		.sd-img {
			width: 30px;
			height: 29px;
		}
		.sd-ico {
			width: 12px;
			height: 12px;
			margin-left: 2px;
			margin-right: 2px;
		}
		.sd-pk-name {
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
		}
		.sd-pk-time {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: #ffffff;
			line-height: 1.3;
			text-align: left;
			font-style: normal;
		}
	}

	.team-detail {
		padding-bottom: 10px;
		.tab-list {
			border-bottom: 0.1px solid rgba(255, 255, 255, 1);
			white-space: nowrap;
			overflow-x: scroll;
			overflow-y: hidden;
			.tab-item {
				display: inline-block;
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 15px;
				color: #ffffff;
				line-height: 1;
				text-align: center;
				font-style: normal;
				margin-left: 14px;
				padding-left: 5px;
				padding-right: 5px;
				padding-bottom: 10px;
				&:first-child {
					margin-left: 20px;
				}
				&.tab-item_active {
					font-family: Barlow-Bold, Barlow;
					font-weight: bold;
					border-bottom: 3px solid rgba(106, 57, 255, 1);
				}
			}
		}
	}

	.td-card {
		.td-ico {
			width: 12px;
			height: 12px;
		}
		.card-title {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
			padding: 5px 10px 7px;
			background: #3f2d7f;
			border-radius: 10px 10px 0px 0px;
		}
		.card-title-half {
			width: 102px;
			background: #6a39ff;
			border-radius: 0 48px 48px 0;
			padding: 2px 10px;
			margin-top: 10px;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
		.half-text {
			margin-left: 4px;
		}
		.card-tmt {
			margin-top: 5px;
		}
		.card-tn {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 15px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
		.card-tn_small {
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
		.card-tb {
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 14px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
		.card-tb_small {
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}

		.card-foot {
			text-align: right;
			padding-top: 29px;
			padding-bottom: 16px;
			padding-right: 10px;
			.cf-box {
				display: inline-block;
				margin-left: 4px;
			}
			.cf-box_tlt {
				text-decoration-line: line-through;
			}
			.cf-box_bg {
				background: #0c0d13;
				border-radius: 5px;
				padding: 6px 10px;
			}
		}

		.card-tab-list {
			border-bottom: 0.1px solid rgba(255, 255, 255, 1);
			white-space: nowrap;
			overflow-x: scroll;
			overflow-y: hidden;
			.card-tab-item {
				display: inline-block;
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 12px;
				color: #ffffff;
				line-height: 1;
				text-align: center;
				font-style: normal;
				margin-left: 10px;
				padding-left: 1px;
				padding-right: 1px;
				padding-bottom: 6px;
				&.card-tab-item_active {
					font-family: Barlow-Bold, Barlow;
					font-weight: bold;
					border-bottom: 3px solid rgba(106, 57, 255, 1);
				}
			}
		}

		.card-info-item {
			border-bottom: 0.1px solid rgba(255, 255, 255, 1);
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			font-style: normal;
			padding: 8px 10px;
			&:last-child {
				border-bottom: none;
			}
			.info-item-key {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				text-align: left;
			}
			.info-item-value {
				font-family: Barlow-Bold, Barlow;
				font-weight: bold;
				text-align: right;
			}
		}
	}

	.select-box {
		background: transparent;
		font-family: Arial-Bold, Arial;
		font-weight: bold;
		font-size: 12px;
		color: #ffffff;
		line-height: 1;
		text-align: left;
		font-style: normal;
		.select-ico {
			margin-left: 4px;
		}
	}
	.select-container {
		.select-list {
			background: #000000;
			border-radius: 10px;
			border: 0.1px solid #333333;
			padding: 10px 9px 10px 19px;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 14px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
			.select-mt {
				margin-top: 14px;
			}
			.select-item {
				margin-top: 14px;
				&:first-child {
					margin-top: 0;
				}
			}
		}
	}
</style>
