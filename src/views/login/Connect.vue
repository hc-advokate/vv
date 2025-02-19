<script setup lang="ts">
	import Constants from "@/plugins/constants";
	import { useRouter } from "vue-router";
	import { ElMessage } from "element-plus";
	import { reactive } from "vue";
	import { MetaMaskSDK } from "@metamask/sdk";
	import Solflare from "@solflare-wallet/sdk";
	import api from "@/api/index";

	const data = reactive({
		loading: false,
	});

	const onLoginMetamask = async () => {
		window.localStorage.setItem("userIco", "mm");
		if (typeof window!.ethereum === "undefined") {
			ElMessage({ message: "Please install MetaMask extension", type: "warning" });
			return false;
		}
		data.loading = true;
		try {
			// window 方式
			// const accounts = await window.ethereum.request({ method: "eth_requestAccounts", params: [] });
			// console.log(accounts[0]);
			// SDK 方式
			const MMSDK = new MetaMaskSDK();
			const accounts = await MMSDK.connect();
			console.log(accounts[0]);
			if (accounts[0]) {
				loginWallet(accounts[0], "2");
			}
		} catch (error) {
			console.log(error);
			data.loading = false;
			ElMessage({ message: "Failed to connect to MetaMask", type: "error" });
		}
	};

	const onLoginSolflare = async () => {
		window.localStorage.setItem("userIco", "sf");
		if (typeof window!.solflare === "undefined") {
			ElMessage({ message: "Please install Solflare extension", type: "warning" });
			return false;
		}
		data.loading = true;
		try {
			const wallet = new Solflare();
			wallet.on("connect", () => {
				console.log("connected", wallet!.publicKey!.toString());
				if (wallet!.publicKey!.toString()) {
					loginWallet(wallet!.publicKey!.toString(), "3");
				}
			});
			wallet.on("disconnect", () => {
				console.log("disconnected");
			});
			await wallet.connect();
		} catch (error) {
			console.log(error);
			data.loading = false;
			ElMessage({ message: "Failed to connect to Solflare", type: "error" });
		}
	};

	const onLoginPhantom = async () => {
		window.localStorage.setItem("userIco", "pt");
		if (!("phantom" in window)) {
			ElMessage({ message: "Please install Phantom extension", type: "warning" });
			window.open("https://phantom.app/", "_blank");
			return false;
		}
		data.loading = true;
		try {
			// 连接到Phantom
			const accounts = await window!.phantom?.solana.connect();
			if (accounts.publicKey.toBase58()) {
				loginWallet(accounts.publicKey.toBase58(), "4");
			}
		} catch (error) {
			console.log(error);
			data.loading = false;
			ElMessage({ message: "Failed to connect to Phantom", type: "error" });
		}
	};

	const loginWallet = (address, type) => {
		console.log(address, type);
		onToHome();
		// api.userApi
		// 	.loginWallet({
		// 		address: address,
		// 		type: type,
		// 	})
		// 	.then((res) => {
		// 		data.loading = true;
		// 		if (!res.code) {
		// 			window.localStorage.setItem("userToken", res.data.token);
		// 			onToHome();
		// 		}
		// 	})
		// 	.catch(() => {
		// 		data.loading = true;
		// 	});
	};

	let router = useRouter();

	const onToLogin = () => {
		window.localStorage.setItem("userIco", "mw");
		router.push({ path: "/login" });
	};
	const onToHome = () => {
		router.push({ path: "/home" });
	};
</script>

<template>
	<main class="main-body">
		<section class="main-container main-width">
			<section class="detail-container login-container">
				<h1 class="re-tc login-title">Connect Your Wallet</h1>
				<div class="login-desc">By connecting your wallet, you acknowledge that you have read, understand and accept the terms in the Disclaimer</div>
				<button class="re-t-cp login-btn re-flex-row-center-ai" @click="onToLogin" :disabled="data.loading">
					<img class="btn-ico" :src="Constants.btn.mw" alt="" />
					<span class="btn-text">MetaGaia Wallet</span>
				</button>
				<button class="re-t-cp login-btn re-flex-row-center-ai" @click="onLoginMetamask" :disabled="data.loading">
					<img class="btn-ico" :src="Constants.btn.mm" alt="" />
					<span class="btn-text">Metamask</span>
				</button>
				<button class="re-t-cp login-btn re-flex-row-center-ai" @click="onLoginSolflare" :disabled="data.loading">
					<img class="btn-ico" :src="Constants.btn.sf" alt="" />
					<span class="btn-text">Solflare</span>
				</button>
				<button class="re-t-cp login-btn re-flex-row-center-ai" @click="onLoginPhantom" :disabled="data.loading">
					<img class="btn-ico" :src="Constants.btn.pt" alt="" />
					<span class="btn-text">Phantom</span>
				</button>
			</section>
		</section>
	</main>
</template>

<style scoped lang="scss">
	.login-container {
		padding-top: 29px;
		padding-left: 19px;
		padding-right: 19px;
	}
	.login-title {
		font-family: Barlow-Bold, Barlow;
		font-weight: bold;
		font-size: 24px;
		color: #ffffff;
		line-height: 1;
		text-align: center;
		font-style: normal;
	}
	.login-desc {
		margin-top: 19px;
		height: 97px;
		background: #24252b;
		border-radius: 7px;
		padding: 10px;
		font-family: Barlow-Regular, Barlow;
		font-weight: 500;
		font-size: 13px;
		color: #a0a0a0;
		line-height: 1.4;
		text-align: left;
		font-style: normal;
	}
	.login-btn {
		margin-top: 10px;
		padding: 10px;
		width: 100%;
		height: 48px;
		background: #6a39ff;
		border-radius: 10px;
		.btn-ico {
			width: 29px;
			height: 29px;
		}
		.btn-text {
			margin-left: 10px;
			font-family: Barlow-Regular, Barlow;
			font-weight: 500;
			font-size: 13px;
			color: #ffffff;
			line-height: 1;
			text-align: left;
			font-style: normal;
		}
	}
</style>
