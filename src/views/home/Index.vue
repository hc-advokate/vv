<script setup lang="ts">
	import Bg1 from "@/assets/images/bg1.png";
	import IcoDown from "@/assets/images/down.png";
	import IcoImg1 from "@/assets/images/img1.png";
	import IcoImg2 from "@/assets/images/img2.png";
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
		<div class="com-p_lr content-2">
			<div class="c2-ct c2-h1">
				<img class="re-t-cp c2-img1" :src="IcoImg1" alt="" />
				<div class="c2-text c2-text_r">
					<h2 class="c2-title">WHO WE ARE</h2>
					<p class="c2-tt">
						Founded by <span class="c2-tt_act"> operators with decades of scaling global enterprises</span>, we invest in IP-driven ventures across biotech, AI, and cybersecurity, backed by Fortune
						500 networks and patient capital for sustainable growth.
					</p>
				</div>
			</div>
			<div class="c2-line"></div>
			<div class="c2-ct c2-h2">
				<div class="c2-text c2-text_l">
					<h2 class="c2-title">CORE VALUES</h2>
					<p class="c2-tt">
						At Boston Ventures, we’ve spent decades catalyzing the growth of groundbreaking companies that redefine industries.
						<span class="c2-tt_act"> Our impact stems from a simple truth: extraordinary potential lies within visionary founders.</span> We commit to them for the long haul—not just as investors, but
						as partners—to amplify their ambition and ensure their innovations drive meaningful progress for business and society.
					</p>
				</div>
				<img class="re-t-cp c2-img2" :src="IcoImg2" alt="" />
			</div>
		</div>
		<div class="com-p_lr footer">
			<div class="re-flex-row">
				<h4 class="f-title">Get in Touch</h4>
				<button class="f-btn re-t-cp">CONTACT US</button>
			</div>
			<img class="re-t-cp f-img" :src="Logo" alt="" />
		</div>
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
		height: auto;
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
	.content-2 {
		width: 100%;
		height: 100%;
		//background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000300 7%, #000200 100%);
		background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, #000300 7%, #000200 100%);
		padding-bottom: 60px;
		.c2-ct {
			display: flex;
			position: relative;
			z-index: 0;
			.c2-img1 {
				width: 443px;
				height: 280px;
				position: absolute;
				left: -33px;
				top: 0;
				z-index: 1;
			}
			.c2-img2 {
				width: 264px;
				height: 268px;
				margin-top: 55px;
			}
			.c2-text {
				padding-top: 58px;
				position: relative;
				z-index: 9;
			}
			.c2-text_r {
				max-width: 404px;
			}
			.c2-text_l {
				max-width: 423px;
			}
			.c2-title {
				font-family: TRENDS;
				font-size: 28px;
				color: #ffffff;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
			.c2-tt {
				margin-top: 16px;
				font-family: SFPro-Regular, SFPro;
				font-weight: 400;
				font-size: 20px;
				color: #ffffff;
				line-height: 1.2;
				text-align: left;
				font-style: normal;
				.c2-tt_act {
					color: rgba(167, 239, 0, 1);
				}
			}
		}
		.c2-h1 {
			height: 280px;
			justify-content: flex-end;
		}
		.c2-h2 {
			justify-content: space-between;
		}
		.c2-line {
			width: 100%;
			height: 1px;
			background: rgba(167, 239, 0, 1);
		}
	}
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #005500;
		padding-top: 64px;
		padding-bottom: 64px;
		.f-title {
			font-family: TRENDS;
			font-size: 28px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
		.f-btn {
			width: 98px;
			height: 28px;
			background: #a7ef00;
			border-radius: 3px;
			margin-left: 8px;
			font-family: SFPro-Regular, SFPro;
			font-weight: 400;
			font-size: 12px;
			color: #000300;
			line-height: 1;
			text-align: center;
			font-style: normal;
		}
		.f-img {
			width: 144px;
			height: 49px;
		}
	}
</style>
