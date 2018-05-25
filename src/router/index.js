import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Slide from '@/components/Slide'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/slide',
      name: 'DefaultSlide',
      redirect: '/slide/1'
    },
    {
      path: '/slide/:id',
      name: 'Slide',
      component: Slide
    }
  ]
})
