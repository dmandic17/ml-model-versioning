import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Projects1 from '@/components/Projects1'
import Search from '@/components/Search'
import NewProject from '@/components/NewProject'
import UpdateProject from '@/components/UpdateProject';
import Models from '@/components/Models';
import UpdateModel from '@/components/UpdateModel';
import NewModel from '@/components/NewModel';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/models/:id',
      name: 'models',
      component: Models
    },
    {
      path: '/newModel',
      name: 'newModel',
      component: NewModel
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
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/editProject/:id',
      name: 'editProject',
      component: UpdateProject
    },
    {
      path: '/editModel/:id',
      name: 'editModel',
      component: UpdateModel
    }
  ]
})
