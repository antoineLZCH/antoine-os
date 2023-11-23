// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind.css', 'splitpanes/dist/splitpanes.css', '@/styles/overrides.css'],
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
  unocss: {
    preflight: true,
  },
})
