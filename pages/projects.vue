<template>
  <section id="projects-section" class="mx-12">
    <div class="mt-5">
      <!--<div class="">
        <h1 class="mb-4 mt-5">Personal Projects</h1>
        <p class="">
          Next to working at vBridge and studying, I have a lot of other
          projects going on. You can find some below.
        </p>
      </div>-->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in projectsToShow" :key="item.id">
          <img :src="item.img" :alt="item.title"/>
          <h3 class="mt-4">{{ item.title }}</h3>
          <p class="mt-2">{{ item.tag }}</p>
        </div>
        <!--<b-card
          v-for="item in projectsToShow"
          :key="item.id"
          :img-src="item.img"
          img-alt="Card Image"
          text-variant="dark"
          :title="item.title"
          :sub-title="item.tag"
          class="mx-0 mx-md-2 mb-4 w-sm-100 w-md-25"
        >
        </b-card>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  layout: 'projects',
  data() {
    return {
      currentPage: 1,
      projectList: [
        {
          id: 9,
          title: 'scoutsjuventa.be',
          tag: 'Front-end & custom CSS',
          category: 'webdevelopment',
          img: 'https://i.imgur.com/M6MsjJy.png',
          link: 'https://www.scoutsjuventa.be',
        },
        {
          id: 8,
          title: 'degrill.be',
          tag: 'Webdesign & wordpress',
          category: 'webdevelopment',
          img: 'https://i.imgur.com/7ixAE5E.jpg',
          link: 'https://www.de-grill.be',
        },
        {
          id: 7,
          title: 'cambussa.be',
          tag: 'Front-end in wix',
          category: 'webdevelopment',
          img: 'https://i.imgur.com/EgL9lFc.jpeg',
          link: 'https://www.cambussa.be',
        },
        {
          id: 6,
          title: 'seidi-clothing.com',
          tag: 'Back-end in Symfony',
          category: 'Api development',
          img: 'https://i.imgur.com/MA0lOJi.jpeg',
          link: 'https://seidi-clothing.com/webshop/index.php',
        },
        {
          id: 5,
          title: 'jinsscoutsmerchtem.be',
          tag: 'Front-End in React',
          category: 'Webdevelopment',
          img: 'https://i.imgur.com/wHSkKUQ.jpg',
          link: 'https://www.jinsscoutsmerchtem.be',
        },
        {
          id: 4,
          title: 'stijnbogemans.be',
          tag: 'Webdesign & wordpress',
          category: 'Webdevelopment',
          img: 'https://i.imgur.com/Uhtabjz.jpg',
          link: 'https://www.stijnbogemans.be',
        },
        {
          id: 3,
          title: 'evaderidder.com',
          tag: 'Webdesign & wordpress',
          category: 'Webdevelopment',
          img: 'https://i.imgur.com/cVqUkmp.jpeg',
          link: 'https://www.evaderidder.com',
        },
        // { id: 2, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/LEwsMh5.jpg", link: "https://www.kalathea.be" },
        {
          id: 1,
          title: 'lartgalerie.be',
          tag: 'Webdesign & wordpress',
          category: 'Webdevelopment',
          img: 'https://i.imgur.com/vc6oAlJ.jpg',
          link: 'https://www.lartgalerie.be',
        },
        // { id: 0, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/8dQG2QY.jpg", link: "https://www.sportify.be" },
      ],
    }
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
  computed: {
    projectsToShow() {
      return this.projectList.slice(
        0 + (this.currentPage - 1) * 6,
        6 * this.currentPage
      )
    },
  },
  methods: {
    pagination(add) {
      this.currentPage += add
      if (this.currentPage <= 0) {
        this.currentPage = (this.projectList.length % 6) + 1
      } else if (this.currentPage > (this.projectList.length % 6) + 1) {
        this.currentPage = 1
      }
    },
  },
}
</script>

<style></style>
