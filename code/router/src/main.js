import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 在Vue项目中，要使用路由，通过以下方式挂载
  // router: 实例对象，实例对象和router重名可以省略
  router
}).$mount('#app')
