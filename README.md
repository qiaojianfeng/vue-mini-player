# vue-mini-player

> 基于 Vue 的一个轻量级视频播放组件，适配 PC 和移动端

[DEMO 演示](https://github.com/webweifeng/vue-mini-player)

## 安装

```bash
$ npm install vue-mini-player -S
```

## 使用

```javascript
# main.js
import vueMiniPlayer from 'vue-mini-player'
Vue.use(vueMiniPlayer)
```

在项目中使用 vueMiniPlayer

```javascript
<template>
  <vueMiniPlayer :video="video" />
</template>
<script>
  export default {
    data () {
      return {
        video: {
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
        }
      }
    }
  }
</script>
```

## 💡 特色

1.轻量级 HTML5 播放器，精美 UI 控件，简单易上手

2.提供以 `npm` 的形式安装提供全局组件

3.多格式视频配置，移动端+PC 通用模式

- [x] 多类型视频支持
- [x] 自定义海报
- [x] 多平台兼容
- [x] 静音开关
- [x] 播放时间进度
- [x] 全屏支持
- [ ] 拖动播放
- [ ] 倍速播放
- [ ] MSE 支持
- [ ] 弹幕支持

## ✈️ 参数

## 🚀 事件
