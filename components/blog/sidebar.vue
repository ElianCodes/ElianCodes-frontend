<template>
    <aside class="w-full z-0 md:w-96 md:border-r border-gray-200">
        <div class="pr-6 pt-6 pb-4">
          <h2 class="text-lg font-medium text-gray-900 dark:text-gray-200">Latest articles</h2>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Search in {{ rawArticles.length }} articles
          </p>
          <form class="mt-6 flex space-x-4">
            <div class="flex-1 min-w-0">
              <label for="search" class="sr-only">Search</label>
              <div class="relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <!-- Heroicon name: mail -->
                  <!-- Heroicon name: solid/search -->
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="search" v-model="searchfield" name="search" id="search" class="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 dark:bg-gray-700 rounded-md" placeholder="Search">
              </div>
            </div>
            <!--<button class="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Search</span>
            </button>-->
          </form>
        </div>
        <!-- Directory list -->
        <nav class="flex-1 min-h-0 relative overflow-y-auto" aria-label="Directory">
          <ul class="relative z-0 divide-y divide-gray-200">
            <li v-for="article in articles" v-bind:key="article.id">
              <div class="relative pr-6 py-5 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" src="~/assets/about/about3.png" alt="Author of article">
                </div>
                <div class="flex-1 min-w-0">
                  <nuxt-link :to="'/blog/' + article.slug " class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {{ article.title }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-300 truncate">
                      Posted <time>{{ formatDate(article.createdAt) }}</time>
                    </p>
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <section class="text-sm bottom-12">
          <p class="footer-text">Website created by <nuxt-link to="/">Elian Van Cutsem</nuxt-link>.</p>
        </section>
      </aside>
</template>

<script lang="ts">
export default {
  name: 'sidebar',
  layout: 'blog',
  data() {
    return {
      rawArticles: [],
      articles: [],
      searchfield: ''
    }
  },
 /* watch: {
    searchfield: function() {
      this.articles = this.rawArticles.filter(article => article.title.toLowerCase().includes(this.searchfield.toLowerCase()))
    }
  },
  methods: {
    formatDate(date: string) {
      return new Date(date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
    }
  },*/
  async fetch() {
    this.rawArticles = await $content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
    this.articles = this.rawArticles
  }
}
</script>