import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Members from '@/components/Members'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/edit/:memberId',
      name: 'Edit',
      component: Edit
    }

  ]
})
