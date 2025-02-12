import http from "./axios.js";
const baseAPI = "/api/v1";
export function EmailSubscribe(params = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/email/subscribe", params).then(
			(res) => {
				resolve(res);
			},
			(error) => {
				reject(error);
			},
		);
	});
}
