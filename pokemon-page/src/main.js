import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router/index'
import {store} from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode:'history',
})

new Vue({
  store:store,
  render: h => h(App),
  router:router,
}).$mount('#app')