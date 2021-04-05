<template>
  <main>
    <nav class="flex items-start ml-12 py-3" aria-label="Breadcrumb">
      <nuxt-link to="/projects/" class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
        <!-- Heroicon name: solid/chevron-left -->
        <svg class="-ml-2 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="dark:text-gray-300">All projects</span>
      </nuxt-link>
    </nav>
    <article class="my-8 mx-12 flex flex-col-reverse md:flex-row justify-between">
        <nuxt-content class="prose max-w-96 prose-green" :document="article" />
        <div class="text-base max-w-prose mb-8 md:mb-0">
          <figure>
            <div class="aspect-w-12 aspect-h-7">
              <img class="rounded-lg shadow-lg object-cover object-center" :src="article.imgUrl" :alt="'homepage of ' + article.title" width="1184" height="1376">
            </div>
            <figcaption class="mt-3 flex text-sm text-gray-500">
              <span class="ml-2">Homepage of {{ article.title }}</span>
            </figcaption>
          </figure>
        </div>
    </article>
  </main>
</template>

<script>
export default {
    layout: 'projects',
    async asyncData({ $content, params }) {
      const article = await $content('projects', params.slug).fetch()
      return { article }
    },
    track () {
      this.$gtag.pageview({
        page_path: '/projects/' + this.article.slug,
      })
    },
}
</script>

<style>

</style>