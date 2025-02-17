<script setup>
	import Header from "@/views/components/Header.vue";
	import Bar from "@/views/components/Bar.vue";
</script>

<template>
	<main class="main-body">
		<section class="main-container main-width">
			<Header></Header>
			<section class="container">
				<router-view v-slot="{ Component }">
					<keep-alive>
						<component :is="Component" />
					</keep-alive>
				</router-view>
			</section>
			<Bar></Bar>
		</section>
	</main>
</template>

<style scoped lang="scss"></style>
