<template>
<div class="card align-items-center">
  <h1 v-if="!$store.state.isUserLoggedIn"> You are not logged in.</h1>
  <div v-if="$store.state.isUserLoggedIn" class="card-body">
    <router-link class="btn btn-dark btn-circle btn-xl" :to="{ name: 'newProject'}">+</router-link>
    <br><br>
    <div v-for="(project,index) in this.projects" :key="project.name" >
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
            <router-link tag="button" class="btn btn-xl" :to="{
              name: 'editProject',
              params: {
                id: project.id
              }
            }">Edit</router-link>
            <router-link tag="button" class="btn btn-dark btn-xl" :to="{
              name: 'models',
              params: {
                id: project.id
              }
            }">All models</router-link>
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
  name: 'Projects',
  computed: {
    ...mapState([
      'projects',
      'user'
    ])
  },
  methods: {
    ...mapActions(['loadProjects'])
  },
  mounted: function () {
    if (this.user) {
      const email = this.user.email
      this.loadProjects(email)
    }
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
