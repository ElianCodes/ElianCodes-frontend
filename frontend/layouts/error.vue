<template>
  <div class="flex flex-col-reverse justify-center items-center gap-4 overflow-hidden h-96">
    <div class="flex justify-center md:items-center">
      <NuxtLink to="/" class="py-2 px-4 bg-green-500 rounded-full text-center text-white font-semibold">Home page</NuxtLink>
    </div>
    <div class="flex flex-col justify-center items-center mx-12">
      <p class="text-9xl text-green-500 font-bold text-center">{{ error.statusCode }}</p>
      <h1 class="text-gray-500 text-center" v-if="error.statusCode === 404">Woops, it seems that the page you're looking for is not found</h1>
      <h1 class="text-gray-500 text-center" v-else>ohoh, an internal server error occured... Probably my fault 😕</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'projects'
}
</script>
