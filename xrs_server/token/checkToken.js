// 进行token验证的自定义中间件
// 引入jsonwebtoken
var jwt = require('jsonwebtoken');
module.exports=function(req,res,next){
  // 从请求头中获取token,token存储在authorization中,如果没有authorization(授权)请求头,直接返回401响应
  const token=req.headers['authorization']
  // 判断token是否存在
  if(!token){
    // 设置status为401
    res.status(401)
    // 直接返回json对象,提示无token,请重新登录
    return res.json({message:'无token,请重新登录'})
  }
  // 此时authorization中带有token,结构token---
  let decoded=jwt.decode(token,'secret')
  // 再次判断token是否存在或者是否过期
  if(!decoded||decoded.exp<Date.now()/1000){
    res.status(401)
    res.json({message:'token过期,请重新登录'})
  }
 
  // token验证通过,放行
  next()
}