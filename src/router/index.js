import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
// 声明使用路由
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})