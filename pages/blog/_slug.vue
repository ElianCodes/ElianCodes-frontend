<template>
  <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabindex="0">
    <article class="mb-8">
      <nuxt-content class="mx-auto prose max-w-80 prose-green" :document="article" />
    </article>
  </main>
</template>

<script>
import sidebar from '~/components/blog/sidebar.vue'

export default {
  components: { sidebar },
  name: 'Article',
  data() {
    return {
      articles: [],
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  layout: 'blog',
  async fetch() {
    this.articles = await this.$content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'og:locale', property: 'og:locale', content: "en_US" },
        { hid: 'og:type', property: 'og:type', content: "website" },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:card', name: 'twitter:card', content: this.article.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.article.imgUrl },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.longDescription },
        { hid: 'twitter:site', name: 'twitter:site', content: '@vancutsemelian' }
      ]
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  transition: {
    name: "blogpost",
    mode: "out-in"
  }
}
</script>

<style scoped>
  .blogpost-enter-active, .blogpost-leave-active { transition: opacity .5s; }
  .blogpost-enter, .blogpost-leave-active { opacity: 0; }
</style>