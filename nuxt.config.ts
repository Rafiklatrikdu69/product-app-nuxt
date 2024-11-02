// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-icons','@nuxtjs/supabase'],
  supabase: { redirect: false, },
  vite: {
    define: {
      // dont forgot about JSON.stringify, because it adds quotes
      'process.env.APP_URL': JSON.stringify(process.env.NUXT_PUBLIC_SUPABASE_URL),
      'process.env.APP_KEY': JSON.stringify(process.env.NUXT_PUBLIC_SUPABASE_KEY)
    }
  },
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    include: undefined,
    exclude: ['sign-up'],
    cookieRedirect: false,
  }
})