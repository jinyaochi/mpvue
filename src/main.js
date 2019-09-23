import Vue from 'vue'
import App from './App'
import net from './utils/net';//导入封装好的net
import location from './utils/location';

Vue.prototype.$net=net;//微信小程序网络请求的配置
Vue.prototype.$location=location;//公用跳转
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
