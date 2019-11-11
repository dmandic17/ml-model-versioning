<template>
  <div class="card">
    <div class="card-body">
      <h1>Edit <b>{{model.name}}</b> description:</h1>
      <br><br><br><textarea class="form-control" rows="5" v-model="description" placeholder="Description"/>
      <br><br><br><textarea class="form-control" rows="1" v-model="groupName" placeholder="Group Name"/>
      <br><br><br><textarea class="form-control" rows="1" v-model="trainingTime" placeholder="Training time"/>
      <br><br><br><textarea class="form-control" rows="1" v-model="inferenceTime" placeholder="Inference time"/>
      <br><br><br><textarea class="form-control" rows="5" v-model="metricsResults" placeholder="Metrics Results"/>
      <br><br><div class ="error" v-html="error"/><br>
      <router-link @click.native="radi" tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'models',
              params: {
                id: this.project.id
              }
            }">Save</router-link>
      <router-link @click.native="del" tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'models',
              params: {
                id: this.project.id
              }
            }">Delete</router-link>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      description: null,
      groupName: null,
      metricsResult: null,
      trainingTime: null,
      inferenceTime: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route', 'model', 'project'
    ])

  },
  async mounted () {
    const mdId = this.$store.state.route.params.id
    this.loadModel(mdId)
  },

  methods: {
    ...mapActions(['updateModel', 'loadModel', 'deleteModel']),
    radi: async function () {
      try {
        const d = new Date()
        const md = {
          id: this.model.id,
          project: {
            id: this.model.id,
            name: this.model.name,
            description: this.description,
            groupName: this.groupName,
            trainingTime: this.trainingTime,
            updatedAt: d,
            inferenceTime: this.inferenceTime,
            metricsResults: this.metricsResults
          }
        }
        const jaa = JSON.stringify(md)
        console.log(jaa)
        this.updateModel(jaa)
      } catch (err) {
        console.log(err)
      }
    },
    del: async function () {
      try {
        const mdId = this.model.id
        this.deleteModel(mdId)
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
