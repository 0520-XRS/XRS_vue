// 安装jsonwebtoken
// 引入jsonwebtoken
var jwt = require('jsonwebtoken');
// 导出
module.exports=function(id){
  // 根据id生成token
  // 生成签名,设置有效期
  // const token=jwt.sign({id},'secret',{expiresIn:'7 days'})
  const token=jwt.sign({id},'secret',{expiresIn:'60 s'})
  // 返回token
  return token
}
