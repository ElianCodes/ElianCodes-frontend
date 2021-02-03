<template>
  <div class="col-md-3">
    <nav id="navi">
      <h3 class="hidden">Resume navigation</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <a v-if="item.items.length > 0" :href="'#' + item.id">{{
            item.title
          }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ResumeNavigation',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
