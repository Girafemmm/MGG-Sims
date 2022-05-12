import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios';
import routers from './router/router'
import VueRouter from 'vue-router'

Vue.use(Vuex)


axios.interceptors.request.use(config =>{
      if(store.state.token){
        config.headers.token = store.state.token
      }
      return config
    },
    error => Promise.error(error))

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
  el:'#app',
  store,router,
  render: h => h(App)
})