<template>
  <section
    id="about-section"
    class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
  >
    <div class="container">
      <div class="about-me">
        <h2 class="display-3">👋 Hello</h2>
        <p class="text-muted">
          My name is Elian Van Cutsem. I'm a Student and software engineer
          from belgium. On my personal site you'll find more info
          about myself and my projects. At the moment I'm doing an
          internship @<a href="https://vbridge.eu" target="_blank"
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
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');

.icon {
  font-size: 1.6rem;
}

.about-me p{
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
}

.about-me h2{
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 4rem;
}
</style>
