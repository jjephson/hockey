<template>
	<nav>
		<div>
			<NuxtLink v-if="user" @click="logOut()">Log Out</NuxtLink>
		</div>
		<div>
			<NuxtLink v-if="!user" to="/login">Login</NuxtLink>
		</div>
		<div>
			<NuxtLink v-if="!user" to="/register">Register</NuxtLink>
		</div>
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
	nav {
		display: flex;
		justify-content: flex-end;
	}
	nav a:link {
		text-decoration: underline;
	}
</style>