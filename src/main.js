import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DARG from '@/util/drag'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// import Router from 'vue-router'
 
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.use(DARG);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
