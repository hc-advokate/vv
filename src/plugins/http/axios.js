import axios from "axios";
import qs from "qs";
import Router from "@/router";

// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_HTTP_URL,
	timeout: 120000,
	headers: {
		"Content-Type": "application/json",
		signature: new Date().getTime().toString(),
		token: window.localStorage.getItem("userToken"),
	},
	paramsSerializer: {
		serialize(params) {
			return qs.stringify(params, { allowDots: true });
		},
	},
});

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		if (config.method?.toLowerCase() === "get") {
			config.params = config.data;
		}
		config.headers = {
			signature: new Date().getTime().toString(),
			token: window.localStorage.getItem("userToken") || "",
		};
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	},
);

// 添加响应拦截器
service.interceptors.response.use(
	async (response) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code && res.code !== 0) {
			// `token` 过期或者账号已在别处登录
			if (res.code === 401 || res.code === 4001) {
				window.localStorage.removeItem("userToken");
				await Router.replace({ path: "/login" });
			} else {
				return Promise.reject(service.interceptors.response);
			}
		} else {
			return res;
		}
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 导出 axios 实例
export default service;
