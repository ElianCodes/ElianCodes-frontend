<template>
  <article class="mx-5">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
    <div>
      <p>Article written on: {{ formatDate(article.createdAt) }}</p>
      <nuxt-link to="/blog" class="mb-5">Back to blog</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Article',
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
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
}
</script>

<style scoped>
article {
  margin-top: 100px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
