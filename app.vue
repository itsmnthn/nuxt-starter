<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '46x46' },
  ],
})

const siteName = 'App'
const metaImage = '/img/meta/huge-cover.png'
useSeoMeta({
  charset: 'utf-8',
  viewport: { width: 'device-width', initialScale: 1 },
  colorScheme: 'dark',
  applicationName: siteName,
  author: siteName,
  themeColor: '#5924FF',

  title: '%site.title',
  description: '%site.description',
  titleTemplate: '%s - %site.name',

  // og
  ogTitle: '%site.title',
  ogDescription: '%site.description',
  ogSiteName: siteName,
  ogType: 'website',
  ogImage: metaImage,

  // twitter
  twitterTitle: '%site.title',
  twitterDescription: '%site.description',
  twitterImage: metaImage,
  twitterCard: 'summary_large_image',
  twitterSite: '@itsmnthn',
  twitterCreator: '@itsmnthn',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
