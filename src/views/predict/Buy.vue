<script setup lang="ts">
	import * as echarts from "echarts";
	import { onMounted } from "vue";

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
			},
			series: [
				{
					data: [150, 230, 224, 218, 135, 147, 260],
					type: "line",
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
		</div>
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
</style>
