import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)      //装载vue-router

new Vue({
  el: '#app',
  render: h => h(App)
})
