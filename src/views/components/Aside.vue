<template>
	<div class="re-full menu-body re-flex-col-between">
		<div class="re-full">
			<template v-if="activeData.isFirst">
				<div class="re-t-cp re-flex-row-center-ai menu-item" v-for="(item, index) in routeData" :key="index" @click="onToPage(item.path)">
					<img v-if="item.path === activeData.path" :src="item.icoAct" alt="" class="menu-icon" />
					<img v-else :src="item.ico" alt="" class="menu-icon" />
					<span class="menu-txt" :class="{ 'menu-txt_active': item.path === activeData.path }">
						{{ item.title }}
					</span>
				</div>
			</template>
			<template v-else>
				<div class="re-t-cp re-flex-row-center-ai menu-item" @click="onToBack">
					<img :src="Constants.ico.left" alt="" class="menu-icon_back" />
					<span class="menu-txt_back">BACK</span>
				</div>
			</template>
		</div>
		<div class="vis-m">
			<div class="re-t-cp re-flex-row-center btn-logout" @click="onLogout" v-if="Util.isLogin()">
				<img :src="Constants.ico[data.userIco]" alt="" class="ico-user" />
				Uncounect
			</div>
		</div>
	</div>
</template>

<script setup>
	import Constants from "@/plugins/constants/index.js";
	import Util from "@/plugins/utils/index.js";

	const routeData = [
		{
			ico: Constants.menu.home,
			icoAct: Constants.menu.homeAct,
			title: "Overview",
			path: "/home",
		},
		{
			ico: Constants.menu.invest,
			icoAct: Constants.menu.investAct,
			title: "Investible Assets",
			path: "/invest",
		},
		{
			ico: Constants.menu.my,
			icoAct: Constants.menu.myAct,
			title: "My Portfolio",
			path: "/my",
		},
		{
			ico: Constants.menu.wallet,
			icoAct: Constants.menu.walletAct,
			title: "Dapp",
			path: "/wallet",
		},
	];

	let activeData = reactive({
		path: "/home",
		isFirst: true,
		backPath: "/home",
	});

	const emits = defineEmits(["onChange"]);

	const router = useRouter();
	const onToPage = (url) => {
		emits("onChange", true);
		router.push({ path: url });
	};
	const onToBack = () => {
		emits("onChange", true);
		router.replace({ path: activeData.backPath });
	};

	const route = useRoute();
	watch(
		() => route.path,
		() => {
			activeData.path = route.path;
			activeData.isFirst = route.path.split("/").length < 9; // 3;
			if (!activeData.isFirst) {
				activeData.backPath = route.path.slice(0, route.path.indexOf("/", route.path.indexOf("/") + 1));
			}
		},
		{ immediate: true },
	);

	const onToHome = () => {
		router.push({ path: "/" });
	};
	const onLogout = () => {
		Util.logout();
		onToHome();
	};

	const data = reactive({
		userIco: "",
	});

	onMounted(() => {
		data.userIco = window.localStorage.getItem("userIco");
		activeData.path = route.path;
	});
</script>

<style scoped lang="scss">
	.menu-item {
		padding-top: 3px;
		padding-bottom: 3px;
	}
	.menu-icon {
		width: 4px;
		height: 4px;
	}
	@media screen and (max-width: 768px) {
		.menu-item {
			padding-top: 10px;
			padding-bottom: 10px;
		}
		.menu-icon {
			width: 18px;
			height: 18px;
		}
	}
	.menu-txt {
		font-family: Barlow, Barlow;
		font-weight: 400;
		font-size: 3px;
		color: #888888;
		line-height: 1;
		text-align: left;
		font-style: normal;
		margin-left: 2px;
		&.menu-txt_active {
			color: #000000;
		}
	}
	@media screen and (max-width: 768px) {
		.menu-txt {
			font-size: 14px;
			margin-left: 10px;
		}
	}
	.menu-icon_back {
		width: 2px;
		height: 4px;
	}
	@media screen and (max-width: 768px) {
	}
	.menu-txt_back {
		font-family: Barlow, Barlow;
		font-weight: 400;
		font-size: 4px;
		color: #000000;
		line-height: 1;
		text-align: left;
		font-style: normal;
		margin-left: 2px;
	}
	@media screen and (max-width: 768px) {
	}

	.ico-user {
		width: 9px;
		height: 9px;
		margin-right: 2px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.5s;
		position: relative;
		left: 0;
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
