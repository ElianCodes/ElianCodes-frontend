<template>
  <section id="projects-section" class="mx-12">
    <div class="mt-5">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="project in this.projects" :key="project.slug">
          <nuxt-link :to="'/projects/' + project.slug ">
            <img :src="project.imgUrl" :alt="project.title"/>
            <h3 class="mt-4 dark:text-gray-200">{{ project.title }}</h3>
            <p class="mt-2 dark:text-gray-300">{{ project.description }}</p>
          </nuxt-link>
        </div>
        <div>
          <adsbygoogle />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'projects',
  data () {
    return {
      projects: []
    }
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_path: '/projects/',
      })
    },
  },
  head: {
      title: "Elian Van Cutsem's projects",
      meta: [
          {
              hid: 'description',
              name: 'description',
              content: 'on this page you can find some of the projects I worked on.',
          },
      ],
  },
  async fetch() {
    this.projects = await this.$nuxt.$content('projects')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
}
</script>
