import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入store
import store from './store'

// 引入组件
import Header from './components/Header/Header.vue'
import Search from './components/Search/Search.vue'


// 挂载运行mock拦截ajax请求
import './mock/mock-serve.js'


// 注册全局公共组件
Vue.component(Header.name, Header)
Vue.component(Search.name, Search)


// 设置控制的提示信息
Vue.config.productionTip = false

// 创建实例对象
/* esllint-distable no-new */
new Vue({
  el:'#app',
  components:{
    App,   
  },
  template:'<App/>',
  router,
  store
})
