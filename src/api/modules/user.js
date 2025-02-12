import Axios from "@/plugins/http/axios.js";
import AxiosConfig from "@/config/axiosConfig";

export default {
	/**
	 * @param data
	 * @returns {*}
	 * {
	 *   "address": "string",
	 *   "type": "string"
	 * }
	 */
	loginWallet: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/login/wallet`,
			method: "post",
			data,
		});
	},
	/**
	 * @param data
	 * @returns {*}
	 * {
	 *   "username": "string",
	 *   "password": "string"
	 * }
	 */
	loginPwd: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/login/metagaia`,
			method: "post",
			data,
		});
	},
	loginTel: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/login/telegram`,
			method: "post",
			data,
		});
	},
	/**
	 * @param data
	 * @returns {*}
	 * {
	 *   "name": "string",
	 *   "type": "string"
	 * }
	 */
	createInfo: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/gg-bunny/create`,
			method: "post",
			data,
		});
	},
	emailSubscribe: (data) => {
		return Axios({
			url: `${AxiosConfig.baseUrl}/email/subscribe`,
			method: "post",
			data,
		});
	},
};
