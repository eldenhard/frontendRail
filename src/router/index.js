import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/Home';
import wagonpark from '@/components/WagonPark'
import errorPage from '@/404folder/errorPage';
import presentation from '@/components/Presentation';
import rates from '@/components/Rates';
import authorization from '@/components/Authorization';
import Bookkeeping from '@/components/Bookkeeping';
import lk from '@/components/lk';
import report from '@/components/report';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'authorization',
      component: authorization
    },
    {
      path: '/wagonpark',
      name: 'wagonpark',
      component: wagonpark
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: presentation
    },
    {
      path: '/rates',
      name: 'rates',
      component: rates
    },
    {
      path: '/bookkeeping',
      name: 'bookkeeping',
      component: Bookkeeping
    },
    {
      path: '/lk',
      name: 'lk',
      component: lk
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '*',
      name: 'errorPage',
      component: errorPage
    }
  ]
})
