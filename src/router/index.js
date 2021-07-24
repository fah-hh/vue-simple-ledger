import Vue from 'vue'
import VueRouter from 'vue-router'
import LedgerList from '@/views/LedgerList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LedgerList',
    component: LedgerList,
  }
]

const router = new VueRouter({
  routes
})

export default router
