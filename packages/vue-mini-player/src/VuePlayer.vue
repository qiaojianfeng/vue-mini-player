<template>
  <div class="vm-player"
       ref="container"
       @click.stop="handleClickVideo">
    <!-- logo -->
    <div class="_logo" v-if="options.logo" :style="logoStyle">
      {{options.logo}}
    </div>
    <!--模拟poster -->
    <div class="_poster"
         :style="{backgroundImage:`url(${options.cover})`}"
         v-show="!isPlaying&&isStart && options.cover">
    </div>
    <template v-show="isPlaying">
      <video class="_video-ref"
             ref="video"
             :muted="options.muted"
             :loop="options.loop"
             :preload="options.preload"
             :poster="options.cover"
             :autoplay="options.autoplay"
            >
        <source v-for="(item, index) in vUrl"
                :key="index"
                :src="item"
                :type="`video/${getUrlType(item)}`">
        Your browser does not support the video element.
      </video>
    </template>
    <transition name="fade">
      <PlayBtn :isPlaying.sync="isPlaying"
                v-show="!isClearMode" />
    </transition>
    <transition name="fade">
      <BaseControls @paused="handlePaused"
                    @fullscreen="$emit('fullscreen',$event)"
                    v-show="!isClearMode" />
    </transition>
  </div>
</template>
<script>
import BaseControls from './BaseControls';
import PlayBtn from './PlayBtn';
const VERSION = require('../../../package.json').version;

export default {
  name: 'VueMiniPlayer',
  components: {
    BaseControls,
    PlayBtn
  },
  props: {
    video: {
      type: Object,
      default: function() {
        return {};
      }
    },
    mutex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        muted: true,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      $video: null,
      $container: null,
      clearModeTimer: null,
      isStart: true,
      isPlaying: false,
      isClearMode: false
    };
  },
  watch: {
    isPlaying() {
      this.isStart = false;
      this.play();
      this.setClearModeTimer();
    }
  },
  computed: {
    vUrl() {
      let url = this.video.url || [];
      if (typeof url === 'string') {
        url = [url];
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'));
        return [];
      }
      return url;
    },
    // 合并默认和用户自定义属性配置
    options() {
      return Object.assign({}, this.baseVideo, this.video);
    },
    playsinline() {
      return this.options.playsinline
    },
    crossOrigin() {
      return this.options.crossOrigin
    },
    autoplay() {
      return this.options.autoplay
    },
    isMobile() {
      return navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    },
    logoStyle() {
      return this.options.logoStyle || {}
    }
  },
  methods: {
    getUrlType(url) {
      let u = url.split('?')[0] + '?v=1';
      return u.match(/[^\.]+(?=\?)/) || 'mp4';
    },
    init() {
      this.$video = this.$refs.video;
      this.$container = this.$refs.container;
      this.$video.load();
      this.initPlayer();
      this.$emit('ready');
    },
    initPlayer() {
      this.$video.volume = this.options.volume;
      if (this.playsinline) {
        this.$refs.video.setAttribute('playsinline', this.playsinline)
        this.$refs.video.setAttribute('webkit-playsinline', this.playsinline)
        this.$refs.video.setAttribute('x5-playsinline', this.playsinline)
        this.$refs.video.setAttribute('x5-video-player-type', 'h5')
        this.$refs.video.setAttribute('x-webkit-airplay', 'allow')
        this.$refs.video.setAttribute('x5-video-player-fullscreen', false)
      }
      // cross origin
      if (this.crossOrigin) {
        this.$refs.video.crossOrigin = this.crossOrigin
        this.$refs.video.setAttribute('crossOrigin', this.crossOrigin)
      }
      if (this.autoplay && this.isMobile) {
        this.$video.muted = true
        // 兼容微信自动播放
        document.addEventListener('WeixinJSBridgeReady', () => this.$video.play(), false);
      }
      if (this.autoplay) {
        this.isPlaying = true;
      }
    },
    setClearModeTimer() {
      if (this.clearModeTimer) {
        clearTimeout(this.clearModeTimer);
      }
      this.clearModeTimer = setTimeout(() => {
        this.isClearMode = true;
        this.clearModeTimer = null
        this.$emit('clearMode');
      }, 3000);
    },
    pauseAllVideo() {
      if (this.mutex) {
        const videos = document.querySelectorAll('video');
        videos.forEach(v => {
          v.pause && v.pause();
        });
      }
    },
    play() {
      if (this.isPlaying) {
        this.$video.play();
      } else {
        this.pauseAllVideo();
        this.$video.pause();
      }
      this.$emit('videoPlay', this.isPlaying);
    },
    handlePaused() {
      this.isPlaying = false;
    },
    handleClickVideo() {
      if (this.isClearMode) {
        this.isClearMode = false;
        this.setClearModeTimer()
      } else {
        this.isClearMode = true;
      }
    }
  },
  created() {
    this.$emit('created');
    this.$nextTick(() => {
      this.init();
    });
  },
  mounted() {
    this.$emit('mounted');
    console.log(
      '\n' + ' %c vue-mini-player v' + VERSION + ' %c https://github.com/webweifeng/vue-mini-player ' + '\n' + '\n',
      'color: #fadfa3; background: #030307; padding:5px 0;',
      'background: #fadfa3; padding:5px 0;'
    );
  },
  updated() {},
  beforeDestroy() {
    this.$emit('beforeDestroy');
  },
  destroyed() {
    this.$emit('destroyed');
  }
};
</script>
<style lang="scss" scoped>
.vm-player {
  width: 100%;
  height: 100%;
  min-height: 10em;
  position: relative;
  background: #000;
  overflow: hidden;
  &:fullscreen,
  &:-webkit-full-screen,
  &:-moz-full-screen,
  &:-ms-fullscreen {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100000;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    transform: translate(0, 0);
  }
  ._poster {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  ._video-ref {
    background: #000;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    &::-webkit-media-controls,
    &::-webkit-media-controls-enclosure {
      display: none !important;
    }
  }
  ._logo{
    position: absolute;
    z-index: 2147483647;
    right: 20px;
    top: 20px;
    font-weight: bold;
    font-family:cursive;
    text-shadow:6px 2px 2px #666;
    color:#fff;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

