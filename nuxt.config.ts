import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
  },

  // ----
  runtimeConfig: {
    public: {},
  },

  css: ['~/assets/main.css'],

  // ----
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/fontaine',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  // ----
  site: {
    url: process.env.NUXT_ENV_SITE_URL,
    name: 'Example',
    title: 'A small description',
    description: 'A biggie big description',
    defaultLocale: 'en',
  },

  // ----
  app: {
    head: {
      templateParams: {
        separator: '-',
      },
    },
  },

  eslint: {
    config: {
      standalone: false // <---
    }
  },

  // ----
  devtools: { enabled: true }
})
