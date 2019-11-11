<template>
  <div class="card">
    <div class="card-body">
      <h1>New Project</h1>
      <br>
      <input type="text" v-model="name"  placeholder="Enter name">
      <br><br><textarea class="form-control" rows="3" v-model="description" placeholder="Description"/>
      <br><br><div class ="error" v-html="error"/><br>
      <button @click="radi" type="submit" class="btn"> Submit </button>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      name: '',
      description: '',
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
