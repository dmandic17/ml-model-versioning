import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '.\\store\\store'

Vue.config.productionTip = false
Vue.use(VueRouter)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
})
