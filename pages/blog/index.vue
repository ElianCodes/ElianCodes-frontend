<template>
  <main class="w-full h-full z-0 overflow-y-auto focus:outline-none">
    <article class="flex justify-center h-full items-center">
      <p>No Article Selected</p>
    </article>
  </main>
</template>

<script>
import sidebar from '~/components/blog/sidebar.vue'

export default {
  components: { sidebar },
  name: 'Blog',
  data() {
    return {
      articles: [],
    }
  },
  layout: 'blog',
  async fetch() {
    this.articles = await this.$content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
  head: {
    title: "Elian Van Cutsem's blog",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Welcome to my blog. Here I write about technology and my passion for programming.',
      },
    ],
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('be', options)
    },
  },
}
</script>
