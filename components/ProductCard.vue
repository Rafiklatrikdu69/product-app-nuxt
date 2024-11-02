<script setup>
defineProps(["product"])


</script>

<template>
    
    
    
    <main>
        <UCard>
            <template #header>
                <span class="align-header">
                    <p class="title">{{ product.title }}</p>
                    <img  class="img" :src="product.image" alt="">
                </span>
            </template>
            <p class="description">{{ product.description }}</p>
            <template #footer>
               <span class="footer">
                <NuxtLink :to='`/products/${product.id}`' class="details-link">Détails</NuxtLink>
               </span>
            </template>
        </UCard>
    </main>
</template>

<style scoped>
.description,.title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.description{
    width: 275px;
}
.img{
    padding: 5px;
    max-width: 125px;
    height: 150px;
    object-fit: contain;
    text-align:center;
    margin:auto;
    display:flex
}
.footer{
    display: flex;
    justify-content: space-around;
}
.details-link {
    text-align: center;
    width: 80px;
    padding: 6px;
    border-radius: 10px;
    background-color: rgba(31, 31, 31, 0.8);
    color: white;
    text-decoration: none; 
}

.details-link:hover {
    background-color: rgba(31, 31, 31, 0.74); 
}
@media only screen and (max-width: 600px) {
    .description{
        width: 100%;
    }
}
</style>
