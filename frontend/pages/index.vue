<template>
    <main class="relative">  
      <section class="h-full mt-12 mx-12 md:grid md:grid-cols-2 md:gap-4 items-center">
        <div class="flex flex-col md:mr-24">
          <h1 class="title">👋 Hello</h1>
          <p class="subtitle">
            Software Engineer <a href="https://vbridge.eu" target="_blank" rel="noreferrer">@vBridge</a>
          </p>
          <p class="regular-text">
            My name is Elian Van Cutsem. I'm a Software Engineer while finishing my Computer Science degree <a href="https://odisee.be/en" target="_blank" rel="noreferrer">@Odisee</a>. On this website you'll find some projects I did as well as some articles I occassionally write on my <a href="/blog">blog</a>.
          </p>
           <p class="footer-text mt-8 hidden md:block">Website created with <a target="_blank" rel="noreferrer" href="https://nuxtjs.org/">Nuxt</a>,
            <a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">Typescript</a>,
            <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">TailwindCSS</a> and 
            <nuxt-link to="/coffee/" v-on:click="coffeeClicked">☕️</nuxt-link>
          </p>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col items-center">
          <img height="400" width="400" class="rounded-full w-96" src="~/assets/about/about3.png" alt="Elian Van Cutsem">
          <section class="text-white md:mt-24 mt-8 flex gap-4 justify-center">
            <a href="https://github.com/elianvancutsem" target="_blank" rel="noreferrer" title="elianvancutsem on Github" v-on:click="trackOutgoing('github')">
              <font-awesome-icon class="w-7 h-7 md:w-12 md:h-12" size="6x" :icon="['fab', 'github']" />
            </a>
            <a href="https://twitter.com/HTMELian" target="_blank" rel="noreferrer" title="HTMELian on Twitter" v-on:click="trackOutgoing('twitter')">
              <font-awesome-icon class="w-7 h-7 md:w-12 md:h-12" size="6x" :icon="['fab', 'twitter']" />
            </a>
            <a href="https://linkedin.com/in/elianvancutsem" target="_blank" rel="noreferrer" title="elianvancutsem on Linkedin" v-on:click="trackOutgoing('linkedin')">
              <font-awesome-icon class="w-7 h-7 md:w-12 md:h-12" size="6x" :icon="['fab', 'linkedin-in']" />
            </a>
          </section>
          <transition name="fadeWhisper" mode="out-in">
            <div v-if="showWhisper" class="flex flex-col text-white items-center mt-8">
              <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <p class="text-whisper">
                Follow me here
              </p>
            </div>
          </transition>
        </div>
      </section>
     
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      showWhisper: false
    }
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_path: '/',
      })
    },
    coffeeClicked () {
      this.$gtag.event('link_to_socials', {
        'event_category': 'engagement',
        'event_label': 'Coffee',
      })
    },
    trackOutgoing (value: string) {
      this.$gtag.event('link_to_socials', {
        'event_category': 'engagement',
        'event_label': value,
      })
    },
    mounted () {
      this.showWhisper = true
    }
  },
  head: {
    title: 'Elian Van Cutsem | Home',
    meta: [
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Elian Van Cutsem | Home'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Full-stack software engineer @vBridge | My online portfolio and CV. I also write about technology and programming.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://pbs.twimg.com/profile_images/1303397227382046726/CrMgr6x0_400x400.jpg'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Elian van Cutsem'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Elian Van Cutsem | Home'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Full-stack software engineer @vBridge | My online portfolio and CV. I also write about technology and programming.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://pbs.twimg.com/profile_images/1303397227382046726/CrMgr6x0_400x400.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.elian.codes/'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Elian Van Cutsem'
      }
    ]
  }
})
</script>

<style>
.fadeWhisper-enter-active {
  transition: opacity 30s;
}
.fadeWhisper-enter {
  opacity: 0;
}
</style>
