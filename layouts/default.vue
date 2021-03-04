<template>
  <div class="home-background relative h-screen">
    <Nuxt />
    <section class="mx-12 bottom-12 absolute">
      <p class="footer-text">Website created with <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>,
      <a target="_blank" href="https://www.typescriptlang.org/">Typescript</a>,
      <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a> and ☕️</p>
    </section>
  </div>
</template>

<script lang="ts">
import GoToTop from '~/components/layout/go-to-top.vue'
import navbar from '~/components/layout/navbar.vue'
import customFooter from '~/components/layout/customFooter.vue'

export default {
  name: 'DefaultLayout',
  components: { GoToTop , navbar, customFooter},
  head: {
    title: 'Elian Van Cutsem',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Full-stack software engineer @vBridge | My online portfolio and CV. I also write about technology and programming.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
}
</script>