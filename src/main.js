// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store'
import AppServices from './services'
import SocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false
Vue.use(SocialSharing)

Object.keys(AppServices).forEach(k => Vue.use(AppServices[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  template: '<App/>',
  components: { App }
})
