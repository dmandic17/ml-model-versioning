<template>
  <div class="card">
    <div class="card-body">
      <h1>Login</h1>
      <br>
      <input type="email" v-model="email"  aria-describedby="emailHelp" placeholder="Enter email">
      <br><br><input type="password" v-model="password" placeholder="Password">
      <br><br><div class ="error" v-html="error"/><br>
      <button type="submit" class="btn" @click="login"> Login </button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login: async function () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error{
    color:red;
  }
  .card {
    width: 500px;
    margin: 0px auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */
  }
</style>
