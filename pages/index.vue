<script setup>
const sup = useSupabaseClient();

definePageMeta({
    layout: 'nav'
})

</script>

<template>
    <main class="main">
        <aside class="aside">
            <div class="description">
                This website was created by <NuxtLink class="link" to="https://github.com/Rafiklatrikdu69">Rafiki</NuxtLink>, a passionate developer dedicated to crafting engaging web experiences. With a keen interest in technology and design, 
                Rafiki  aims to provide useful resources and insights through this platform. Whether you're looking for tutorials, tips, or simply exploring, you’re in the right place. Enjoy !
            </div>
        </aside>
        <div class="container">
            <img class="img" src="/imageHome.png" alt="image of products">
        </div>
    </main>
</template>

<style lang="css" scoped>
.main{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    padding: 80px;
}
.aside ,.container{
    margin-top: 3.5%;
    padding: 10px;
    width: 100%;
    text-align: center;
}
.img{
    width: 60%;
    object-fit: contain;
    border-radius: 10px;
}
.img {
    -webkit-transform: rotate(10deg) scale(1);
    transform: rotate(10deg) scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

.img:hover {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
}
.link{
    text-decoration: none;
    color: #1c262b;
    font-weight: 500;
    position: relative;
}
.link:hover::before {
    bottom: 0;
    height: 100%;
}
.link::before {
    content: '';
    background-color: hsla(196, 61%, 58%, .75);
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 5px;
    z-index: -1;
    transition: all .3s ease-in-out;
}
.description{
    font-size: 20px;
}
.aside{
    padding: 20px;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
}
@media only screen and (max-width: 600px) {
    .main {
        flex-direction: column;
    }
    .img{
        width: 100%;
    }
}
</style>
