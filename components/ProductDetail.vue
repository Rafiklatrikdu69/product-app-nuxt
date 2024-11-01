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
                <div>{{ product.price }} $</div>
               </span>
            </template>
        </UCard>
    </main>
</template>

<style lang="css" scoped>
.router-link-exact-active {
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(14, 177, 14, 0.797);
    color: white;
}
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
main{
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
}
</style>
