// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import axios from 'axios'

import router from './router'
import filter from './filter'

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)


// httpInterceptor
import {request, response} from './service/httpInterceptor';

import Plugin from './plugin/vue.ext.js'
Vue.use(Plugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  filter,
  el:'#app-box',
  render: h => h(App)
  
})
