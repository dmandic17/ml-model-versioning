<template>
 <div class="card align-items-center">
     <div class="card-body">
       <h5>Please choose the date for search:</h5><br>
   <datepickerx inline :language="en" @select="filter"></datepickerx>
 </div>
 </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'Search',
  components: {
    'datepickerx': Datepicker
  },
  methods: {
    filter () {

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
