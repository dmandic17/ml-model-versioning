<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
    <router-link class="navbar-brand" :to="{ name: 'root'}">MLver</router-link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navb" class="navbar-collapse collapse hide">
      <ul class="navbar-nav">
        <li v-if="$store.state.isUserLoggedIn" class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'projects'}">Projects</router-link>
        </li>
        <!--<li v-if="$store.state.isUserLoggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'favorites'}">Favorites</router-link>
        </li>-->
        <li v-if="$store.state.isUserLoggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'search'}">Search</router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav ml-auto">
        <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'register'}">Register</router-link>
        </li>
        <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'login'}">Log in</router-link>
        </li>
        <li v-if="$store.state.isUserLoggedIn" @click="logout"  class="nav-item">
          <div class="nav-link" :to="logout" >Log out</div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style>
  .nav-link{
    cursor: pointer;
  }
</style>
