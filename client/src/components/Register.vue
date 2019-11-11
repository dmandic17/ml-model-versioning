<template>
      <div class="card">
        <div class="card-body">
        <h1>Register</h1>
        <br>
          <form @submit.prevent="handleSubmit">
          <input type="email" v-model="email"  aria-describedby="emailHelp" placeholder="Enter email" :class="{ 'is-invalid': submitted && this.$v.email.$error }">
            <div v-if="submitted && this.$v.email.$error" class="small">
              <small v-if="!this.$v.email.required" class="text-danger">Email is required</small>
              <small v-if="!this.$v.email.email" class="text-danger">Email is invalid.</small>
            </div>
      <br><br><input type="password" v-model="password" placeholder="Password" :class="{ 'is-invalid': submitted && this.$v.password.$error }">
            <div v-if="submitted && this.$v.password.$error" class="small">
              <small v-if="!this.$v.password.required" class="text-danger">Password is required</small>
              <small v-if="!this.$v.password.minLength" class="text-danger">Password must be at least 5 characters</small>
            </div>
        <br><br><div class ="error" v-html="error"/><br>
    <button type="submit" class="btn"> Register </button>
            </form>
        </div>
      </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      submitted: false
    }
  },
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(5)}
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        await this.$router.push('login')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    handleSubmit (e) {
      this.submitted = true
      console.log(!this.$v.email.required)
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.register()
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
  .small{
    height: 30px;
  }
</style>
