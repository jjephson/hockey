<template>
	<nav>
		<ul>
			<li><NuxtLink to="/">Start</NuxtLink></li>
			<li><NuxtLink v-if="user" to="/profile">Profile</NuxtLink></li>
			<li><NuxtLink v-if="user" @click="logOut()">Log Out</NuxtLink></li>
			<li><NuxtLink v-if="!user" to="/login">Login</NuxtLink></li>
			<li><NuxtLink v-if="!user" to="/register">Register</NuxtLink></li>
		</ul>
	</nav>
</template>

<script setup>
	const client = useSupabaseAuthClient();
	const user = useSupabaseUser();
	const router = useRouter();

	async function logOut() {
		const {error} = await client.auth.signOut();
		if(error) {
			alert("Something went wrong!");
			return;
		} 
		await router.push("/login");
	}
</script>

<style scoped>
	nav ul {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 16px;
		font-weight: bold;
	
	}
	nav li {
		margin: 0 15px 0 0;
	}
	nav a, 
	nav a:link,
	nav a:visited {
		color: black;
		text-decoration: none;
	}
	nav a:active, 
	nav a:hover,
	nav a:focus {
		text-decoration: underline;
		cursor: pointer;
	}
</style>