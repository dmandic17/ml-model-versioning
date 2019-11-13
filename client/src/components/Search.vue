<template>
 <div class="card align-items-center">
   <h1 v-if="!$store.state.isUserLoggedIn"> You are not logged in.</h1>
   <div v-if="$store.state.isUserLoggedIn" class="card-body">
       <h5>Please choose the date for search:</h5><br>
   <input v-model="d" type="date" inline  @change="filter"/>
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
                 <p class="font-weight-light">{{model.description}}}</p>
               </div>
               <router-link tag="button" class="btn btn-xl" :to="{
              name: 'editModel',
              params: {
                id: model.id
              }
            }">Edit</router-link>
             </div>
           </div>
         </div>
       </div>
 </div>
 </div>
</template>

<script>
import ModelsService from '../services/ModelsService'

export default {
  name: 'Search',
  data () {
    return {
      models: null,
      d: null
    }
  },
  methods: {
    async filter () {
      this.models = (await ModelsService.search(this.d)).data
      console.log(this.models)
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
  .card-body{
    align-content: center;
  }
</style>
