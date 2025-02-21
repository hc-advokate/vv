/**
 * 路由入口
 */
import { createRouter, createWebHistory } from "vue-router";
import routes from "./route";

// createWebHashHistory() hash路由#
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => {
    return { el: 'body', left: 0, top: 0 };
  },
});

// 路由加载前
router.beforeEach(async (to, from, next) => {
  next();
});

// 路由加载后，关闭loading
router.afterEach(() => {

});

export default router;
