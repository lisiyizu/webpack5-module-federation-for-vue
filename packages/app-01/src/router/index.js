import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Hello.vue')
  },
  {
    path: '/app-02/test',
    name: 'app-02-test',
    component: () => import('app_02/Test')
  },
  {
    path: '/app-03/test',
    name: 'app-03-test',
    component: () => import('app_03/Test')
  }
]

const router = new VueRouter({
  routes
})

export default router
