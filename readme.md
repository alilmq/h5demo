## Aliplayer播放器H5 demo

包含播放、播放列表、评论、点赞、客户端长连接mqtt、支持在android微信全屏H5同层播放，解决android微信弹出全屏播放的问题等功能。

## [体验demo](https://player.alicdn.com/aliplayer/)

## [参考文章](https://player.alicdn.com/aliplayer/docs/blogs/how-to-handle-h5-same-layer.html)

## [实现介绍文章](http://www.jianshu.com/p/4ac1aa9fd087)

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

### 问题说明

#### 同层播放

在Android手机上浏览器播放视频时，播放器会劫持视频的播放，使用的是浏览器自带的播放器弹出全屏播放视频，而且会覆盖Dom元素，对于这部分案例没有有效的办法解决，但是由于X5内核的浏览器（微信、QQ浏览器）提供了一些属性可以解决不劫持视频的播放和覆盖Dom元素，腾讯命名为同层播放，只针对Android的X5内核浏览器。但是由于播放器时X5浏览器还是还弹出一层覆盖播放， 上部还是会保留退出和分享按钮，下部会有黑边，布局可能会和原来的界面有点不一样，这就需要用户通过订阅x5requestFullScreen和x5cancelFullScreen事件微调布局

#### 直接退出程序

现在当弹出全屏同层播放时， 左上角有返回按钮，当点此按钮时，会直接退出页面，代码为videoplayer/index.js：


```sh

//微信左上角退出按钮触发是，关闭页面
this.player.tag.addEventListener("x5videoexitfullscreen", ()=>{
    if(WeixinJSBridge)
        WeixinJSBridge.call('closeWindow');
});
        

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

