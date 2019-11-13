<template>
  <div class="card">
    <h1 v-if="!$store.state.isUserLoggedIn"> You are not logged in.</h1>
    <div v-if="$store.state.isUserLoggedIn" class="card-body">
      <h1>New Project</h1>
      <br>
      <form @submit.prevent="handleSubmit">
      <input type="text" v-model="name"  placeholder="Enter name" :class="{ 'is-invalid':this.$v.name.$error }"/>
        <br> <div v-if="this.$v.name.$error" class="small"><small v-if="this.$v.name.$error">You cannot leave name empty.</small></div>
      <br><br><textarea class="form-control" rows="3" v-model="description" placeholder="Description" :class="{ 'is-invalid':this.$v.description.$error }"/>
        <br> <div v-if="this.$v.description.$error" class="small"><small v-if="this.$v.description.$error">You cannot leave description empty.</small></div>
      <br><br><div class ="error" v-html="error"/><br>
      <button type="submit" class="btn"> Submit </button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {required} from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      name: null,
      description: null,
      owner: null,
      error: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user', 'projects'
    ])
  },
  validations: {
    name: {required},
    description: {required}
  },
  methods: {
    ...mapActions(['newProject']),
    radi: async function () {
      try {
        const prj = JSON.stringify({
          name: this.name,
          description: this.description,
          owner: this.user.email
        })
        this.newProject(prj)
        await this.$router.push({
          name: 'projects'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    handleSubmit (e) {

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.radi()
    }
  }
}
</script>

<style scoped>
  .card{
    align-content: center;
    width: 700px;
    margin: 0px auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */
  }
</style>
