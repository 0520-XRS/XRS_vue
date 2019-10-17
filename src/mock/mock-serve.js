// 1. 引入mockJS
import Mock from 'mockjs'
// 2.引入data.json
import data from './data.json'

// 3. 拦截ajax请求生成随机数据   调用mock方法，返回一个结构数据（对象或数组）
Mock.mock('/search',{code:0,data:data.allCourse})

