<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'List' }">Articles</router-link> |
      <router-link v-if="!isLoggedIn" :to="{ name: 'Login' }">Login</router-link> |
      <router-link v-if="!isLoggedIn" :to="{ name: 'Signup' }">Signup</router-link> |
      <router-link v-if="isLoggedIn" :to="{ name: 'Logout' }">Logout</router-link> |
      <router-link v-if="isLoggedIn" :to="{ name: 'ArticleCreate' }">create</router-link> |
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
