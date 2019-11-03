<template>
<div class="card align-items-center">
  <div class="card-body">

    <button type="button" class="btn btn-dark btn-circle btn-xl"><router-link :to="{ name: 'newProject'}">+</router-link></button>
    <br><br>
    <div v-for="(project,index) in projects" :key="project.name" >
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" v-bind:id="'heading'+index">
            <h2 class="mb-0">
              <button class="btn btn-link" role="button" data-toggle="collapse" v-bind:data-target="'#collapse'+index" aria-expanded="false" v-bind:aria-controls="'collapse'+index">
                {{project.name}}
              </button>
            </h2>
          </div>

          <div v-bind:id="'collapse'+index" class="collapse" v-bind:aria-labelledby="'heading'+index" data-parent="#accordionExample">
            <div class="card-body">
              {{project.description}}
            </div>
            <button type="button" class="btn btn-dark btn-xl">All models</button><br>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
import {mapState} from 'vuex'
export default {
  name: 'Projects',
  data () {
    return {
      projects: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    console.log(this.user)
    if (this.isUserLoggedIn) { this.projects = (await ProjectsService.getProjects(this.user)).data }
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
