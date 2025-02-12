import { defineStore } from "pinia";

export const useTemp = defineStore("temp", {
	state: () => {
		return {
			addMint: false,
			addListed: false,
			tempShow: false,
			mintAmount: 0,
			demo: {
				id: 0,
				name: "",
			},
		};
	},
	getters: {
		getDemoById: (state) => state.demo.id + 1,
		getDemo() {
			return this.demo;
		},
		getAddMint() {
			return this.addMint;
		},
		getAddListed() {
			return this.addListed;
		},
		getTempShow() {
			return this.tempShow;
		},
		getMintAmount() {
			return this.mintAmount;
		},
	},
	actions: {
		setDemo(data) {
			this.demo = data;
		},
		setAddMint(data) {
			this.addMint = data;
		},
		setAddListed(data) {
			this.addListed = data;
		},
		setTempShow(data) {
			this.tempShow = data;
		},
		setMintAmount(data) {
			this.mintAmount = data;
		},
	},
});
