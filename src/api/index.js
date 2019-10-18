import ajax from './ajax.js'
const BASE = '/api'

// 获取信息
// 发送短信验证码
export const reqSendCode = (phone)=>ajax({
  method:'GET',
  url:BASE+`/sendcode`,
  params:{
    phone
  }
})
// 手机和验证码登录
export const reqSmsLogin =(phone,code)=>ajax({
  method:'POST',
  url:BASE+`/login_sms`,
  data:{
    phone,
    code
  }
})
export const reCourse = ()=>ajax('/allCourse')
export const reChair = ()=>ajax('/allChair')