<template>
      <div class="card">
        <div class="card-body">
        <h1>Register</h1>
        <br>
      <input type="email" v-model="email"  aria-describedby="emailHelp" placeholder="Enter email">
      <br><br><input type="password" v-model="password" placeholder="Password">
        <br><br><div class ="error" v-html="error"/><br>
    <button type="submit" class="btn" @click="register"> Register </button>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$router.push('login')
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
