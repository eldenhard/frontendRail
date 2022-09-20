import Vue from 'vue'
import App from './App'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import axios from 'axios'
import Vuex from 'vuex'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store/main";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

Vue.prototype.axios = axios
Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
