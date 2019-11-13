<template>
  <div class="card align-items-center">
    <h1 v-if="!$store.state.isUserLoggedIn"> You are not logged in.</h1>
    <div v-if="$store.state.isUserLoggedIn" class="card-body">

      <router-link class="btn btn-dark btn-circle btn-xl" :to="{ name: 'newModel'}">+</router-link>
      <br><br>
      <div v-for="(model,index) in models" :key="model.id" >
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" v-bind:id="'heading'+index">
              <h2 class="mb-0">
                <button class="btn btn-link" role="button" data-toggle="collapse" v-bind:data-target="'#collapse'+index" aria-expanded="false" v-bind:aria-controls="'collapse'+index">
                  <b>{{model.name}}</b><br>
                  <i>{{model.groupName}}</i><br>
                </button>
              </h2>
            </div>

            <div v-bind:id="'collapse'+index" class="collapse" v-bind:aria-labelledby="'heading'+index" data-parent="#accordionExample">
              <div class="card-body">
                <p class="font-weight-light">description:   {{model.description}}</p>
                <p class="font-black">training time:   {{model.trainingTime}}</p>
                <p class="font-red">inferenceTime:   {{model.inferenceTime}}</p>
                <p class="font-black">metricsResult:   {{model.metricsResult}}</p>
              </div>
              <!--<router-link tag="button" class="btn btn-xl" :to="{
              name: 'editModel',
              params: {
                id: model.id
              }
            }">Edit</router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Models',
  computed: {
    ...mapState([
      'models',
      'user', 'project'
    ])
  },
  methods: {
    ...mapActions(['loadModels', 'loadProject'])
  },
  mounted: function () {
    const prjId = this.$store.state.route.params.id
      this.loadProject(prjId)
    this.loadModels(prjId)
  }
}
</script>

<style scoped>
  .card{
    align-content: center;
    width: 750px;
    margin: 0px auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */
  }
  .btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    padding: 7px 10px;
    border-radius: 25px;
    font-size: 25px;
    text-align: center;
  }
  .btn-link{
    color: black;
  }
</style>
