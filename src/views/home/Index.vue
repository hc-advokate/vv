<script setup lang="ts">
	import Bg1 from "@/assets/images/bg1.png";
	import Bg2 from "@/assets/images/bg2.png";
	import IcoDown from "@/assets/images/down.png";
	import IcoImg1 from "@/assets/images/img1.png";
	import Logo from "@/assets/images/logo.png";
</script>

<template>
	<section id="home" class="home">
		<div class="com-p_lr header">
			<img class="ico-logo" :src="Logo" alt="" />
		</div>
		<div class="banner">
			<img class="b-bg" :src="Bg1" alt="" />
			<h1 class="com-p_lr b-title">NO BLUEPRINTS? PERFECT. LET’S BUILD.</h1>
		</div>
		<div class="com-p_lr content-1">
			<p class="c1-text">
				Boston Partners champions visionary founders reshaping industries through cutting-edge enterprise tech, biotech breakthroughs, and consumer platforms. We bridge academic rigor and global
				ambition to scale companies that define tomorrow’s markets.
			</p>
			<img class="re-t-cp c1-ico" :src="IcoDown" alt="" />
		</div>
		<div class="content-2"></div>
		<div class="content-3"></div>
		<div class="footer"></div>
	</section>
</template>

<style scoped lang="scss">
	.com-p_lr {
		padding-left: 33px;
		padding-right: 33px;
	}
	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		padding-top: 33px;
		.ico-logo {
			width: 96px;
			height: 33px;
		}
	}
	.banner {
		position: relative;
		z-index: 1;
		.b-bg {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		.b-title {
			position: absolute;
			z-index: 9;
			top: 180px;
			font-family: TRENDS;
			font-size: 51px;
			color: #ffffff;
			line-height: 1.321;
			text-align: left;
			font-style: normal;
		}
	}
	.content-1 {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding-top: 44px;
		padding-bottom: 46px;
		background: #a7ef00;
		.c1-text {
			max-width: 505px;
		}
		.c1-ico {
			width: 30px;
			height: 30px;
		}
	}
</style>
