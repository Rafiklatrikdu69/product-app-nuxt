<script  setup>
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
  }]
  ,[]
]
</script>

<template>
     <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />

</template>

<style lang="css" scoped>
  .nav {
    width: 100%;
  }  
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
