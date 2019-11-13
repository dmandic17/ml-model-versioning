<template>
  <div class="card">
    <h1 v-if="!$store.state.isUserLoggedIn"> You are not logged in.</h1>
    <div v-if="$store.state.isUserLoggedIn" class="card-body">
      <h1> <b>New model</b> </h1>
      <br><br><br><textarea class="form-control" rows="1" v-model="name" placeholder="Name"/>
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
            }">Create</router-link>
      <router-link tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'models',
              params: {
                id: this.project.id
              }
            }">Cancel</router-link>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      name: '',
      description: '',
      trainingTime: null,
      error: null,
      inferenceTime: null,
      metricsResults: null,
      groupName: ''

    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user', 'models', 'project'
    ])
  },
  methods: {
    ...mapActions(['newModel']),
    radi: async function () {
      try {
        const prj = JSON.stringify({
          name: this.name,
          description: this.description,
          trainingTime: this.trainingTime,
          inferenceTime: this.inferenceTime,
          metricsResults: this.metricsResults,
          groupName: this.groupName,
          ProjectId: this.project.id
        })
        this.newModel(prj)
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
