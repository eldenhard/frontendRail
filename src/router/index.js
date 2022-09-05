import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import WagonPark from '@/components/WagonPark'
// import { component } from 'vue/types/umd';
import errorPage from '@/404folder/errorPage'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WagonPark',
      component: WagonPark
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
   {
    path: '*',
    name: 'errorPage',
    component: errorPage
  }
  ]
})
