// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Axios from 'axios'
//按需引入element-ui的Carousel 走马灯组件,carousel-item(会有红色波浪线报错) 改为carouselItem
import { carousel, carouselItem } from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'

//全局注册element-ui组件
Vue.use(carousel)
Vue.use(carouselItem)

//注册axios到Vue原型中,所有页面中都可以使用$axios
Vue.prototype.$axios = Axios

//阻止启动生产消息
//Vue.config.productionTip = true,控制台会输出 you are run vue in development mode
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
