<template>
  <div class="card">
    <div class="card-body">
      <h1>Edit <b>{{project.name}}</b> description:</h1>
      <br><br><br><textarea class="form-control" value="prjDesc" rows="3" v-model="description" placeholder="Description"/>
      <br><br><div class ="error" v-html="error"/><br>
      <router-link @click.native="radi" tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'projects'
            }">Save</router-link>
      <router-link @click.native="del" tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'projects'
            }">Delete</router-link>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      project: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])

  },
  async mounted () {
    const prjId = this.$store.state.route.params.id
    this.project = (await ProjectsService.show(prjId)).data
  },
  methods: {
    radi: async function () {
      try {
        await ProjectsService.updateProject({
          id: this.project.id,
          name: this.project.name,
          description: this.description
        })
      } catch (err) {
        console.log(err)
      }
    },
    del: async function () {
      try {
        await ProjectsService.deleteProject(this.project.id)
      } catch (err) {
        console.log(err)
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
