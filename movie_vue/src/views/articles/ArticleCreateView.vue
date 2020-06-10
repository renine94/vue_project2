<template>
  <div>
    <h1>커뮤니티</h1>
    <div>
      <label for="title">Title: </label>
      <input v-model="articleData.title" type="text" id="title">
    </div>
    <div>
      <label for="content">Content: </label>
      <textarea v-model="articleData.content" id="content"></textarea>
    </div>
    <button @click="createArticle(articleData)">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ArticleCreateView",
  data() {
    return {
      articleData: {
        title: null,
        content: null,
      }
    }
  },
  methods: {
    ...mapActions(['createArticle'])
  }

}
</script>

<style>

</style>
