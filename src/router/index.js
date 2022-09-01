import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import WagonPark from '@/components/WagonPark'

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
    }
    
  ]
})
