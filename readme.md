## Aliplayer播放器H5 demo

包含播放、播放列表、评论、点赞、客户端长连接mqtt、支持在android微信全屏H5同层播放，解决android微信弹出全屏播放的问题等功能。

## [体验demo](https://player.alicdn.com/aliplayer/)

## [参考文章](https://player.alicdn.com/aliplayer/docs/blogs/how-to-handle-h5-same-layer.html)

![移动版](https://player.alicdn.com/aliplayer/img/h5demosmall.png)  

### 安装依赖项

本Demo使用了ES6、webpack、gulp等技术。

 - [Node.js](https://nodejs.org/en/)
 - [Webpack](http://webpack.github.io) 
 - [gulp](https://gulpjs.com)

```sh
$ cd h5demo
$ npm install
```

### 编译

#### 开发环境

启动webpack dev server微服务，支持监听文件变化，实现时时打包，支持热模块替换。

```sh
$ cd h5demo
$ npm run dev
```

#### 产品环境

```sh
$ cd h5demo
$ npm run prod
```

