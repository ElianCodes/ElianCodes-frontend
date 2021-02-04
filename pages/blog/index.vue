<template>
  <nav class="d-flex flex-wrap justify-content-center justify-content-md-start my-5">
    <h1 class="hidden">Elian's blog</h1>
    <b-card
      v-for="article in articles"
      :key="article.slug"
      :title="article.title"
      :img-src="article.imgUrl"
      :img-alt="article.title"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 mt-5 w-100 w-md-25 ml-md-5"
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
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
