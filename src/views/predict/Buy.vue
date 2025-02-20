<script setup lang="ts">
	import * as echarts from "echarts";
	import { onMounted, reactive } from "vue";

	const data = reactive({
		isActive: ["1"],
	});

	const drawChart = () => {
		const chartDom = document.getElementById("chart");
		const myChart = echarts.init(chartDom);
		let option = {};

		option = {
			xAxis: {
				type: "category",
				data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			},
			yAxis: {
				type: "value",
				position: "right",
			},
			series: [
				{
					data: [10, 20, 30, 40, 50, 60, 80],
					type: "line",
					lineStyle: {
						color: "#3398DB", // 折线颜色
					},
					symbolSize: 0,
				},
			],
		};

		myChart.setOption(option);
	};
	const init = () => {
		drawChart();
	};

	onMounted(() => {
		init();
	});
</script>

<template>
	<div class="all-bpd buy-info">
		<div class="all-card buy-pd buy-text">
			<div class="re-flex-row-between buy-header">
				<div class="re-flex-row">
					<img class="info-img" src="" alt="" />
					<span class="buy-text_small header-text">$ 28.2m Vol.</span>
				</div>
				<div class="re-flex-row">
					<img class="buy-ico" src="" alt="" />
					<img class="buy-ico" src="" alt="" />
					<img class="buy-ico" src="" alt="" />
				</div>
			</div>
			<div class="buy-desc buy-text buy-mt">What price will Bitcoin hit in November?</div>
			<div class="buy-y buy-text_small buy-mt">Yes</div>
			<div class="buy-cn buy-text_small re-flex-row-center-ai buy-text percentage-info">
				<span class="percentage-num">78% </span>
				<span class="percentage-text">&nbsp;chance&nbsp;</span>
				<van-icon name="arrow-up" class="percentage-flot" />
				<span class="percentage-flot">47%</span>
			</div>
			<div class="buy-chart" id="chart"></div>
			<div class="re-flex-row-between chart-condition">
				<div class="search-chart">
					<p class="re-t-cp search-chart_item search-chart_active">1H</p>
					<p class="re-t-cp search-chart_item">6H</p>
					<p class="re-t-cp search-chart_item">1D</p>
					<p class="re-t-cp search-chart_item">1W</p>
					<p class="re-t-cp search-chart_item">All</p>
				</div>
				<div class="re-flex-row">
					<img class="buy-ico" src="" alt="" />
					<img class="buy-ico" src="" alt="" />
				</div>
			</div>
		</div>
		<van-collapse v-model="data.isActive" class="buy-mt_small all-card buy-pd order-book">
			<van-collapse-item title="Order Book" name="1"></van-collapse-item>
		</van-collapse>
		<div class="buy-mt_small all-card buy-pd buy-text"> Market Summary </div>
		<div class="buy-mt_small all-card buy-pd buy-text buy-comment">
			<div class="re-flex-row-between comment-list">
				<div class="comment-item comment-item_active">Comments (12)</div>
				<div class="comment-item">Top Holders</div>
				<div class="comment-item">Activity</div>
				<div class="comment-item">Related</div>
			</div>
			<div class="re-flex-row-between comment-search">
				<input class="input-reset comment-input" placeholder="Add a Comment" />
				<span class="comment-input_text">Post</span>
			</div>
		</div>
	</div>
	<div class="buy-btn re-flex-row-between">
		<button class="btn btn-y re-t-cp">Buy Yes 78$</button>
		<button class="btn btn-n re-t-cp">Buy No 23$</button>
		<div class="btn-more re-flex-row-center re-t-cp">···</div>
	</div>
</template>

<style scoped lang="scss">
	.buy-text {
		font-family: Barlow-Regular, Barlow;
		font-weight: 400;
		font-size: 14px;
		color: #ffffff;
		line-height: 1;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
		text-align: left;
		font-style: normal;
	}
	.buy-text_small {
		font-size: 10px;
	}
	.buy-mt {
		margin-top: 10px;
	}
	.buy-mt_small {
		margin-top: 10px;
	}
	.buy-pd {
		padding: 20px;
	}
	.buy-info {
		padding-top: 20px;
	}
	.info-img {
		width: 32px;
		height: 32px;
	}
	.header-text {
		margin-left: 10px;
	}
	.buy-ico {
		width: 20px;
		height: 20px;
		margin-left: 10px;
	}
	.buy-chart {
		width: 100%;
		height: 300px;
	}
	.percentage-info {
		display: flex;
		align-items: flex-end;
		color: #7df5fa;
		margin-top: 5px;
		.percentage-num {
			font-size: 14px;
			color: #7df5fa;
		}
		.percentage-text {
			font-size: 12px;
		}
		.percentage-flot {
			font-size: 12px;
			color: #0aa80a;
		}
	}

	.chart-condition {
		.search-chart {
			.search-chart_item {
				display: inline-block;
				padding: 8px 10px;
				border-radius: 14px;

				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 10px;
				color: rgba(255, 255, 255, 0.5);
				line-height: 1;
				text-align: center;
				font-style: normal;
				margin-left: 10px;
				&:first-child {
					margin-left: 0;
				}
				&.search-chart_active {
					background: #fff;
					font-family: Barlow-Bold, Barlow;
					font-weight: bold;
					color: #000000;
				}
			}
		}
	}

	.order-book {
		border: none;
		&::after {
			border: none;
		}
	}

	.buy-comment {
		.comment-list {
			.comment-item {
				color: rgba(255, 255, 255, 0.5);
				padding: 0 2px 8px;
				border-bottom: 2px solid transparent;
				&.comment-item_active {
					color: rgba(255, 255, 255, 1);
					border-bottom: 2px solid #fff;
				}
			}
		}
		.comment-search {
			height: 29px;
			margin-top: 14px;
			border-radius: 14px;
			border: 0.1px solid rgba(255, 255, 255, 0.2);
			padding-right: 10px;
			.comment-input {
				width: 100%;
				font-size: 12px;
			}
			.comment-input_text {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 12px;
				color: #7df5fa;
				line-height: 1;
				text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
				text-align: right;
				font-style: normal;
			}
		}
	}

	.buy-btn {
		width: 100%;
		background: #000;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 10px 20px;
		.btn {
			width: 144px;
			height: 29px;
			border-radius: 14px;
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
		}
		.btn-y {
			background: #70d33b;
		}
		.btn-n {
			background: #ff2f2f;
		}
		.btn-more {
			width: 29px;
			height: 29px;
			background: rgba(255, 255, 255, 0.2);
			border-radius: 5px;
			font-family: Barlow-Bold, Barlow;
			font-weight: bold;
			font-size: 12px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
		}
	}
</style>
