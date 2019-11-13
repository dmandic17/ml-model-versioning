<template>
  <div class="card">
    <h1 v-if="!$store.state.isUserLoggedIn"> You are not logged in.</h1>
    <div v-if="$store.state.isUserLoggedIn" class="card-body">
      <h1>Edit <b>{{project.name}}</b> description:</h1>
      <form @submit.prevent="handleSubmit">
        <br><br><textarea class="form-control" rows="3" v-model="desc" placeholder="Description" :class="{ 'is-invalid':this.$v.desc.$error }"/>
        <br> <div v-if="this.$v.desc.$error" class="small"><small v-if="this.$v.desc.$error">You cannot leave description empty.</small></div>
      <br><br><div class ="error" v-html="error"/><br>

      <button type="submit" tag="button" class="btn btn-dark btn-xl">Save</button>
      <router-link @click.native="del" tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'projects'
            }">Delete</router-link>
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
      desc1: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route',
      'project'
    ]),
    // desc: function () { return this.project.description }
    desc: {
      set: function (newValue) {
        this.desc1 = newValue
      },
      get: function () {
        if (this.desc1 === null) this.desc1 = this.project.description
        return this.desc1
      }
    }

  },
  /* beforeCreate () {
    const prjId = this.$store.state.route.params.id
    // console.log(prjId)
    this.loadProject(prjId)
  }, */
  mounted: function () {
    const prjId = this.$store.state.route.params.id
    // console.log(prjId)
    this.loadProject(prjId)
    // this.desc = this.project.description
    // console.log(this.project.description)
  },

  validations: {
    desc: {required}
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
            description: this.desc1
          }
        }
        const jaa = JSON.stringify(prj)
        this.updateProject(jaa)
        await this.$router.push({
          name: 'projects'
        })
      } catch (err) {
        this.error = err.body.error
      }
    },
    del: async function () {
      try {
        const prjId = this.project.id
        this.deleteProject(prjId)
      } catch (err) {
        console.log(err)
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
