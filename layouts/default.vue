<template>
  <div class="home-background relative h-screen">
    <transition name="fade" mode="out-in">
      <section class="bg-white w-screen h-screen" v-if="menuOpened">
        <nav class="flex justify-between mx-12 pt-12">
          <nuxt-link to="/" class="nav-title">Elian Van Cutsem</nuxt-link>
          <a class="text-black cursor-pointer" v-on:click="menuOpened = false">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </a>
        </nav>
        <nav class="flex flex-col justify-center py-8 gap-8 mx-12">
          <nuxt-link to="/" class="flex justify-start items-end">
            <p class="ml-12 relative text-green-50 pb-4 text-9xl">About Me</p>
            <p class="absolute border-b-2 pb-4 pl-12">About Me</p>
          </nuxt-link>
          <nuxt-link class="flex justify-start items-end" to="/projects">
            <p class="ml-12 relative text-green-50 pb-4 text-9xl">Projects</p>
            <p class="absolute border-b-2 pb-4 pl-12">Projects</p>
          </nuxt-link>
          <nuxt-link class="flex justify-start items-end" to="/blog">
            <p class="ml-12 relative text-green-50 pb-4 text-9xl">Blog</p>
            <p class="absolute border-b-2 pb-4 pl-12">Blog</p>
          </nuxt-link>
        </nav>
      </section>
    </transition>
    <div>
      <nav class="flex justify-between mx-12 pt-12">
        <nuxt-link to="/" class="nav-title">Elian Van Cutsem</nuxt-link>
        <a class="text-white cursor-pointer" v-on:click="menuOpened = true">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </a>
      </nav>
      <Nuxt />
      <section class="mx-12 bottom-12 absolute">
        <p class="footer-text">Website created with <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>,
        <a target="_blank" href="https://www.typescriptlang.org/">Typescript</a>,
        <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a> and ☕️</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import testComponent from '~/components/test.vue'
import GoToTop from '~/components/layout/go-to-top.vue'
import navbar from '~/components/layout/navbar.vue'
import customFooter from '~/components/layout/customFooter.vue'

export default {
  name: 'DefaultLayout',
  components: { GoToTop , navbar, customFooter, testComponent},
  data () {
    return {
      menuOpened: false
    }
  },
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

<style scoped>
.fade-enter-active {
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
