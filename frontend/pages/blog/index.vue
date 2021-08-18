<template>
  <main class="hidden md:inline max-w-80 h-full z-0 overflow-y-auto focus:outline-none">
  </main>
</template>

<script>
export default {
  layout: 'blog',
  methods: {
    track () {
      this.$gtag.pageview({
        page_path: '/blog/',
      })
    },
  },
}
</script>
