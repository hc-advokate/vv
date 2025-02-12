<template>
	<div class="wechat-chat">
		<!-- 聊天头部 -->
		<div class="chat-header">
			<div class="header-title">聊天</div>
		</div>
		<!-- 聊天内容区 -->
		<div class="chat-content" ref="chatContent">
			<div v-for="(msg, index) in messages" :key="index" :class="['chat-bubble', msg.sender]">
				<div class="bubble-content">{{ msg.text }}</div>
				<div class="bubble-time">{{ msg.time }}</div>
			</div>
		</div>
		<!-- 聊天输入区 -->
		<div class="chat-input">
			<input v-model="inputMessage" @keyup.enter="sendMessage" placeholder="输入消息..." />
			<button @click="sendMessage">发送</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, nextTick } from "vue";

	// 初始消息数据（示例）
	const messages = ref([
		{ sender: "other", text: "你好！", time: "10:00" },
		{ sender: "me", text: "你好，最近怎么样？", time: "10:01" },
		{ sender: "other", text: "还不错，谢谢！", time: "10:02" },
	]);

	const inputMessage = ref("");

	// 发送消息函数
	function sendMessage() {
		if (inputMessage.value.trim() !== "") {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, "0");
			const minutes = now.getMinutes().toString().padStart(2, "0");
			// 添加用户消息
			messages.value.push({
				sender: "me",
				text: inputMessage.value,
				time: `${hours}:${minutes}`,
			});
			inputMessage.value = "";
			nextTick(() => {
				scrollToBottom();
			});
			// 模拟回复
			setTimeout(() => {
				const nowReply = new Date();
				const replyHours = nowReply.getHours().toString().padStart(2, "0");
				const replyMinutes = nowReply.getMinutes().toString().padStart(2, "0");
				messages.value.push({
					sender: "other",
					text: "收到！",
					time: `${replyHours}:${replyMinutes}`,
				});
				scrollToBottom();
			}, 500);
		}
	}

	// 聊天记录区域滚动到底部
	const chatContent = ref(null);
	function scrollToBottom() {
		if (chatContent.value) {
			chatContent.value.scrollTop = chatContent.value.scrollHeight;
		}
	}
	onUpdated(() => {
		if (chatContent.value) {
			chatContent.value.scrollTop = chatContent.value.scrollHeight;
		}
	});
</script>

<style scoped>
	/* 整体容器 */
	.wechat-chat {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: #e5ddd5;
	}

	/* 聊天头部 */
	.chat-header {
		background-color: #ededed;
		padding: 10px;
		text-align: center;
		font-weight: bold;
		border-bottom: 1px solid #ccc;
	}

	/* 聊天内容区 */
	.chat-content {
		flex: 1;
		padding: 10px;
		overflow-y: auto;
		background: url("https://img0.baidu.com/it/u=3366688578,2938189074&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500") repeat;
		background-size: 100px 100px;
	}

	/* 聊天气泡样式 */
	.chat-bubble {
		max-width: 60%;
		margin-bottom: 10px;
		position: relative;
		padding: 8px 12px;
		border-radius: 8px;
		word-wrap: break-word;
	}

	/* 我发送的消息（右侧） */
	.chat-bubble.me {
		background-color: #dcf8c6;
		align-self: flex-end;
		margin-left: auto;
	}

	/* 对方发送的消息（左侧） */
	.chat-bubble.other {
		background-color: #fff;
		align-self: flex-start;
		margin-right: auto;
	}

	/* 消息内容 */
	.bubble-content {
		font-size: 14px;
		line-height: 1.5;
	}

	/* 消息时间 */
	.bubble-time {
		font-size: 10px;
		color: #999;
		margin-top: 4px;
		text-align: right;
	}

	/* 聊天输入区 */
	.chat-input {
		display: flex;
		padding: 10px;
		background-color: #f0f0f0;
		border-top: 1px solid #ccc;
	}

	.chat-input input {
		flex: 1;
		padding: 8px 12px;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;
	}

	.chat-input button {
		margin-left: 10px;
		padding: 8px 16px;
		background-color: #09bb07;
		border: none;
		border-radius: 20px;
		color: #fff;
		cursor: pointer;
	}

	.chat-input button:hover {
		background-color: #0aa80a;
	}
</style>
