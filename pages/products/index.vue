<script  setup>
definePageMeta({
  layout: 'default'
})
const { data:products, pending, error, refresh } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <main>
        <h1>Page Product</h1>
        <article class="products">
            <div v-for="p in products" :key="p.id">
                <ProductCard :product="p"/>
            </div>
        </article>
    </main>
</template>

<style lang="css" scoped>
.products{
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
</style>
