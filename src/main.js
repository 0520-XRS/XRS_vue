import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Search from './components/Search/Search.vue'
import Condition from './components/Condition/Condition.vue'
import Swiper from './components/Swiper/Swiper.vue'

// 注册全局公共组件
Vue.component(Header.name, Header)
Vue.component(Search.name, Search)
Vue.component(Condition.name, Condition)
Vue.component(Swiper.name, Swiper)
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
  router
})
