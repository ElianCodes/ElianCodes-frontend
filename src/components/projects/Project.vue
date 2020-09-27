<template>
  <div class="col-md-4">
    <div class="project img ftco-animate d-flex justify-content-center align-items-center" :style="style">
      <div class="overlay"></div>
      <div class="text text-center p-4">
        <h3><a :href="project.link" target="_blank" rel="noreferrer">{{project.tag}}</a></h3>
        <span>{{project.category}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"],
  computed: {
    style () {
      return "background-image: url(" + this.project.img + ")";
    }
  }
}
</script>
