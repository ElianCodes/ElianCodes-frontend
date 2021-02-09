const marked = require('marked')

let posts = []

const constructFeedItem = (post, dir, hostname) => {
  const url = `${hostname}/${dir}/${post.slug}`
  const item = {
    title: post.title,
    id: post.slug,
    link: url,
    image: post.imgUrl,
    date: new Date(post.createdAt),
    category: [],
    description: post.description,
    content: marked(post.bodyPlainText),
    author: { name: post.author },
  }
  post.tags.forEach((category) => item.category.push({ name: category }))
  return item
}

const create = async (feed, args) => {
  const [filePath, ext] = args
  const hostname = 'https://elianvancutsem.github.io' // 'http://localhost:3000'
  feed.options = {
    title: "Elian Van Cutsem's blog",
    description: 'Welcome to my blog. I write about technology and coding.',
    link: `${hostname}`,
    ttl: 30,
    image: "https://elianvancutsem.github.io/_nuxt/img/about3.2bc7a4e.png",
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).sortBy('createdAt', 'desc').fetch()

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname)
    feed.addItem(feedItem)
  }
  return feed
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
  },

  loading: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Elian Van Cutsem',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Elian Van Cutsem' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.bodyPlainText = document.text
      }
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-owl-carousel.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: 'https://elianvancutsem.github.io' }],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],
  feed: [
    {
      path: '/blog.xml',
      create,
      type: 'rss2',
      data: ['blog', 'xml'],
    },
    {
      path: '/feed.json',
      create,
      type: 'json1',
      data: ['blog', 'json'],
    },
    {
      path: '/feed.xml',
      create,
      type: 'atom1',
      data: ['blog', 'atom'],
    },
  ],

  sitemap: {
    hostname: 'https://elianvancutsem.github.io',
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
