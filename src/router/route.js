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
