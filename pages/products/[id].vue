<script  setup>
const {id} = useRoute().params;
const { data:product, pending, error, refresh } = await useFetch(`https://fakestoreapi.com/products/${id}`,{key:id});

if (!product.value){
    throw  createError({
        statusText:'product',
        statusCode: 404,
        statusMessage: 'Error the product does not exist !'
    })
}
</script>

<template>
    <main>
        <ProductDetail :product="product"/>
    </main>
</template>

<style lang="css" scoped>
    
</style>
