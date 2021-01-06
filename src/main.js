import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'

import fastclick from 'fastclick'

import axios from 'axios'
import VueAxios from 'vue-axios'

// 导入rem适配文件
import 'lib-flexible'

import {
  Button
} from 'vant'

Vue.use(Button)

// 借助fastclick解决移动端100~300ms的点击事件延迟问题
fastclick.attach(document.body)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
