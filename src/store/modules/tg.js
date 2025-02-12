import { defineStore } from "pinia";

export const useTg = defineStore("temp", {
	state: () => {
		return {
			token: "",
		};
	},
	getters: {
		getToken() {
			return this.token;
		},
	},
	actions: {
		setToken(data) {
			this.token = data;
		},
	},
});
