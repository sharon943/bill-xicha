import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Heytea from '../components/heytea'
import heytealogin from '../components/heytealogin'


Vue.use(Router)
Vue.use(Heytea)
Vue.use(heytealogin)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/heytea',
      name: 'heytea',
      component: Heytea
    },
    {
      path: '/heytealogin',
      name: 'heytealogin',
      component: heytealogin
    },
  ]
})
