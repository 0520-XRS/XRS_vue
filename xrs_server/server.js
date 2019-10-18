/*
应用的启动模块
1. 通过express启动服务器
2. 通过mongoose连接数据库
  说明: 只有当连接上数据库后才去启动服务器
3. 使用中间件
 */
var session = require('express-session')
const mongoose = require('mongoose')
const express = require('express')
const fs = require('fs')
const app = express()

const http = require('http')
const server = http.createServer(app)

// 声明使用静态中间件
app.use(express.static('public'))
// 声明使用解析post请求的中间件
app.use(express.urlencoded({extended: true})) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
// 声明使用解析cookie数据的中间件
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 声明使用session处理的中间件
app.use(session({
  secret: '12345',
  cookie: {maxAge: 1000*60*60*24 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
}))

// 声明使用路由器中间件
const indexRouter = require('./routers')
app.use('/', indexRouter)

// 在路由器中间之后, 处理所有与路由器中间的路由不匹配的请求
/*app.use((req, res) => {
  console.log('--------')
  fs.readFile(__dirname + '/public/index.html', (err, data)=>{
    if(err){
      console.log(err)
      res.send('后台错误')
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html',
        'Connection':'keep-alive'
      })
      res.end(data)
    }
  })
})*/

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/gshop', {useNewUrlParser: true})
  .then(() => {
    console.log('连接数据库成功!!!')
    // 只有当连接上数据库后才去启动服务器
    server.listen('5000', () => {
      console.log('服务器启动成功, 请访问: http://localhost:5000')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })

