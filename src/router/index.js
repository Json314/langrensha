import Vue from 'vue'
import Router from 'vue-router'
import Number_6 from '@/components/Number_6'
import Number_9 from '@/components/Number_9'
import Number_10 from '@/components/Number_10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Number_9
    },
    {
      path: '/number_6',
      name: 'Number_6',
      component: Number_6
    },
    {
      path: '/number_9',
      name: 'Number_9',
      component: Number_9
    },
    {
      path: '/number_10',
      name: 'Number_10',
      component: Number_10
    }
  ]
})
