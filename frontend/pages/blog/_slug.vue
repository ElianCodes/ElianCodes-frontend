<template>
  <main class="flex-1 z-50 overflow-y-auto focus:outline-none" tabindex="0">
    <nav class="flex lg:hidden items-start py-3" aria-label="Breadcrumb">
      <nuxt-link to="/blog/" v-on:click="$emit('toggleNavBar', true) " class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
        <!-- Heroicon name: solid/chevron-left -->
        <svg class="-ml-2 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="dark:text-gray-300">All articles</span>
      </nuxt-link>
    </nav>
    <article class="my-16">
      <nuxt-content class="mx-auto prose max-w-96 prose-green" :document="article" />
      <article-footer :author="article.author" :authorLink="article.authorLink == null ? 'https://www.elian.codes' : article.authorLink" />
      <adsbygoogle />
    </article>
  </main>
</template>

<script>
import ArticleFooter from '~/components/blog/articleFooter.vue';
import sidebar from '~/components/blog/sidebar.vue'

export default {
  components: { sidebar, ArticleFooter },
  name: 'Article',
  data() {
    return {
      articles: [],
    }
  },
  async asyncData({ error, $content, params }) {
    const article = await $content('blog', params.slug).fetch().catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })
    return { article }
  },
  layout: 'blog',
  async fetch() {
    this.articles = await this.$nuxt.$content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
  /*head() {
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
        { hid: 'twitter:site', name: 'twitter:site', content: '@HTMELian' }
      ]
    }
  },*/
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    track () {
      this.$gtag.pageview({
        page_path: '/blog/' + this.article.slug,
      })
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