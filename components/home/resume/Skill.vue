<template>
  <div class="col-md-6 animate-box">
    <div class="progress-wrap ftco-animate">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
