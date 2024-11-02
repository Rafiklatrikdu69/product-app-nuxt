<script  setup>
const sup = useSupabaseClient();

const { error } = await sup.auth.signOut()
navigateTo('/auth')

</script>

<template>
    
</template>

<style lang="css" scoped>
    
</style>
