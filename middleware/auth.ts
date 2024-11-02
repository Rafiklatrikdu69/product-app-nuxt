export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    console.log(user.value)
  
    const linkDestination = ref('/auth');
    if(!user.value){
        return  navigateTo(linkDestination.value)
    }
  })
  