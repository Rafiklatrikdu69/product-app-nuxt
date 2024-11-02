<script  setup>
 import { supabase } from '../utils/supabase'

definePageMeta({
  layout: 'nav',
  middleware: ['auth']
})


const { data: products, error } = await supabase
  .from('products')
  .select('*')
          
console.log(JSON.stringify(products))
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
main{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
</style>
