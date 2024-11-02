<script lang="ts" setup>
const sup = useSupabaseClient();
const email = ref('')
const password = ref('')
const  submitLogin = async ()=>{
    const isEmpty  = !email.value.trim() || !password.value.trim()
    if(!isEmpty){
        try{
            const { data, error } = await sup.auth.signUp({
            email: email.value,
            password: password.value,
        })
        console.log(data)
        if(data.user){
            navigateTo('/products')
            console.log('User signed in successfully!', data)
        }
        }catch(e) {
            console.error('Error signing up:', e)
            alert('Erreur lors de l\'inscription')
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
            <h1 class="title">Sign Up</h1>
            <label >Email</label>
            <UInput v-model="email" class="input"/>
            <label >Password</label>
            <UInput v-model="password" class="input" />
            <UButton @click="submitLogin">Sign Up</UButton>
        </form>
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
    padding:10px;
    width:200px;
}
.title{
    font-size: 28px;
    font-weight: 600;
}
</style>
