<template>
  <section id="projects-section" class="mx-12">
    <div class="mt-5">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in this.projectList" :key="item.id">
          <img :src="item.img" :alt="item.title"/>
          <h3 class="mt-4 dark:text-gray-200">{{ item.title }}</h3>
          <p class="mt-2 dark:text-gray-300">{{ item.tag }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./projects.component.ts">
</script>
