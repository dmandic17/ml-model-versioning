<template>
  <div>
  <a href="https://www.freepik.com/free-photos-vectors/background"></a>
    <my-header></my-header>
  <main>
  <div id="app">
      <router-view/>
  </div>
  </main>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'my-header': Header
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-image: url('/assets/m.jpg');
}
</style>
