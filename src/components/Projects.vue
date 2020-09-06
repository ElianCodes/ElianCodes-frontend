<template>
  <section class="ftco-section ftco-project" id="projects-section">
    <div class="container-fluid px-md-0">
      <div class="row no-gutters justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <h2 class="mb-4">Projects</h2>
          <p>These are some of my latest projects</p>
        </div>
      </div>
      <div class="row no-gutters">
        <Project
          v-for="item in projectList"
          :key="item.id"
          v-bind:project='item'
        />
      </div>
    </div>
  </section>
</template>

<script>
import Project from './projects/Project'

export default {
  name: 'Projects',
  components: {
    Project
  },
  data () {
    return {
      projectList: [
        { id: 0, tag: "Front-End in React", category: "Webdevelopment", img: "https://i.imgur.com/wHSkKUQ.jpg", link: "https://www.jinsscoutsmerchtem.be" },
        { id: 1, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/Uhtabjz.jpg", link: "https://www.stijnbogemans.be" },
        { id: 2, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/cVqUkmp.jpeg", link: "https://www.evaderidder.com" },
        { id: 3, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/LEwsMh5.jpg", link: "https://www.kalathea.be" },
        { id: 4, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/vc6oAlJ.jpg", link: "https://www.lartgalerie.be" },
        { id: 5, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/8dQG2QY.jpg", link: "https://www.sportify.be" },
      ]
    }
  }
}
</script>
