import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.prototype.axios = axios


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)


Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
