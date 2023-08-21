<template>
  <section>
    <h1>Profile</h1>
    <p>Name: {{ user.user_metadata.first_name }} {{ user.user_metadata.surname }}</p>
    <p>Email: {{ user.email }}</p>
  </section>
</template>

<script setup>
// import { onMounted } from 'vue';

// const client = useSupabaseAuthClient();
const user = useSupabaseUser();

// const str = JSON.stringify(user, null, 2); // it will also indent the output
// console.log(str)

// onMounted(async () => {
//   if (user) {
//     const { data, error } = await client
//       .from('users')
//       .select('email')
//       .single();
//     if (!error) {
//       user.value = data;
//     }
//   }
// });
</script>
