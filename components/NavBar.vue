<script  setup>
const options = ['Home','Products','Contact']
const selected = ref(options[0])
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const links = [
[
{
    label: 'Nuxt App',
    icon: '',
    to: '/'
  }
], 

[{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Product',
    icon: 'i-heroicons-chart-bar',
    to: '/products'
  },
  {
    label: 'Contact',
    icon: 'i-heroicons-phone',
    to: '/contact'
  },
]
  ,[]
]

const redirectOptions = ()=>{
    if(selected.value.toLowerCase().trim() =='home'){
        navigateTo('/')
        return
    }
    selected.value = selected.value.trim()
    navigateTo(`/${selected.value.toLowerCase().trim()}`)
}
</script>

<template>
   <nav class="nav">
    <h1 class="title">Nuxt App</h1>
    <UHorizontalNavigation :links="links" id="cache" class="border-b border-gray-200 dark:border-gray-800 pb-4" />
    <USelectMenu class="select" v-model="selected" :options="options" @change="redirectOptions" />
    <UButton
    class="button"
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
   </nav>

   
</template>

<style lang="css" scoped>
  .nav {
    width: 100%;
    display: flex;
    padding: 20px;
 }  
 .button{
    height: 40px;
 }
  .container{
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
  .select,.title{
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .nav{
        align-items: center;
        justify-content: space-around;
        padding: 10px;
        margin-bottom: 20px;
    }
    #cache{
        display: none;
    }
    .select,.title{
        display: block;
    }
  
    .select{
        width: 60%;
    }
  }
</style>
