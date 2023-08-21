<template>
	<header>
		<section>
			<NuxtLink to="/"><nuxt-picture :src="`/logo.GIF`" :alt="`Rink Royal`" class="picture" /></NuxtLink>
			<Navbar />
			<slot />
		</section>
	</header>
</template>

<style scoped>
	header {
		display: flex;
		justify-content: center;
		padding: 3rem 0;
		background-color: rgb(255, 255, 255);
	}
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1200px;
	}
	.picture {
		display: block;
		max-width: 250px;
	}
	@media screen and (max-width: 768px) {
		header {
			padding: 2rem 0 2rem;
		}
	}
</style>