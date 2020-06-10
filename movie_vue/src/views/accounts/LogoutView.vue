<template>
  <div>
    <h1>Logout 실패 Page</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LogoutView',
  methods: {
    ...mapActions(['logout'])
  },
  created() {
    this.logout()
  }
}
</script>

<style>

</style>
