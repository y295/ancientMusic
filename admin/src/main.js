// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import http from './http'
import './assets/scss/style.scss'
import './common/filters'
import 'babel-polyfill'


Vue.config.productionTip = false

Vue.prototype.$http = http



Vue.use(ElementUI)

/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
