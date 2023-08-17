<template>
	<main>
		<section>
			<button @click="generateRandomCards">Generate a pack of cards</button>
			<ul>
				<li v-for="cards in randomCards" :key="cards.id" v-bind:class="` ${cards.card_rank === 'uncommon' ? 'card-gold' : 'card' }`">
					<section>
						<div class="top">
							<nuxt-picture :src="`/players/${cards.picture}`" :alt="`${cards.player}`" class="picture" />
							<nuxt-picture :src="`/logos/${cards.clublogo}`" :alt="`${cards.club}`" class="logo"/>
							<h2><span>{{ cards.player }}</span></h2>
						</div>
						<section class="bottom">
							<div>Position <div>{{ cards.position }}</div></div>
							<div>Rating <div class="rating">{{ cards.rating }}</div></div>
							<div>Land <div class="country">{{ cards.country }}</div></div>
						</section>
					</section>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
	const user = useSupabaseUser();
	const router = useRouter();
	definePageMeta({
		middleware: 'auth'
	});
	watchEffect(async () => {
		if(!user.value){
			await router.push("/login");
		}
	});

	// Random cards
	import { ref, onMounted } from 'vue';
	const data = ref([]);
	const randomCards = ref([]);

	function pickRandomCards() {
		const shuffledData = [...data.value].sort(() => Math.random() - 0.5);
		randomCards.value = shuffledData.slice(0, 5);
	}

	function generateRandomCards() {
		pickRandomCards();
	}

	onMounted(async () => {
		const response = await fetch('../assets/dif.json');
		data.value = await response.json();
	});
</script>

<style scoped>
	main {
		display: flex;
		flex-wrap: wrap;
	}
	ul {
		display: flex;
	}
	.card {
		flex: 0 0 250px;
		margin: 1rem;
		border-radius: 7px;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
		background-color: white;
		color: #000;
	}
	.top {
		position: relative;
		height: 250px;
	}
	.picture {
		height: 250px;
		max-width: 100%;
	}
	.logo {
		position: absolute;
		top: 15px;
		right: 15px;
		width: 25px;
		height: 35px;
	}
	h2 {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: absolute;
		bottom: 15px;
		right: 0;
		left: 0;
		height: 100px;
		font-weight: 800;
		font-size: 20px;
		background: rgb(255,255,255);
		background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%);
	}
	.bottom {
		display: flex;
		flex-direction: row;
	}
	.bottom div {
		flex: 3;
		text-align: center;
		padding: 0 0 10px;
		text-transform: uppercase;
		font-weight: bold;
	}
	.card-gold {
		flex: 0 0 250px;
		margin: 1rem;
		border-radius: 7px;
		background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
					radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
		color: #000;
	}
	.card-gold h2 {
		background: none;
	}

	button {
        padding: 5px;
        border: 1px solid gray;
        background: #a1a1a1;
    }    
</style>