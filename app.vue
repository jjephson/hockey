<template>
  <main>
    <section v-for="card in cards" :key="card.id" v-bind:class="` ${card.card_rank === 'uncommon' ? 'card-gold' : 'card' }`">
      <section>
        <div class="top">
			<nuxt-picture :src="`/players/${card.picture}`" :alt="`${card.player}`" class="picture" />
			<nuxt-picture :src="`/logos/${card.clublogo}`" :alt="`${card.club}`" class="logo"/>
			<h2><span>{{ card.player }}</span></h2>
        </div>
        <section class="bottom">
			<div>Position <div>{{ card.position }}</div></div>
			<div>Rating <div class="rating">{{ card.rating }}</div></div>
			<div>Land <div class="country">{{ card.country }}</div></div>
            <!-- <nuxt-picture :src="`/flags/${card.flag}`" :alt="`${card.country}`" /> -->
		</section>
      </section>
    </section>
  </main>
</template>

<script>
  import userData from './assets/dif.json'

  export default {
    data() {
      return {
        cards: userData,
      };
    },
  }

</script>

<style scoped>
	main {
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		flex: 0 0 250px;
		margin: 1rem;
		border-radius: 7px;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
		background-color: white;
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
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
		background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
	}
</style>