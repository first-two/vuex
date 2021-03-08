import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//数据的请求  this.axios.get().then((res)=>{})
import axios from 'axios'
Vue.prototype.axios=axios;
// 视同本地mock数据
import '../api/mock.js'

// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' 
Vue.use(MintUI)

// 分享下载
import vshare from 'vshare'
Vue.use(vshare)
Vue.config.productionTip = false

//直接可以在这里调用vuex
store.commit("run")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
