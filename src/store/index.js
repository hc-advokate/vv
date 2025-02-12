// https://pinia.vuejs.org/ 不必采用高级的setup写法
import { createPinia, storeToRefs } from "pinia";

// 创建
const store = createPinia();

// 不必额外导入，直接使用此方法
export const getStoreRefs = (store) => {
	return storeToRefs(store);
};

// 导出自定义其他状态文件
import { useTemp } from "./modules/temp.js";
import { useTg } from "./modules/tg.js";

export const appStore = {
	useTemp: useTemp(store),
	useTg: useTg(store),
};
export default store;
