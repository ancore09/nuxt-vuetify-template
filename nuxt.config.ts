// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/main.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': config => {
      config.plugins ||= []
      config.plugins.push(vuetify())
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
