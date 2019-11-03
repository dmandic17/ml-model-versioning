<template>
  <div>
  <header>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <router-link class="navbar-brand" :to="{ name: 'root'}">MLver</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navb" class="navbar-collapse collapse hide">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page 2</a>
          </li>
        </ul>

        <ul class="nav navbar-nav ml-auto">
          <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register'}">Register</router-link>
          </li>
          <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login'}">Log in</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
  <div id="app">
      <router-view/>
  </div>
  </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
