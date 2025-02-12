/**
 * 路由入口
 */
import { createRouter, createWebHistory } from "vue-router";
import Utils from "@/plugins/utils";
import routes from "./route";

// createWebHashHistory() hash路由#
export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => {
		return { el: "body", left: 0, top: 0 };
	},
});

const whiteList = ["/login", "/login-mg", "/register", "/create-info", "/index", "/detail"];
const blackList = ["/login", "/login-mg", "/register", "/create-info"];

// 路由加载前
router.beforeEach(async (to, from, next) => {
	// if (Utils.isLogin()) {
	// 	if (blackList.includes(to.path)) {
	// 		next("/index");
	// 	} else {
	// 		next();
	// 	}
	// } else {
	// 	if (whiteList.includes(to.path)) {
	// 		next();
	// 	} else {
	// 		next("/login");
	// 	}
	// }
	next();
});

// 路由加载后，关闭loading
router.afterEach(() => {});

export default router;
