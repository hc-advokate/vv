<script setup>
	import Constants from "@/plugins/constants/index.js";
	import Util from "@/plugins/utils/index.js";

	let data = reactive({
		isScrolling: false,
		userIco: "",
	});

	const router = useRouter();
	const onToIndex = () => {
		router.push({ path: "/" });
	};
	const onToHome = () => {
		router.push({ path: "/admin" });
	};
	const onToLogin = () => {
		router.push({ path: "/login" });
	};
	const onToRegister = () => {
		router.push({ path: "/register" });
	};
	const onLogout = () => {
		Util.logout();
		onToHome();
	};

	onMounted(() => {
		window.addEventListener("scroll", (e) => {
			data.isScrolling = !!e.target.scrollingElement.scrollTop;
		});
		if (Util.isLogin()) {
			data.userIco = window.localStorage.getItem("userIco");
		}
	});
</script>

<template>
	<section id="header" class="header-body header-main re-w-full cci-plr re-flex-row-between" :class="{ 'h-border': data.isScrolling }">
		<img :src="Constants.img.logo" alt="" class="com-logo re-t-cp" @click="onToIndex" />
		<div class="re-flex-row-center">
			<button class="re-t-cp cci-btn_txt" @click="onToLogin" v-if="false">Sign In</button>
			<button class="re-t-cp cci-btn" @click="onToRegister" v-if="false">Sign Up</button>
			<div class="re-t-cp re-flex-row-center btn-logout" @click="onLogout" v-if="Util.isLogin()">
				<img :src="Constants.ico[data.userIco]" alt="" class="ico-user" />
				Uncounect
			</div>
			<button class="re-t-cp cci-btn_auto" @click="onToLogin" v-else>Connect Wallet</button>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.header-main {
		height: 22px;
	}
	.header-body {
		height: 22px;
		background: #ffffff;
		transition: 0.2s;
		position: sticky;
		z-index: 10;
		top: 0;
		box-sizing: border-box;
	}
	.h-border {
		border-width: 0px 0px thin;
		border-style: solid;
		border-color: rgb(220, 221, 224);
	}

	@media screen and (max-width: 768px) {
		.header-main {
			height: 49px;
		}
		.header-body {
			height: 49px;
		}
		.com-logo {
			width: 107px;
			height: 23px;
		}
	}

	.ico-user {
		width: 9px;
		height: 9px;
		margin-right: 2px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.5s;
	}
	@media screen and (max-width: 768px) {
		.ico-user {
			width: 22px;
			height: 22px;
			margin-right: 4px;
			transition: all 0.5s;
		}
	}
</style>
