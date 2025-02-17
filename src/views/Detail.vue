<script setup></script>

<template>
	<main class="main-body">
		<section class="main-container main-width">
			<section class="detail-container">
				<router-view v-slot="{ Component }">
					<keep-alive>
						<component :is="Component" />
					</keep-alive>
				</router-view>
			</section>
		</section>
	</main>
</template>

<style scoped lang="scss"></style>
