<script setup lang="ts">
	import Constants from "@/plugins/constants";
	import { reactive } from "vue";
	// import api from "@/api/index";
	import { useRouter } from "vue-router";
	import { showToast } from "vant";

	const data = reactive({
		loading: false,
		username: "",
		password: "",
	});

	let router = useRouter();
	const onSubmit = () => {
		if (!data.username) {
			showToast("UserName is not null");
			return false;
		}
		if (!data.password) {
			showToast("Password is not null");
			return false;
		}
		data.loading = true;
		router.push({ path: "/home" });
		// api.userApi
		// 	.loginPwd({
		// 		username: data.username,
		// 		password: data.password,
		// 	})
		// 	.then((res) => {
		// 		data.loading = false;
		// 		if (!res.code) {
		// 			window.localStorage.setItem("userToken", res.data.token);
		// 			router.push({ path: "/home" });
		// 		}
		// 	})
		// 	.catch(() => {
		// 		data.loading = false;
		// 	});
	};
</script>

<template>
	<main class="main-body">
		<section class="main-container main-width">
			<section class="detail-container login-container">
				<div class="re-flex-row-center">
					<img class="logo-ico" :src="Constants.btn.mw" alt="" />
				</div>
				<div class="login-form">
					<div class="form-item">
						<input type="text" class="form-input" placeholder="Unser Name" v-model="data.username" />
					</div>
					<div class="form-item">
						<input type="password" class="form-input" placeholder="Password" v-model="data.password" />
					</div>
					<div class="form-item">
						<button class="re-t-cp login-btn" @click="onSubmit" :disabled="data.loading">Sighn In</button>
					</div>
					<p class="login-desc">New here? <span class="desc-emphasize">Get started on Metagaia</span></p>
				</div>
			</section>
		</section>
	</main>
</template>

<style scoped lang="scss">
	.login-container {
		padding-top: 47px;
		padding-left: 19px;
		padding-right: 19px;
	}
	.logo-ico {
		width: 96px;
		height: 96px;
	}
	.login-form {
		margin-top: 37px;
		.form-item {
			margin-top: 10px;
		}
		.form-input {
			width: 100%;
			height: 100%;
			background: #24252b;
			border-radius: 10px;
			font-family: Barlow-Regular, Barlow;
			font-weight: 400;
			font-size: 14px;
			color: #fff;
			line-height: 1;
			text-align: left;
			font-style: normal;
			padding: 12px 10px;
			&::placeholder {
				font-family: Barlow-Regular, Barlow;
				font-weight: 400;
				font-size: 14px;
				color: #a0a0a0;
				line-height: 1;
				text-align: left;
				font-style: normal;
			}
		}
		.login-btn {
			width: 100%;
			height: 38px;
			background: #6a39ff;
			border-radius: 19px;
			font-family: Barlow-ExtraBold, Barlow;
			font-weight: 800;
			font-size: 14px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
		}
		.login-desc {
			margin-top: 19px;
			font-family: Barlow-Medium, Barlow;
			font-weight: 500;
			font-size: 13px;
			color: #ffffff;
			line-height: 1;
			text-align: center;
			font-style: normal;
			.desc-emphasize {
				color: rgba(106, 57, 255, 1);
			}
		}
	}
</style>
