import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Projects1 from '@/components/Projects1'
import Favorites from '@/components/Favorites'
import Search from '@/components/Search'
import NewProject from '@/components/NewProject'
import UpdateProject from '@/components/UpdateProject';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/newProject',
      name: 'newProject',
      component: NewProject
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects1
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/editProject',
      name: 'editProject',
      component: UpdateProject
    }
  ]
})
