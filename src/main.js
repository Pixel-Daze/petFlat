// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import axios from 'axios'

import router from './router'
import filter from './filter'
Vue.use(filter)
import store from './store'

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

// 轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// httpInterceptor
import {request, response} from './service/httpInterceptor';
axios.interceptors.request.use(request);

axios.interceptors.response.use(response);

import Plugin from './plugin/vue.ext.js'
Vue.use(Plugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el:'#app-box',
  render: h => h(App)
  
})
