<template>
  <nav class="d-flex flex-wrap mx-3 w-100" v-if="articles.length > 0">
    <b-card
      v-for="article in articles.reverse()"
      :key="article.slug"
      :title="article.title"
      :img-src="article.imgUrl"
      :img-alt="article.title"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 ml-4 w-25"
    >
      <b-card-text>
        {{ article.description }}<br />
        <hr />
        {{ article.longDescription }}
        <br />
        <p>Written on {{ formatDate(article.createdAt) }}</p>
      </b-card-text>

      <b-button variant="primary">
        <nuxt-link class="text-white" :to="'/blog/' + article.slug">
          Read article
        </nuxt-link>
      </b-button>
    </b-card>
  </nav>
  <div v-else class="d-flex justify-content-center my-5">
    <b-spinner variant="success" label="Spinning"></b-spinner>
  </div>
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
    this.articles = await this.$content('articles').sortBy('createdAt', 'desc').fetch()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
