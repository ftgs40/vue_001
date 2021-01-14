import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Abount from '../views/About.vue'
import PageNotFound from '../views/Notfound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: Abount
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
