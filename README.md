# lisa-vue3

## 安装之前先全局卸载vue脚手架2
```
npm unistall vue-cli -g
或
yarn global remote vue-cli
```
## 查看安装目录
```
npm config get prefix
```
## 清空缓存目录中的文件
```
缓存目录的安装位置：默认是和npm安装目录同级的 npm_cachel
清除文件夹中的全部文件
```
## 安装vue脚手架3
```
npm install @vue/cli -g
```

## 查看安装的版本号,提示3.xx表示安装成功
```
vue -V
```

## 拉取vue脚手架2的方法，并创建使用webpack打包的项目
```
npm install -g @vue/cli-init
vue init webpack 项目名称
```
## 创建项目
```
vue create 项目名称
```
### 切换到项目中
```
cd 项目名称
```
### 在开发环境中运行
```
npm run serve ==> 默认是8080端口
 如果提示serve不是一个内部或外部的命令则需要安装以下serve包:
npm i serve
```
### 打包
```
虽然 3.x版本的脚手架中没有build文件夹，但依然可以通过
npm run build
打包生成dist文件夹
```
### 运行打包文件
```
serve dist  ==>默认是5000端口
```
### 运行项目
```
npm run serve
或
yarn serve
```
## 设置自动打开浏览器
```
package.json文件中 添加--open允许自动打开浏览器
"script":{"serve":"vue-cli-service serve --open"}
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
