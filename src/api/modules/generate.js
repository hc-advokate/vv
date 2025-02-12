import Axios from "@/plugins/http/axios.js";
import AxiosConfig from "@/config/axiosConfig";

export default {
	/**
	 * Overview 图表
	 * @param data
	 * @returns {*}
	 */
	statisticsData: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/product/statistics`,
			method: "get",
			data,
		});
	},
	/**
	 * Overview Product
	 * @param data
	 * @returns {*}
	 */
	productsData: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/product/recom`,
			method: "get",
			data,
		});
	},
	/**
	 * Investible Assets下，我的订单列表
	 * @param data
	 * @returns {*}
	 * page
	 * pageSize
	 * type
	 */
	orderList: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/order/list`,
			method: "get",
			data,
		});
	},
	/**
	 * Investible Assets下，STRATEGY产品列表
	 * @param data
	 * @returns {*}
	 * page
	 * pageSize
	 * type
	 */
	strategyList: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/product/list`,
			method: "get",
			data,
		});
	},
	/**
	 * @param data
	 * @returns {*}
	 * id
	 */
	DetailProd: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/product/detail`,
			method: "get",
			data,
		});
	},
	/**
	 * @param data
	 * @returns {*}
	 * id
	 * betAmount
	 */
	Stake: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/product/stake`,
			method: "post",
			data,
		});
	},
	/**
	 * @param data
	 * @returns {*}
	 * id
	 */
	DetailOrder: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/order/detail`,
			method: "get",
			data,
		});
	},
	/**
	 * @param data
	 * @returns {*}
	 * id
	 * amount
	 */
	StakeRm: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/order/unstake`,
			method: "post",
			data,
		});
	},
};
