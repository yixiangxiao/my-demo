import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Config from '../views/Config.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/config',
    name: 'config',
    component: Config
  },
  {
    path: '/application',
    name: 'application',
    component: () => import( '../views/Application.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
