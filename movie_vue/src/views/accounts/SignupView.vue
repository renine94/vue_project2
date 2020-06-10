<template>
  <div>
    <h1>SignView</h1>
    <div>
      <label for="login">username: </label>
      <input v-model="signupData.username" type="text" id="login">
    </div>
    <div>
      <label for="password1">password1: </label>
      <input v-model="signupData.password1" type="password" id="password1">
    </div>
    <div>
      <label for="password2">password2: </label>
      <input v-model="signupData.password2" type="password" id="password2">
    </div>
    <button @click="signup(signupData)">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignupView',
  data() {
    return {
      signupData: {
        username: null,
        password1: null,
        password2: null,
      }
    }
  },
  methods: {
    ...mapActions(['signup'])
  }
}
</script>

<style>

</style>
