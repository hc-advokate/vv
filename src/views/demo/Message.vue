<script setup lang="ts">
	import { ref } from "vue";
	import Message from "./components/Message.vue";

	const messages = ref([{ id: 1, sender: "ai", content: "你好，有什么可以帮助你的？" }]);
	const userInput = ref("");

	const sendMessage = () => {
		if (userInput.value.trim() === "") return;

		messages.value.push({
			id: messages.value.length + 1,
			sender: "user",
			content: userInput.value.trim(),
		});
		userInput.value = "";

		// 模拟 AI 响应
		setTimeout(() => {
			messages.value.push({
				id: messages.value.length + 1,
				sender: "ai",
				content: "正在思考中...",
			});
		}, 500);
	};
	const messageList = ref(null);

	onUpdated(() => {
		if (messageList.value) {
			messageList.value.scrollTop = messageList.value.scrollHeight;
		}
	});
</script>

<template>
	<div class="chat-container">
		<div class="message-list" ref="messageList">
			<Message v-for="message in messages" :key="message.id" :message="message" />
		</div>
		<div class="input-area">
			<textarea v-model="userInput" @keyup.enter="sendMessage"></textarea>
			<button @click="sendMessage">发送</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.chat-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.message-list {
		flex: 1;
		overflow-y: scroll;
		padding: 10px;
	}

	.input-area {
		display: flex;
		padding: 10px;
	}

	textarea {
		flex: 1;
		border: 1px solid #ccc;
		padding: 5px;
	}

	button {
		margin-left: 10px;
		padding: 5px 10px;
	}
</style>
