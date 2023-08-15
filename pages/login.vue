<template>
    <section>
        <section class="login">
            <h1>Log in to your account!</h1>
            <form @submit.prevent="login()">
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="credentials.email" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="credentials.password" />
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </section>
    </section>
</template>

<script setup>
    const router = useRouter();
    const client = useSupabaseAuthClient();
    const user = useSupabaseUser();

    const credentials = reactive({
        email: "",
        password: ""
    });

    // Log into account
    async function login() {
        const {email, password} = credentials;
        const {error} = await client.auth.signInWithPassword({email, password});
        if(!error) return router.push("/");
        console.log(error)
    }

    // Watch if the user object is not null
    watchEffect(async () => {
        if(user.value){
            await router.push("/");
        }
    })
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login {
        display: flex;
        flex-direction: column;
        background: #fff;
        color: #000;
        padding: 30px;
        width: 400px;
    }
    h1 {
        font-weight: bold;
        font-size: 24px;
        margin: 0 0 20px;
    }
    form {
    width: 100%;
    }
    form div {
        margin: 0 0 20px;
    }
    label {
        display: block;
        font-weight: bold;
        margin: 0 0 5px;
    }
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid gray;
    }
    button {
        padding: 5px;
        border: 1px solid gray;
        background: #a1a1a1;
    }    
</style>