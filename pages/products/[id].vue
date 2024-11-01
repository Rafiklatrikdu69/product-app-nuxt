<script  setup>
const {id} = useRoute().params;
const { data:product, pending, error, refresh } = await useFetch(`https://fakestoreapi.com/products/${id}`);

</script>

<template>
    <main>
        <ProductDetail :product="product"/>
    </main>
</template>

<style lang="css" scoped>
    
</style>
