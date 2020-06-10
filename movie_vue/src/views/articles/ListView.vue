<template>
  <div>
    <button>글쓰기</button>
    <h1>게시판</h1>
      <ul>
        <li v-for="article in articles" :key="`article_${article.id}`">
          {{ article.id }} | {{ article.title}} | {{article.user.username}}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "ListView",
  computed: {
    ...mapState(['articles'])
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  }
}
</script>

<style>
</style>
