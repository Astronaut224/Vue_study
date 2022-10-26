import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// 全局配置 axios 访问根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
// 把axios 挂载到 Vue.prototype 上，供所有 Vue 实例使用（这里的$http是自定义名）
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
