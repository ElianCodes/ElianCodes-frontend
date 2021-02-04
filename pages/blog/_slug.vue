<template>
  <article class="mt-5 mx-5">
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
  head: {
    title: "Elian Van Cutsem's blog | " + this.article.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: this.article.longDescription,
      },
    ],
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
