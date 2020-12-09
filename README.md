<h1 align="center">
  <a href="https://webweifeng.github.io/vue-mini-player/">
  <img src="./logo.png" width="250"/></a>
  <br>
</h1>
> 基于 Vue 的一个轻量级视频播放组件，适配 PC 和移动端

## 安装

```bash
$ npm install vue-mini-player -S
```

## 使用

```javascript
# main.js
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'
Vue.use(vueMiniPlayer)
```

在项目中使用 vueMiniPlayer

```js
<template>
  <vueMiniPlayer ref="vueMiniPlayer" :video="video" :mutex="true" @fullscreen="handleFullscreen" />
</template>
<script>
  export default {
    data () {
      return {
        video: {
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            muted: false,
            loop: false,
            preload: 'auto',
            poster: '',
            volume: 1,
            autoplay: false
        }
      }
    },
    computed(){
      $video(){
        return this.$refs.vueMiniPlayer.$video;
      }
    },
    methods:{
      handleFullscreen(){

      }
    }
  }
</script>
```

## 💡 特色

1.轻量级 `HTML5` 播放器，精美 `UI` 控件，简单易上手

2.提供以 `npm` 的形式安装提供全局组件

3.多格式视频配置，移动端+PC 通用模式

- [x] 多类型视频支持
- [x] 自定义海报
- [x] 多平台兼容
- [x] 静音开关
- [x] 播放时间进度
- [x] 全屏支持
- [x] 拖动播放
- [ ] 倍速播放
- [ ] MSE 支持
- [ ] 弹幕支持

## ✈️ 参数

| 名称              | 默认值 | 类型          | 描述                                                         |
| ----------------- | ------ | ------------- | ------------------------------------------------------------ |
| video             | -      |               | 视频相关参数                                                 |
| mutex             | false  | Boolean       | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 |
| video.url         | -      | String,Array  | 视频播放源，支持 Array 形式传入多种视频格式                  |
| video.cover       | -      | String        | 视频海报                                                     |
| video.muted       | false  | Boolean       | 是否静音播放                                                 |
| video.loop        | false  | Boolean       | 视频是否循环播放                                             |
| video.preload     | 'auto' | String        | 视频预加载，可选值: 'none', 'metadata', 'auto'               |
| video.poster      | -      | String        | 原生视频默认海报暂不设置，只设置 video.cover                 |
| video.volume      | 1      | String,Number | 默认音量                                                     |
| video.autoplay    | false  | Boolean       | 视频自动播放                                                 |
| video.playsinline | false  | Boolean       | 视频行内播报                                                 |
| video.crossOrigin | false  | String        | 视频源跨域 corss 可选值: 'anonymous', 'use-credentials'      |
| video.logo        | -      | String        | 播放器 logo                                                  |
| video.logoStyle   | -      | Object,String | 播放器 logo 样式，参数格式为{color:'#fff'} or "color:#fff"   |

## 🚀 事件

| 名称          | 描述                       |
| ------------- | -------------------------- |
| fullscreen    | 全屏事件                   |
| ready         | 视频播放器准备好           |
| clearMode     | 清洁模式执行               |
| videoPlay     | 播放器执行 play 或者 pause |
| created       | 组件生命周期               |
| mounted       | 组件生命周期               |
| beforeDestroy | 组件生命周期               |
| destroyed     | 组件生命周期               |
