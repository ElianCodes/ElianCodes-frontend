<template>
  <section
    id="about-section"
    class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
  >
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <div class="col-md-6 col-lg-6 d-flex justify-content-center">
          <img
            class="m-auto"
            :style="{ 'Border-radius': '50%', width: '75%', height: 'auto' }"
            :src="require(`~/assets/about/about${image}.png`)"
            alt="Elian's avatar"
          />
        </div>
        <div class="col-md-6 col-lg-6 pl-md-5 py-5">
          <div class="row justify-content-start pb-3">
            <div class="col-md-12 heading-section ftco-animate">
              <h2 class="display-3">About</h2>
              <p class="text-muted">
                <span class="mr-1 icon">👋</span>&nbsp;Hello there! My name is
                Elian Van Cutsem. I'm a Student and software engineer from
                belgium. On my personal site you'll find more info about myself
                and my projects. At the moment I'm doing an internship @<a
                  href="https://vbridge.eu"
                  target="_blank"
                  >vBridge</a
                >
                while finishing my Computer Science degree @<a
                  href="https://www.odisee.be/en"
                  target="_blank"
                  >Odisee</a
                >. I'm still learning lots of new technologies and skills
                everyday. On this site I try to blog about my findings and
                experiences and show off some projects I worked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
    resumeItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      image: Math.floor(Math.random() * 2) + 2,
    }
  },
}
</script>

<style scoped>
.icon {
  font-size: 1.6rem;
}
</style>
