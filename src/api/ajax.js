// 引入axios
import axios from 'axios'
// 引入qs---负责转json的数据,把json的数据转urlEncoding的形式---- {name:'jack',age:10}---->name=jack&age=10
import qs from 'qs'
// 引入store
import store from '../store'
// 引入router
import router from '../router'
// 引入Toast
import {Toast} from 'mint-ui'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  const { method, data } = config
  // 判断method是不是POST,data是不是一个对象
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }

  // 判断当前的接口中是否需要携带token
  if (config.headers.needToken) {
    // 取出token---去store中
    const token = store.state.token
    if (!token) {
      // 没有token,报错
      const error = new Error('没有token,请重新登录')
      error.status = 401 // 给错误码
      throw error
    } else {
      // 有token,加入到请求头中
      config.headers['Authorization'] = token
    }
  }

  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  // 请求的错误---没有token
  if(!error.response){
    if(error.status===401){
      // 判断当前的路由的路径是不是login,如果不是就该跳转到login
      if(router.currentRoute.path!=='/login'){
        Toast(error.message)
        // 跳转到login
        router.replace('/login')
      }
    }
  }else{
    // 响应的时候token过期了,或者没有资源的时候就会报错
    const status=error.response.status
    if(status===401){
      // 提示过期了
      Toast(error.response.data.message)
      // 重置用户信息
      store.dispatch('resetUser')
      // 重新登录---跳转到login
      router.replace('/login')

    }else if(status===404){
      // 没有资源
      Toast('没有资源')
    }else{
      // 请求失败了
      Toast('请求错误'+error.message)
    }
  }

  // 中断错误消息
  return new Promise(() => { })
})
// 向外暴露
export default axios
