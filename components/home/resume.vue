<template>
  <section id="resume-section" class="mb-5 ftco-section ftco-no-pb goto-here">
    <h2 class="hidden">Resume</h2>
    <div class="container">
      <div class="row">
        <ResumeNavigation :items="resumeItems" />
        <div class="col-md-9">
          <ResumeItem v-for="item in resumeItems" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResumeNavigation from './resume/ResumeNavigation'
import ResumeItem from './resume/ResumeItem'

export default {
  name: 'Resume',
  components: {
    ResumeNavigation,
    ResumeItem,
  },
  props: ['resumeItems'],
}
</script>
