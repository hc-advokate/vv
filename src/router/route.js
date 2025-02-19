export const errorRoutes = [
	{
		path: "/:path(.*)*",
		name: "redirect",
		redirect: "/404",
		meta: {
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "redirect",
		redirect: "/404",
		meta: {
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/401",
		name: "noPower",
		component: () => import("@/views/error/NoPower.vue"),
		meta: {
			title: "NoPower",
			name: "NoPower",
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/404",
		name: "notFound",
		component: () => import("@/views/error/NotFound.vue"),
		meta: {
			title: "NotFound",
			name: "NotFound",
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/500",
		name: "serverError",
		component: () => import("@/views/error/ServerError.vue"),
		meta: {
			title: "ServerError",
			name: "ServerError",
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/tips",
		name: "tips",
		component: () => import("@/views/error/Tips.vue"),
		meta: {
			title: "tips",
			name: "tips",
			auth: false,
			isHide: true,
		},
	},
];

export const baseRoutes = [
	{
		path: "",
		name: "",
		meta: {
			auth: false,
			isHide: false,
		},
		redirect: (to) => {
			return { path: "/index" };
		},
		children: [],
	},
	{
		path: "/connect",
		name: "Connect",
		component: () => import("@/views/login/Connect.vue"),
		meta: {
			auth: false,
			isHide: false,
			title: "Connect",
			name: "Connect",
		},
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/Login.vue"),
		meta: {
			auth: false,
			isHide: false,
			title: "Login",
			name: "Login",
		},
	},
	{
		path: "/index",
		name: "Index",
		component: () => import("@/views/Index.vue"),
		meta: {
			auth: true,
			isHide: false,
			title: "Index",
			name: "Index",
		},
		redirect: (to) => {
			return { path: "/home" };
		},
		children: [
			{
				path: "/home",
				name: "Home",
				component: () => import("@/views/home/Index.vue"),
				meta: {
					auth: true,
					isHide: false,
					title: "Home",
					name: "Home",
				},
				children: [],
			},
			{
				path: "/games",
				name: "Games",
				component: () => import("@/views/game/Index.vue"),
				meta: {
					auth: true,
					isHide: false,
					title: "Games",
					name: "Games",
				},
				children: [],
			},
			{
				path: "/sports",
				name: "Sports",
				component: () => import("@/views/sport/Index.vue"),
				meta: {
					auth: true,
					isHide: false,
					title: "Sports",
					name: "Sports",
				},
				children: [],
			},
			{
				path: "/predict",
				name: "Predict",
				component: () => import("@/views/predict/Index.vue"),
				meta: {
					auth: true,
					isHide: false,
					title: "Predict",
					name: "Predict",
				},
				children: [],
			},
			{
				path: "/account",
				name: "Account",
				component: () => import("@/views/account/Index.vue"),
				meta: {
					auth: true,
					isHide: false,
					title: "Account",
					name: "Account",
				},
				children: [],
			},
		],
	},
	{
		path: "/detail",
		name: "DetailFrame",
		component: () => import("@/views/Detail.vue"),
		meta: {
			auth: true,
			isHide: false,
			title: "DetailFrame",
			name: "DetailFrame",
		},
		redirect: () => {
			return { path: "" };
		},
		children: [
			{
				path: "/game-detail",
				name: "GameDetail",
				component: () => import("@/views/gameDetail/Detail.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "GameDetail",
					name: "GameDetail",
				},
			},
			{
				path: "/sport-detail",
				name: "SportDetail",
				component: () => import("@/views/sport/Detail.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "SportDetail",
					name: "SportDetail",
				},
			},
			{
				path: "/predict-buy",
				name: "PredictBuy",
				component: () => import("@/views/predict/Buy.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "PredictBuy",
					name: "PredictBuy",
				},
			},
			{
				path: "/friends",
				name: "Friends",
				component: () => import("@/views/account/Friends.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "Friends",
					name: "Friends",
				},
				children: [],
			},
			{
				path: "/exchange",
				name: "Exchange",
				component: () => import("@/views/account/Exchange.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "Exchange",
					name: "Exchange",
				},
				children: [],
			},
			{
				path: "/exchange-detail",
				name: "ExchangeDetail",
				component: () => import("@/views/account/ExchangeDetail.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "ExchangeDetail",
					name: "ExchangeDetail",
				},
				children: [],
			},
			{
				path: "/temp01",
				name: "Temp01",
				component: () => import("@/views/temp/Temp01.vue"),
				meta: {
					auth: false,
					isHide: false,
					title: "Temp01",
					name: "Temp01",
				},
				children: [],
			},
		],
	},
	{
		path: "/test",
		name: "Test",
		component: () => import("@/views/demo/SeamlessScroll.vue"),
		meta: {
			auth: false,
			isHide: false,
			title: "Test",
			name: "Test",
		},
	},
	{
		path: "/demo",
		name: "Demo",
		component: () => import("@/views/demo/Index.vue"),
		meta: {
			auth: false,
			isHide: false,
			title: "Demo",
			name: "Demo",
		},
	},
];

export default [...errorRoutes, ...baseRoutes];
