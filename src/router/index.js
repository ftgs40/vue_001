import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Abount from '../views/About.vue'
import PageNotFound from '../views/Notfound'
import User from '../views/User'
import UserList from '../views/UserList'
import UserEdit from '../views/UserEdit'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component: Abount
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/edit/:id',
    name: 'UserEdit',
    component: UserEdit
  },
  {
    path: "*",
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
