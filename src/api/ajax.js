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
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
 
  // 中断错误消息
  return new Promise(() => { })
})
// 向外暴露
export default axios
