<template>
  <nav class="d-flex mx-3">
    <b-card
      v-for="article in articles.reverse()"
      :title="article.title"
      :img-src="article.imgUrl"
      :img-alt="article.title"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 ml-2"
    >
      <b-card-text>
        article.summary
        <p>{{ formatDate(article.updatedAt) }}</p>
      </b-card-text>

      <b-button variant="primary">
        <nuxt-link class="text-white" :to="'/blog/' + article.slug">
          Read article
        </nuxt-link>
      </b-button>
    </b-card>
  </nav>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    this.articles = await this.$content('articles').fetch()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
