<template>
  <div>
    <h1>LoginView</h1>
    <div>
      <label for="login">username: </label>
      <input v-model="loginData.username" type="text" id="login">
    </div>
    <div>
      <label for="password">password: </label>
      <input v-model="loginData.password" type="password" id="password">
    </div>
    <button @click="login(loginData)">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      loginData: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style>

</style>
