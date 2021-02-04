<template>
  <nav class="d-flex flex-wrap mx-3 w-100">
    <b-card
      v-for="article in articles"
      :key="article.slug"
      :title="article.title"
      :img-src="article.imgUrl"
      :img-alt="article.title"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 ml-md-4 w-100 w-md-25"
    >
      <b-card-text>
        {{ article.description }}<br />
        <hr />
        {{ article.longDescription }}
        <br />
        <p>Written on {{ formatDate(article.createdAt) }}</p>
      </b-card-text>
      <nuxt-link class="text-white" :to="'/blog/' + article.slug">
        <b-button variant="primary"> Read article </b-button>
      </nuxt-link>
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
    this.articles = await this.$content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
