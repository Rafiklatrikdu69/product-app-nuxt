<script lang="ts" setup>
const sup = useSupabaseClient();
const email = ref('')
const password = ref('')
const toast = useToast()
const router = useRouter()
router.push("/auth")
const  submitLogin = async ()=>{
    const isEmpty  = !email.value.trim() || !password.value.trim()
    if(!isEmpty){
        const { data, error } = await sup.auth.signInWithPassword({
            email:email.value,
            password :password.value
        }
        )
        console.log(data)
        if(data.user){
            navigateTo('/')
            console.log('User signed in successfully!', data)
        }else{
            console.log('User not signed in successfully')
            toast.add({ 
                title: 'Erreur lors de la connexion veuillez réesayer !', 
                icon: "i-heroicons-exclamation-circle",
                color: 'red' 
            });
        }
    }
    else{
        alert('Veuillez remplir tous les champs')
    }
    
}
</script>

<template>
    <main class="main">
        <form  class="form">
            <h1 class="title">Login</h1>
            <label >Email</label>
            <UInput v-model="email" class="input" type="text"/>
            <label >Password</label>
            <UInput v-model="password" class="input" type="password"></UInput>
        
        <UButton @click="submitLogin">Connexion</UButton>
        <p><NuxtLink to='/register'>Sign Up</NuxtLink></p>
    </form>
    <UNotifications />
</main>
</template>

<style lang="css" scoped>
.main{
    text-align:center;
    height:100vh;
}
form {
    display: inline-block;
    margin-top: 150px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    padding:40px;
}
.input{
    padding:20px;
    width:250px;
}
.title{
    font-size: 28px;
    font-weight: 600;
}
</style>
