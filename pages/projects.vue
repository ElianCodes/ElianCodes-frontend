<template>
  <section id="projects-section" class="ftco-section ftco-project w-100">
    <div class="container-fluid px-md-0">
      <div class="row no-gutters justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <h2 class="mb-4">Personal Projects</h2>
          <p class="text-dark">
            Next to working at vBridge and studying, I have a lot of other
            projects going on. You can find some below.
          </p>
        </div>
      </div>
      <div class="w-100 mx-5 d-flex flex-wrap justify-content-around">
        <b-card
          v-for="item in projectsToShow"
          :key="item.id"
          :img-src="item.img"
          img-alt="Card Image"
          text-variant="dark"
          :title="item.title"
          :sub-title="item.tag"
          class="w-25 mx-2 mb-4"
        >
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      currentPage: 1,
      projectList: [
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
