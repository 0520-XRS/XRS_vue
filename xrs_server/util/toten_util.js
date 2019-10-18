const jwt = require('jsonwebtoken')  //用来生成token
const secretOrPrivateKey = "jwt"// 这是加密的key（密钥）

function generateToken(name) {
  let content = {name} // 要生成token的主题信息

  let token = jwt.sign(content, secretOrPrivateKey, {
    expiresIn: 60 * 60 * 24  // 1天过期
  })
  console.log('generateToken()', name, token)
  return token
}
exports.generateToken = generateToken

function verifyToken(token, callback) {
  jwt.verify(token, secretOrPrivateKey, function (err, decode) {
    callback(!!err)
  })
}

exports.verifyToken = verifyToken

const token = generateToken('tom')

