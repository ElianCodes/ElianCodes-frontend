<template>
  <div class="resume-wrap d-flex ftco-animate">
    <div class="icon d-flex align-items-center justify-content-center">
      <span :class="item.icon"></span>
    </div>
    <div class="text pl-3">
      <span class="date">{{item.date}}</span>
      <h2>{{item.title}}</h2>
      <span class="position"><a class="organisationLink" target="_blank" rel="noreferrer" :href="item.link">{{item.company}}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "experienceItem",
  props: ["item"]
}
</script>

<style>

</style>