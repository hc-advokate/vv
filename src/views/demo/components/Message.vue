<script setup lang="ts">
	import { ref, watch } from "vue";

	const props = defineProps({
		message: {
			type: Object,
			required: true,
		},
	});

	const isTyping = ref(true);
	const displayedText = ref(""); // 只保留一个 displayedText 变量

	watch(
		() => props.message.content,
		() => {
			isTyping.value = true;
			displayedText.value = "";
			let i = 0;
			const typingInterval = setInterval(() => {
				if (i < props.message.content.length) {
					displayedText.value = props.message.content.substring(0, i + 1);
					i++;
				} else {
					clearInterval(typingInterval);
					isTyping.value = false;
				}
			}, 50);
		},
	);
</script>

<template>
	<div class="message" :class="{ 'message-user': props.message.sender === 'user' }">
		<div class="message-content">
			<span v-if="!isTyping">{{ props.message.content }}</span>
			<span v-else class="typing-text">{{ displayedText }}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.message {
		margin-bottom: 10px;
		display: flex;
	}

	.message-user {
		justify-content: flex-end;
	}

	.message-content {
		background-color: #fff;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.message-user .message-content {
		background-color: #e0f2f7;
	}

	.typing-text {
		white-space: pre-wrap; /* 防止文本换行 */
		animation: typing 0.5s steps(40, end) infinite; /* 添加打字机动画 */
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
</style>
