<template>
  <div>
    <navbar />
    <Nuxt />
    <go-to-top />
    <custom-footer />
  </div>
</template>

<script lang="ts">
import GoToTop from '~/components/layout/go-to-top.vue'

export default {
  name: 'DefaultLayout',
  components: { GoToTop },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
}
</script>

<style>
.hidden {
  display: none;
}

html {
  scroll-behavior: smooth;
}
</style>
