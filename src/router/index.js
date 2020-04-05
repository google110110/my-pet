import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import pet from './pet'
import music from './music'
import cont from './cont'

const routes = [
  pet,
  music,
  cont,
  {
    path:'/*',
    redirect:'/pet'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
