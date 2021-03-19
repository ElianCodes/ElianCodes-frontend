<template>
  <div class="blog-footer">
    <!--<div class="like">
      <button v-on:click.prevent="addLike" class="blog-action">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
        </svg>
      </button>
      <span>{{ this.formatedLikes() }}</span>
    </div>-->
    <a href="/blog.xml" class="blog-action">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </a>
    <!--<a  class="twitter-share-button" data-show-count="false">Tweet</a>-->
    <a :href="this.tweetLink" class="blog-action">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
      </svg>
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const numeral = require('numeral')

export default Vue.extend({
  name: 'articleFooter',
  data() {
    return {
      likes: 997 as number,
      tweetLink: "https://twitter.com/intent/tweet?text=Just read an article by @vancutsemelian. https://elian.codes" + this.$nuxt.$route.path
    }
  },
  methods: {
    addLike() {
      this.likes = this.likes + 1
    },
  },
  computed: {
    formattedLikes: function () {
      const currentLikes: number = this.likes
      if(currentLikes < 1000){
        return numeral(currentLikes).format('0 a');
      } else {
        return numeral(currentLikes).format('0.0 a');
      }
    },
  }
})
</script>

<style>

</style>