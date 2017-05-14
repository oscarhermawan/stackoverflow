import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Question from '@/components/Question'
import Contentnya from '@/components/Contentnya'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contentnya',
      component: Contentnya
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/questions/:id',
      name: 'Question',
      component: Question,
      props:true
    },
    // {
    //   path: '/navbar',
    //   name: 'Navbar',
    //   component: Navbar
    // },
    // {
    //   path: '/sidebar',
    //   name: 'Sidebar',
    //   component: Sidebar
    // }
  ]
})
