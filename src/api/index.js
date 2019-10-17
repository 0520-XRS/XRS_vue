// 引入ajax
import ajax from './ajax.js'
// const BASE = 'http://localhost:8080'

// 获取搜索列表信息
export const reCourse=()=>ajax('/search')
