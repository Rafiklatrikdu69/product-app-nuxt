<script setup lang="ts">
const value = ref('')
const toast = useToast()

const  submit = () =>{
    if(value.value===''){
        toast.add({ title: 'Message Vide ! '+value.value, icon:"i-heroicons-exclamation-circle",color:'red' })

    }else{
        toast.add({ title: 'Message envoyé :'+value.value, icon:"i-heroicons-check-badge",color:'green' })

    }
}
</script>

<template>
  <main class="container">
    <form class="form">
        <label class="label">
            <div class="message">Message</div>
        <UInput v-model="value" />
        </label>
        <UButton class="button"  @click="submit">Submit</UButton>
    </form>
    <UNotifications/>
  </main>
  
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f7f7f7;
}
.form{
    display: flex;
    width: 300px;
    flex-direction: column;
    gap:30px;
}
.button{
    text-align: center;
    width: 25%;
}
.label > .message{
    padding: 10px;
}
</style>

