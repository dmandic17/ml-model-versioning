<template>
  <div class="card">
    <div class="card-body">
      <h1>Edit <b>{{project.name}}</b> description:</h1>
      <br><br><br><textarea id="t1" class="form-control" rows="5" v-model="desc" placeholder="Description"/>
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
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      desc: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route',
      'project'
    ])

  },
  mounted: function () {
    const prjId = this.$store.state.route.params.id
    // console.log(prjId)
    this.loadProject(prjId)
    // this.desc = this.project.description
    // console.log(this.project.description)
  },
  methods: {
    ...mapActions(['updateProject', 'loadProject', 'deleteProject']),
    radi: async function () {
      try {
        const prj = {
          id: this.project.id,
          project: {
            id: this.project.id,
            name: this.project.name,
            description: this.desc
          }
        }
        const jaa = JSON.stringify(prj)
        this.updateProject(jaa)
      } catch (err) {
        console.log(err)
      }
    },
    del: async function () {
      try {
        const prjId = this.project.id
        this.deleteProject(prjId)
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
