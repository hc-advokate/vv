<script setup>
	const props = defineProps({
		names: {
			required: false,
			type: Array,
			default: () => [],
		},
	});
</script>

<template>
	<div class="re-w-full re-flex-row b-list">
		<div v-for="(item, index) in props.names" :key="index" class="bl-item" :class="{ 'bli-act': index === names.length - 1 }">
			{{ item }}<span v-if="index < names.length - 1" class="bli-ico">&gt;</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.b-list {
		font-family: Barlow-Regular, Barlow;
		font-weight: 400;
		font-size: 4px;
		color: #000000;
		line-height: 1;
		text-align: left;
		font-style: normal;
		.bli-act {
			font-family: Barlow-ExtraBold, Barlow;
			font-weight: bold;
		}
	}
	.bli-ico {
		margin-left: 1px;
		margin-right: 1px;
	}
</style>
