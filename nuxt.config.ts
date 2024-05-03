// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      clientVersion: pkg.version,
      BASE_URL: process.env.BASE_URL,
      BASE_API_URL: process.env.BASE_API_URL
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
      Amiri: [400, 700],
    },
    useStylesheet: true
  },
})