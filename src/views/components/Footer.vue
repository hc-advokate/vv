<script setup>
	import Constants from "@/plugins/constants/index.js";
	import { ElMessage } from "element-plus";
	import api from "@/api";

	const isLoading = ref(false);
	const email = ref("");
	const { proxy } = getCurrentInstance();
	const onSubscribe = () => {
		if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
			// proxy.elMessage.warning("The email format is incorrect");
			ElMessage({ message: "The email format is incorrect", type: "warning" });
			return false;
		}
		if (isLoading.value) {
			return false;
		}
		isLoading.value = true;
		api.userApi
			.emailSubscribe({ email: email.value, type: "3" })
			.then((res) => {
				isLoading.value = false;
				if (res.code) {
					ElMessage({ message: "Failed to subscribe", type: "warning" });
					// proxy.elMessage.info("Failed to subscribe");
				} else {
					if (res.subscribed) {
						ElMessage({ message: "Already subscribed", type: "warning" });
						// proxy.elMessage.info("Already subscribed");
					} else {
						ElMessage({ message: "Success", type: "success" });
						email.value = "";
						// proxy.elMessage.success("Success");
					}
				}
			})
			.catch(() => {
				isLoading.value = false;
				ElMessage({ message: "Failed to connect to server", type: "error" });
				// proxy.elMessage.error("Failed to connect to server");
			});
	};

	// window.open("https://t-fund.deform.cc/t-labs/?page_number=0");
	const router = useRouter();
	const onOpenX = () => {
		window.open("https://x.com/advokategroup?s=21&t=V24CuTx1bDG-3vuoCowHZg");
	};
	const onOpenIn = () => {
		window.open("https://www.linkedin.com/company/advokate-blockchain/");
	};
</script>

<template>
	<section id="header" class="cci-plr footer-body re-w-full">
		<el-row>
			<!--			<el-col-->
			<!--				:span="24"-->
			<!--				:md="8">-->
			<!--				<div class="re-flex-row-between">-->
			<!--					<div>-->
			<!--						<h6 class="f-title">Invest</h6>-->
			<!--						<p class="f-txt ft-mt">USDY</p>-->
			<!--						<p class="f-txt ftt-mt">USDY</p>-->
			<!--						<p class="f-txt ftt-mt">USDY</p>-->
			<!--						<p class="f-txt ftt-mt">USDY</p>-->
			<!--					</div>-->
			<!--					<div>-->
			<!--						<h6 class="f-title">Invest</h6>-->
			<!--						<p class="f-txt ft-mt">Partners1</p>-->
			<!--						<p class="f-txt ftt-mt">Partners1</p>-->
			<!--						<p class="f-txt ftt-mt">Partners1</p>-->
			<!--						<p class="f-txt ftt-mt">Partners1</p>-->
			<!--					</div>-->
			<!--				</div>-->
			<!--			</el-col>-->
			<el-col :span="24" :md="12">
				<div>
					<h6 class="f-title f-ti">Social</h6>
					<div class="rel-flex f-ti ft-mt">
						<img :src="Constants.ico.tkX" alt="" class="f-ico_x re-t-cp" @click="onOpenX" />
						<img :src="Constants.ico.tkIn" alt="" class="f-ico_in re-t-cp" @click="onOpenIn" />
					</div>
				</div>
			</el-col>
			<el-col :span="24" :xs="{ span: 24, offset: 0 }" :sm="{ span: 24, offset: 0 }" :md="{ span: 8, offset: 4 }" :lg="{ span: 8, offset: 4 }">
				<h6 class="f-title hl-phmt33">Subscription</h6>
				<p class="ft-mt f-desc">Stay up-to-date with VantageX. We value your inbox: no spam, only important news, and insights.</p>
				<div class="re-flex-center ft-mt">
					<el-input type="text" class="ft-input" v-model="email" />
					<el-button class="ft-btn re-t-cp" @click="onSubscribe" :disabled="isLoading"> Subscribe </el-button>
				</div>
			</el-col>
			<el-col :span="24" :md="12" class="reserved-logo reserved-mt">
				<img :src="Constants.img.logoIco" alt="" class="f-ico" />
			</el-col>
			<el-col :span="24" :xs="{ span: 24, offset: 0 }" :sm="{ span: 24, offset: 0 }" :md="{ span: 8, offset: 4 }" :lg="{ span: 8, offset: 4 }" class="reserved-txt reserved-mt">
				VantageX © 2024
			</el-col>
		</el-row>
	</section>
</template>

<style scoped lang="scss">
	.footer-body {
		background: #000000;
		padding-top: 17px;
		padding-bottom: 21px;
	}

	.ft-mt {
		margin-top: 7px;
	}
	.ftt-mt {
		margin-top: 4px;
	}
	.hl-phmt33 {
		margin-top: 0;
	}

	.f-title {
		font-family: Barlow-Regular, Barlow;
		font-weight: 400;
		font-size: 5px;
		color: #ffffff;
		line-height: 1.2;
		text-align: left;
		font-style: normal;
	}

	.f-txt {
		font-family: Barlow-Regular, Barlow;
		font-weight: 400;
		font-size: 6px;
		color: #888888;
		line-height: 1;
		text-align: left;
		font-style: normal;
	}

	.f-ti {
		width: 33px;
	}

	.f-ico_x {
		width: 12px;
		height: 10px;
	}
	.f-ico_in {
		width: 11px;
		height: 10px;
		margin-left: 8px;
	}

	.f-desc {
		font-family: Barlow-Regular, Barlow;
		font-weight: 400;
		font-size: 4px;
		color: #888888;
		line-height: 1.25;
		text-align: left;
		font-style: normal;
	}

	.ft-input {
		position: relative;
		--el-input-width: 55px;
		--el-input-border: none;
		--el-input-border-color: #888888;
		--el-input-height: 8px;
		--el-input-bg-color: transparent;
		--el-input-border-radius: 2px;
		--el-input-text-color: #000000;
		--el-input-hover-border: 0.4px solid #000000;
		--el-input-placeholder-color: #999999;
		--el-input-focus-border: 1px solid #000000;
		--el-input-hover-border-color: #000000;
		--el-input-clear-hover-color: transparent;
		--el-input-focus-border-color: #000000;
		padding: 1px;
		font-family: Barlow-Regular, Barlow;
		font-weight: 400;
		font-size: 4px;
		color: #fff;
		line-height: 1.2;
		text-align: right;
		font-style: normal;
	}

	.ft-btn {
		width: 25px;
		height: 8px;
		background: #ffffff;
		border-radius: 2px;
		font-family: Barlow, Barlow;
		font-weight: 800;
		font-size: 5px;
		color: #000000;
		line-height: 1.2;
		text-align: center;
		font-style: normal;
		margin-left: 3px;
	}

	.reserved-mt {
		margin-top: 33px;
	}

	.reserved-logo {
		.f-ico {
			width: 57px;
			height: 14px;
		}
	}

	.reserved-txt {
		height: 14px;
		font-family: Mukta-Regular, Mukta;
		font-weight: 400;
		font-size: 4px;
		color: #ffffff;
		line-height: 1;
		text-align: right;
		font-style: normal;
		display: flex;
		flex-direction: row-reverse;
		align-items: flex-end;
	}

	@media screen and (max-width: 768px) {
		.hl-phmt33 {
			margin-top: 16px;
		}
		.reserved-txt {
			font-size: 6px;
			line-height: 1;
			text-align: left;
			font-style: normal;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}
	}

	@media screen and (max-width: 768px) {
		.footer-body {
			padding-top: 22px;
			padding-bottom: 44px;
		}

		.ft-mt {
			margin-top: 21px;
		}
		.hl-phmt33 {
			margin-top: 33px;
		}

		.f-title {
			font-size: 13px;
		}

		.f-ti {
			width: 85px;
		}

		.f-ico_x {
			width: 33px;
			height: 28px;
		}

		.f-ico_in {
			width: 31px;
			height: 28px;
			margin-left: 21px;
		}

		.f-desc {
			font-size: 13px;
		}

		.ft-input {
			--el-input-width: 154px;
			--el-input-height: 22px;
			--el-input-border-radius: 5px;
			--el-input-hover-border: 1px solid #000000;
			padding: 3px;
			font-size: 13px;
			text-align: left;
		}

		.ft-btn {
			width: 71px;
			height: 22px;
			border-radius: 5px;
			font-size: 13px;
			line-height: 1.2;
			margin-left: 9px;
		}

		.reserved-mt {
			margin-top: 33px;
		}

		.reserved-logo {
			.f-ico {
				width: 160px;
				height: 39px;
			}
		}

		.reserved-txt {
			font-size: 11px;
			line-height: 1;
			text-align: left;
			font-style: normal;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}
	}
</style>
